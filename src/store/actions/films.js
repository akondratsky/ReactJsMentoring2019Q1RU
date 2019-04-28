import { ACTION, ENDPOINT } from '@common/constants';
import { getResponseStub } from '@mocks/responseStub';

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


export const filmsFetchData = (params) => (
  (dispatch) => {
    dispatch(filmsHasErrored(false));
    dispatch(filmsIsLoading(true));

    let paramsString = '';

    if (params) {
      const {
        sortBy,
        sortOrder,
        search,
        searchBy,
        // filter,
        // offset,
        // limit
      } = params;
      paramsString = '?';

      if (searchBy) {
        paramsString += `searchBy=${searchBy}&`;
      }

      if (search) {
        paramsString += `search=${search}&`;
      };


      if (sortBy) {
        paramsString += `sortBy=${sortBy}&`;
      }

      if (sortOrder) {
        paramsString += `sortOrder=${sortOrder}&`;
      }

      // if (offset) {
      //   paramsString += `offset=${offset}&`;
      // }

      // if (filter) {
      //   paramsString += `filter=${filter}&`;
      // }

      // if (limit) {
      //   paramsString += `limit=${limit}&`;
      // }
    }

    if (UNPAID) {
      fetch(ENDPOINT.GET_ALL_MOVIES + encodeURI(paramsString))
          .then(()=> console.warn('Thanks God! Back-end works again!'), () => {
            console.warn('Back-end (very excited): "No time to explain, just take this stubs!"');
            dispatch(filmsIsLoading(false));

            dispatch(filmsFetchDataSuccess(getResponseStub()));
          });
    } else {
      fetch(ENDPOINT.GET_ALL_MOVIES + encodeURI(paramsString))
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
          .catch(() => {
            if (UNPAID) console.warn('yeeeeehaaaa');
            dispatch(filmsHasErrored(true));
          });
    }
  }
);

export const filmFetchedSuccessfully = (film) => ({
  type: ACTION.FILM_FETCHED_SUCCESSFULLY,
  film,
});

export const fetchFilmById = (id) => (dispatch, getStore) => {
  // dispatch(filmsHasErrored(false));
  // dispatch(filmsIsLoading(true));

  // fetch(ENDPOINT.GET_MOVIE + id)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //       dispatch(filmsIsLoading(false));
  //       return response;
  //     })
  //     .then((response) => response.json())
  //     .then((film) => {
  //       dispatch(filmFetchedSuccessfully(film));
  //       dispatch(filmsFetchData({
  //         searchBy: 'genres',
  //         search: film.genres[0],
  //       }));
  //     })
  //     .catch(() => dispatch(filmsHasErrored(true)));
};
