import React from 'react';
import Banner from '../Components/Banner';
import Gallery from '../Components/Gallery/Gallery';
import imageBanner from '../assets/images/photo.png';

const Home = () => {
  return (
    <div>
      <Banner imageUrl={imageBanner}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <Gallery />
    </div>
  );
};

export default Home;
