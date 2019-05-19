import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Switcher } from 'CommonComponents/Switcher';

import { setSortingBy } from 'Actions/filter';
import { getTotalFilms, getSortBy, getFilmFirstGenre } from 'Selectors/films';

import './styles.scss';

export class SearchResults extends Component {
  render() {
    const { pathname } = this.props.location;
    const { genre, sortBy, changeSortingByTo } = this.props;

    let content = null;

    // for search page:
    if (pathname === '/' || pathname.startsWith('/search')) {
      content = <Fragment>
        <div className='search-results__found'>
          {this.props.totalFilms} movies found
        </div>
        <div className='search-results__sorting'>
          <div className='search-results__sorting-header'>Sort by</div>
          <Switcher
            variants={['release date', 'rating']}
            default={sortBy}
            isLight={true}
            onChange={changeSortingByTo}/>
        </div>
      </Fragment>;

    // for film page:
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


const mapStateToProps = (state) => ({
  totalFilms: getTotalFilms(state),
  sortBy: getSortBy(state),
  genre: getFilmFirstGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSortingByTo: (typeName) => dispatch(setSortingBy(typeName)),
});

export const SearchResultsConnected = connect(mapStateToProps, mapDispatchToProps)(SearchResults);
export const SearchResultsContainer = withRouter(SearchResultsConnected);
