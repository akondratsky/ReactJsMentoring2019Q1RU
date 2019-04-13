import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DummyButton } from 'CommonComponents/DummyButton';
import './styles.scss';

export class Switcher extends Component {
  constructor(props) {
    super(props);
    const { onChange } = props;
    this.state = {
      currentActive: props.default,
      onChange,
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
      this.state.onChange(current);
    }
  }

  render() {
    const { variants = [], isLight } = this.props;

    return (
      <div className='switcher'>
        { variants.map((variantName) =>
          <div className='switcher__button' key={variantName}>
            <DummyButton
              text={variantName}
              width='100%'
              onClick={this.btnClickHandler}
              isActive={variantName === this.state.currentActive}
              isLight={isLight} />
          </div>
        ) }
      </div>
    );
  }
};

Switcher.propTypes = {
  'isLight': PropTypes.bool,
  'onChange': PropTypes.func,
  'default': PropTypes.string,
  'variants': PropTypes.arrayOf(PropTypes.string),
};
