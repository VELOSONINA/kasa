import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ logement }) => {
  return (
    <div className='cards'>
      <Link to='/Accomodities'>
        <img src={logement.cover} alt='' />
        <h4 className='title'>{logement.title}</h4>
      </Link>
    </div>
  );
};

export default Cards;
