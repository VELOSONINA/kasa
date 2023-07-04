import React from 'react';

//Importer les outils React
import ReactDOM from 'react-dom/client';

//importer le premier composant : App
import App from './App';

//importer le style
import './App.scss';

//Créer un noeud racine react à partir de la div root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Injecter notre premier composant le noeud racine
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

