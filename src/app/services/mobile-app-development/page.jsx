import NewBanner from "@/app/(Components)/NewBanner";
import React from "react";
import Footer from "../../(Components)/Footer";
import Leverage from './Leverage';
import Tech from './Tech';
import Iphone from "./Iphone";
import Strategies from '../(CommonComponent)/Strategies';
import Solutions from '../(CommonComponent)/Solutions';
import FaqSection from "../(CommonComponent)/(FaqSection)/section"
import Clients from '../(CommonComponent)/Clients';
import OurServices from "../(CommonComponent)/OurSevices"
import CardList from '../(CommonComponent)/AgileApproach/CardList';


import {
  faq,
  StrategyData,
  paragraphs,
  buttonData,
  smallfaqdata,
  headingdata,
  testimonialsData,

  ourService,
  servicesData22,
  iconMapping1,
  cardList,
  cardData,
} from "./data";

import Faq from "../(Components)/(Faq)/Faq";
import Head from 'next/head';
import { smallfaqimage } from './images';
import IndustriesWe from "../(CommonComponent)/IndustriesWe";

export const metadata = {
  title: ' Mobile App Development Company | Application Development Services ',
  description: 'Looking for a top mobile application development company offering expert Android/iOS app development software services. Boost your business with innovative and reliable app solutions.',
  alternates: {
    canonical: ' https://www.possesivepanda.com/services/mobile-app-development '
  },


};

const page = () => {
  return (
    <div className="bg-[#00111A]">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonical} />
      </Head>

      <NewBanner
        title={"Welcome to Possesive Panda We’re Possesive for Tech!"}
        desciption={"When it comes to providing IT services, we‘re Panda with Plan  Your Primer IT Service Provider."}
      />
      <div>
        <OurServices iconMapping1={iconMapping1} servicesData22={servicesData22} heading={ourService.heading} subHeading={ourService.subHeading} />
      </div>
      <Leverage />
      <Tech />
      <Iphone />
      <Strategies StrategyData={StrategyData} />
      <Solutions paragraphs={paragraphs} buttonData={buttonData} />
      <FaqSection smallfaqdata={smallfaqdata} smallfaqImg={smallfaqimage} heading="Choose Possesive Panda as Your Digital Success Partner " />
      <Clients testimonialsData={testimonialsData} headingdata={headingdata} />

      <IndustriesWe />
      <div>
      <CardList cardData={cardData} cardList={cardList} />
      </div>
      <Faq faq={faq} />
      <Footer />
    </div>
  );
};

export default page;
