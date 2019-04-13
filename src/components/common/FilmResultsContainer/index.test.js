import React from 'react';
import { FilmResultsContainer, FilmResults } from './index';

describe('<FilmReslutsContainer />', () => {
  test('rendered correctly in normal state', () => {
    const filmResultsContainer = shallow(
        <FilmResultsContainer />
    );
    expect(filmResultsContainer).toMatchSnapshot();
  });


  test('<FilmResults /> rendered correctly in error state', () => {
    const fetchDataMockFn = jest.fn();
    const films = [];

    const filmResultsContainerWithError = shallow(
        <FilmResults hasErrored={true} fetchData={fetchDataMockFn} films={films} />
    );
    expect(filmResultsContainerWithError).toMatchSnapshot();
  });


  test('<FilmResults /> rendered correctly in normal state', () => {
    const fetchDataMockFn = jest.fn();
    const films = {
      records: [{ id: 11,
        title: 'Star Wars',
        tagline: 'A long time ago in a galaxy far, far away...',
        vote_average: 8.1,
        vote_count: 8516,
        release_date: '1977-05-25',
        poster_path: 'https://image.tmdb.org/t/p/w500/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg',
        overview: 'Princess Leia is captured and held hostage by ' +
                  'the evil Imperial forces in their effort to take ' +
                  'over the galactic Empire.',
        budget: 11000000,
        revenue: 775398007,
        genres: ['Adventure', 'Action', 'Science Fiction'],
        runtime: 121,
      }],
    };

    const filmResultsContainerWithError = shallow(
        <FilmResults hasErrored={false} fetchData={fetchDataMockFn} films={films} />
    );
    expect(filmResultsContainerWithError).toMatchSnapshot();
  });


  test('<FilmResults /> rendered correctly in loading state', () => {
    const fetchDataMockFn = jest.fn();
    const films = { records: []};

    const filmResultsContainerWithError = shallow(
        <FilmResults isLoading={true} fetchData={fetchDataMockFn} films={films} />
    );
    expect(filmResultsContainerWithError).toMatchSnapshot();
  });


  test('calls fetchData if films.length === 0', () => {
    const fetchDataMockFn = jest.fn();
    const films = [];

    shallow(
        <FilmResults isLoading={true} fetchData={fetchDataMockFn} films={films} />
    );

    expect(fetchDataMockFn).toBeCalled();
  });
});
