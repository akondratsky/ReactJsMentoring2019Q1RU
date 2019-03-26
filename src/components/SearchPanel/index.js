import React, { Component } from 'react';
import { SearchInput } from './SearchInput';

import './styles.scss';

export class SearchPanel extends Component {
  render() {
    return (
      <React.Fragment>
        <h3 className='search-panel__header'>FIND YOUR MOVIE</h3>
        <SearchInput />
      </React.Fragment>
    );
  }
}
