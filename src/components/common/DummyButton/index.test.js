import React from 'react';
import { DummyButton } from './index';

describe('<DummyButton />', () => {

  test('should be rendered correctly', () => {
    const btn = shallow(<DummyButton />);
    expect(btn).toMatchSnapshot();
  });

  test('has class button', () => {
    const btn = shallow(<DummyButton />);
    expect(btn.hasClass('button')).toBeTruthy();
  });

  test('active button has class active-button', () => {
    const btn = shallow(<DummyButton isActive={true} />);
    expect(btn.hasClass('button-active')).toBeTruthy();
  });

  test('inactive button has class inactive-button', () => {
    const btn = shallow(<DummyButton isActive={false} />);
    expect(btn.hasClass('button-inactive')).toBeTruthy();
  });

  test('button has width property', () => {
    const btn = mount(<DummyButton />);
    btn.setProps({ width: '500px' });
    expect(btn.props().width).toEqual('500px');
  });

});
