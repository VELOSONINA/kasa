import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Accomodities from './Accomodities/Accomodities';
import ErrorPage from '../Pages/ErrorPage';

const RoutesTree = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/Accomodities/:id' element={<Accomodities />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesTree;
