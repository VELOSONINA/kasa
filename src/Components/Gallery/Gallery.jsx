import React, { useState, useEffect } from 'react';
import Cards from './Cards';
//import logementsData from '../../assets/Data/logements.json';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [logements, setLogements] = useState([]);
  const navigate = useNavigate(); // useNavigate pour effectuer le changement de route

  useEffect(() => {
    // fonction asynchrone pour charger les données
    const fetchData = async () => {
      try {
        let response = await fetch('logements.json');
        let logementsResponse = await response.json();
        console.log(logementsResponse);
        // délai pour charger les données
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLogements(logementsResponse);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        navigate(''); // Redirection en cas d'erreur
      }
    };

    // Appel de la fonction fetchData pour charger les données
    fetchData();
  }, [navigate]);

  if (loading) {
    const numberDots = 5; // Nombre de points dans l'animation
    const dots = Array.from({ length: numberDots }, (_, index) => (
      <div key={index} className='dot'></div>
    ));

    return (
      <div className='gallery'>
        <div className='spinner'>
          <div className='dots-container'>{dots}</div>
        </div>
      </div>
    );
  }

  return (
    <div className='gallery'>
      {logements.map((logement) => (
        <Cards key={logement.id} logement={logement} />
      ))}
    </div>
  );
};

export default Gallery;
