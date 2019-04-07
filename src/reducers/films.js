import { ACTION } from 'Common/constants';

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

export const films = (state = [], { type, films = [], total = 0, offset = 0, limit = 0 }) => {
  switch (type) {
    case ACTION.FILMS_FETCH_DATA_SUCCESS:
      films.total = total;
      films.offset = offset;
      films.limit = limit;
      return films;
    default:
      return state;
  }
};
