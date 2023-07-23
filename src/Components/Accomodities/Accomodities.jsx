import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel';
import Sections from './Sections';
import logements from '../../assets/Data/logements.json';

function Accomodities() {
  // récuprer la valeur de l'id dans l'url
  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return;
  }
  return (
    <div className='accomodities'>
      <Carousel logement={logement} />
      <Sections logement={logement} />
    </div>
  );
}

export default Accomodities;
