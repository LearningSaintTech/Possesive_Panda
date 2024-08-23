import React from 'react'
import Banner from "@/app/(Components)/Banner";
import banner from "../../../assets/banners/Real-Estate-slider.png"
import Hero from '../(Components)/(Hero)/Hero';
import Footer from "../../(Components)/Footer";
import Script from 'next/script';

import {
    top,
    ourRealEstate,
    benefits,
    faq
} from './data'
import OurFeatures from './OurFeatures';
import Services from '../(Components)/Services';
import BenefitCard from './BenefitCard';
import Faq from '../(Components)/(Faq)/Faq';
import Head from 'next/head';

export const metadata = {
    title:'Real Estate Virtual Assistant Services | Hire Realtor Virtual Assistant',
    description : `Boosting your real estate business is possible. Hire real estate virtual assistants available at a wide range of administrative support & services. Inquire now.`
  }
  const page = () => {
    return (
      <div>
  
        <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        </Head>
        <Script
        id="real-estate-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a real estate Virtual Assistant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A real estate virtual assistant is a professional who provides administrative, marketing, and operational support to real estate agents."
                }
              },
              {
                "@type": "Question",
                "name": "How good are your resources at closing deals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You will get a professional who is an expert in their field. We know how to close deals."
                }
              },
              {
                "@type": "Question",
                "name": "What tasks will my real estate virtual assistant be handling?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your real estate virtual assistant can handle all the tasks you assign. These include listing properties, managing tasks, managing emails, scheduling appointments, lead generation, data entry, and more."
                }
              },
              {
                "@type": "Question",
                "name": "How do I hire the right real estate virtual assistant for my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We hire great employees who can work smartly and efficiently without much supervision. With our virtual assistant, you do not have to deal with a hiring process."
                }
              },
              {
                "@type": "Question",
                "name": "Can a real estate virtual assistant help with marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, virtual assistants can manage social media accounts, create marketing campaigns, and implement digital marketing strategies."
                }
              },
              {
                "@type": "Question",
                "name": "How do I check the performance of my real estate virtual assistant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We regularly update you on the status of the tasks. Also, a project manager will be appointed to assist you with all the details of your project."
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
            <Banner
                title={"Real Estate Virtual Assistant"}
                desciption={"Hire A Real Estate Virtual Assistant"}
                page={"Real Estate"}
                image={banner}
            />
            <div className="px-[5.2vw] pt-[5.2vw]">
                <Hero top={top} />
                <div className="mt-[5.2vw] ">
                    <h5 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem]">
                        Our Features
                    </h5>
                    {/* <div className="flex flex-col sm:flex-row overflow-x-scroll py-[5.2vw] h-fit no-scrollbar">
            {howWeDevelop.map((feature, key) => (
              <Features data={feature} key={key} />
            ))}
          </div> */}
                    <OurFeatures />
                </div>
            </div>
            <div className="bg-[rgba(243,252,254,0.5)] py-[4.167vw] px-[5.2vw]">
                <h2 className="text-[#212121] text-[4.346vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[80vw] sm:w-[45vw]">
                    Our Real Estate Virtual Assistant Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3vw] sm:gap-x-[2.1vw] gap-y-[3vw] sm:gap-y-[2.6vw] pt-[5.2vw] pb-[5vw] sm:pb-[3vw]">
                    {ourRealEstate.map((item, key) => (
                        <Services data={item} key={key} />
                    ))}
                </div>
                <div className="pt-[5.2vw]">
                    <h2 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] mt-[5vw] sm:mt-0 pb-[4.167vw]">
                        Benefits of Real Estate Virtual Assistant
                    </h2>
                    <BenefitCard benefits={benefits} />
                </div>
            </div>
            <Faq faq={faq} />
            <Footer />
        </div>
    )
}

export default page;