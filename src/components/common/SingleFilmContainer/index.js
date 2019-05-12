import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

import { fetchFilmById } from '@actions/films';
import { NotFound } from '@src/components/NotFound';
import { getYearFromReleaseDateString } from '@common/utils';

import './styles.scss';

const mapStateToProps = (state) => {
  return {
    isLoading: state.filmsIsLoading,
    film: state.film,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchFilm: (id) => dispatch(fetchFilmById(id)),
});

export class SingleFilm extends Component {
  componentDidMount() {
    const { match, film, isLoading } = this.props;
    if (!match.params.id) {
      return <Redirect to='/404' />;
    }

    if (match.params.id !== film.id && !isLoading) {
      this.props.fetchFilm(+match.params.id);
    }
  }

  render() {
    const { match, isLoading, film } = this.props;

    if (!match.params.id) {
      return <Redirect to='/404' />;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!film.id) {
      return <NotFound />;
    }

    return (
      <div>
        { film &&
          <div className="single-film">
            <div className="single-film__left-side">
              <img className="single-film__poster" src={film.poster_path} alt={film.title} />
            </div>
            <div className="single-film__right-side">
              <div className="single-film__title">
                <span>{film.title}</span>
                <span className="single-film__rating">{film.vote_average}</span>
              </div>
              <div className="single-film__tagline">
                { film.tagline }
              </div>
              <div className="single-film__info-container">
                <span className="single-film__info">
                  { getYearFromReleaseDateString(film.release_date) }
                </span>
                <span className="single-film__info">{film.runtime ? `${film.runtime} min` : ''}</span>
              </div>
              <div className="single-film__overview">
                {film.overview}
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

// for testing purposes;
export const SingleFilmWithoutRouter = connect(mapStateToProps, mapDispatchToProps)(SingleFilm);

export const SingleFilmContainer = withRouter( connect(mapStateToProps, mapDispatchToProps)(SingleFilm) );
