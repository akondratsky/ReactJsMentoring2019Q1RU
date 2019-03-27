import React, { Component } from 'react';
import { DummyInput } from 'CommonComponents/DummyInput';
import { Switcher } from 'CommonComponents/Switcher';
import './styles.scss';


export class SearchInput extends Component {
  handler = (str) => {
    console.log(str);
  }

  render() {
    return (
      <div className='search-input'>
        <DummyInput />
        <Switcher variants={['First', 'Second']} default='First' onChange={this.handler} />
      </div>
    );
  };
}
