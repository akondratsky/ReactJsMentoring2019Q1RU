// @flow

declare var UNPAID: boolean; // is there any way to add global variables to flow?

import fetch from 'isomorphic-unfetch';

import { ACTION, ENDPOINT } from 'Common/constants';
import { isServer } from 'Common/utils';
import { getSearchBy, getSearchString, getSortBy, getSortOrder } from 'Selectors/films';
import { generateFilmsResponse, generateFilmStub } from 'Mocks/responseStub';
import { getFilms } from 'Selectors/films';
import { setSearchType, setSearchString } from './filter';

export const setFilmsHasErrored = (hasErrored: boolean) => ({
  type: ACTION.FILMS_HAS_ERRORED,
  hasErrored,
});

export const setFilmsIsLoading = (isLoading: boolean) => ({
  type: ACTION.FILMS_IS_LOADING,
  isLoading,
});

export const filmsFetchDataSuccess = (
    { data, total, offset, limit }: { data: any, total: number, offset: number, limit: number }
) => ({
  type: ACTION.FILMS_FETCH_DATA_SUCCESS,
  films: data,
  total,
  offset,
  limit,
});

export const setSortOrder = (
    sortOrder: string
) => ({
  type: ACTION.SET_SORT_ORDERING,
  sortOrder,
});

export const filmsFetchData = () => (
  (dispatch: Function, getState: Function) => {
    dispatch(setFilmsHasErrored(false));
    dispatch(setFilmsIsLoading(true));

    const state = getState();

    const sortBy = getSortBy(state);
    const sortOrder = getSortOrder(state);
    const search = getSearchString(state);
    const searchBy = getSearchBy(state);

    let paramsString = '?';

    if (searchBy && searchBy.length) {
      paramsString += `searchBy=${searchBy}&`;
    }

    if (search && search.length) {
      paramsString += `search=${search}&`;
    };


    if (sortBy && sortBy.length) {
      paramsString += `sortBy=${sortBy}&`;
    }

    if (sortOrder && sortOrder.length) {
      paramsString += `sortOrder=${sortOrder}&`;
    }

    if (UNPAID) {
      return new Promise((res) => res())
          .then(() => {
            console.warn('Back-end (very excited): "No time to explain, just take this stubs!"');
            dispatch(setFilmsIsLoading(false));
            dispatch(filmsFetchDataSuccess(generateFilmsResponse()));
          });
    } else {
      return fetch(ENDPOINT.GET_ALL_MOVIES + encodeURI(paramsString))
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            dispatch(setFilmsIsLoading(false));
            return response;
          })
          .then((response) => response.json())
          .then((response) => {
            dispatch(filmsFetchDataSuccess(response));
          })
          .catch(() => {
            if (UNPAID) console.warn('yeeeeehaaaa');
            dispatch(setFilmsHasErrored(true));
          });
    }
  }
);

export const filmFetchedSuccessfully = (film: any) => ({
  type: ACTION.FILM_FETCHED_SUCCESSFULLY,
  film,
});

export const fetchFilmById = (id: number) => (
  (dispatch: Function) => {
    dispatch(setFilmsHasErrored(false));
    dispatch(setFilmsIsLoading(true));

    if (UNPAID) {
      return new Promise((res) => res())
          .then(() => {
            const stubFilm = generateFilmStub();
            dispatch(filmFetchedSuccessfully(stubFilm));
            dispatch(setSearchType('genres'));
            dispatch(setSearchString(stubFilm.genres[0]));
            dispatch(getFilms());
          });
    } else {
      return fetch(ENDPOINT.GET_MOVIE + id)
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            dispatch(setFilmsIsLoading(false));
            return response;
          })
          .then((response) => response.json())
          .then((film) => {
            dispatch(filmFetchedSuccessfully(film));
            if (!isServer) {
              dispatch(setSearchType('genres'));
              dispatch(setSearchString(film.genres[0]));
            }
          })
          .catch(() => {
            dispatch(setFilmsHasErrored(true));
          });
    }
  }
);
