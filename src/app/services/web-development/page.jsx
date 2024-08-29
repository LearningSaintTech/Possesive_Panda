import React from "react";
import Banner from "@/app/(Components)/Banner";
import banner from "../../../assets/banners/website-development-slider.png";
import Features from "../(Components)/Features";
import Services from "../(Components)/Services";
import Faq from "../(Components)/(Faq)/Faq";
import Grow from "../(Components)/Grow";
import Footer from "../../(Components)/Footer";

import {
  top,
  leverage,
  howWeDevelop,
  topwebdevelopment,
  frameworks,
  faq,
} from "./data";
import Hero from "../(Components)/(Hero)/Hero";
import Difference from "./Difference";
import Frameworks from "./Frameworks";
import WhyCard from "./WhyCard";
import WebsitesCard from "./WebsitesCard";
import Head from 'next/head';
export const metadata = {
  title: 'Website Development Service Company | Top Website Design Services',
  description: ' Leading website development service company providing top custom website design services. Elevate your online presence with our expert and innovative web solutions.',
 
  
};
const page = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

     
       

      </Head>
      <Banner
        title={"Web Development Service"}
        desciption={"Glitch-free and user optimized web services"}
        page={"Web Development"}
        image={banner}
      />
      <div className=" px-[5.2vw] pt-[5.2vw]">
        <Hero top={top} />

        <div className="mt-[4vw]">
          <h2 className="text-[#212121] text-[4.364vw] sm:text-[2.083vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[38vw] ">
            Why Leverage Web Development & Design Services?
          </h2>
          { <div className="sm:mt-[2vw] flex flex-col sm:flex-row sm:overflow-x-scroll py-[5.2vw] h-fit no-scrollbar gap-x-[1.25vw] gap-y-[6vw] sm:gap-y-[3.646vw]">
            {leverage.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div> }
          <WhyCard />
        </div>

        <div className="mt-[5.2vw] ">
          <h4 className="text-[#212121] text-[4.364vw] sm:text-[2.083vw] font-semibold leading-[normal] tracking-[0.03rem]">
            Find Out How We Develop Top Quality Websites For You
          </h4>
          <p className="text-[#212121] text-[3.363vw] sm:text-[1.25vw] leading-[normal] tracking-[0.02rem] w-fill sm:w-[56.5vw] pt-[1.3vw] mb-[4vw]">
            Possesive Panda follows a standard yet dynamic process to deliver
            its services. It ensures that our solutions align with our clients’
            specific needs, while at the same time deliver top class services
            that adhere to our quality standards and customer-first approach.
          </p>
          {/* <div className="flex flex-col sm:flex-row overflow-x-scroll py-[5.2vw] h-fit no-scrollbar">
            {howWeDevelop.map((feature, key) => (
              <Features data={feature} key={key} />
            ))}
          </div> */}
          <WebsitesCard />
        </div>
      </div>
      <Difference />
      <div className="bg-[rgba(243,252,254,0.5)] py-[4.167vw] px-[5.2vw]">
        <h3 className="text-[#212121] text-[4.346vw] sm:text-[2.083vw] font-semibold leading-[normal] tracking-[0.03rem] w-[80vw] sm:w-[45vw]">
          Top Web Development & Design Solutions By Possesive Panda
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3vw] sm:gap-x-[2.1vw] gap-y-[3vw] sm:gap-y-[2.6vw] pt-[5.2vw] pb-[5vw] sm:pb-[3vw]">
          {topwebdevelopment.map((item, key) => (
            <Services data={item} key={key} />
          ))}
        </div>
      </div>
      <div className="bg-[#F3FCFE] bg-opacity-50 py-[7.6vw] px-[5.2vw]">
        <h4 className="text-[#212121] text-[2.083vw] font-semibold leading-[normal] tracking-[0.03rem] w-[45vw] mb-[2.2vw] text-center mx-auto">
          Web Development & Design Software we use
        </h4>
        <div>
          <Frameworks data={frameworks} />
        </div>
      </div>
      <Faq faq={faq} />
      <Footer/>
    </div>
  );
};

export default page;
