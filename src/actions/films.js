import { ACTION, ENDPOINT } from 'Common/constants';

export const filmsHasErrored = hasErrored => ({
  type: ACTION.FILMS_HAS_ERRORED,
  hasErrored
});

export const filmsIsLoading = isLoading => ({
  type: ACTION.FILMS_IS_LOADING,
  isLoading
});

export const filmsFetchDataSuccess = films => ({
  type: ACTION.FILMS_FETCH_DATA_SUCCESS,
  films
});

export const errorAfterTime = () => {(
  dispatch => {
    setTimeout(() => {
      dispatch(filmsHasErrored(true))
    })
  }
)};

export const filmsFetchData = () => (
  dispatch => {
    dispatch(filmsIsLoading(true));

    fetch(ENDPOINT.GET_ALL_MOVIES)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(filmsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((response) => dispatch(filmsFetchDataSuccess(response.data)))
      .catch(() => dispatch(filmsHasErrored(true)));
  }
);