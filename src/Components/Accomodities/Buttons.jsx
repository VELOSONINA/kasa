import React from 'react';
// import Host from '../../assets/images/Host.png';

const Buttons = ({ imageHost }) => {
  return (
    <div className='titles'>
      <div className='titles-content'>
        <h1>Cozy loft the Canal Saint Martin</h1>
        <h2>Paris, île-de-France</h2>
        <div className='buttons-content'>
          <button>Cozy</button>
          <button>Canal</button>
          <button>Paris 10</button>
        </div>
      </div>
      <div className='icons-container'>
        <div className='content-icons'>
          <h3>
            Alexandre
            <span>Duma</span>
          </h3>
          {/* <img src={(imageHost = Host)} alt='' /> */}
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
  );
};

export default Buttons;
