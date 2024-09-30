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
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does it take for PPC to start working?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PPC marketing gives immediate results, with budgets being decided and campaigns being run on a daily basis. PPC is for getting quick internet traffic to your website. However, getting actual results in terms of lead generation and conversions by testing and optimizing ad campaigns can take around 1-3 months."
                }
              },
              {
                "@type": "Question",
                "name": "Why Possesive Panda for PPC?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Possesive Panda is a dynamic IT service provider that offers a wide range of benefits for our customers. These are flexible pricing, dedicated project management and tracking, customized and innovative solutions, high-priority data security, qualified experts, and more."
                }
              },
              {
                "@type": "Question",
                "name": "Where do PPC ads appear?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PPC ads can appear on different platforms such as search engines, social media feeds, mobile apps, websites and more. The platform that is to be targeted for the ad campaign should be decided on the basis of your target audience and business objectives."
                }
              },
              {
                "@type": "Question",
                "name": "Why should PPC be used?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PPC ad campaigns help businesses expand their reach over a short term in a cost-effective manner. Though it is a temporary solution, PPC kick-starts the flow of internet traffic into your website, which can also facilitate organic traffic."
                }
              },
              {
                "@type": "Question",
                "name": "Do people click on online PPC ads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It's true that people do click on Google’s PPC ads. Millions of PPC ads are clicked every day."
                }
              },
              {
                "@type": "Question",
                "name": "How does PPC help my business to grow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PPC helps you to grow your business by connecting with the users who are clicking on the top search results, increasing sales by brand awareness across a variety of websites and platforms."
                }
              }
            ]
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
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://possesivepanda.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Digital Marketing",
                "item": "https://possesivepanda.com/services/digital-marketing"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "App Development",
                "item": "https://possesivepanda.com/services/mobile-app-development"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Virtual Assistant",
                "item": "https://possesivepanda.com/services/virtual-assistant"
              }
            ]
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