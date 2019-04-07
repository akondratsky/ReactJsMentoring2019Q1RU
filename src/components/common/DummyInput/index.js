import React from 'react';
import './styles.scss';

export const DummyInput = ({ onInput }) => {
  return (
    <div className='input'>
      <span className='input__icon'>&#8629;</span>
      <input className='input__text' type='text' onInput={onInput} />
    </div>
  );
};
