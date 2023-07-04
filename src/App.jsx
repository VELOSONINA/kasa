import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Error from './Components/Error';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Banner />
      <Footer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
