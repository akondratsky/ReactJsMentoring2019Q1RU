import React from 'react';
import { SearchPanel } from './index';

describe('<SearchPanel />', () => {
  test('should be rendered correctly', () => {
    const panel = shallow(
      <SearchPanel />
    );
    expect(panel).toMatchSnapshot();
  });
});