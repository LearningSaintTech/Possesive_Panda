import React from 'react';
import AboutBanner from './AboutBanner';
import OurJourney from './OurJourney';
import Brands from './Brands';
import Accordion from './(accordion)/Accordion';

const page = () => {
  return (
    <div>
      <AboutBanner/>
      <OurJourney/>
      <Accordion/>
      <Brands/>
     
    </div>
    
  );
}

export default page;
