import { ACTION } from 'Common/constants';

export const searchBy = (state = 'title', { type, name }) => {
  switch (type) {
    case ACTION.FILTER_TYPE_SETTED:
      return name;
    default:
      return state;
  }
};

export const search = (state = '', { type, value }) => {
  switch (type) {
    case ACTION.FILTER_SETTED:
      return value;
    default:
      return state;
  }
};

export const sortBy = (state = 'rating', { type, typeName }) => {
  switch (type) {
    case ACTION.SORTING_BY_SETTED:
      return typeName;
    default:
      return state;
  }
};
