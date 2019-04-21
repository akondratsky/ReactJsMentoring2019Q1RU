import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

import { fetchFilmById } from '@actions/films';
import { NotFound } from '@src/components/NotFound';

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
    const { match, film } = this.props;
    if (!match.params.id) {
      return <Redirect to='/404' />;
    }

    if (match.params.id !== film.id) {
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
          <span>{film.title} - {film.overview}</span>
        }
      </div>
    );
  }
}

export const SingleFilmContainer = withRouter( connect(mapStateToProps, mapDispatchToProps)(SingleFilm) );
