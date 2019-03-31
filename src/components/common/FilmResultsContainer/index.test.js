import React from 'react';
import { FilmResultsContainer } from './index';

describe('<FilmReslutsContainer />', () => {
  test('rendered correctly', () => {
    const filmResultsContainer = shallow(
      <FilmResultsContainer />
    );
    expect(filmResultsContainer).toMatchSnapshot();
  })
});
