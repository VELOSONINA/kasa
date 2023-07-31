import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/LOGO.png';

const Header = () => {
  return (
    <nav className='nav-bar'>
      <img src={logo} alt='logo' className='nav-logo' />
      <ul>
        <NavLink to='/'>
          <li>Accueil</li>
        </NavLink>
        <NavLink to='/about'>
          <li>A propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
