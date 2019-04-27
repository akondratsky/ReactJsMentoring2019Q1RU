import { ACTION } from '@common/constants';
import { search, searchBy, sortBy } from './filter';

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


  it('SORTING_BY_SETTED', () => {
    const actions = [
      { type: ACTION.SORTING_BY_SETTED, typeName: 'rating' },
      { type: ACTION.SORTING_BY_SETTED, typeName: 'release_date' },
    ];

    const stateStubs = [
      { sortBy: 'rating' },
      { sortBy: '124214' },
      { sortBy: 'release_date' },
      { sortBy: 'wrfa' },
    ];

    actions.forEach((action) => {
      stateStubs.forEach((state) => {
        expect( sortBy(state, action) ).toEqual(action.typeName);
      });
    });
  });
});
