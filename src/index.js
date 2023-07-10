import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
//Importer les outils React
import ReactDOM from 'react-dom/client';

import './Styles/Variables.scss';
//importer le premier composant : App
import App from './App';

//Créer un noeud racine react à partir de la div root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Injecter notre premier composant le noeud racine
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

