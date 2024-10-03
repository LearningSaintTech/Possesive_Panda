import Head from 'next/head';
import React from "react";
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
import FinalBanner from "../(CommonComponent)/FinalBanner";
import NewContact from "../(CommonComponent)/NewContact";
import OurWeb from "../(CommonComponent)/OurWeb";
import OurEngagement from "./OurEngagement";
import ReviewCardContainer from '../(CommonComponent)/ReviewCardContainer';


export const metadata = {
  title: 'Website Development Service Company | Top Website Design Services',
  description: ' Leading website development service company providing top custom website design services. Elevate your online presence with our expert and innovative web solutions.',


};
const page = () => {
  return (
    <div className="bg-[#00111A]">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script
    dangerouslySetInnerHTML={{
      __html: `
        (function(w,d,t,r,u) {
          var f,n,i;
          w[u]=w[u]||[],f=function() {
            var o={ti:"187153115",enableAutoSpaTracking:true};
            o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
          },
          n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function() {
            var s=this.readyState;
            s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
          },
          i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
        })(window,document,"script","//bat.bing.com/bat.js","uetq");
      `,
    }}
  />
      </head>

      <FinalBanner
        title={"Our Web App Development Services and Solutions"}
        desciption={"With Possesive Panda’s Web Application Development Services, unleash your business’s true potential and enable an unbeatable customer experience."}
        pointone={"Intuitive"}
        pointtwo={"Secure"}
        pointthree={"Scalable"}
        pointfour={"Tailored"}
      />
      <ReviewCardContainer />
      <div className='sm:mt-[2.208vw] mt-[14.118vw] '>
        <OurSevices iconMapping1={iconMapping1} servicesData22={servicesData22} heading={ourService.heading} subHeading={ourService.subHeading} />
      </div>
      <div className='sm:mt-[5.729vw] mt-[14.118vw] '>
        <Solutions paragraphs={paragraphs} buttonData={buttonData} title="Web App Development Solutions " />
      </div>
      <div className='sm:block hidden mt-[2vw] '>
        <h3 className="text-white text-[3.333vw] items-center text-center font-normal leading-[123%] mb-[4.167vw] ">Our Clients</h3>
        <Marquee />
      </div>
      <div className='mt-0 sm:mt-[5.813vw]'>
        <Why
          mainHeading={whyData.mainHeading}
          subText1={whyData.subText1}
          subText2={whyData.subText2}
          thumbnail={whyData.thumbnail}
          listHeading={whyData.listHeading}
          titles={whyData.titles}
        />
      </div>
      <div className='sm:mt-[6.25vw] mt-[14.118vw] '>
        <OurWeb />
      </div>
      <div className='sm:mt-[3.25vw] mt-[14.118vw] '>
        <Growth heading={growthData.heading} description={growthData.description} cards={growthData.cards} />
      </div>
      <div>
        <OurEngagement />
      </div>
      <ToolsTech />
      <div className='sm:mt-[8vw] mt-[14.118vw]'>
        <NewContact />
      </div>
      <div className='sm:mt-[4.813vw] sm:mb-0 mb-[15vw] mt-[14.118vw]'>
        <Clients testimonialsData={testimonialsData} headingdata={headingdata} />
      </div>
      <Faq faq={faq} />
      <Footer />
    </div>
  );
};

export default page;
