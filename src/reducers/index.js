import { combineReducers } from 'redux';
import { films, filmsHasErrored, filmsIsLoading } from './films';
import { search, searchBy } from './filter';
import { persistReducer } from './persist';

export const rootReducer = combineReducers({
  films,
  filmsHasErrored,
  filmsIsLoading,
  searchBy,
  search,
  persistReducer,
});
