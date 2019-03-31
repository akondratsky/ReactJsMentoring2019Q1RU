import React from 'react';
import { DummyInput } from './index';

describe('<DummyInput />', ()=> {

  test('should be rendered correctly', () => {
    const input = shallow(
      <DummyInput />
    );
    expect(input).toMatchSnapshot();
  });

});
