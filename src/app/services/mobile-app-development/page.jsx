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
import { Script } from "@/lib/next-compat";

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
import { Head } from '@/lib/next-compat';
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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonical} />
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
      <Script
        id="mobile-app-development-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "Why do you need Mobile App Development Services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mobile app development services offer numerous benefits for businesses, including user experience, security, efficiency, competitive advantage, offline functionality, device integration, customization, scalability, module integrations, and software testing. A well-designed app provides a positive experience, enhances customer interaction, and boosts sales. It also allows for offline functionality, device integration, customization, and scalability, making it a valuable tool for businesses."
              }
            },{
              "@type": "Question",
              "name": "How can our Mobile App Development Services help your business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Possesive Panda delivers top-notch mobile app development services and solutions for your businesses in order to maximize your digital presence and efficiently drive success. We have a team of experienced developers for your mobile and web development for onshore and offshore services."
              }
            },{
              "@type": "Question",
              "name": "How long does it take to deliver a successful, fully functional app?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The intricacy of the design, features and functionalities, developer experience, and other factors all affect how long it will take to construct an application. Thus, get in touch with us to go over your timeframe and urgent needs."
              }
            },{
              "@type": "Question",
              "name": "How much does it cost to build a mobile app?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost of getting your mobile app built and ready depends on the structure, features, app development software and tools that are employed, and other such requirements of the application. Possesive Panda gives you the option to set your budget frame for the project, keeping everything open to discussion to ensure maximum satisfaction."
              }
            },{
              "@type": "Question",
              "name": "What are the different kinds of mobile apps?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "There are mostly three kinds of mobile applications, namely native apps, hybrid apps, and web apps. Native apps are specific to their operating system. Hybrid apps are ones that work across platforms with some of the features of native apps as well. However, they do not perform as well as native apps do. Web apps work on web browsers across platforms but are unable to offer hardware features that native or hybrid apps do."
              }
            },{
              "@type": "Question",
              "name": "How do I decide the type of mobile app for my company?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The type of application you should get developed for your company, along with its structure, features, app development software, etc., are decisions that come under the strategic planning of your app. Before the development process begins, the requirements of your company as well as market trends are analyzed and taken into consideration while planning the app so as to optimize it for maximum efficiency and competence."
              }
            },{
              "@type": "Question",
              "name": "What mobile app development solutions and services do we offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Generally we deal with all of the mobile app development services and solutions, but to name a few, you can refer to the list below: Mobile App Development Services Possesive Panda Offers: iOS Development , Android App Development, Cross-Platform App Development, eCommerce Mobile App Development , AR/VR App Development, IOT (Internet of Things) Integration, UI/UX Design for Mobile Apps , App Store Optimization (ASO), Mobile App Support and Maintenance. Mobile App Development Solutions Possesive Panda Offers: Custom Application Development , Application Modernization, Application Maintenance , Application Management , Application Integration ."
              }
            }]
          
          })
        }}
      />

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/", 
            "@type": "BreadcrumbList", 
            "itemListElement": [{
              "@type": "ListItem", 
              "position": 1, 
              "name": "Home",
              "item": "https://www.possesivepanda.com/"  
            },{
              "@type": "ListItem", 
              "position": 2, 
              "name": "Service",
              "item": "https://www.possesivepanda.com/services"  
            },{
              "@type": "ListItem", 
              "position": 3, 
              "name": "Mobile App Development",
              "item": "https://www.possesivepanda.com/services/mobile-app-development"  
            }]
          
          
          })
        }}
      />
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
