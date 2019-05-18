// @flow

import { REHYDRATE } from 'redux-persist';

export const persistReducer = (
    state: Object = {},
    action: Object,
) => {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
