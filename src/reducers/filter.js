import { ACTION } from 'Common/constants';

export const searchBy = (state = 'title', { type, name }) => {
  switch (type) {
    case ACTION.FILTER_TYPE_SETTED:
      return name;
    default:
      return 'title';
  }
};

export const search = (state = '', { type, value }) => {
  switch (type) {
    case ACTION.FILTER_SETTED:
      return value;
    default:
      return '';
  }
};
