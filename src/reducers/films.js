import { ACTION, DEFAULT_FILMS } from 'Common/constants';

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

export const films = (state = [], { type, films }) => {
  switch (type) {
    case ACTION.FILMS_FETCH_DATA_SUCCESS:
      return films;
    default:
      return state;
  }
}