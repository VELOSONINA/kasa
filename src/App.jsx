import React from 'react';
import Header from './Components/Header';
import RoutesTree from './Components/RoutesTree';
import './App.scss';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='app-root'>
      <Header />
      <RoutesTree />
      <Footer />
    </div>
  );
}

export default App;
