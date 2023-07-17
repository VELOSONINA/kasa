import React from 'react';
import Articles from './Articles';

const Sections = (props) => {
  const { logement } = props;
  const { title, rating, location, host, tags } = logement;
  const { name, picture } = host;
  const maxRating = 5;

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

  return (
    <div className='sections'>
      <div className='header'>
        <h1>{title}</h1>
        <p className='profils'>
          <span className='name-container'>
            <span className='first-name'>{name.split(' ')[0]}</span>
            <span className='last-name'>{name.split(' ')[1]}</span>
          </span>
          <span>
            <img src={picture} alt='' />
          </span>
        </p>
        <p className='location'>{location}</p>
        <div className='keywords'>
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className='stars'>{generateStars()}</div>
      </div>

      <Articles logement={logement} />
    </div>
  );
};

export default Sections;
