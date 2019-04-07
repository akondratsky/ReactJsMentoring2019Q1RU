import { Film } from 'Common/Film';

export const DEFAULT_POSTER_PATH = 'https://image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg';

export const ACTION = {
  FETCH_FILMS: 'FETCH_FILMS',
  FILMS_HAS_ERRORED: 'FILMS_HAS_ERRORED',
  FILMS_IS_LOADING: 'FILMS_IS_LOADING',
  FILMS_FETCH_DATA_SUCCESS: 'FILMS_FETCH_DATA_SUCCESS',
};


//#region DEFAULT_FILMS
const films = [];
const genres = ['Drama', 'Comedia', 'Horror', 'Family'];

for (let i = 0; i < 20; i++) {
  let film = new Film();
  film.id = i;
  film.title = `film #${i + 1}`;

  film.genres = [];
  let ng = Math.round(3 * (1 - Math.random()));
  for (let k = 0; k < ng; k++) {
    film.genres.push(genres[k]);
  }

  film.release_date = '2018-03-30';
  film.overview = `This is ${i} film that was created occasionally. ${film.title} is the best`;
  film.poster_path = DEFAULT_POSTER_PATH;
  films.push(film);
}
//#endregion
export const DEFAULT_FILMS = films;

export const ENDPOINT = {
  GET_ALL_MOVIES: 'https://reactjs-cdp.herokuapp.com/movies'
};