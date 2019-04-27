import React from 'react';
import { App } from './App.js';

describe('<App />', () => {
  test('should be rendered correctly', () => {
    const app = shallow(
      <App />
    );
    expect(app).toMatchSnapshot();
  });
});