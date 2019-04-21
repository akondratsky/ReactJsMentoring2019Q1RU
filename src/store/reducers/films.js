import { ACTION } from '@common/constants';

export const filmsHasErrored = (state = false, { type, hasErrored }) => {
  switch (type) {
    case ACTION.FILMS_HAS_ERRORED:
      return hasErrored;
    default:
      return state;
  }
};

export const filmsIsLoading = (state = false, { type, isLoading }) => {
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

export const films = (state = defaultFilmsState, { type, films = [], total = 0, offset = 0, limit = 0 }) => {
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

export const film = (state = {}, { type, film }) => {
  switch (type) {
    case ACTION.FILM_FETCHED_SUCCESSFULLY:
      return film;
    default:
      return state;
  }
};
