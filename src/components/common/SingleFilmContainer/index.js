import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

const mapStateToProps = () => ({

});

export class SingleFilm extends Component {
  render() {
    if (!this.props.match.params.id) {
      return <Redirect to='/404' />;
    }

    return (
      <div>
        single film page
      </div>
    );
  }
}

export const SingleFilmContainer = withRouter( connect(mapStateToProps)(SingleFilm) );
