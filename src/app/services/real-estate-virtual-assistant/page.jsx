import React from 'react'
import NewBanner from '@/app/(Components)/NewBanner';
import Footer from "../../(Components)/Footer";
import Script from 'next/script';

import {
  faq
} from './data'

import Faq from '../(Components)/(Faq)/Faq';
import Head from 'next/head';

export const metadata = {
  title: ' Real Estate Virtual Assistant Services | Hire Realtor Virtual Assistant',
  description: ` Boosting your real estate business is possible. Hire real estate virtual assistants available at a wide range of administrative support & services. Inquire now.`
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
      <NewBanner
        title={"Welcome to Possesive Panda We’re Possesive for Tech!"}
        desciption={"When it comes to providing IT services, we‘re Panda with Plan  Your Primer IT Service Provider."}
      />
      <Faq faq={faq} />
      <Footer />
    </div>
  )
}

export default page;