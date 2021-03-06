import { combineReducers } from 'redux';
import { films, filmsHasErrored, filmsIsLoading, film } from './films';
import { search, searchBy, sortBy, sortOrder } from './filter';
import { persistReducer } from './persist';

export const rootReducer = combineReducers({
  films,
  film,
  filmsHasErrored,
  filmsIsLoading,
  searchBy,
  search,
  sortBy,
  sortOrder,
  persistReducer,
});
