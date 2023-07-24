import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import logementsData from '../../assets/Data/logements.json';

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    // fonction asynchrone pour charger les données
    const fetchData = async () => {
      try {
        // délai pour charger les données
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLogements(logementsData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    // Appel de la fonction fetchData pour charger les données
    fetchData();
  }, []);

  if (loading) {
    return <div className='spinner' />;
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
