import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <div className='error404'>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/'>Retour à la page d'accueil</Link>
    </div>
  );
};

export default ErrorPage;
