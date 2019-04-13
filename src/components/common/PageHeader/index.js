import React, { Component } from 'react';
import './styles.scss';
import { Logo } from 'CommonComponents/Logo';
import { SearchPanel } from '../../SearchPanel';
import { SearchResultsContainer } from '../SearchResultsContainer';

export class PageHeader extends Component {
  render() {
    return (
      <header>
        <div className='page-header'>
          <div className='page-header__background' />
          <div className='page-header__container'>
            <Logo />
            <SearchPanel />
          </div>
        </div>
        <SearchResultsContainer />
      </header>
    );
  }
}
