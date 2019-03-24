import React, { Component } from 'react';
import './App.scss';
import { PageHeader } from 'CommonComponents/PageHeader';
import { PageFooter } from 'CommonComponents/PageFooter';
import { FilmResultsContainer } from 'CommonComponents/FilmResultsContainer';

export class App extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <FilmResultsContainer />
        <PageFooter />
      </div>
    );
  }
}


