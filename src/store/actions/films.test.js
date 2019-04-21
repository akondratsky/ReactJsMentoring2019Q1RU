import { ACTION, ENDPOINT } from 'Common/Constants';
import { filmsHasErrored, filmsIsLoading, filmsFetchDataSuccess, filmsFetchData } from './films';

describe('films actions', () => {
  it('filmsHasErrored gives correct result', () => {
    const errors = [true, false];
    errors.forEach((hasError) => {
      const action = filmsHasErrored(hasError);
      expect(action.type).toEqual(ACTION.FILMS_HAS_ERRORED);
      expect(action.hasErrored).toEqual(hasError);
    });
  });

  it('filmsIsLoading gives correct result', () => {
    const loadingStates = [true, false];
    loadingStates.forEach((isStateLoading) => {
      const action = filmsIsLoading(isStateLoading);
      expect(action.type).toEqual(ACTION.FILMS_IS_LOADING);
      expect(action.isLoading).toEqual(isStateLoading);
    });
  });

  it('filmsFetchDataSuccess gives correct result', () => {
    const params = {
      data: [1, 2, 3],
      total: 1231,
      offset: 54,
      limit: 88,
    };
    const action = filmsFetchDataSuccess(params);
    expect(action.type).toEqual(ACTION.FILMS_FETCH_DATA_SUCCESS);
    expect(action.films).toEqual(params.data);
    expect(action.total).toEqual(params.total);
    expect(action.offset).toEqual(params.offset);
    expect(action.limit).toEqual(params.limit);
  });


  it('filmsFetchData creates correct parameters', () => {
    const params = {
      sortBy: 'title',
      sortOrder: 'asc',
      search: 'some film',
      searchBy: 'genre',
    };

    const fetchMock = () => Promise.resolve({
      ok: true,
      json: () => {},
    });

    const dispatchMock = jest.fn();

    global.fetch = jest.fn();
    jest.spyOn(global, 'fetch').mockImplementation(fetchMock);

    filmsFetchData(params)(dispatchMock);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
        ENDPOINT.GET_ALL_MOVIES + '?search=some%20film&searchBy=genre&sortBy=title&sortOrder=asc&'
    );
  });

  it('filmsFetchData dispatches all necessary actions when result is ok', () => {
    const fetchMock = () => Promise.resolve({
      ok: true,
      json: () => [],
    });
    global.fetch = fetchMock;
    jest.spyOn(global, 'fetch').mockImplementation(fetchMock);

    const dispatchMock = jest.fn();
    filmsFetchData()(dispatchMock);

    setTimeout(() => {
      expect(dispatchMock).toHaveBeenCalledTimes(3);
      expect(dispatchMock.mock.calls).toEqual([
        filmsIsLoading(true),
        filmsIsLoading(false),
        filmsFetchDataSuccess(),
      ]);
    }, 0);
  });
});
