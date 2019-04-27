import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';

import { AppErrorBoundary } from 'CommonComponents/AppErrorBoundary';
import { PageHeader } from 'CommonComponents/PageHeader';
import { PageFooter } from 'CommonComponents/PageFooter';
import { FilmResultsContainer } from 'CommonComponents/FilmResultsContainer';

import { store, persistor } from '@store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SingleFilmContainer } from 'CommonComponents/SingleFilmContainer';
import { NotFound } from './NotFound';

export class App extends Component {
  render() {
    return (
      <AppErrorBoundary>
        <BrowserRouter>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <div className='page-container'>
                <Route render={(props) => (
                  <PageHeader {...props}>
                    <Route exact path='/film/:id?' component={SingleFilmContainer} />
                  </PageHeader>
                )} />
                <div className='page-container__content'>
                  <Switch>
                    <Route exact path={['/search/:searchString', '/search/', '/search', '/', '/film/:id?']}
                      component={FilmResultsContainer} />
                    <Route path='/404' component={NotFound} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
                <PageFooter />
              </div>
            </PersistGate>
          </Provider>
        </BrowserRouter>
      </AppErrorBoundary>
    );
  }
}


