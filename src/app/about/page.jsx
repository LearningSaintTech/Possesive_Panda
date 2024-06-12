import React from "react";
import OurJourney from "./OurJourney";
import Brands from "./Brands";
import Accordion from "./(accordion)/Accordion";
import Certificate from "./Certificate";
import Banner from "../(Components)/Banner";

const page = () => {
  return (
    <div>
      <Banner
        title={"About Us"}
        desciption={"Professional IT Solution Service"}
        page={"About Us"}
      />
      <OurJourney />
      <Accordion />
      <Brands />
      <Certificate />
    </div>
  );
};

export default page;
