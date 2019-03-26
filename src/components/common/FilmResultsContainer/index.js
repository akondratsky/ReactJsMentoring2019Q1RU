import React, { Component } from 'react';
import './styles.scss';
import { FilmResultBody } from './FilmResultBody';

export class FilmResultsContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const filmResults = [
      { Id: 0, Image: 'assets/film1.jpg', Title: 'First film', ReleaseDate: 2000, Genre: 'Drama' },
      { Id: 1, Image: 'assets/film2.jpg', Title: 'Second film', ReleaseDate: 2000, Genre: 'Comedia' },
      { Id: 2, Image: 'assets/film3.jpg', Title: 'Third film', ReleaseDate: 2000, Genre: 'Wtf' },
      { Id: 3, Image: 'assets/film4.jpg', Title: 'Third film', ReleaseDate: 2000, Genre: 'Wtf' },
      { Id: 4, Image: 'assets/film5.jpg', Title: 'Third film', ReleaseDate: 2000, Genre: 'Wtf' },
      { Id: 5, Image: 'assets/film6.jpg', Title: 'Third film', ReleaseDate: 2000, Genre: 'Wtf' },
      { Id: 6, Image: 'assets/film7.jpg', Title: 'Third film', ReleaseDate: 2000, Genre: 'Wtf' },
      { Id: 7, Image: 'assets/film8.jpg', Title: 'Third film', ReleaseDate: 2000, Genre: 'Wtf' },
      { Id: 8, Image: 'assets/film9.jpg', Title: 'Third film', ReleaseDate: 2000, Genre: 'Wtf' },
    ];

    const filmItems = filmResults.map((film) =>
      <FilmResultBody key={film.Id} filmResult={film} />
    );

    return (
      <div className='film-results-container'>
        { filmItems }
      </div>
    );
  }
}
