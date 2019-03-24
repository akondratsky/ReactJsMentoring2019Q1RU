import React, { Component } from 'react';
import './styles.scss';
import { Logo } from 'CommonComponents/Logo';
import { SearchPanel } from '../../SearchPanel';

export class PageHeader extends Component {
  render() {
    return (
      <header className='page-header'>
        <Logo />
        <SearchPanel />
      </header>
    );
  }
}