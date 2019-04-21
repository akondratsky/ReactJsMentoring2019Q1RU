import React, { Component } from 'react';
import './styles.scss';
import { Logo } from 'CommonComponents/Logo';
import { SearchPanelContainer } from '../../SearchPanel';
import { SearchResultsContainer } from '../SearchResultsContainer';

export class PageHeader extends Component {
  render() {
    return (
      <header>
        <div className='page-header'>
          <div className='page-header__background' />
          <div className='page-header__container'>
            <Logo />
            <SearchPanelContainer />
          </div>
        </div>
        <SearchResultsContainer />
      </header>
    );
  }
}
