import React from 'react';
import photo from '../assets/images/photo.png';
import './Banner.scss';

function Banner() {
  return (
    <React.Fragment>
      <div className='img-banner'>
        <img src={photo} alt='' className='img-photo' />
        <h1>Chez vous partout et ailleurs</h1>
      </div>
    </React.Fragment>
  );
}

export default Banner;
