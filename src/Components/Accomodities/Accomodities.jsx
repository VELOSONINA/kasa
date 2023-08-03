import React from 'react';
import Carousel from './Carousel';
import Sections from './Sections';
import { useParams } from 'react-router-dom';
import ErrorPage from '../../Pages/ErrorPage';

function Accomodities({ logements }) {
  // Recevoir les données logements en tant que prop
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    // rediriger vers une page d'erreur
    return <ErrorPage />;
  }

  return (
    <div className='accomodities'>
      <Carousel logement={logement} />
      <Sections logement={logement} />
    </div>
  );
}

export default Accomodities;
