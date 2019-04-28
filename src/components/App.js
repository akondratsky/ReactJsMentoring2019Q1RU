import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { hot } from 'react-hot-loader';

import { AppErrorBoundary } from 'CommonComponents/AppErrorBoundary';
import { PageHeader } from 'CommonComponents/PageHeader';
import { PageFooter } from 'CommonComponents/PageFooter';
import { FilmResultsContainer } from 'CommonComponents/FilmResultsContainer';


import { PersistGate } from 'redux-persist/lib/integration/react';
import { Route, Switch } from 'react-router-dom';
import { SingleFilmContainer } from 'CommonComponents/SingleFilmContainer';
import { NotFound } from './NotFound';

class App extends Component {
  render() {
    const { Router, location, context, store, persistor } = this.props;

    return (
      <AppErrorBoundary>
        <Provider store={store}>
          <Router location={location} context={context}>
            {/* <PersistGate persistor={persistor}> */}
            <div className='page-container'>
              <Route render={(props) => (
                <PageHeader {...props}>
                  <Route exact path='/film/:id?' component={SingleFilmContainer} />
                </PageHeader>
              )} />
              <div className='page-container__content'>
                <Switch>
                  <Route exact path={['/search/:searchString', '/search/', '/search', '/', '/film/:id?']}
                    component={FilmResultsContainer} />
                  <Route path='/404' component={NotFound} />
                  <Route component={NotFound} />
                </Switch>
              </div>
              <PageFooter />
            </div>
            {/* </PersistGate> */}
          </Router>
        </Provider>
      </AppErrorBoundary>
    );
  }
}

export default hot(module)(App);
