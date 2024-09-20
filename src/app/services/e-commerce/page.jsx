"use client"
import React from 'react';
import NewBanner from "../../(Components)/NewBanner";
import Faq from '../(Components)/(Faq)/Faq';
import Footer from "../../(Components)/Footer";
import IntroServices from '../(CommonComponent)/E-commerce/IntroServices';
import Customized from '../(CommonComponent)/E-commerce/Customized';
import Partner from '../(CommonComponent)/Partner';
import OurSevices from '../(CommonComponent)/OurSevices';
import Benefits from '../(CommonComponent)/Benefits';
import Industries from './Industries';

import {
  faq,
  introServicesData,
  servicesData,
  titleData,
} from './data';
import Head from 'next/head';
import Script from 'next/script';
import AboutMarquee from '@/app/(Components)/AboutMarquee';
import ToolsTech, { frameworks } from '../(CommonComponent)/ToolsTech';
import CardList from '../(CommonComponent)/AgileApproach/CardList';
import OurWeb from '../(CommonComponent)/OurWeb';

// export const metadata = {
//   title: 'Ecommerce Services | Ecommerce Management Solutions',
//   description: 'Possesive Panda a provider of e-commerce management services. we offer managed ecommerce services, infrastructure management, website development & customer support.',
//   alternates: {
//     canonical: 'https://www.possesivepanda.com/services/e-commerce'
//   },
//   openGraph: {
//     type: 'website',
//     url: 'https://www.possesivepanda.com/services/e-commerce',
//     title: 'Best B2B E-commerce Solutions Platform | E-commerce Website Management Service',
//     description: 'Finding the best B2B e-commerce solutions platform for seamless e-commerce business services. Enhance your business operations with Possesive Panda on top-notch tools and support.',
//     images: [
//       {
//         url: 'https://www.possesivepanda.com/path-to-image.jpg',
//         width: 800,
//         height: 600,
//         alt: 'E-commerce Service Banner',
//       },
//     ],
//   },

// };
const Page = () => {
  return (
    <div className="bg-[#00111A]">
      {/* <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonical} />

        
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />



      </Head> */}
      {/* Schema Markup for Breadcrumbs */}
      <Script id="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.possesivepanda.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "E-Commerce Service",
                "item": "https://www.possesivepanda.com/services/e-commerce"
              }
            ]
          }
          `}
      </Script>

      <Script id="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why do I need E-commerce solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "E-commerce solutions help in smooth-running of processes in setting up and managing an online store. They enable businesses to reach a wider audience and increase sales. They also help manage inventory, the payment process, and logistics."
                }
              },
              {
                "@type": "Question",
                "name": "Is your e-commerce target mobile-friendly?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Each site we have worked on has been mobile-friendly. With our unique plans, strategies, we assure that the site works on a variety of screen sizes, from cell phones and tablets to large desktops."
                }
              },
              {
                "@type": "Question",
                "name": "How will I follow up on my e-commerce website development project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We regularly update you on the status of the tasks. Also, a project manager will be appointed to assist you with all the details of your project."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to design and launch an e-commerce website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "This depends upon how big and complex the project is. Our aim is to provide quick and effective solutions while making sure the work is done on time. When we plan the project our project manager gives a clear deadline."
                }
              }
            ]
          }
          `}
      </Script>



      <NewBanner
        title={"Welcome to Possesive Panda We’re Possesive for Tech!"}
        desciption={"When it comes to providing IT services, we‘re Panda with Plan  Your Primer IT Service Provider."}
      />
      <OurSevices />
      <div>
        <IntroServices heading={introServicesData.heading} content={introServicesData.content} />
      </div>
      <Benefits />
      <div>
        <Partner heading={titleData.heading}  title={titleData.title} />
      </div>
      <Customized />
      <ToolsTech />
      {/* <CardList /> */}
      <Industries />
      <Faq faq={faq} />
      <Footer />
    </div>
  );
};

export default Page;
