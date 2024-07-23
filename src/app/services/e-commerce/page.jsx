import React from 'react';
import Banner from '@/app/(Components)/Banner';
import banner from "../../../assets/banners/e-commerce-slider.png";
import Hero from '../(Components)/(Hero)/Hero';
import Industries from './Industries';
import Benefits from '../(Components)/Benefits';
import Inventory from '../(Components)/Inventory';
import WhyUs from '../(Components)/WhyUs';
import Grow from '../(Components)/Grow';
import Process from '../(Components)/Process';
import Strategy from '../(Components)/(Strategy)/Strategy';
import Types from '../(Components)/Types';
import Faq from '../(Components)/(Faq)/Faq';
import FeatureCard from './FeatureCard';
import ProcessCard from './ProcessCard';
import Footer from "../../(Components)/Footer";

import {
  benefits,
  businessToGrow,
  typesOfECommerce,
  process,
  inventory,
  whyUs,
  top,
  statergy,
  faq
} from './data';
import Head from 'next/head';
import Script from 'next/script';

export const metadata = {
  title: 'Best B2B E-commerce Solutions Platform | E-commerce Website Management Service',
  description: 'Finding the best B2B e-commerce solutions platform for seamless e-commerce business services. Enhance your business operations with Possesive Panda on top-notch tools and support.',
  alternates: {
    canonical: 'https://www.possesivepanda.com/services/e-commerce'
  },
  openGraph: {
    type: 'website',
    url: 'https://www.possesivepanda.com/services/e-commerce',
    title: 'Best B2B E-commerce Solutions Platform | E-commerce Website Management Service',
    description: 'Finding the best B2B e-commerce solutions platform for seamless e-commerce business services. Enhance your business operations with Possesive Panda on top-notch tools and support.',
    images: [
      {
        url: 'https://www.possesivepanda.com/path-to-image.jpg',
        width: 800,
        height: 600,
        alt: 'E-commerce Service Banner',
      },
    ],
  },

};
const Page = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonical} />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />



      </Head>
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
      <Banner
        title={"E-Commerce Service"}
        desciption={"Holistic and integrated online commerce solutions"}
        page={"E-Commerce"}
        image={banner}
      />
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Hero top={top} />
        <div className="mt-[5.2vw]">
          <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.083vw] font-semibold leading-[normal] tracking-[0.03rem]">
            Types of E-Commerce:
          </h4>
          <div className="mt-[3.9vw] flex flex-col sm:flex-row gap-[2.3vw]">
            {typesOfECommerce.map((item, key) => (
              <Types data={item} key={key} />
            ))}
          </div>
        </div>
        <div className="mt-[5.2vw] ">
          <h5 className="text-[#212121] text-[4.364vw] sm:text-[2.083vw] font-semibold leading-[normal] tracking-[0.03rem]">
            Our Features
          </h5>
          <p className="text-[#212121] text-[2.95vw] sm:text-[1.25vw] leading-[normal] tracking-[0.02rem] w-fill sm:w-[56.5vw] pt-[1.3vw] mb-[4vw]">
            Our e-commerce service makes your online store look great and
            attractive, which helps drive sales. They are designed to attract
            more and more customers. We help in making your brand strong and
            visible.
          </p>
          <FeatureCard />
        </div>
      </div>
      <Industries />
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Strategy statergy={statergy} />
        <div className="mt-[5.2vw]">
          <h3 className="text-[#212121] text-[4.346vw] sm:text-[2.083vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[40vw]">
            Benefits of E-commerce Management software
          </h3>
          <div className="py-[5.2vw] grid grid-cols-2 sm:grid-cols-4 gap-[5vw] sm:gap-[2vw] ">
            {benefits.map((item, key) => (
              <Benefits data={item} key={key} />
            ))}
          </div>
        </div>
        <div className="pt-[5.2vw]">
          <h3 className="text-[#212121] text-[4.364vw] sm:text-[2.083vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[38vw]">
            How does e-commerce service help businesses to grow?
          </h3>
          <div className="py-[5.2vw] grid sm:grid-cols-4 gap-x-[1.25vw] gap-y-[6vw] sm:gap-y-[3.646vw]">
            {businessToGrow.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
        </div>
        <div className="pt-[5.2vw]">
          <h3 className="text-[#212121] text-[4.364vw] sm:text-[2.083vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] mt-[5vw] sm:mt-0">
            Our E-commerce process
          </h3>
          <p className="text-[#212121] text-[3.5vw] sm:text-[1.25vw] leading-[normal] tracking-[0.02rem] w-full sm:w-[45vw] pt-[1.3vw] mb-[6.6vw] sm:mb-[5.2vw]">
            We follow a sequence to build an e-commerce store offering the best
            features. Our transparent process helps clients to have all access
          </p>
          <ProcessCard process={process} />
        </div>
        <div className="pt-[5.2vw]">
          <h3 className="text-[#212121] text-[4.364vw] sm:text-[2.083vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[40vw] mt-[5vw] sm:mt-0">
            E-commerce inventory management software
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-[5.2vw] gap-y-[9vw] sm:gap-y-[3vw] mt-[5.2vw]">
            {inventory.map((item, key) => (
              <Inventory data={item} key={key} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#F3FCFE] bg-opacity-50 px-[5.2vw] py-[3.385vw] mt-[5vw] sm:mt-[3.3vw]">
        <h3 className="text-[#212121] text-[4.364vw] sm:text-[2.083vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[40vw]">
          Why choose an E-commerce solution service?
        </h3>
        <p className="text-[#212121] sm:text-[1.25vw] text-[3.636vw] leading-[normal] tracking-[0.02rem] w-full sm:w-[46vw] mt-[2.4vw]">
          Choosing the best E-commerce fulfillment service offers countless
          advantages for businesses looking to establish their online presence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-[1.9vw] gap-y-[7vw] sm:gap-x-[1.3vw] sm:gap-y-[3.125vw] mt-[3.125vw]">
          {whyUs.map((item, key) => (
            <WhyUs data={item} key={key} />
          ))}
        </div>
      </div>
      <Faq faq={faq} />
      <Footer />
    </div>
  );
};

export default Page;
