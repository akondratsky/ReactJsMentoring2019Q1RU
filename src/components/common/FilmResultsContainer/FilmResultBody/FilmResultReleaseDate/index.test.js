import React from 'react';
import { FilmResultReleaseDate } from './index';

describe('<FilmResultReleaseDate />', () => {
  test('should be rendered correctly', () => {
    const filmResultReleaseDate = shallow(
      <FilmResultReleaseDate date={2000} />
    );
    expect(filmResultReleaseDate).toMatchSnapshot();
  });

  describe('the rendered date should be consistent', () => {
    test('year 2000 rendered as 2000', () => {
      const filmResultReleaseDate = shallow(
        <FilmResultReleaseDate date={2000} />
      );
      expect(filmResultReleaseDate.text()).toEqual('2000');
    });

    test('year 1990 rendered as 1990', () => {
      const filmResultReleaseDate = shallow(
        <FilmResultReleaseDate date={1990} />
      );
      expect(filmResultReleaseDate.text()).toEqual('1990');
    });
  });
});