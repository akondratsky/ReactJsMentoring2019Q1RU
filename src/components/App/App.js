import React, { Component } from 'react';
import { MyPureComponent } from './MyPureComponent/MyPureComponent.js';
import { FunctionalStyleComponent } from './FunctionalStyleComponent/FunctionalStyleComponent.js';
import './App.scss';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    fetch('/api/movies')
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
  }

  getComponentName = () => {
    return this.constructor.name;
  }

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  static staticProperty = 'hello';

  render() {
    return (
      <div>
        <h2 onClick={this.clickHandler} className='app-component-header'>
          Element created with React.Component ({ this.getComponentName() }),
          this line was clicked { this.state.counter } times
        </h2>
        <MyPureComponent/>
        <FunctionalStyleComponent text='Element created in functional style (FunctionalStyleComponent)'/>
      </div>
    );
  }
}


