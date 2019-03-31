import React from 'react';
import { PageHeader } from './index';

describe('<PageHeader />', () => {
  test('should be rendered correctly', () => {
    const pageHeader = shallow(
      <PageHeader />
    );
    expect(pageHeader).toMatchSnapshot();
  });
});