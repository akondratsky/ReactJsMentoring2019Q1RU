import React, { Component } from 'react';
import { DummyInput } from 'CommonComponents/DummyInput';
import { DummyButton } from 'CommonComponents/DummyButton';
import { Switcher } from 'CommonComponents/Switcher';
import './styles.scss';


export class SearchInput extends Component {
  handler = (str) => {}

  render() {
    return (
      <div className='search-input'>
        <div className='search-input__input'><DummyInput /></div>
        <div className='search-input__controls'>
          <span className='search-input__text'>Search by</span>
          <div className='search-input__switcher'><Switcher variants={['title', 'genre']} default='title' onChange={this.handler} /></div>
          <div className='search-input__submit'><DummyButton text='Search' isActive={true} width='100px' /></div>
        </div>
      </div>
    );
  };
}
