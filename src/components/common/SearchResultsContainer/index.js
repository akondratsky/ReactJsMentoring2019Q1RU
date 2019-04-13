import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switcher } from 'CommonComponents/Switcher';
import { setSortingBy } from 'Actions/filter';
import { STRINGS, FILM_FIELD_NAMES } from 'Common/constants';
import './styles.scss';

export class SearchResults extends Component {
  setSortingByHandler = (typeName) => {
    this.props.setSortingBy(typeName);
  }

  render() {
    return (
      <div className='search-results'>
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

export const SearchResultsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchResults);
