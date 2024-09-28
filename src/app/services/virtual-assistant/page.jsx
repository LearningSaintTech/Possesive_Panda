import React from 'react'
import Faq from '../(Components)/(Faq)/Faq';
import Footer from "../../(Components)/Footer";
import Head from 'next/head';
import Script from 'next/script';
import ServicesVa from './ServicesVa';
import NewBanner from '@/app/(Components)/NewBanner';
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

export const metadata = {
  title: "Best Virtual Assistant Services | Hire Freelancer Virtual Assistants",
  description: `Hire reliable virtual assistants for all your business needs! From administrative tasks to customer support, our skilled freelancers are ready to help you succeed.`
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
                "name": "What is a virtual assistant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A virtual assistant is a person who provides administrative, technical, or creative support to clients remotely."
                }
              },
              {
                "@type": "Question",
                "name": "What services can a virtual assistant provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Virtual assistants can handle a wide range of tasks, including email management, scheduling, data entry, customer service, social media management, content creation, research, and more."
                }
              },
              {
                "@type": "Question",
                "name": "What are the benefits of hiring virtual assistants?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hiring virtual assistants can save time, reduce operational costs, increase productivity, and provide access to specialized skills without needing to hire a full-time employee."
                }
              },
              {
                "@type": "Question",
                "name": "How do I ensure effective communication with my virtual assistants?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Use tools like email, instant messaging, and video calls. Set clear expectations."
                }
              },
              {
                "@type": "Question",
                "name": "How can I track the work of my virtual assistant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A dedicated project manager is provided to monitor progress and ensure tasks are completed on time."
                }
              },
              {
                "@type": "Question",
                "name": "How do I train a virtual assistant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Provide clear instructions, access to necessary tools, and continuous feedback."
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
        title={"Our Virtual Assistant Services"}
        desciption={"Embark on the journey of your business success with Possesive Panda’s versatile virtual assistant services. We thrive on providing personal virtual assistants, helping your business grow"}
        pointone={"Intuitive"}
        pointtwo={"Secure"}
        pointthree={"Scalable"}
        pointfour={"Tailored"}
      />
      <ReviewCardContainer/>
      <div className='sm:mt-[5.5vw] mt-[10vw] '>
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

      <div className='sm:mt-[6.5vw] mt-[12vw]'>
        <WhyChoose />
      </div>
      <div className='sm:block hidden mt-[7vw] '>
        <h2 className="text-white text-[3.333vw] items-center text-center font-semibold leading-[123%] mb-[4.167vw] ">Our Clients</h2>
        <Marquee />
      </div>
      <div className='sm:mt-[1vw] mt-[14.118vw]'>
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