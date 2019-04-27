import { filmsHasErrored, filmsIsLoading, films } from './films';
import { ACTION } from '@common/constants';

describe('films reducers', () => {
  it('FILMS_HAS_ERRORED', () => {
    const actions = [
      { type: ACTION.FILMS_HAS_ERRORED, hasErrored: true },
      { type: ACTION.FILMS_HAS_ERRORED, hasErrored: false },
    ];

    const stateStubs = [
      { hasErrored: false },
      { hasErrored: true },
    ];

    actions.forEach((action) => {
      stateStubs.forEach((stateStub) => {
        expect( filmsHasErrored(stateStub, action) ).toEqual(action.hasErrored);
      });
    });
  });


  it('FILMS_IS_LOADING', () => {
    const actions = [
      { type: ACTION.FILMS_IS_LOADING, isLoading: true },
      { type: ACTION.FILMS_IS_LOADING, isLoading: false },
    ];

    const stateStubs = [
      { isLoading: false },
      { isLoading: true },
    ];

    actions.forEach((action) => {
      stateStubs.forEach((stateStub) => {
        expect( filmsIsLoading(stateStub, action) ).toEqual(action.isLoading);
      });
    });
  });


  it('FILMS_FETCH_DATA_SUCCESS', () => {
    const action = {
      type: ACTION.FILMS_FETCH_DATA_SUCCESS,
      films: [1, 2, 3, 4, 5],
      total: 2553,
      offset: 124,
      limit: 21,
    };

    const stateStub = {
      films: {
        records: [],
        total: 0,
        offset: 0,
        limit: 0,
      },
    };

    const newState = films(stateStub, action);

    expect(newState.records).toEqual(action.films);
    expect(newState.total).toEqual(action.total);
    expect(newState.offset).toEqual(action.offset);
    expect(newState.limit).toEqual(action.limit);
  });
});
