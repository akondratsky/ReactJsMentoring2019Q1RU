import { ACTION, ENDPOINT } from 'Common/constants';

export const filmsHasErrored = (hasErrored) => ({
  type: ACTION.FILMS_HAS_ERRORED,
  hasErrored,
});

export const filmsIsLoading = (isLoading) => ({
  type: ACTION.FILMS_IS_LOADING,
  isLoading,
});

export const filmsFetchDataSuccess = ({ data, total, offset, limit }) => ({
  type: ACTION.FILMS_FETCH_DATA_SUCCESS,
  films: data,
  total,
  offset,
  limit,
});

export const errorAfterTime = () => {
  ((dispatch) => {
    setTimeout(() => {
      dispatch(filmsHasErrored(true));
    });
  });
};

export const filmsFetchData = (params) => (
  (dispatch) => {
    dispatch(filmsIsLoading(true));

    let paramsString = '';

    if (params) {
      const { sortBy, sortOrder, search, searchBy, filter, offset, limit } = params;
      paramsString = '?';

      if (offset) {
        paramsString += `offset=${offset}&`;
      }

      if (sortBy) {
        paramsString += `sortBy=${sortBy}&`;
      }

      if (sortOrder) {
        paramsString += `sortOrder=${sortOrder}&`;
      }

      if (search) {
        paramsString += `search=${search}&`;
      };

      if (searchBy) {
        paramsString += `searchBy=${searchBy}&`;
      }

      if (filter) {
        paramsString += `filter=${filter}&`;
      }

      if (limit) {
        paramsString += `limit=${limit}&`;
      }
    }

    fetch(ENDPOINT.GET_ALL_MOVIES + paramsString)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          dispatch(filmsIsLoading(false));
          return response;
        })
        .then((response) => response.json())
        .then((response) => {
          dispatch(filmsFetchDataSuccess(response));
        })
        .catch(() => dispatch(filmsHasErrored(true)));
  }
);
