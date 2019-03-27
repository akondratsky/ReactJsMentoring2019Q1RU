import React from 'react';
import './styles.scss';

export const DummyButton = ({ width, text, isActive, onClick }) => {
  const style = width ? { width } : {};

  return (
    <input className={ `button ${ isActive ? 'button-active' : 'button-inactive'}` }
      type='button' value={ text } style={ style }
      onClick={onClick}
    />
  );
};
