import React from 'react';
import { PageHeader } from './index';

const defaultRoutingProps = {
  location: {
    pathname: '/',
  },
};

describe('<PageHeader />', () => {
  test('should be rendered correctly', () => {
    const pageHeader = shallow(
        <PageHeader {...defaultRoutingProps} />
    );
    expect(pageHeader).toMatchSnapshot();
  });
});
