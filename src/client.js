import React from 'react';
import { hydrate } from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from '@store/store';

const app = (
  <App
    Router={BrowserRouter}
    store={store}
    persistor={persistor}
  />
);

hydrate(app, document.getElementById('app-root') );
