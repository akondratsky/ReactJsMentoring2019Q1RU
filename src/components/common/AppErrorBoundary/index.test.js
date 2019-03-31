import React from 'react';
import { AppErrorBoundary } from './index';

describe('<AppErrorBoundary />', () => {
  test('should be rendered correctly', () => {
    const errorBoundary = mount(
      <AppErrorBoundary>
        <div>child 1</div>
        <div>child 2</div>
      </AppErrorBoundary>
    );
    expect(errorBoundary).toMatchSnapshot();
  });
});