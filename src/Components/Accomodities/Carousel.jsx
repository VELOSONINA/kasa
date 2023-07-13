//import React, { useState } from 'react';
import logements from '../Data/logements.json';

const Carousel = () => {
  const imagesCarousel = logements[0].pictures;

  return (
    <div className='carousel'>
      {imagesCarousel.map((imageCarousel, index) => (
        <img key={index} src={imageCarousel} alt='' />
      ))}
    </div>
  );
};

export default Carousel;
