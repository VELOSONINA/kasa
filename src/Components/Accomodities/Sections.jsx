import React from 'react';
import Articles from './Articles';

const Sections = (props) => {
  const { logement } = props;
  const { title, rating, location, host, tags } = logement;
  const { name, picture } = host;

  // Générer les étoiles en fonction du rating
  const generateStars = () => {
    const stars = [];
    const maxRating = 5;

    for (let i = 0; i < maxRating; i++) {
      if (i < rating) {
        stars.push(
          <span className='material-symbols-outlined' key={i}>
            star
          </span>
        );
      } else {
        stars.push(
          <span className='material-symbols-outlined' key={i}>
            star_border
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
        <p className='float-right'>
          <span>{name}</span>
          <span>
            <img src={picture} alt='' />
          </span>
        </p>
        <p className='float-clear'>{location}</p>
        <div className='keywords'>
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        {/* affiche les étoiles avec les anotations */}
        <div>{generateStars()}</div>
      </div>

      <Articles logement={logement} />
    </div>
  );
};

export default Sections;
