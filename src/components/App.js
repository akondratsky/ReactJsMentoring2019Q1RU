import React, { Component } from 'react';
import './App.scss';
import { AppErrorBoundary } from 'CommonComponents/AppErrorBoundary';
import { PageHeader } from 'CommonComponents/PageHeader';
import { PageFooter } from 'CommonComponents/PageFooter';
import { FilmResultsContainer } from 'CommonComponents/FilmResultsContainer';
import { Provider } from 'react-redux';
import { store, persistor } from 'Common/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

export class App extends Component {
  render() {
    return (
      <AppErrorBoundary>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <div className='page-container'>
              <PageHeader />
              <div className='page-container__content'>
                <FilmResultsContainer />
              </div>
              <PageFooter />
            </div>
          </PersistGate>
        </Provider>
      </AppErrorBoundary>
    );
  }
}


