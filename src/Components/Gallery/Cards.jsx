import React from 'react';
import './Cards.scss';
import './Gallery.scss';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='cards'>
      <Link to='/Accomodities'>
        Titre de la
        <br /> location
      </Link>
    </div>
  );
}

export default Cards;
