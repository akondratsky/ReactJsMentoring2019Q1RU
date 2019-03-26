import React from 'react';
import { FilmResultImage } from './FilmResultImage';
import { FilmResultReleaseDate } from './FilmResultReleaseDate';
import './styles.scss';


export const FilmResultBody = (props) => {
  const film = props.filmResult;

  return (
    <div className='film-result-body'>
      <FilmResultImage imageSrc={film.Image} imageAlt={film.Title}/>
      <div className='film-result-body__header'>
        <span className='film-result-body__title'>{film.Title}</span>
        <span className='film-result-body__date'>
          <FilmResultReleaseDate date={film.ReleaseDate} />
        </span>
      </div>
      <span className='film-result-body__genre'>{film.Genre}</span>
    </div>
  );
};
