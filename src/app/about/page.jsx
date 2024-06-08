import React from "react";
import AboutBanner from "./AboutBanner";
import OurJourney from "./OurJourney";
import Brands from "./Brands";
import Accordion from "./(accordion)/Accordion";
import Certificate from "./Certificate";

const page = () => {
  return (
    <div>
      <AboutBanner />
      <OurJourney />
      <Accordion />
      <Brands />
      <Certificate />
    </div>
  );
};

export default page;
