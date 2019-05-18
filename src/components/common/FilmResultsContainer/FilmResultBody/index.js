import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.scss';

import { getYearFromReleaseDateString } from 'Common/utils';
import { fetchFilmById } from 'Actions/films';
import { FilmResultImage } from './FilmResultImage';


const mapDispatchToProps = (dispatch) => ({
  fetchFilm: (id) => dispatch(fetchFilmById(id)),
});

export class FilmResultBody extends Component {
  handleFilmClick = () => {
    const { fetchFilm, filmResult } = this.props;
    fetchFilm(filmResult.id);
  }

  render() {
    const film = this.props.filmResult;

    return (
      <Link className='film-result-body' to={`/film/${film.id}`} onClick={this.handleFilmClick}>
        <FilmResultImage imageSrc={film.poster_path} imageAlt={film.title}/>
        <div className='film-result-body__header'>
          <span className='film-result-body__title'>{film.title}</span>
          <span className='film-result-body__date'>
            { getYearFromReleaseDateString(film.release_date) }
          </span>
        </div>
        <span className='film-result-body__genre'>{film.genres && film.genres.join(' ')}</span>
      </Link>
    );
  }
};

export const FilmResultBodyContainer = withRouter(connect(null, mapDispatchToProps)(FilmResultBody));
