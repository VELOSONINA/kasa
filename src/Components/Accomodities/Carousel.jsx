import React, { useState } from 'react';
import arrowLeft from '../../assets/images/arrow_left.png';
import arrowRight from '../../assets/images/arrow_right.png';

const Carousel = (props) => {
  const { logement } = props;
  const { pictures } = logement;

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className='carousel'>
      <div className='slide-container'>
        <img src={pictures[currentSlide]} alt='' />
      </div>
      <div className='slide-numeration'>
        <p>
          {currentSlide + 1} / {pictures.length}
        </p>
      </div>
      <div className='arrow-container'>
        <img src={arrowLeft} alt='' onClick={prevSlide} />
        <img src={arrowRight} alt='' onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Carousel;
