import React from 'react'
import Faq from '../(Components)/(Faq)/Faq';
import Footer from "../../(Components)/Footer";
import Head from 'next/head';
import Script from 'next/script';
import HoverImageComp from '../(CommonComponent)/HoverImageComp';
import Clients from '../(CommonComponent)/Clients';
import FaqSection from "../(CommonComponent)/(FaqSection)/section"
import NewBanner from "../../(Components)/NewBanner";

import {

  faq,
  hoverImageData,
  headingdata,
  testimonialsData,
  smallfaqdata,
  smallfaqimage

} from "./data";

export const metadata = {
  title: "Best Virtual Assistant Services | Hire Freelancer Virtual Assistants",
  description: `Hire reliable virtual assistants for all your business needs! From administrative tasks to customer support, our skilled freelancers are ready to help you succeed.`
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

      <NewBanner
        title={"Welcome to Possesive Panda We’re Possesive for Tech!"}
        desciption={"When it comes to providing IT services, we‘re Panda with Plan  Your Primer IT Service Provider."}
      />
 <HoverImageComp hoverImageData={hoverImageData} />
      <Clients testimonialsData={testimonialsData} headingdata={headingdata} />
      <FaqSection smallfaqdata={smallfaqdata} smallfaqImg={smallfaqimage} heading="Choose Possesive Panda as Your Digital Success Partner "/>

      <Faq faq={faq} />
      <Footer />
    </div>
  )
}
export default page;