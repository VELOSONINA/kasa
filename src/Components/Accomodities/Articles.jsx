import React from 'react';

const Articles = (props) => {
  const { logement } = props;

  const { description, equipments } = logement;

  const listItems = equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <div className='articles'>
      <p className='title'>Description :</p>
      <p className='content'>{description}</p>
      <p className='title'>Équipements : </p>
      <ul>{listItems}</ul>
    </div>
  );
};

export default Articles;
