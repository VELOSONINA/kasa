import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import ErrorPage from '../Components/ErrorPage';
import Accomodities from './Accomodities/Accomodities';

const RoutesTree = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/Accomodities' element={<Accomodities />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesTree;
