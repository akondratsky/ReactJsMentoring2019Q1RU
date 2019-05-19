// @flow
import { STRINGS, FILM_FIELD_NAMES } from 'Common/constants';
import { ACTION } from 'Common/constants';

export const setSearchType = (name: string) => ({
  type: ACTION.FILTER_TYPE_SETTED,
  name,
});

export const setSearchString = (value: string) => ({
  type: ACTION.FILTER_SETTED,
  value,
});

export const setSortingBy = (typeName: string) => {
  let sortBy = '';

  switch (typeName) {
    case (STRINGS.RELEASE_DATE):
      sortBy = FILM_FIELD_NAMES.RELEASE_DATE;
      break;
    case (STRINGS.RATING):
      sortBy = FILM_FIELD_NAMES.RATING;
      break;
  }

  return {
    type: ACTION.SORTING_BY_SETTED,
    typeName: sortBy,
  };
};
