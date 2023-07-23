import React, { useState } from 'react';
import Accordion from './Accordion';

const Articles = (props) => {
  const { logement } = props;
  const { description, equipments } = logement;

  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);

  return (
    <div className='articles'>
      <div className='articles-content'>
        <Accordion
          title='Description'
          isOpen={isDescriptionOpen}
          toggleAccordion={() => setDescriptionOpen(!isDescriptionOpen)}
        >
          <p>{description}</p>
        </Accordion>
      </div>
      <div className='articles-content'>
        <Accordion
          title='Equipments'
          isOpen={isEquipmentsOpen}
          toggleAccordion={() => setEquipmentsOpen(!isEquipmentsOpen)}
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
