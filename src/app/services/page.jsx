import React from "react";
import NewBanner from "../(Components)/NewBanner";
import AboutMarquee from "../(Components)/AboutMarquee";
import Journey from "../(Components)/Journey";
import ServicepageComponent from "./ServicepageComponent";
import Faq from '../services/(Components)/(Faq)/Faq';
import Footer from "../(Components)/Footer";
import Clients from '../services/(CommonComponent)/Clients';
import NewContact from "./(CommonComponent)/NewContact";

import FinalBanner from "./(CommonComponent)/FinalBanner";
import { dataSet1, dataSet2, dataSet3, testimonialsData, headingdata, faq, } from './data';
import ReviewCardContainer from "./(CommonComponent)/ReviewCardContainer";
const Services = () => {
  return (
    <div className="bg-[#00111A]">
      <NewBanner
        title={"Welcome to Possesive Panda - Your Premier IT Solution Partner"}
        desciption={"Possesive Panda strives to deliver top-tier IT services that empower your business to thrive in the digital age."}

      />
      <div className="hidden sm:block sm:mt-[1.042vw]">
        <AboutMarquee />
      </div>
      <div className="mt-[16.941vw] sm:mt-[5.25vw]">
        <Journey
          title="Possesive Panda Service Suite"
          subtitle="Doesn’t matter if your business scale; We Cater to Your Every Tech-Realated Needs"
          description="We tailor solutions according to clients’s expectations by providing a unique blend of onshore and offshore services. We offer a comprehensive range of IT services, covering every aspect, from software development and digital marketing to cloud services and beyond. From early-age startups to seasoned organizations in fintech, healthcare, travel, retail, and many more, we deliver the best services across the globe. "
        />
      </div>
      <div>
        <ServicepageComponent
          heading={dataSet1.heading}
          description={dataSet1.description}
          modelData={dataSet1.modelData}
        />

        <ServicepageComponent
          heading={dataSet2.heading}
          description={dataSet2.description}
          modelData={dataSet2.modelData}
        />

        <ServicepageComponent
          heading={dataSet3.heading}
          description={dataSet3.description}
          modelData={dataSet3.modelData}
        />
      </div>
      <NewContact />
      <Clients testimonialsData={testimonialsData} headingdata={headingdata} />
      <Faq faq={faq} />
      <Footer />
    </div>
  );
};

export default Services;
