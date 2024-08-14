import React from 'react'
import Banner from '@/app/(Components)/Banner';
import banner from '../../../assets/banners/Virtual-Assistant-slider.png';
import Hero from '../(Components)/(Hero)/Hero';
import Grow from '../(Components)/Grow';
import Services from '../(Components)/Services';
import Faq from '../(Components)/(Faq)/Faq';
import Footer from "../../(Components)/Footer";
import Head from 'next/head';
import Script from 'next/script';

import {
  top,
  benefits,
  services,
  faq
} from "./data";
import Feature from './Feautre';
export const metadata = {
  title:"Best Virtual Assistant Services | Hire Freelancer Virtual Assistants",
  description : `Hire reliable virtual assistants for all your business needs! From administrative tasks to customer support, our skilled freelancers are ready to help you succeed.`
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
      <Banner
        title={"Virtual Assistant"}
        desciption={"Expert Virtual Assistants for Seamless Business Success"}
        page={"Virtual Assistant"}
      image={banner}
      />
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Hero top={top} />

        <div className="mt-[5.2vw]">
          <h2 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[45vw]">
            Benefits of Hiring a Virtual Assistant
          </h2>
          <div className="py-[5.2vw] grid sm:grid-cols-4 gap-x-[1.25vw] gap-y-[6vw] sm:gap-y-[3.646vw]">
            {benefits.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
        </div>
        <div className="mt-[5.2vw] ">
          <h5 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem]">
            Our Features
          </h5>
          <Feature />
        </div>
      </div>
      <div className="bg-[rgba(243,252,254,0.5)] py-[4.167vw] px-[5.2vw]">
        <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[80vw] sm:w-[45vw]">
          Services We Provide
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3vw] sm:gap-x-[2.1vw] gap-y-[3vw] sm:gap-y-[2.6vw] pt-[5.2vw] pb-[5vw] sm:pb-[3vw]">
          {services.map((item, key) => (
            <Services data={item} key={key} />
          ))}
        </div>
      </div>
      <Faq faq={faq} />
      <Footer/>
    </div>
  )
}
export default page;