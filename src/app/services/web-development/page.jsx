import Head from 'next/head';
import React from "react";
import NewBanner from "@/app/(Components)/NewBanner";
import Faq from "../(Components)/(Faq)/Faq";
import Footer from "../../(Components)/Footer";
import Growth from "../(CommonComponent)/Growth";
import OurSevices from '../(CommonComponent)/OurSevices';
import Marquee from "../../(homeComponent)/Marquee";
import ToolsTech from "../(CommonComponent)/ToolsTech";
import {
  ourService,
  servicesData22,
  iconMapping1,
} from "./data";
import Why from '../(CommonComponent)/Why';
import Solutions from '../(CommonComponent)/Solutions';
import Clients from '../(CommonComponent)/Clients';

import {
  faq,
  growthData,
  whyData,
  paragraphs,
  buttonData,
  headingdata,
  testimonialsData,
} from "./data";

<<<<<<< HEAD
import Head from 'next/head';
import NewContact from "../(CommonComponent)/NewContact";
=======
import OurWeb from "../(CommonComponent)/OurWeb";
import OurEngagement from "./OurEngagement";
>>>>>>> 03682dbfac78c55bc9a05eb5c7268e1e1fe5a7e6


export const metadata = {
  title: 'Website Development Service Company | Top Website Design Services',
  description: ' Leading website development service company providing top custom website design services. Elevate your online presence with our expert and innovative web solutions.',


};
const page = () => {
  return (
    <div className="bg-[#00111A]">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <NewBanner
        title={"Welcome to Possesive Panda We’re Possesive for Tech!"}
        desciption={"When it comes to providing IT services, we‘re Panda with Plan  Your Primer IT Service Provider."}
      />
      <div>
        <OurSevices iconMapping1={iconMapping1} servicesData22={servicesData22} heading={ourService.heading} subHeading={ourService.subHeading} />
      </div>

      <div>
        <Growth heading={growthData.heading} description={growthData.description} cards={growthData.cards} />
      </div>
      <div className='mt-[10vw]'>
        <Marquee />
      </div>
      <OurWeb/>
      <ToolsTech/>
      <OurEngagement/>


      <div>
        <Why
          mainHeading={whyData.mainHeading}
          subText1={whyData.subText1}
          subText2={whyData.subText2}
          thumbnail={whyData.thumbnail}
          listHeading={whyData.listHeading}
          titles={whyData.titles}
        />
      </div>
      <Clients testimonialsData={testimonialsData} headingdata={headingdata} />
      <NewContact/>
      <Solutions paragraphs={paragraphs} buttonData={buttonData} />
      <Faq faq={faq} />
      <Footer />
    </div>
  );
};

export default page;
