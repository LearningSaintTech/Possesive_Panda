import React from 'react'
import Faq from '../(Components)/(Faq)/Faq';
import Footer from "../../(Components)/Footer";
import Head from 'next/head';
import Script from 'next/script';
import ServicesVa from './ServicesVa';
import HoverImageComp from '../(CommonComponent)/HoverImageComp';
import Clients from '../(CommonComponent)/Clients';
import FaqSection from "../(CommonComponent)/(FaqSection)/section"
import Marquee from '@/app/(homeComponent)/Marquee';
import Hoverdiv from '../(CommonComponent)/Hoverdiv';
import WhyChoose from "../real-estate-virtual-assistant/WhyChoose";
import FinalBanner from "../(CommonComponent)/FinalBanner";


import {

  faq,
  hoverImageData,
  headingdata,
  testimonialsData,
  smallfaqdata,
  smallfaqimage,
  hoverDivData,

} from "./data";
import NewContact from '../(CommonComponent)/NewContact';
import ReviewCardContainer from '../(CommonComponent)/ReviewCardContainer';
import TextAnimation from '../(CommonComponent)/TextAnimation';

export const metadata = {
  title: "Best Virtual Assistant Services | Hire Freelancer Virtual Assistants",
  description: `Hire reliable virtual assistants for all your business needs! From administrative tasks to customer support, our skilled freelancers are ready to help you succeed.`
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
    "name": "Who is a Virtual Assistant?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A virtual assistant is an individual who specializes in a particular skillset and offers the services of relevant businesses and industries remotely."
    }
  },{
    "@type": "Question",
    "name": "Which services can a virtual assistant provide?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You just name it. Virtual assistants come with many benefits and also industry expertise offering services like administrative operations, email management, client handling, meeting management, real estate services, healthcare services, digital marketing, eCommerce support, customer support, and many more."
    }
  },{
    "@type": "Question",
    "name": "What are the benefits of hiring virtual assistants?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Hiring virtual assistants can save time, reduce operational costs, increase productivity, and provide access to specialized skills without needing to hire a full-time employee."
    }
  },{
    "@type": "Question",
    "name": "How do I ensure effective communication with my virtual assistants?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Use tools like email, instant messaging, and video calls. Set clear expectations."
    }
  },{
    "@type": "Question",
    "name": "How can I track the work of my virtual assistant?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A dedicated project manager is provided to monitor progress and ensure tasks are completed on time."
    }
  },{
    "@type": "Question",
    "name": "How do I train a virtual assistant?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Provide clear instructions, access to necessary tools, and continuous feedback."
    }
  },{
    "@type": "Question",
    "name": "What are the prices for virtual assistants provided by Possesive Panda?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Depending on the processes or services you want to hire, we assure dynamic pricing at best. If you want to know more, kindly click on the circle."
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
    "name": "Virtual Assistant Service",
    "item": "https://www.possesivepanda.com/services/virtual-assistant"  
  }]

          })
        }}
      />

      <FinalBanner
        title={"Our Virtual Assistant Services"}
        desciption={"Embark on the journey of your business success with Possesive Panda’s versatile virtual assistant services. We thrive on providing personal virtual assistants, helping your business grow"}
        pointone={"Intuitive"}
        pointtwo={"Secure"}
        pointthree={"Scalable"}
        pointfour={"Tailored"}
      />
      <ReviewCardContainer />
      <div className='sm:mt-[2.5vw] mt-[10vw] '>
        <ServicesVa />
      </div>
      <div className='sm:mt-[7.5vw] mt-[14.118vw]'>
        <FaqSection smallfaqdata={smallfaqdata} smallfaqImg={smallfaqimage} heading="Choose Possesive Panda as Your Digital Success Partner " />
      </div>
      <div className='sm:mt-[6.5vw] mt-[14.118vw]'>
        <Hoverdiv
          heading={hoverDivData.heading}
          paragraph={hoverDivData.paragraph}
          modelData={hoverDivData.models}
        />
      </div>
      <div className='sm:mt-[6.5vw] mt-[14.118vw]'>
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