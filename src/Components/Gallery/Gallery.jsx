import React from 'react';
import Cards from './Cards';
import dataLogements from '../../assets/Data/logements.json';

const Gallery = () => {
  return (
    <div className='gallery'>
      {dataLogements.map((logement) => (
        <Cards key={logement.id} logement={logement} />
      ))}
    </div>
  );
};

export default Gallery;
