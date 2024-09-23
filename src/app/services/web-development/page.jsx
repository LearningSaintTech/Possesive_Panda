import React from "react";
import NewBanner from "@/app/(Components)/NewBanner";
import Faq from "../(Components)/(Faq)/Faq";
import Footer from "../../(Components)/Footer";
import Growth from "../(CommonComponent)/Growth";
import OurSevices from '../(CommonComponent)/OurSevices';
import Marquee from "../../(homeComponent)/Marquee";
import ToolsTech from "../(CommonComponent)/ToolsTech";
import {
  faq,
  growthData,
  ourService,
  servicesData22,
  iconMapping1,
}
import Why from "../(CommonComponent)/Why";

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
>>>>>>> b18dbf48d3a5a043adae9d27431d63256cc4d590
} from "./data";

import Head from 'next/head';
import OurWeb from "../(CommonComponent)/OurWeb";
import OurEngagement from "./OurEngagement";


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
      <Solutions paragraphs={paragraphs} buttonData={buttonData} />
      <Faq faq={faq} />
      <Footer />
    </div>
  );
};

export default page;
