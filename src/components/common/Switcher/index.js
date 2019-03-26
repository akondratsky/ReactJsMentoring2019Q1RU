import React, { Component } from 'react';
import { DummyButton } from 'CommonComponents/DummyButton';
import './styles.scss';

export class Switcher extends Component {
  constructor(props) {
    super(props);
    this.onChange = props.onChange;
    this.variants = props.variants;
  }

  render() {
    const buttons = [];
    this.variants.forEach((variantName) => {
      buttons.push(
          <DummyButton key={variantName} text={variantName} />
      );
    });
    return (
      <div>
        { buttons }
      </div>
    );
  }
};
