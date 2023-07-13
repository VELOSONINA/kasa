import React from 'react';

const Descriptions = ({ Description, équipements }) => {
  return (
    <div className='descriptions-container'>
      <div className='descriptions'>
        <div className='description-title'>
          <p>Description : {Description}</p>
          <span class='material-symbols-outlined'>expand_less</span>
        </div>
        <p className='description-content'>détails</p>
      </div>
      <div className='equipements'>
        <div className='equipement-title'>
          <p>Equipements : {équipements}</p>
          <span class='material-symbols-outlined'>expand_less</span>
        </div>
        <p className='equipement-content'>détails</p>
      </div>
    </div>
  );
};

export default Descriptions;
