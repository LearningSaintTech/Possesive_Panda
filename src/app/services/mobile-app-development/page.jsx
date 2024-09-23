import NewBanner from "@/app/(Components)/NewBanner";
import React from "react";
import Footer from "../../(Components)/Footer";
import Leverage from './Leverage';
import Tech from './Tech';
import Iphone from "./Iphone";



import {
  faq,
} from "./data";

import Faq from "../(Components)/(Faq)/Faq";
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

      <Leverage />
      <Tech />
      <Iphone />
      <Faq faq={faq} />
      <Footer/>
    </div>
  );
};

export default page;
