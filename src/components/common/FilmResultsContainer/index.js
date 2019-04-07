import React, { Component } from 'react';
import './styles.scss';
import { FilmResultBody } from './FilmResultBody';
import { connect } from 'react-redux';

class FilmResults extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    debugger;
    const { films } = this.props;
    const filmItems = films.map((film) =>
      <FilmResultBody key={film.id} filmResult={film} />
    );

    return (
      <div className='film-results-container'>
        { filmItems }
      </div>
    );
  }
}

export const FilmResultsContainer = connect(state => ({
  films: state.films,
}))(FilmResults);
