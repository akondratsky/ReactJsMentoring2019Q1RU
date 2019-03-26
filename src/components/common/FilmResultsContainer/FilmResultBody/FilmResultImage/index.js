import React from 'react';
import './styles.scss';

export const FilmResultImage = (props) => {
  return (
    <div>
      <img className='film-result-image' src={props.imageSrc} alt={props.imageAlt} />
    </div>
  );
};
