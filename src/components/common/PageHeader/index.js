import React, { Component } from 'react';
import './styles.scss';
import { Logo } from 'CommonComponents/Logo';
import { SearchPanelContainer } from '../../SearchPanel';
import { SearchResultsContainer } from '../SearchResultsContainer';
import { Link } from 'react-router-dom';

export class PageHeader extends Component {
  render() {
    const { children, location } = this.props;
    let buttonBlock = null;

    if (location.pathname.startsWith('/film/')) {
      buttonBlock = (
        <Link className='button button-active page-header__search-button' to='/'>SEARCH</Link>
      );
    }

    return (
      <header>
        <div className='page-header'>
          <div className='page-header__background' />
          <div className='page-header__container'>
            <Logo />
            { buttonBlock }

            <SearchPanelContainer />
            {children}
          </div>
        </div>
        <SearchResultsContainer />

      </header>
    );
  }
}
