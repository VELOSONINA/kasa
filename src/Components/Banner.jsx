import React from 'react';
import photo from '../assets/images/photo.png';
import kalen from '../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';
import './Banner.scss';

function Banner() {
  return (
    <div className='banner'>
      <img src={photo} alt='' className='banner-img' />
      <div className='banner-content'>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export const AboutBanner = () => (
  <div className='banner'>
    <img src={kalen} alt='' className='banner-kalen' />
    <Banner />
  </div>
);
export default Banner;
