import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Components/Banner';
import imageBanner from '../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';
import Accordion from '../Components/Accomodities/Accordion';
import confidentialiteData from '../assets/Data/confidentialite.json';

const About = () => {
  const navigate = useNavigate();
  const [accordions, setAccordions] = useState([]);

  useEffect(() => {
    // Une requête asynchrone pour récupérer les données depuis about.json ou API
    const fetchData = async () => {
      try {
        // les données importées depuis confidentialite.json
        setAccordions(
          confidentialiteData.map((item) => ({ id: item.id, isOpen: false }))
        );
      } catch (error) {
        console.error(error);
        // Effectuer le changement de route dynamique vers la page d'accueil en cas d'erreur
        navigate('/Home');
      }
    };

    fetchData();
  }, [navigate]);

  //fonction pour gérer l'ouverture et fermeture de l'accordéon
  const toggleAccordion = (id) => {
    setAccordions((prevAccordions) =>
      prevAccordions.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className='about-content'>
      <Banner imageUrl={imageBanner} />
      {confidentialiteData.map((item) => (
        <div key={item.id} className='about-accordion'>
          <Accordion
            title={item.title}
            isOpen={
              accordions.find((accordionItem) => accordionItem.id === item.id)
                ?.isOpen
            }
            toggleAccordion={() => toggleAccordion(item.id)}
          >
            <p>{item.content}</p>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default About;
