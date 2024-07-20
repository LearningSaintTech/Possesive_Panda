import Banner from "@/app/(Components)/Banner";
import React from "react";
import banner from "../../../assets/banners/digital-marketing-slider.png";
import Hero from "../(Components)/(Hero)/Hero";
import {
  DriveOrganisation,
  digitalMarketingServices,
  digitalMarketingStrategy,
  easyWorkProcess,
  faq,
  ourDigitalMarketingServices,
  top,
  whyWe,
} from "./data";
import Grow from "../(Components)/Grow";
import Types from "../(Components)/Types";
import Inventory from "../(Components)/Inventory";
import Benefits from "../(Components)/Benefits";
import Faq from "../(Components)/(Faq)/Faq";
import Strategy from "../(Components)/(Strategy)/Strategy";
import Services from "../(Components)/Services";
import WhySection from "./WhySection";
import Head from 'next/head';
import Script from 'next/script';

export const metadata = {
  title: 'Best Digital Marketing Services | PPC SEO Services Agency',
  description: 'Possesive panda is one of the best digital marketing company. We provide SEO, SMO, PPC , SMM & brand awareness. contact us today to learn more about what services can help your business grow.',
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
const page = () => {
  return (
    <div>
       <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        

       

      </Head>
      <Script id="application/ld+json">
          {`{
         "@context": "https://schema.org",
         "@type": "Organization",
         "name": "Digital Marketing Service",
        "alternateName": "PPC SEO Services Agency",
        "url": "https://possesivepanda.com/services/digital-marketing",
         "logo": "https://possesivepanda.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav-logo.8084e162.png&w=384&q=75"

          }`}
        </Script>
        <Script id="application/ld+json">
          {`
        {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Digital Marketing?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Digital marketing is also known as online marketing. We use marketing over online platforms and technologies to promote products, services, and brands. It includes strategies like social media marketing, content marketing, Search Engine Optimization, Pay-Per-Click, and email marketing."
    }
  },{
    "@type": "Question",
    "name": "Why is Digital Marketing important for my business?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Digital marketing is crucial as it enables us to reach a global customer base and engage with potential and existing customers at a cost-effective rate, allowing us to expand our business and target specific audiences efficiently."
    }
  },{
    "@type": "Question",
    "name": "How does Digital Marketing help my business grow?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Digital Marketing helps increase brand visibility, drive traffic to your website, and generate leads. It also helps increase brand awareness among valuable customers through engagement."
    }
  },{
    "@type": "Question",
    "name": "What are the components of Digital Marketing?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Digital Marketing components include Social Media Marketing, SEO (Search Engine Optimization), SEM (Search Engine Marketing), PPC ( Pay Per Click), Content Marketing, Email Marketing."
    }
  }]
}

          `}
        </Script>
      <Banner
        title={"Digital Marketing Service"}
        desciption={"For a wide and compelling global business reach"}
        page={"Digital Marketing"}
        image={banner}
      />
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Hero top={top} />
        <div className="mt-[4vw]">
          <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.083vw] font-semibold leading-[normal] tracking-[0.03rem]">
            Why We Are the Best Digital Marketing Company
          </h4>

          {whyWe.paragraph.map((para, key) => (
            <p
              className="text-[#212121] text-[3.363vw] sm:text-[1.25vw] leading-[normal] tracking-[0.015rem] w-full sm:w-[60vw] mb-[2vw] sm:mb-[1.2vw] sm:mt-[1.56vw]"
              key={key}
            >
              {para}
            </p>
          ))}
          <div className="py-[5.2vw] grid sm:grid-cols-4 gap-x-[1.25vw] gap-y-[6vw] sm:gap-y-[3.646vw]">
            {whyWe.cards.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
        </div>
        <div >
          <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.083vw] font-semibold leading-[normal] tracking-[0.03rem] w-[70vw] sm:w-[39vw] mt-9 sm:mt-[2vw]">
            Your Business Goals with Our Digital Marketing Strategy
          </h4>
          <div className="mt-[3.9vw] flex flex-col sm:flex-row gap-[2.3vw]">
            {digitalMarketingStrategy.map((item, key) => (
              <Types data={item} digital={true} key={key} />
            ))}
          </div>
        </div>
        <div className="my-[5.2vw]">
          <h4 className="text-[#212121] text-[4.364vw] sm:text-[2.083vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-[75vw] sm:w-[38vw] mt-12 sm:mt-0 sm:mb-0 mb-6">
            How Digital Marketing Services Drive Organization Growth
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-[5.2vw] gap-y-[9vw] sm:gap-y-[3vw] mt-[4.5vw]">
            {DriveOrganisation.map((item, key) => (
              <Inventory data={item} key={key} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.083vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[40vw] sm:mt-0 mt-8">
            Why Your Business Should Be Using Digital Marketing Services?
          </h4>
          <p className="text-[#212121] text-[3.363vw] sm:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[2.5vw] sm:mt-[1.8vw] mb-[4.5vw] sm:mb-[3.8vw]">
            Digital Marketing is essential for many compelling reasons:-
          </p>
          {/* <div className="grid grid-cols-2 sm:flex sm:flex-row gap-x-2 sm:gap-[1.875vw] sm:overflow-x-scroll no-scrollbar">
            {digitalMarketingServices.map((item, key) => (
              <Benefits data={item} key={key} />
            ))}
          </div> */}
          <WhySection />
        </div>
      </div>
      <div className="bg-[rgba(243,252,254,0.5)] py-[4.167vw] px-[5.2vw]">
        <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.083vw] font-semibold leading-[normal] tracking-[0.03rem] w-[60vw] sm:w-[37.6vw]">
          Our Digital Marketing Services
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3vw] sm:gap-x-[2.1vw] gap-y-[3vw] sm:gap-y-[2.6vw] pt-[5.2vw] pb-[5vw] sm:pb-[3vw]">
          {ourDigitalMarketingServices.map((item, key) => (
            <Services data={item} key={key} />
          ))}
        </div>
      </div>
      <div className="px-[5.2vw] ">
        <Strategy statergy={easyWorkProcess} />
      </div>
      <Faq faq={faq} />
    </div>
  );
};

export default page;
