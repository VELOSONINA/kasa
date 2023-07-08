import React from 'react';
import './Cards.scss';
import { Link } from 'react-router-dom';

function Cards({ data }) {
  return (
    <div className='cards'>
      <Link to='/about'>
        Titre de la
        <br /> location
      </Link>
      <h3>{data.title}</h3>
      <img src={data.cover} alt={data.title} className='img-gallery' />
      {/* {<p>{data.description}</p>} */}
    </div>
  );
}

export default Cards;
