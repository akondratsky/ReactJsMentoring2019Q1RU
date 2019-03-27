import React, { Component } from 'react';
import { DummyButton } from 'CommonComponents/DummyButton';
import './styles.scss';

export class Switcher extends Component {
  constructor(props) {
    super(props);
    this.variants = props.variants;
    this.onChange = props.onChange;
    this.state = {
      currentActive: props.default,
      onChange: props.onChange,
    };
  }

  btnClickHandler = (e) => {
    const current = e.currentTarget.value;

    if (this.state.currentActive != current) {
      this.setState({
        currentActive: current,
      });
    }

    if (this.state.onChange) {
      this.onChange(current);
    }
  }

  render() {
    const buttons = [];

    this.variants.forEach((variantName) => {
      let isActive = false;
      if (variantName === this.state.currentActive) {
        isActive = true;
      }
      buttons.push(
          <div className='switcher__button' key={variantName}>
            <DummyButton text={variantName} width='100%' onClick={this.btnClickHandler} isActive={isActive} />
          </div>
      );
    });

    return (
      <div className='switcher'>
        { buttons }
      </div>
    );
  }
};
