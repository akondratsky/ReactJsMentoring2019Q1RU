import React, { Component } from 'react';
import { MyPureComponent } from './MyPureComponent.js';
import { FunctionalStyleComponent } from './FunctionalStyleComponent.js';


export class App extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
    this.clickHandler = this.clickHandler.bind(this);
  }

  getComponentName() {
    return this.constructor.name
  }

  clickHandler() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <h2 onClick={this.clickHandler}>Element created with React.Component ({this.getComponentName()}), this line was clicked {this.state.counter} times</h2>
        <MyPureComponent/>
        <FunctionalStyleComponent text='Element created in functional style (FunctionalStyleComponent)'/>
      </div>
    )
  }
}