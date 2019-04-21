import React, { Component } from 'react';
import { FilmResultImage } from './FilmResultImage';
import { FilmResultReleaseDate } from './FilmResultReleaseDate';
import { withRouter } from 'react-router-dom';
import './styles.scss';


export class FilmResultBody extends Component {
  handleRedirect = () => {
    this.props.history.push(`/film/${this.props.filmResult.id}`);
    this.props.onClick(this.props.filmResult.id);
  }

  render() {
    const film = this.props.filmResult;

    return (
      <div className='film-result-body' onClick={this.handleRedirect}>
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
  }
};

export const FilmResultBodyContainer = withRouter(FilmResultBody);
