import React from 'react';
import Carousel from './Carousel';
import Sections from './Sections';
import { useParams, useNavigate } from 'react-router-dom';

function Accomodities({ logements }) {
  // Recevoir les données logements en tant que prop
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  const navigate = useNavigate();

  if (!logement) {
    // rediriger vers une page d'erreur
    navigate(<errorPage />);
    return null;
  }

  return (
    <div className='accomodities'>
      <Carousel logement={logement} />
      <Sections logement={logement} />
    </div>
  );
}

export default Accomodities;
