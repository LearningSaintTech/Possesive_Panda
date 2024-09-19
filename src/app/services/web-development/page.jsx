import React from "react";
import NewBanner from "@/app/(Components)/NewBanner";
import Faq from "../(Components)/(Faq)/Faq";
import Footer from "../../(Components)/Footer";

import {
  faq,
} from "./data";

import Head from 'next/head';


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

      <Faq faq={faq} />
      <Footer/>
    </div>
  );
};

export default page;
