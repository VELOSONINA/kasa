import React from 'react';

const Banner = ({ imageUrl, children }) => {
  return (
    <div className='banner'>
      <img src={imageUrl} alt='' />
      {children}
    </div>
  );
};

export default Banner;
