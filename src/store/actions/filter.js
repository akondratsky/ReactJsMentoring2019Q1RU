import { ACTION } from '@common/constants';

export const setSearchType = (name) => ({
  type: ACTION.FILTER_TYPE_SETTED,
  name,
});

export const setSearchString = (value) => ({
  type: ACTION.FILTER_SETTED,
  value,
});

export const setSortingBy = (typeName) => ({
  type: ACTION.SORTING_BY_SETTED,
  typeName,
});
