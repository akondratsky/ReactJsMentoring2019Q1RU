import React from 'react';
import classNames from 'classnames';
import './styles.scss';

export const DummyButton = ({ width, text, isActive, onClick }) => {
  const style = width ? { width } : {};
  const btnClasses = classNames('button', {
    'button-active': isActive,
    'button-inactive': !isActive,
  });

  return (
    <input className={ btnClasses }
      type='button' value={ text } style={ style }
      onClick={onClick}
    />
  );
};
