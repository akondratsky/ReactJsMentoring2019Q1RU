import React from 'react';
import { Logo } from './index';

describe('<Logo />', () => {
  test('should be rendered correctly', () => {
    const logo = shallow(
      <Logo />
    );
    expect(logo).toMatchSnapshot();
  });
});
