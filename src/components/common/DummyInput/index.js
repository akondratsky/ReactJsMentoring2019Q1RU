import React from 'react';
import './styles.scss';

export const DummyInput = () => {
  return (
    <div className='input'>
      <span className='input__icon'>&#8629;</span>
      <input className='input__text' type='text' />
    </div>
  );
};
