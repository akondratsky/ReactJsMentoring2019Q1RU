import React from 'react';
import { FilmResultBody } from './index';

describe('<FilmResultBody />', () => {

  test('should be rendered correctly', () => {
    const filmStub = { 
      Id: 0,
      Image: 'assets/film1.jpg',
      Title: 'First film',
      ReleaseDate: 2000,
      Genre: 'Drama'
    };
    const filmResultBody = shallow(
      <FilmResultBody filmResult={filmStub} />
    );
    expect(filmResultBody).toMatchSnapshot();
  });

});