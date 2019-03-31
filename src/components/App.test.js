import React from 'react';
import { App } from './App';

describe('<App />', () => {
  test('should be rendered correctly', () => {
    const app = shallow(
      <App />
    );
    expect(app).toMatchSnapshot();
  });
});