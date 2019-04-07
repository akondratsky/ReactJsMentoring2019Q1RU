import { combineReducers } from 'redux';
import { films, filmsHasErrored, filmsIsLoading } from './films';

export const rootReducer = combineReducers({
  films,
  filmsHasErrored,
  filmsIsLoading
});
