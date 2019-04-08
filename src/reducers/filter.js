import { ACTION } from 'Common/constants';

export const searchBy = (state = 'title', { type, name }) => {
  // debugger;
  switch (type) {
    case ACTION.FILTER_TYPE_SETTED:
      return name;
    default:
      return state;
  }
};

export const search = (state = '', { type, value }) => {
  // debugger;
  switch (type) {
    case ACTION.FILTER_SETTED:
      return value;
    case ACTION.FILTER_TYPE_SETTED:
      return state;
    default:
      return state;
  }
};
