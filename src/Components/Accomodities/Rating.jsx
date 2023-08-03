import React from 'react';

const Rating = ({ rating, maxRating }) => {
  const generateStars = () => {
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className='star-fill'>
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className='star-empty'>
            ☆
          </span>
        );
      }
    }

    return stars;
  };

  return <div className='stars'>{generateStars()}</div>;
};

export default Rating;
