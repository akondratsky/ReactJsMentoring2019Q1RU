import React, { Component } from 'react';
import { DummyInput } from 'CommonComponents/DummyInput';
import { DummyButton } from 'CommonComponents/DummyButton';
import './styles.scss';

export class SearchInput extends Component {
  render() {
    return (
      <div className='search-input'>
        <DummyInput />
        <DummyButton text='My Button' size='100px' isActive={false} />
      </div>
    );
  };
}
