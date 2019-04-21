import React, { Component } from 'react';
import { Route, withRouter } from 'react-router';
import { SearchInputContainer } from './SearchInput';
import './styles.scss';


export class SearchPanel extends Component {
  render() {
    const { path } = { path: this.props.location.pathname };

    if (path !== '/' && !path.startsWith('/search')) {
      return null;
    }

    return (
      <React.Fragment>


        <h3 className='search-panel__header'>FIND YOUR MOVIE</h3>
        <Route path={['/search/:searchString?', '/']} component={SearchInputContainer} />
      </React.Fragment>
    );
  }
}

export const SearchPanelContainer = withRouter(SearchPanel);
