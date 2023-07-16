import React from 'react';
import Banner from '../Components/Banner';
import imageBanner from '../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';

const About = () => {
  return (
    <div className='about-content'>
      <Banner imageUrl={imageBanner} />
    </div>
  );
};

export default About;
