import React from 'react';
import { hydrate } from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from 'Store/store';


export const store = configureStore(window.PRELOADED_STATE);

const app = (
  <App
    Router={BrowserRouter}
    store={store}
  />
);

hydrate(app, document.getElementById('app-root') );
