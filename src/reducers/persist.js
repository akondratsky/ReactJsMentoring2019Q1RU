import { REHYDRATE } from 'redux-persist';

export const persistReducer = (state = {}, action) => {
  switch (action.type) {
    case REHYDRATE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
