import React from 'react'
import Faq from '../(Components)/(Faq)/Faq';
import Footer from "../../(Components)/Footer";
import Head from 'next/head';
import Script from 'next/script';
import BulbAnimation from '../(CommonComponent)/BulbAnimation';
import Partner from '../(CommonComponent)/Partner';
import HoverImageComp from '../(CommonComponent)/HoverImageComp';
import OurSevices from '../(CommonComponent)/OurSevices';
import CardList from '../(CommonComponent)/(AgileApproach)/CardList';

import Strategies from '../(CommonComponent)/Strategies';
import Clients from '../(CommonComponent)/Clients';

import {
  faq,
  titleData,
  hoverImageData,
  StrategyData,
  headingdata,
  testimonialsData,

  iconMapping1,
  ourService,
  servicesData22,
  cardList,
  cardData,
} from "./data";
import NewContact from '../(CommonComponent)/NewContact';
import FinalBanner from "../(CommonComponent)/FinalBanner";
import ReviewCardContainer from '../(CommonComponent)/ReviewCardContainer';

export const metadata = {
  title: "Best PPC Agency | Pay Per Click Marketing Services",
  description: ` Looking for a professional and reliable PPC Service for your Business or Services? Possesive Panda. Generate traffic and increase conversion. Partner with us for expert PPC advertising services.`
}
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
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How long does it take for PPC to start working?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "PPC marketing gives immediate results, with budgets being decided and campaigns being run on a daily basis. PPC is for getting quick internet traffic to your website. However, getting actual results in terms of lead generation and conversions by testing and optimizing ad campaigns can take around 1-3 months."
    }
  },{
    "@type": "Question",
    "name": "Why to choose Possesive Panda for your PPC success?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Possesive Panda is a dynamic IT service provider that offers a wide range of benefits for our customers. These are flexible pricing, dedicated project management and tracking, customized and innovative solutions, high-priority data security, qualified experts, and more."
    }
  },{
    "@type": "Question",
    "name": "Why should PPC be used?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "PPC ad campaigns help businesses expand their reach over a short term in a cost-effective manner. Though it is a temporary solution, PPC kick-starts the flow of internet traffic into your website, which can also facilitate organic traffic."
    }
  },{
    "@type": "Question",
    "name": "What are the pay-per-click (PPC) services offered by Possesive Panda?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To make your brand stand out and increase sales and conversions, we have a great suite of pay-per-click (PPC) services. To name a few, below is the list: Pay-per-click (PPC) Audit, Social Media Advertising, Landing Page Creation , Conversion Rate Optimization (CRO), PPC Management, Remarketing , A/B Testing , Gmail Sponsored Promotions (GSP), Youtube Ads."
    }
  },{
    "@type": "Question",
    "name": "How does PPC help my business to grow?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "PPC helps you to grow your business by connecting with the users who are clicking on the top search results, increasing sales by brand awareness across a variety of websites and platforms."
    }
  },{
    "@type": "Question",
    "name": "Do PPC ads for targeted audiences or customers really work?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, pay-per-click advertising always works for your business, if done correctly. You should have PPC experts for running marketing campaigns and researching your potential customers. Typically, there are many trends for PPC advertising that you have to follow in order to maximize the number of clicks and conversions."
    }
  },{
    "@type": "Question",
    "name": "Which is better, SEO or PPC?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "PPC and SEO offer advantages and disadvantages. They are both reliable sources of traffic. Consider your needs and business environment while making your decision between SEO and PPC."
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
    "name": "Pay Per Click Service",
    "item": "https://www.possesivepanda.com/services/pay-per-click"  
  }]

          })
        }}
      />

      <FinalBanner
        title={"Our Pay-Per-Click (PPC) Services"}
        desciption={"Amplify your traffic, leads, and conversion rate with Possesive Panda’s exceptional Pay-Per-Click (PPC) management services"}
        pointone={"Intuitive"}
        pointtwo={"Secure"}
        pointthree={"Scalable"}
        pointfour={"Tailored"}
      />

      <ReviewCardContainer/>
      <div className='sm:mt-[1.208vw] mt-[14.118vw] '>
        <OurSevices iconMapping1={iconMapping1} servicesData22={servicesData22} heading={ourService.heading} subHeading={ourService.subHeading} />
      </div>
      <div className='sm:mt-[5.208vw] mt-[14.118vw] '>
        <HoverImageComp hoverImageData={hoverImageData} />
      </div>
      <div className='sm:mt-[12vw] mt-[14.118vw] '>
        <BulbAnimation />
      </div>
      <div className='sm:mt-[4.5vw] mt-[6vw] '>
        <Strategies StrategyData={StrategyData} title="Why to invest in pay-per-click advertising?  " />
      </div>
      <div className='sm:mt-[6.8vw] mt-[14.118vw] '>
        <Partner heading={titleData.heading} heading2={titleData.heading2} title={titleData.title} />
      </div>
      <div className='sm:mt-[6.5vw] mt-[14.118vw] '>
        <CardList cardData={cardData} cardList={cardList} />
      </div>
      <div className='sm:mt-[8vw] mt-[14.118vw]'>
        <NewContact />
      </div>
      <div className='sm:mt-[5.813vw] sm:mb-0 mb-[15vw] mt-[14.118vw]'>
        <Clients testimonialsData={testimonialsData} headingdata={headingdata} />
      </div>
      <Faq faq={faq} />
      <Footer />
    </div>
  )
}

export default page;