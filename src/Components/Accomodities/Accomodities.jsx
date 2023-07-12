import React from 'react';
import Carousel from './Carousel';
import Buttons from './Buttons';
import Descriptions from './Descriptions';

function Accomodities() {
  return (
    <div className='accomodities'>
      <Carousel />
      <Buttons />
      <Descriptions />
    </div>
  );
}

export default Accomodities;
