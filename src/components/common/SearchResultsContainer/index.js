import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Switcher } from 'CommonComponents/Switcher';
import { STRINGS, FILM_FIELD_NAMES } from '@common/constants';
import { setSortingBy } from '@actions/filter';

import './styles.scss';

export class SearchResults extends Component {
  setSortingByHandler = (typeName) => {
    this.props.setSortingBy(typeName);
  }

  render() {
    const { pathname } = this.props.location;
    const { genre } = this.props;

    let content = null;
    if (pathname === '/' || pathname.startsWith('/search')) {
      content = <Fragment>
        <div className='search-results__found'>
          {this.props.totalFilms} movies found
        </div>
        <div className='search-results__sorting'>
          <div className='search-results__sorting-header'>Sort by</div>
          <Switcher
            variants={['release date', 'rating']}
            default={this.props.sortBy}
            isLight={true}
            onChange={this.setSortingByHandler.bind(this)}/>
        </div>
      </Fragment>;
    } else if (pathname.startsWith('/film/')) {
      content = <div className='search-results__found'>
        Films by { genre } genre
      </div>;
    }

    return (
      <div className='search-results'>
        {content}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let sortBy = '';

  switch (state.sortBy) {
    case FILM_FIELD_NAMES.RELEASE_DATE:
      sortBy = STRINGS.RELEASE_DATE;
      break;
    case FILM_FIELD_NAMES.RATING:
      sortBy = STRINGS.RATING;
      break;
  }

  return {
    totalFilms: state.films.total,
    sortBy,
    genre: state.film.genres ? state.film.genres[0] : '',
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSortingBy: (typeName) => {
    let fieldName = '';

    switch (typeName) {
      case STRINGS.RELEASE_DATE:
        fieldName = FILM_FIELD_NAMES.RELEASE_DATE;
        break;
      case STRINGS.RATING:
        fieldName = FILM_FIELD_NAMES.RATING;
        break;
    }
    dispatch(setSortingBy(fieldName));
  },
});

export const SearchResultsConnected = connect(mapStateToProps, mapDispatchToProps)(SearchResults);
export const SearchResultsContainer = withRouter(SearchResultsConnected);
