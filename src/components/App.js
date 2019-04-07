import React, { Component } from 'react';
import './App.scss';
import { AppErrorBoundary } from 'CommonComponents/AppErrorBoundary';
import { PageHeader } from 'CommonComponents/PageHeader';
import { PageFooter } from 'CommonComponents/PageFooter';
import { FilmResultsContainer } from 'CommonComponents/FilmResultsContainer';
import { Provider } from 'react-redux';
import { store } from 'Common/store';

export class App extends Component {
  render() {
    return (
      <AppErrorBoundary>
        <Provider store={store}>
          <div className='page-container'>
            <PageHeader />
            <div className='page-container__content'>
              <FilmResultsContainer />
            </div>
            <PageFooter />
          </div>
        </Provider>
      </AppErrorBoundary>
    );
  }
}


