// @flow

import { ACTION } from 'Common/constants';

export const searchBy = (
    state: Object = 'title',
    { type, name }: { type: string, name: string }
) => {
  switch (type) {
    case ACTION.FILTER_TYPE_SETTED:
      return name;
    default:
      return state;
  }
};

export const search = (
    state: Object = '',
    { type, value }: { type: string, value: string }
) => {
  switch (type) {
    case ACTION.FILTER_SETTED:
      return value;
    default:
      return state;
  }
};

export const sortBy = (
    state: Object = 'rating',
    { type, typeName }: { type: string, typeName: string }
) => {
  switch (type) {
    case ACTION.SORTING_BY_SETTED:
      return typeName;
    default:
      return state;
  }
};
