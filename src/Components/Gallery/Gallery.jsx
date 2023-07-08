import React from 'react';
import './Gallery.scss';
import Cards from './Cards';
import logements from '../Data/logements.json';

function Gallery() {
  return (
    <div className='gallery'>
      {logements.map((logement) => (
        <Cards key={logement.id} data={logement} />
      ))}
    </div>
  );
}

export default Gallery;
