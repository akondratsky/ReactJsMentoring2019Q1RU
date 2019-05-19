import { createSelector } from 'reselect';
import { isServer } from 'Common/utils';
import { filmsFetchData } from 'Actions/films';


export const getSearchBy = (state) => state.searchBy;
export const getSearchString = (state) => state.search;
export const getSortBy = (state) => state.sortBy;
export const getSortOrder = (state) => state.sortOrder;

export const getFilmFirstGenre = (state) => state.film.genres ? state.film.genres[0] : '';
export const getTotalFilms = (state) => state.films.total;

export const getFilms = createSelector([
  getSearchBy, getSearchString, getSortBy, getSortOrder,
], () => {
  if (!isServer) {
    const { store } = require('../../client');
    store.dispatch(filmsFetchData());
  }
});
