import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { DummyInput } from 'CommonComponents/DummyInput';
import { Switcher } from 'CommonComponents/Switcher';

import { setSearchType, setSearchString } from 'Actions/filter';
import { getFilms } from 'Selectors/films';

import './styles.scss';

export class SearchInput extends Component {
  typeChangeHandler = (str) => {
    if (str === 'genre') {
      str = 'genres';
    }
    this.props.setSearchType(str);
  };

  inputHandler = (e) => {
    this.props.setSearchValue(e.target.value);
  }

  render() {
    const { fetchData, search } = this.props;

    return (
      <div className='search-input'>
        <div className='search-input__input'>
          <DummyInput onInput={this.inputHandler} value={search} />
        </div>
        <div className='search-input__controls'>
          <span className='search-input__text'>
            Search by
          </span>
          <div className='search-input__switcher'>
            <Switcher
              variants={['title', 'genre']}
              default='title'
              onChange={this.typeChangeHandler} />
          </div>
          <div className='search-input__submit'>
            <Link
              className='button button-active'
              style={{ width: '100px', textDecoration: 'none' }}
              to={`/search/${encodeURI(search)}`} onClick={fetchData}>
              SEARCH
            </Link>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    searchBy: state.searchBy,
    sortBy: state.sortBy,
    fetchData: () => getFilms(state),
  };
};

const mapDispatchToProps = (dispatch, bb, cc, dd) => {
  return {
    setSearchType: (typeName) => dispatch(setSearchType(typeName)),
    setSearchValue: (value) => dispatch(setSearchString(value)),
  };
};

export const SearchInputWithoutRouter = connect(mapStateToProps, mapDispatchToProps)(SearchInput);


// const mergeProps = (stateProps, dispatchProps) => {
//   const { dispatch } = dispatchProps;
//   debugger;
//   return ({
//     ...stateProps,
//     ...dispatchProps,
//     setSearchType: (typeName) => dispatch(setSearchType(typeName)),
//     setSearchValue: (value) => dispatch(setSearchString(value)),
//     fetchData: () => getFilms(),
//   });
// };


// export const SearchInputWithoutRouter = connect(mapStateToProps, null, mergeProps)(SearchInput);

export const SearchInputContainer = withRouter(SearchInputWithoutRouter);
