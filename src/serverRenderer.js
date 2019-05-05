import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './components/App';
import { configureStore } from '@store/store';

import { StaticRouter } from 'react-router-dom';
import { filmsFetchData, fetchFilmById } from './store/actions/films';

function renderHTML(html, preloadedState) {
  const isDev = process.env.ENV_MODE === 'development';
  if (!preloadedState) {
    preloadedState = '';
  }
  return `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>neflix</title>
      ${isDev? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
    </head>
    <body>
      <div id="app-root">${html}</div>
      <script>
        window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="/js/main.js"></script>
    </body>
    </html>
  `;
}

export default function serverRenderer() {
  return async (req, res) => {
    const store = configureStore();
    const context = {};

    // console.log(req._parsedUrl.search);
    // console.log(req._parsedUrl.query);
    // console.log(req._parsedUrl.pathname);

    if (req.url.startsWith('/film/')) {
      const filmId = req.url.slice(6);
      const id = parseInt(filmId, 10);

      if (!isNaN(id) && !req.url.endsWith('.jpg')) {
        await store.dispatch(await fetchFilmById(id));
        const film = store.getState().film;
        await store.dispatch(await filmsFetchData({
          searchBy: 'genres',
          search: film.genres[0],
        }));
      } else {
        context.url = '/404';
      }
    } else {
      await store.dispatch(await filmsFetchData(/* TODO: params for search */));
    }

    const appHtml = renderToString(
        <App
          context={context}
          location={req.url}
          Router={StaticRouter}
          store={store} />
    );

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const preloadedState = store.getState();
    res.send(renderHTML(appHtml, preloadedState));
  };
}
