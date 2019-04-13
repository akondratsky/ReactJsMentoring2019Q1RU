import React, { Component } from 'react';
import { DummyInput } from 'CommonComponents/DummyInput';
import { DummyButton } from 'CommonComponents/DummyButton';
import { Switcher } from 'CommonComponents/Switcher';
import './styles.scss';
import { connect } from 'react-redux';
import { setSearchType, setSearchString } from 'Actions/filter';
import { filmsFetchData } from 'Actions/films';


export class SearchInput extends Component {
  constructor(props) {
    super(props);
  }

  typeChangeHandler = (str) => {
    this.props.setSearchType(str);
  };

  inputHandler = (e) => {
    this.props.setSearchValue(e.target.value);
  }

  onSubmit = () => {
    this.props.fetchData({
      search: this.props.search,
      searchBy: this.props.searchBy,
      sortBy: this.props.sortBy,
      sortOrder: 'asc',
    });
  }

  render() {
    return (
      <div className='search-input'>
        <div className='search-input__input'>
          <DummyInput onInput={this.inputHandler.bind(this)} value={this.props.search} />
        </div>
        <div className='search-input__controls'>
          <span className='search-input__text'>
            Search by
          </span>
          <div className='search-input__switcher'>
            <Switcher
              variants={['title', 'genre']}
              default='title'
              onChange={this.typeChangeHandler.bind(this)} />
          </div>
          <div className='search-input__submit'>
            <DummyButton text='Search'
              isActive={true}
              width='100px'
              onClick={this.onSubmit.bind(this)} />
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  search: state.search,
  searchBy: state.searchBy,
  sortBy: state.sortBy,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchType: (typeName) => dispatch(setSearchType(typeName)),
  setSearchValue: (value) => dispatch(setSearchString(value)),
  fetchData: (params) => dispatch(filmsFetchData(params)),
});

export const SearchInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput);
