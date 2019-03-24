import React, { Component } from 'react';
import './styles.scss';
import { Logo } from 'CommonComponents/Logo';
import { SearchPanel } from '../../SearchPanel';

export class PageHeader extends Component {
  render() {
    return (
      <header className='page-header'>
        <div className='page-header__background' />
        <div className='page-header__container'>
          <Logo />
          <SearchPanel />
        </div>
      </header>
    );
  }
}
