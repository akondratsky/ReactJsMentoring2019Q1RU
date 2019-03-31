import React from 'react';
import { Switcher } from './index';

describe('<Switcher />', () => {
  test('should be rendered correctly', () => {
    const variantNames = ['First', 'Second'];
    const switcher = mount(
      <Switcher variants={variantNames} default='First' />
    );
    expect(switcher).toMatchSnapshot();
  });

  test('button activity state is consistent', () => {
    const variantNames = ['One', 'Two', 'Three'];
    const switcher = shallow(
      <Switcher variants={variantNames} default='One' />
    );
    expect(switcher.childAt(0).childAt(0).prop('isActive')).toBeTruthy();
    expect(switcher.childAt(1).childAt(0).prop('isActive')).toBeFalsy();
    expect(switcher.childAt(2).childAt(0).prop('isActive')).toBeFalsy();
  });

  test('button activity state is changing correctly', () => {
    const variantNames = ['One', 'Two', 'Thr'];
    const switcher = mount(
      <Switcher variants={variantNames} default='One' />
    );

    expect(switcher.find('[text="One"]').prop('isActive')).toBeTruthy();
    expect(switcher.find('[text="Two"]').prop('isActive')).toBeFalsy();
    expect(switcher.find('[text="Thr"]').prop('isActive')).toBeFalsy();

    switcher.find('[text="Two"]').simulate('click');

    expect(switcher.find('[text="One"]').prop('isActive')).toBeFalsy();
    expect(switcher.find('[text="Two"]').prop('isActive')).toBeTruthy();
    expect(switcher.find('[text="Thr"]').prop('isActive')).toBeFalsy();
  });

  test('button click calling callback onChange() function', () => {
    const variantNames = ['One', 'Two', 'Thr'];
    const onChangeFn = jest.fn();
    const switcher = mount(
      <Switcher variants={variantNames} default='One' onChange={onChangeFn} />
    );
    switcher.find('[text="Two"]').simulate('click');
    expect(onChangeFn).toBeCalledWith('Two');
  });
});