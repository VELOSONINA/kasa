import React, { useState } from 'react';
import Accordion from './Accordion';

const Articles = (props) => {
  const { logement } = props;
  const { description, equipments } = logement;

  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const [isOpenEquipments, setIsOpenEquipments] = useState(false);

  const toggleDescriptionAccordion = () => {
    setIsOpenDescription(!isOpenDescription);
  };

  const toggleEquipmentsAccordion = () => {
    setIsOpenEquipments(!isOpenEquipments);
  };

  return (
    <div className='articles'>
      <div className='articles-content'>
        <Accordion
          title='Description :'
          isOpen={isOpenDescription}
          toggleAccordion={toggleDescriptionAccordion}
        >
          <p>{description}</p>
        </Accordion>
      </div>
      <div className='articles-content'>
        <Accordion
          title='Équipements :'
          isOpen={isOpenEquipments}
          toggleAccordion={toggleEquipmentsAccordion}
        >
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Accordion>
      </div>
    </div>
  );
};

export default Articles;
