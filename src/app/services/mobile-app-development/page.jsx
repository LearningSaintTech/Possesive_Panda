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
import CardList from './Madp/CardList';
import ToolsTech from '../(CommonComponent)/ToolsTech';

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
  smallfaqimage

} from "./data";
import FinalBanner from "../(CommonComponent)/FinalBanner";
import Faq from "../(Components)/(Faq)/Faq";
import Head from 'next/head';
import IndustriesWe from "../(CommonComponent)/IndustriesWe";
import NewContact from "../(CommonComponent)/NewContact";
import ReviewCardContainer from "../(CommonComponent)/ReviewCardContainer";

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

      <FinalBanner
        title={"Our Mobile App Development Services and Solutions"}
        desciption={"With Possesive Panda, thrive on custom Mobile App Development that captivates your audience, drives engagement, and turns your vision into a vibrant reality"}
        pointone={"Intuitive"}
        pointtwo={"Secure"}
        pointthree={"Scalable"}
        pointfour={"Tailored"}
      />

      <ReviewCardContainer/>
      <div className='sm:mt-[1.208vw] mt-[14.118vw] '>
        <OurServices iconMapping1={iconMapping1} servicesData22={servicesData22} heading={ourService.heading} subHeading={ourService.subHeading} />
      </div>
      <div className="sm:mt-[6.25vw] mt-[14.118vw]  ">
        <Strategies StrategyData={StrategyData} title="Benefits of Mobile App Development Services" />
      </div>
      <div className="sm:mt-[7.813vw] mt-[14.118vw]  ">
        <Leverage />
      </div>
      <div className="sm:mt-[7.813vw] mt-[14.118vw]  ">
        <Solutions paragraphs={paragraphs} buttonData={buttonData} title="Mobile App Solutions We Develop" />
      </div>
      <div>
        <Iphone />
      </div>
      <div>
        <IndustriesWe />
      </div>
      <div className='sm:mt-[7.813vw] mt-[14vw]'>
        <FaqSection smallfaqdata={smallfaqdata} smallfaqImg={smallfaqimage} heading="Choose Us as Your Mobile App Development Partner " />
      </div>
      <div className='sm:mt-[5.208vw] mt-[14.118vw] '>
        <CardList cardData={cardData} cardList={cardList} />
      </div>
      <div className='sm:mt-[4.25vw] mt-[14.118vw] '>
        <ToolsTech />
      </div>
      <div className='sm:mt-[6.25vw] mt-[14.118vw] '>
        <Tech />
      </div>
      <div className='sm:mt-[7.813vw] mt-[14.118vw] '>
        <NewContact />
      </div>
      <div className='sm:mt-[7.813vw] sm:mb-0 mb-[15vw] mt-[14.118vw]'>
        <Clients testimonialsData={testimonialsData} headingdata={headingdata} />
      </div>

      <Faq faq={faq} />
      <Footer />
    </div>
  );
};

export default page;
