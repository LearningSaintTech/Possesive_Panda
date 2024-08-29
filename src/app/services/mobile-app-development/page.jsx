import Banner from "@/app/(Components)/Banner";
import React from "react";
import banner from "../../../assets/banners/mobile-app-development-slider.png";
import Hero from "../(Components)/(Hero)/Hero";
import Footer from "../../(Components)/Footer";

import {
  androidApp,
  faq,
  iosApp,
  leverage,
  ourMadeServices,
  servicesForVariousPurpose,
  tools,
  top,
} from "./data";
import Types from "../(Components)/Types";
import Grow from "../(Components)/Grow";
import IconCard from "../(Components)/IconCard";
import Tools from "./Tools";
import WhyUs from "../(Components)/WhyUs";
import Faq from "../(Components)/(Faq)/Faq";
import Comparison from "./Comparision";
import Head from 'next/head';

export const metadata = {
  title: ' Mobile App Development Company | Application Development Services ',
  description: 'Looking for a top mobile application development company offering expert Android/iOS app development software services. Boost your business with innovative and reliable app solutions.',
  alternates: {
    canonical: ' https://www.possesivepanda.com/services/mobile-app-development '
  },
  
  
};

const page = () => {
  return (
    <div>
       <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonical} />

       

       

      </Head>
      <Banner
        title={"Mobile App Development Service"}
        desciption={"For the convenience of smooth & intuitive mobile apps"}
        page={"Mobile App Development"}
        image={banner}
      />
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Hero top={top} />
        <div className="mt-[4vw]">
          <h2 className="text-[#212121] text-[4.346vw]  sm:text-[2.083vw] font-semibold leading-[normal] tracking-[0.03rem] w-[60vw] sm:w-[30vw]">
            Our Mobile Application Development Service
          </h2>
          <p className="text-[#212121]  text-[3.636vw] sm:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[1.8vw] mb-[3.8vw] w-full sm:w-[59.74vw]">
            Mobile app developers use different programming languages according
            to the custom needs of their client in order to write the code that
            runs the applications. Mobile App Development takes various forms,
            the major ones as follows:
          </p>
          <div className="mt-[3.9vw] flex flex-col sm:flex-row gap-[2.3vw]">
            {ourMadeServices.map((item, key) => (
              <Types data={item} key={key} digital={true} />
            ))}
          </div>
        </div>
        <div className="mt-[5.2vw]">
          <h2 className="text-[#212121] text-[4.346vw] sm:text-[2.083vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[40vw] sm:mt-0 mt-8">
            Android Application Development For All Android Platforms
          </h2>
          <div className="py-[5.2vw] grid sm:grid-cols-4 gap-x-[1.25vw] gap-y-[6vw] sm:gap-y-[3.646vw]">
            {androidApp.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
        </div>
        <div className="mt-[5.2vw]">
          <h2 className="text-[#212121] text-[4.346vw] sm:text-[2.083vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[45vw] sm:mt-0 mt-8">
            IOS Application Development For All Apple Platforms
          </h2>
          <div className="py-[5.2vw] grid sm:grid-cols-4 gap-x-[1.25vw] gap-y-[6vw] sm:gap-y-[3.646vw]">
            {iosApp.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[5.2vw] bg-[#F3fcfe] bg-opacity-50 px-[5.2vw] hidden sm:block">
        <h2 className="text-[#212121] text-[2.083vw] font-semibold leading-[normal] tracking-[0.03rem] w-[45vw] mb-[4vw] pt-[1vw] ">
          Mobile Application Development Services For Various Purposes
        </h2>
        <div className="grid grid-cols-4 border-b-2 border-[#D9D9D9]">
          {servicesForVariousPurpose.row1.map((item, key) => (
            <IconCard data={item} key={key} />
          ))}
        </div>
        <div className="flex justify-center">
          {servicesForVariousPurpose.row2.map((item, key) => (
            <IconCard data={item} key={key} />
          ))}
        </div>
        <div className="grid grid-cols-4 border-t-2 border-[#D9D9D9]">
          {servicesForVariousPurpose.row3.map((item, key) => (
            <IconCard data={item} key={key} />
          ))}
        </div>
      </div>
      <Comparison />
      <div className="bg-[#F3FCFE] bg-opacity-50 py-[7.6vw] px-[5.2vw] mt-[7vw] hidden sm:block">
        <h4 className="text-[#212121] text-[2.083vw] font-semibold leading-[normal] tracking-[0.03rem] w-[55vw] mb-[2.2vw] text-center mx-auto">
          Our Mobile Application Development Tools and Frameworks
        </h4>
        <div>
          <Tools data={tools} />
        </div>
      </div>
      <div className="bg-[#F3FCFE] bg-opacity-50 py-[3.65vw] px-[5.2vw] mt-[5.2vw]">
        <h2 className="text-[#212121] text-[4.346vw] sm:text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[45vw] mb-[2.2vw]">
          Why Leverage Mobile App Development Services?
        </h2>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-y-[7.8vw] sm:gap-x-[2.1vw]">
          {leverage.map((item, key) => (
            <WhyUs data={item} key={key} />
          ))}
        </div>
      </div>
      <Faq faq={faq} />
      <Footer/>
    </div>
  );
};

export default page;
