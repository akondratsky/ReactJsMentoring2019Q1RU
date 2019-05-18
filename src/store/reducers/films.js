// @flow

import { ACTION } from 'Common/constants';

export const filmsHasErrored = (state: any = false, { type, hasErrored }: {type: string, hasErrored: boolean}) => {
  switch (type) {
    case ACTION.FILMS_HAS_ERRORED:
      return hasErrored;
    default:
      return state;
  }
};

export const filmsIsLoading = (state: Object = false, { type, isLoading }: {type: string, isLoading: boolean}) => {
  switch (type) {
    case ACTION.FILMS_IS_LOADING:
      return isLoading;
    default:
      return state;
  }
};

const defaultFilmsState = {
  records: [],
  total: 0,
  offset: 0,
  limit: 10,
};

export const films = (
    state: Object = defaultFilmsState,
    { type, films = [], total = 0, offset = 0, limit = 0 }
    :{ type: string, films: Array<Object>, total: number, offset: number, limit: number },
) => {
  switch (type) {
    case ACTION.FILMS_FETCH_DATA_SUCCESS:
      return {
        records: films,
        total,
        offset,
        limit,
      };
    default:
      return state;
  }
};

export const film = (
    state: Object = {},
    { type, film }: { type: string, film: Object}
) => {
  switch (type) {
    case ACTION.FILM_FETCHED_SUCCESSFULLY:
      return film;
    default:
      return state;
  }
};
