// @flow

declare var UNPAID: boolean; // is there any way to add global variables to flow?

import fetch from 'isomorphic-unfetch';

import { ACTION, ENDPOINT } from 'Common/constants';
import { isServer } from 'Common/utils';
import { generateFilmsResponse, generateFilmStub } from 'Mocks/responseStub';


export const filmsHasErrored = (hasErrored: boolean) => ({
  type: ACTION.FILMS_HAS_ERRORED,
  hasErrored,
});

export const filmsIsLoading = (isLoading: boolean) => ({
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


export const filmsFetchData = (params: any) => (
  (dispatch: Function) => {
    dispatch(filmsHasErrored(false));
    dispatch(filmsIsLoading(true));

    let paramsString = '';

    if (params) {
      const {
        sortBy,
        sortOrder,
        search,
        searchBy,
      } = params;
      paramsString = '?';

      if (searchBy) {
        paramsString += `searchBy=${searchBy}&`;
      }

      if (search) {
        paramsString += `search=${search}&`;
      };


      if (sortBy) {
        paramsString += `sortBy=${sortBy}&`;
      }

      if (sortOrder) {
        paramsString += `sortOrder=${sortOrder}&`;
      }
    }

    if (UNPAID) {
      return new Promise((res) => res())
          .then(() => {
            console.warn('Back-end (very excited): "No time to explain, just take this stubs!"');
            dispatch(filmsIsLoading(false));
            dispatch(filmsFetchDataSuccess(generateFilmsResponse()));
          });
    } else {
      return fetch(ENDPOINT.GET_ALL_MOVIES + encodeURI(paramsString))
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            dispatch(filmsIsLoading(false));
            return response;
          })
          .then((response) => response.json())
          .then((response) => {
            dispatch(filmsFetchDataSuccess(response));
          })
          .catch(() => {
            if (UNPAID) console.warn('yeeeeehaaaa');
            dispatch(filmsHasErrored(true));
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
    dispatch(filmsHasErrored(false));
    dispatch(filmsIsLoading(true));

    if (UNPAID) {
      return new Promise((res) => res())
          .then(() => {
            const stubFilm = generateFilmStub();
            dispatch(filmFetchedSuccessfully(stubFilm));
            dispatch(filmsFetchData({
              searchBy: 'genres',
              search: stubFilm.genres[0],
            }));
          });
    } else {
      return fetch(ENDPOINT.GET_MOVIE + id)
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            dispatch(filmsIsLoading(false));
            return response;
          })
          .then((response) => response.json())
          .then((film) => {
            dispatch(filmFetchedSuccessfully(film));
            if (!isServer) {
              dispatch(filmsFetchData({
                searchBy: 'genres',
                search: film.genres[0],
              }));
            }
          })
          .catch(() => {
            dispatch(filmsHasErrored(true));
          });
    }
  }
);
