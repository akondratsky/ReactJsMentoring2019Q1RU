import React, { Component } from 'react';
import './styles.scss';
import { FilmResultBody } from './FilmResultBody';
import { connect } from 'react-redux';
import { filmsFetchData } from 'Actions/films';

export class FilmResults extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
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
        {this.props.films.map((film) => (
          <FilmResultBody key={film.id} filmResult={film} />
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
});

export const FilmResultsContainer = connect(mapStateToProps, mapDispatchToProps)(FilmResults);
