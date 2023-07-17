import React from 'react';

const Carousel = (props) => {
  const { logement } = props;
  const { pictures } = logement;
  const imageCarousel = pictures.map((picture, index) => (
    <img key={index} src={picture} alt='' />
  ));

  return (
    <div className='carousel'>
      {imageCarousel}
      <div className='accordion-content-container'></div>
    </div>
  );
};

export default Carousel;
