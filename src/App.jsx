import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Header from './Components/Header';
import Main from './Components/Main';
import Banner from './Components/Banner';
import Error from './Components/Error';
import Footer from './Components/Footer';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Banner />
      <Main></Main>
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
