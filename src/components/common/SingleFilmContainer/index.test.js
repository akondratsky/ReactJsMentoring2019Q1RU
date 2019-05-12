import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render, waitForElement } from 'react-testing-library';

import {
  act,
  isElement,
  isElementOfType,
  scryRenderedDOMComponentsWithClass,
} from 'react-dom/test-utils';

import { configureStore } from '@store/store';

import { SingleFilmWithoutRouter, SingleFilm } from './index';


describe('SingleFilmContainer', () => {
  let container;
  let match;
  let film;
  let fetchFilm;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    match = { params: { id: '31313' }};
    film = { id: 13, title: 'filmtitle' };
    fetchFilm = jest.fn();
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should render correct title', () => {
    act(() => {
      ReactDOM.render(
          <SingleFilm
            film={film}
            match={match}
            fetchFilm={fetchFilm}
          />, container);
    });

    expect(
        container.querySelector('.single-film__title span').textContent
    ).toBe('filmtitle');
  });

  it('should be created as react element successfully', () => {
    const el = React.createElement(
        SingleFilm,
        { match, film, fetchFilm }
    );
    expect(isElement(el)).toBe(true);
    expect(isElementOfType(el, SingleFilm)).toBe(true);
  });

  it('should render correct duration', () => {
    film.runtime = 120;
    let tree = null;

    act(() => {
      tree = ReactDOM.render(
          <SingleFilm
            film={film}
            match={match}
            fetchFilm={fetchFilm}
          />, container);
    });

    const a = scryRenderedDOMComponentsWithClass(tree, 'single-film__info');
    expect(a[1].textContent).toBe('120 min');
  });
});


describe('react-testing-library learning', () => {
  let match;
  let film;
  let fetchFilm;

  const renderAsContainer = ({ film }) => {
    const store = configureStore({ film });

    return render(
        <Provider store={store}>
          <SingleFilmWithoutRouter match={match} />
        </Provider>
    );
  };

  beforeEach(() => {
    match = { params: { id: '31313' }};
    film = { id: 13, title: 'filmtitle' };
    fetchFilm = jest.fn();
  });


  it('getByText: correct title exists', async () => {
    const { getByText } = render(
        <SingleFilm
          film={film}
          match={match}
          fetchFilm={fetchFilm} />
    );

    // will throw exception it there is no element with 'filmtitle' text inside it
    await waitForElement(() => getByText(/filmtitle/i));
  });

  it('works correctly with redux container', async () => {
    const { getByText } = renderAsContainer({ film });
    await waitForElement(() => getByText('filmtitle'));
  });
});
