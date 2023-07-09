import React from 'react';
import './Gallery.scss';
import Cards from './Cards';
import dataLogements from '../Data/logements.json';

function Gallery() {
  return (
    <div className='gallery'>
      {dataLogements.map((logement) => (
        <Cards key={logement.id} data={logement} />
      ))}
    </div>
  );
}

export default Gallery;
