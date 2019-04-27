import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FilmResultBodyContainer } from './FilmResultBody';
import { filmsFetchData, fetchFilmById } from '@actions/films';

import './styles.scss';

export class FilmResults extends Component {
  componentDidMount() {
    if (!this.props.films || this.props.films.length === 0) {
      this.props.fetchData();
    }
  }

  handleFilmClick = (id) => {
    this.props.fetchFilm(id);
  }

  render() {
    if (this.props.hasErrored) {
      return <h1>Ooops, there is an error</h1>;
    }

    if (this.props.isLoading) {
      return <span>loading...</span>;
    }

    return (
      <div className='film-results-container'>
        {this.props.films.records.map((film) => (
          <FilmResultBodyContainer key={film.id} filmResult={film} onClick={this.handleFilmClick} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  films: state.films,
  hasErrored: state.filmsHasErrored,
  isLoading: state.filmsIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(filmsFetchData()),
  fetchFilm: (id) => dispatch(fetchFilmById(id)),
});

export const FilmResultsContainer = connect(mapStateToProps, mapDispatchToProps)(FilmResults);
