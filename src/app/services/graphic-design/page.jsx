import React from "react";
import Faq from "../(Components)/(Faq)/Faq";
import Footer from "../../(Components)/Footer";
import NewBanner from "@/app/(Components)/NewBanner";
import Clients from "../(CommonComponent)/Clients";
import Platforms from "../(CommonComponent)/Platforms"; import Mobile from "../(CommonComponent)/Mobile";
import Why from "../(CommonComponent)/Why";
import OurServices from "../(CommonComponent)/OurSevices"
import CardList from '../(CommonComponent)/AgileApproach/CardList';
import ToolsTech from "../(CommonComponent)/ToolsTech";
import Marquee from "../../(homeComponent)/Marquee";
import IndustriesWe from "../(CommonComponent)/IndustriesWe";

import {
  faq,
  headingdata,
  testimonialsData,
  platformsData,
  mobileData,
  whyData,
  ourService,
  servicesData22,
  iconMapping1,
  cardList,
  cardData,
} from "./data";

import Head from 'next/head';
import Script from 'next/script';
import NewContact from "../(CommonComponent)/NewContact";

export const metadata = {
  title: 'Graphic Design Service | Custom Graphic Design Agency',
  description: 'possesive panda offers Engaging , Banner, Creative , Designs ,Logo a complete collection of graphics design services to showcase your identity. Working with our talented designers and developers, you can create eye-catching designs for your site that will help tell your business.',


};
const page = () => {
  return (
    <div className="bg-[#00111A]">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

      </Head>
      {/* Schema Markup for Breadcrumbs */}
      <Script id="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Graphic Design Service",
            "alternateName": "Custom Graphic Design Agency",
            "url": "https://possesivepanda.com/services/graphic-design",
            "logo": "https://possesivepanda.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav-logo.8084e162.png&w=384&q=75"
          }

                    `}
      </Script>

      <Script id="application/ld+json">
        {`
         {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How long does it take to complete a custom graphic design?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The time period varies depending on the size and complexity of your requirements. A bigger project with more elaborate designs will take more time than a smaller one that requires simpler design. Smaller projects can take as less as one day and larger ones can take as much as 1-2 weeks to complete."
    }
  }
,{
    "@type": "Question",
    "name": "What sets Possesive Panda apart from other graphic design services online?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Possesive Panda is a dynamic IT service provider that offers a wide range of benefits for our customers. These are flexible pricing, dedicated project management and tracking, customized and innovative solutions, high-priority data security, qualified experts, and more."
    }

  },{
    "@type": "Question",
    "name": "How much graphic design services cost?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The cost of completing a design depends on the level of its volume and intricacy. Possesive Panda gives you the option to set your budget frame for the project, keeping everything open to discussion to ensure maximum satisfaction."
    }
  },
  ,{
    "@type": "Question",
    "name": "How do graphic designers work?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Graphic designers ideate and conceptualize visual designs, digitally or traditionally, with the purpose of communicating ideas that inspire, motivate, inform or captivate the viewers. They develop and execute the design layout and structure for different applications such as advertisements, brochures, social media posts, magazines, reports and more"
    }
  },
  {
    "@type": "Question",
    "name": "What are graphic illustrations?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Illustrations are graphic design elements that are mostly hand-drawn by graphic illustrators usually on digital media itself, such that it is easier for printing and online marketing. Unlike other graphic design elements, illustrations are not pixelated and thus the best option for print media."
    }
  },
  {
    "@type": "Question",
    "name": "Why is graphic design important?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Graphic design is the most widely used medium of visual mass communication nowadays. This is because good graphic design not only captivates viewers, it also delivers information in a concise and simple way such that it is understandable to even laymen. Thus, graphics are the hub of visual communication in today’s digital age."
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
      <div>
        <OurServices iconMapping1={iconMapping1} servicesData22={servicesData22} heading={ourService.heading} subHeading={ourService.subHeading} />
      </div>
      <div>
        <Why
          mainHeading={whyData.mainHeading}
          subText1={whyData.subText1}
          subText2={whyData.subText2}
          thumbnail={whyData.thumbnail}
          listHeading={whyData.listHeading}
          titles={whyData.titles}
        />
      </div>
      <div>
        <Mobile
          heading={mobileData.heading}
          sideImage={mobileData.sideImage}
          paragraphs={mobileData.paragraphs}
        />
      </div>
      <div>
        <CardList cardData={cardData} cardList={cardList} />
      </div>
      <ToolsTech />
      <div>
        <h2 className="text-white text-[3.333vw] items-center text-center font-semibold leading-[123%] mb-[4.167vw] ">Our Clients</h2>
        <Marquee />
      </div>
      <Platforms platformsData={platformsData} />
      <IndustriesWe />
      <NewContact />
      <Clients testimonialsData={testimonialsData} headingdata={headingdata} />
      <Faq faq={faq} />
      <Footer />
    </div>
  );
};

export default page;
