import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Header from './Components/Header';
import Error from './Components/Error';
import Banner from './Components/Banner';

const App = () => {
  return (
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
