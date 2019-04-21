export const DEFAULT_POSTER_PATH = 'https://image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg';

export const ACTION = {
  FETCH_FILMS: 'FETCH_FILMS',
  FILMS_HAS_ERRORED: 'FILMS_HAS_ERRORED',
  FILMS_IS_LOADING: 'FILMS_IS_LOADING',
  FILMS_FETCH_DATA_SUCCESS: 'FILMS_FETCH_DATA_SUCCESS',
  FILM_FETCHED_SUCCESSFULLY: 'FILM_FETCHED_SUCCESSFULLY',
  FILTER_TYPE_SETTED: 'FILTER_TYPE_SETTED',
  FILTER_SETTED: 'FILTER_SETTED',
  SORTING_BY_SETTED: 'SORTING_SETTED',
};

export const ENDPOINT = {
  GET_ALL_MOVIES: 'https://reactjs-cdp.herokuapp.com/movies',
  GET_MOVIE: 'https://reactjs-cdp.herokuapp.com/movies/',
};

export const STRINGS = {
  RELEASE_DATE: 'release date',
  RATING: 'rating',
};

export const FILM_FIELD_NAMES = {
  RATING: 'rating',
  RELEASE_DATE: 'release_date',
};
