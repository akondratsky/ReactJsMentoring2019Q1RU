import React, { Component } from 'react';
import './App.scss';
import { AppErrorBoundary } from 'CommonComponents/AppErrorBoundary';
import { PageHeader } from 'CommonComponents/PageHeader';
import { PageFooter } from 'CommonComponents/PageFooter';
import { FilmResultsContainer } from 'CommonComponents/FilmResultsContainer';

export class App extends Component {
  render() {
    return (
      <AppErrorBoundary>
        <div className='page-container'>
          <PageHeader />
          <div className='page-container__content'>
            <FilmResultsContainer />
          </div>
          <PageFooter />
        </div>
      </AppErrorBoundary>
    );
  }
}


