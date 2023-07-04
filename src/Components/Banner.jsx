import React from 'react';
import photo from '../assets/images/photo.png';
import './Banner.scss';

function Banner() {
  return (
    <div className='banner'>
      <img src={photo} alt='' className='banner-img' />
      <div className='banner-content'>
        <h1>Chez vous partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Banner;
