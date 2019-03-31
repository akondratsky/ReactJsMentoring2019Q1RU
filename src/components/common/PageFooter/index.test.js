import React from 'react';
import { PageFooter } from './index';

describe('<PageFooter />', () => {
  test('should be rendered correctly', () => {
    const footer = shallow(
      <PageFooter />
    );
    expect(footer).toMatchSnapshot();
  });
});
