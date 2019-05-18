// @flow

import { ACTION } from 'Common/constants';

export const setSearchType = (name: string) => ({
  type: ACTION.FILTER_TYPE_SETTED,
  name,
});

export const setSearchString = (value: string) => ({
  type: ACTION.FILTER_SETTED,
  value,
});

export const setSortingBy = (typeName: string) => ({
  type: ACTION.SORTING_BY_SETTED,
  typeName,
});
