import React from 'react';
import { FilmResultImage } from './index';

describe('<FilmResultImage />', () => {
  test('should be rendered correcly', () => {
    const filmResultImage = shallow(
      <FilmResultImage />
    );
    expect(filmResultImage).toMatchSnapshot();
  });
});