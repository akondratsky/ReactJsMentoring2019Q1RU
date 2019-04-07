import React from 'react';
import { FilmResultImage } from './FilmResultImage';
import { FilmResultReleaseDate } from './FilmResultReleaseDate';
import './styles.scss';


export const FilmResultBody = (props) => {
  const film = props.filmResult;

  return (
    <div className='film-result-body'>
      <FilmResultImage imageSrc={film.poster_path} imageAlt={film.title}/>
      <div className='film-result-body__header'>
        <span className='film-result-body__title'>{film.title}</span>
        <span className='film-result-body__date'>
          <FilmResultReleaseDate date={film.release_date} />
        </span>
      </div>
      <span className='film-result-body__genre'>{film.genres}</span>
    </div>
  );
};
