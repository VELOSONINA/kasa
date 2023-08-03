import React from 'react';
import Articles from './Articles';
import Rating from './Rating';

const Sections = (props) => {
  const { logement } = props;
  const { title, location, host, tags } = logement;
  const { name, picture } = host;
  const maxRating = 5;

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
        <Rating rating={logement.rating} maxRating={maxRating} />
      </div>

      <Articles logement={logement} />
    </div>
  );
};

export default Sections;
