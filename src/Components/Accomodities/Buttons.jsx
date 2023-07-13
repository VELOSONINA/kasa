import React from 'react';
import Descriptions from './Descriptions';

const Buttons = () => {
  return (
    <div className='container-buttons'>
      <div className='titles'>
        <div className='titles-content'>
          <h1>Cozy loft the Canal Saint Martin</h1>
          <h2>Paris, île-de-France</h2>
          <div className='buttons-content'>
            <p>Cozy</p>
            <p>Canal</p>
            <p>Paris 10</p>
          </div>
        </div>
        <div className='icons-container'>
          <div className='content-icons'>
            <h3>
              Alexandre
              <span>Duma</span>
            </h3>
            <div className='circle-icon'></div>
          </div>
          <div className='stars'>
            <span class='material-symbols-outlined'>star</span>
            <span class='material-symbols-outlined'>star</span>
            <span class='material-symbols-outlined'>star</span>
            <span class='material-symbols-outlined'>star</span>
            <span class='material-symbols-outlined'>star</span>
          </div>
        </div>
      </div>
      <div className='descriptions-container'>
        <Descriptions />
      </div>
    </div>
  );
};

export default Buttons;
