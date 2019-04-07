import { ACTION, DEFAULT_FILMS } from 'Common/constants';

const initialState = DEFAULT_FILMS;

export const films = (state = initialState, { type, film }) => {
  switch (type) {
    // case ACTION.ADD_FILM:
    //   debugger;
    //   return Object.assign({}, state, {
    //     films: [
    //       ...state.films,
    //       films
    //     ]
    //   });
    default:
      return initialState;
  }
};
