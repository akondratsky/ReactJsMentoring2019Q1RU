import { ACTION } from 'Common/constants';

export const setSearchType = (name) => ({
  type: ACTION.FILTER_TYPE_SETTED,
  name,
});

export const setSearchString = (value) => ({
  type: ACTION.FILTER_SETTED,
  value,
});
