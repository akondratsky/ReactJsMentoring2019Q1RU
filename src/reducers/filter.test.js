import { ACTION } from 'Common/constants';
import { search, searchBy } from './filter';

describe('filter reducers', () => {
  it('FILTER_TYPE_SETTED', () => {
    const actions = [
      { type: ACTION.FILTER_TYPE_SETTED, name: 'genre' },
      { type: ACTION.FILTER_TYPE_SETTED, name: 'title' },
    ];

    const stateStubs = [
      { name: 'genre' },
      { name: 'title' },
    ];

    actions.forEach((action) => {
      stateStubs.forEach((state) => {
        expect( searchBy(state, action) ).toEqual(action.name);
      });
    });
  });

  it('FILTER_SETTED', () => {
    const actions = [
      { type: ACTION.FILTER_SETTED, value: 'asfaw' },
      { type: ACTION.FILTER_SETTED, value: '124@128,  =+' },
      { type: ACTION.FILTER_SETTED, value: '<div>hello</div>' },
      { type: ACTION.FILTER_SETTED, value: '🛫🛬🛫🛬🛫🛬' },
    ];

    const stateStubs = [
      { value: '' },
      { value: 'asfaw' },
    ];

    actions.forEach((action) => {
      stateStubs.forEach((state) => {
        expect( search(state, action) ).toEqual(action.value);
      });
    });
  });
});
