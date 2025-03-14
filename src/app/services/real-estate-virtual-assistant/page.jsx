import React from 'react'
import Footer from "../../(Components)/Footer";
import Script from 'next/script';
import HoverImageComp from '../(CommonComponent)/HoverImageComp';
import Clients from '../(CommonComponent)/Clients';
import Mobile from '../(CommonComponent)/Mobile';
import OurSevices from '../(CommonComponent)/OurSevices';
import Marquee from "../../(homeComponent)/Marquee";
import WhyChoose from "./WhyChoose";
import TextAnimation from '../(CommonComponent)/TextAnimation'
import {
  faq,
  mobileData,
  testimonialsData,
  headingdata,
  hoverImageData,
  ourService,
  servicesData22,
  iconMapping1,
} from './data'
import FinalBanner from "../(CommonComponent)/FinalBanner";
import Faq from '../(Components)/(Faq)/Faq';
import Head from 'next/head';
import NewContact from '../(CommonComponent)/NewContact';
import ReviewCardContainer from '../(CommonComponent)/ReviewCardContainer';

export const metadata = {
  title: ' Real Estate Virtual Assistant Services | Hire Realtor Virtual Assistant',
  description: ` Boosting your real estate business is possible. Hire real estate virtual assistants available at a wide range of administrative support & services. Inquire now.`
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
        id="real-estate-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is a real estate Virtual Assistant?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A real estate virtual assistant is a professional who provides administrative, marketing, and operational support to real estate agents."
    }
  },{
    "@type": "Question",
    "name": "How good are your resources at closing deals?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You will get a professional who is are expert in their field. We know how to close deals."
    }
  },{
    "@type": "Question",
    "name": "What tasks will my real estate virtual assistant be handling?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Your real estate Virtual assistant can handle all the tasks you assign. These include listing properties, managing tasks, managing emails, scheduling appointments, lead generation, data entry, and more."
    }
  },{
    "@type": "Question",
    "name": "How do I hire the right real estate virtual assistant for my business?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We hire great employees who can work smartly and efficiently without much supervision. You do not have to deal with a hiring process with our virtual assistant."
    }
  },{
    "@type": "Question",
    "name": "Can a real estate virtual assistant help with marketing?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, virtual assistants can manage social media accounts, create marketing campaigns, and implement digital marketing strategies."
    }
  },{
    "@type": "Question",
    "name": "How do I check the performance of my real estate virtual assistant?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We regularly update you on the status of the tasks. Also, a project manager will be appointed to assist you with all the details of your project."
    }
  },{
    "@type": "Question",
    "name": "What are the real estate virtual assistant services Possesive Panda offers?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Possesive Panda delivers various real estate virtual assistant services. Here is the list: Real Estate , Research Lead Generation, Property Listings , Setup 3D Tours , Expenses Management , Appointment Scheduling, Manage Bids , Manage Social Media Presence."
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
              "name": "Real Estate Virtual Assistant",
              "item": "https://www.possesivepanda.com/services/real-estate-virtual-assistant"  
            }]
          
          })
        }}
      />
      <FinalBanner
        title={"Our Real Estate Virtual Assistant Services"}
        desciption={"Embark on the journey of your business success with Possesive Panda’s versatile virtual assistant services. We thrive on providing personal virtual assistants, helping your business grow"}
        pointone={"Intuitive"}
        pointtwo={"Secure"}
        pointthree={"Scalable"}
        pointfour={"Tailored"}
      />
      <ReviewCardContainer />
      <div className='sm:mt-[1.208vw] mt-[14.118vw] '>
        <OurSevices iconMapping1={iconMapping1} servicesData22={servicesData22} heading={ourService.heading} subHeading={ourService.subHeading} />
      </div>
      <div className='sm:mt-[6.25vw] mt-[14.118vw] '>
        <Mobile
          heading={mobileData.heading}
          sideImage={mobileData.sideImage}
          paragraphs={mobileData.paragraphs}
        />
      </div>
      <div className='sm:mt-[3.25vw] mt-[11.118vw] '>
        <HoverImageComp hoverImageData={hoverImageData} />
      </div>
      <div className='sm:mt-[6.25vw] mt-[14.118vw] '>
        <WhyChoose />
      </div>
      <div className='sm:mt-[7.125vw] mt-[7.059vw]'>
        <TextAnimation />
      </div>
      <div className='sm:mt-[6.25vw] mt-[14.118vw]'>
        <NewContact />
      </div>
      <div className='sm:block hidden mt-[5.125vw]'>
        <h2 className="text-white text-[3.333vw] items-center text-center font-normal leading-[123%] mb-[4.167vw] ">Our Clients</h2>
        <Marquee />
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