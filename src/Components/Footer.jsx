import React from 'react';
import logos from '../assets/images/LOGO-footer.png';

const Footer = () => {
  return (
    <div className='footer'>
      <img src={logos} alt='logo footer' />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
