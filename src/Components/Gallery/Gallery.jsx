import React from 'react';
import Cards from './Cards';
import logements from '../../assets/Data/logements.json';

const Gallery = () => {
  return (
    <div className='gallery'>
      {logements.map((logement) => (
        <Cards key={logement.id} logement={logement} />
      ))}
    </div>
  );
};

export default Gallery;
