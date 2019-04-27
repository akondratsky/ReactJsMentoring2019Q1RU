import React from 'react';
import { SearchPanel } from './index';

const defaultRoutingProps = {
  location: {
    pathname: '/',
  },
};

describe('<SearchPanel />', () => {
  test('should be rendered correctly', () => {
    const panel = shallow(
        <SearchPanel {...defaultRoutingProps} />
    );
    expect(panel).toMatchSnapshot();
  });
});
