import React from 'react';
import Banner from '../Components/Banner';
import imageBanner from '../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';
import Descriptions from '../Components/Accomodities/Descriptions';

const About = () => {
  return (
    <div className='about-content'>
      <Banner imageUrl={imageBanner} />
      <div className='container'>
        <Descriptions />
      </div>
    </div>
  );
};

export default About;
