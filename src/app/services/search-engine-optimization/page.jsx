import React from 'react'
import NewBanner from '@/app/(Components)/NewBanner';
import Faq from '../(Components)/(Faq)/Faq';
import Footer from "../../(Components)/Footer";
import Head from 'next/head';
import Script from 'next/script';
import Improve from './Improve';
import Why from '../(CommonComponent)/Why';
import HoverImageComp from '../(CommonComponent)/HoverImageComp';
import Clients from '../(CommonComponent)/Clients';
import Solutions from '../(CommonComponent)/Solutions';
import OurSevices from '../(CommonComponent)/OurSevices';
import ToolTech from '../(CommonComponent)/ToolsTech';
import Marquee from "../../(homeComponent)/Marquee";
import CardList from '../(CommonComponent)/(AgileApproach)/CardList';
import {
  faq,
  whyData,
  paragraphs,
  buttonData,
  hoverImageData,
  headingdata,
  testimonialsData,
  ourService,
  servicesData22,
  iconMapping1,
  cardList,
  cardData,
} from "./data";
import FinalBanner from "../(CommonComponent)/FinalBanner";
import Industries from './Industries';
import NewContact from '../(CommonComponent)/NewContact';
import ReviewCardContainer from '../(CommonComponent)/ReviewCardContainer';

export const metadata = {
  title: "Best SEO Services | SEO Service Provider Company",
  description: `Looking For SEO Service for your Business & Service ?
Possesive Panda is the right place for improving your website's visibility, driving organic traffic, and increasing quality leads.Contact us today.
`
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

      <Script id="application/ld+json">
        {`
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How does SEO work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It works by optimizing various aspects of a website and content to improve its visibility and ranking. During this process, the website's keywords, content, links, user experience, and technical aspects are optimized."
      }
    },{
      "@type": "Question",
      "name": "What benefits will SEO provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When your website is on top, you can expect more traffic and queries from your potential clients, allowing you to do business with them."
      }
    },{
      "@type": "Question",
      "name": "What is the difference between on-page and off-page SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On-page SEO refers to changes that are made directly to your website. On the other hand, off-page SEO refers to activities performed on other websites to benefit your website."
      }
    },{
      "@type": "Question",
      "name": "How long does SEO take to show results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With consistent effort and strategic optimization, significant improvements in rankings and traffic can be seen within 4-6 months."
      }
    },{
      "@type": "Question",
      "name": "How do I measure SEO growth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO success can be measured by measuring organic traffic growth, keyword rankings, and conversion rates. Tools like Google Analytics and Search Console provide valuable insights into these metrics."
      }
    },{
      "@type": "Question",
      "name": "What are backlinks in SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Backlinks are also called inbound links because they represent another website's traffic coming to your website. The quality and quantity of your backlinks can help you rank higher in search engines such as Google and Bing."
      }
    },{
      "@type": "Question",
      "name": "Why has my organic traffic dropped?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Poor-quality content, outdated information, or content that doesn't match user intent can lead to a drop in organic traffic as search engines prioritize high-quality, valuable content."
      }
    }]
  }
  `}
      </Script>


      <Script id="application/ld+json">
        {`{
            "@context": "https://schema.org/", 
            "@type": "BreadcrumbList", 
            "itemListElement": [{
              "@type": "ListItem", 
              "position": 1, 
              "name": "Home",
              "item": "https://possesivepanda.com/"  
            },{
              "@type": "ListItem", 
              "position": 2, 
              "name": "Digital Marketing",
              "item": "https://possesivepanda.com/services/digital-marketing"  
            },{
              "@type": "ListItem", 
              "position": 3, 
              "name": "App Development",
              "item": "https://possesivepanda.com/services/mobile-app-development"  
            },{
              "@type": "ListItem", 
              "position": 4, 
              "name": "Virtual Assistant",
              "item": "https://possesivepanda.com/services/virtual-assistant"  
            }]
          }
          `}
      </Script>

      <FinalBanner
        title={"Our Search Engine Optimization Services and Solutions"}
        desciption={"Augment your website performance, increase traffic, and rank better with Possesive Panda’s top-notch, personalized SEO services and solutions"}
        pointone={"Intuitive"}
        pointtwo={"Secure"}
        pointthree={"Scalable"}
        pointfour={"Tailored"}
      />
      <ReviewCardContainer/>
      <div className='sm:mt-[5.208vw] mt-[14.118vw] '>
        <OurSevices iconMapping1={iconMapping1} servicesData22={servicesData22} heading={ourService.heading} subHeading={ourService.subHeading} />
      </div>
      <div className='sm:mt-[6.5vw] mt-[14.118vw] '>
        <HoverImageComp hoverImageData={hoverImageData} />
      </div>
      <div className='sm:mt-[6.5vw] mt-[14.118vw] '>
        <Improve />
      </div>
      <div className='sm:mt-[6.5vw] mt-[14.118vw] '>
        <Solutions paragraphs={paragraphs} buttonData={buttonData} title="SEO Solutions we Develop" />
      </div>
      <div className='sm:mt-[6.5vw] mt-[9vw] '>
        <ToolTech />
      </div>
      <div className='sm:mt-[6.5vw] mt-[14vw] '>
        <Why
          mainHeading={whyData.mainHeading}
          subText1={whyData.subText1}
          subText2={whyData.subText2}
          thumbnail={whyData.thumbnail}
          listHeading={whyData.listHeading}
          titles={whyData.titles}
        />
      </div>
      <div className='sm:block hidden mt-[7vw] mb-[6.25vw]'>
        <h2 className="text-white text-[3.333vw] items-center text-center font-semibold leading-[123%] mb-[4.167vw] ">Our Clients</h2>
        <Marquee />
      </div>
      <div className='sm:mt-[2vw] mt-[14.118vw] '>
        <CardList cardData={cardData} cardList={cardList} />
      </div>
      <div className='sm:mt-[6.5vw] mt-[14vw] '>
        <Industries />
      </div>
      <div className='sm:mt-[8vw] mt-[14.118vw]'>
        <NewContact />
      </div>
      <div className='sm:mt-[7.813vw] sm:mb-0 mb-[15vw] mt-[14.118vw]'>
        <Clients testimonialsData={testimonialsData} headingdata={headingdata} />
      </div>
      <Faq faq={faq} />
      <Footer />
    </div>
  )
}

export default page;