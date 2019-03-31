import React from 'react';
import { SearchInput } from './index';

describe('<SearchInput />', () => {
  test('should be rendered correctly', () => {
    const input = shallow(
      <SearchInput />
    );
    expect(input).toMatchSnapshot();
  });
});