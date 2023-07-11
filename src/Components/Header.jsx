import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/LOGO.png';

const Header = () => {
  return (
    <nav className='nav-bar'>
      <img src={logo} alt='logo' className='nav-logo' />
      <ul>
        <NavLink to='/' className={(nav) => (nav.isActive ? 'nav-active' : '')}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to='/about'
          className={(nav) => (nav.isActive ? 'nav-active' : '')}
        >
          <li>A propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
