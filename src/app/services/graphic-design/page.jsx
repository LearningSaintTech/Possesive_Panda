import React from "react";
import Faq from "../(Components)/(Faq)/Faq";
import Footer from "../../(Components)/Footer";
import Clients from "../(CommonComponent)/Clients";
import Platforms from "../(CommonComponent)/Platforms";
import Mobile from "../(CommonComponent)/Mobile";
import Why from "../(CommonComponent)/Why";
import OurServices from "../(CommonComponent)/OurSevices"
import CardList from '../(CommonComponent)/(AgileApproach)/CardList';
import ToolsTech from "../(CommonComponent)/ToolsTech";
import Marquee from "../../(homeComponent)/Marquee";
import IndustriesWe from "../(CommonComponent)/IndustriesWe";
import Scrollbar2 from "../(CommonComponent)/Scrollbar2";
import FinalBanner from "../(CommonComponent)/FinalBanner";

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
  servicesData2,
  dynamicContent2

} from "./data";

import Head from 'next/head';
import Script from 'next/script';
import NewContact from "../(CommonComponent)/NewContact";
import ReviewCardContainer from "../(CommonComponent)/ReviewCardContainer";

export const metadata = {
  title: 'Graphic Design Service | Custom Graphic Design Agency',
  description: 'possesive panda offers Engaging , Banner, Creative , Designs ,Logo a complete collection of graphics design services to showcase your identity. Working with our talented designers and developers, you can create eye-catching designs for your site that will help tell your business.',


};
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
      {/* Schema Markup for Breadcrumbs */}
      <Script id="application/ld+json">
        {`
          {
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
    "name": "Services",
    "item": "https://www.possesivepanda.com/services"  
  },{
    "@type": "ListItem", 
    "position": 3, 
    "name": "Graphic Design Service",
    "item": "https://www.possesivepanda.com/services/graphic-design"  
  }]
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
      "text": "The time period varies depending on the size and complexity of your requirements. A bigger project with more elaborate designs will take more time than a smaller one that requires simpler design. Smaller projects can take as little as one day and larger ones can take as much as 1-2 weeks to complete."
    }
  },{
    "@type": "Question",
    "name": "What sets Possesive Panda apart from other graphic design services online?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Possesive Panda is a dynamic IT service provider that offers a wide range of benefits for our customers. These are flexible pricing, dedicated project management and tracking, customized and innovative solutions, high-priority data security, qualified experts, and more."
    }
  },{
    "@type": "Question",
    "name": "How much do graphic design services cost?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The cost of completing a design depends on the level of its volume and intricacy. Possesive Panda gives you the option to set your budget frame for the project, keeping everything open to discussion to ensure maximum satisfaction."
    }
  },{
    "@type": "Question",
    "name": "How do graphic designers work?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Graphic designers ideate and conceptualize visual designs, digitally or traditionally, with the purpose of communicating ideas that inspire, motivate, inform or captivate the viewers. They develop and execute the design layout and structure for different applications such as advertisements, brochures, social media posts, magazines, reports, and more."
    }
  },{
    "@type": "Question",
    "name": "What are graphic illustrations?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Illustrations are graphic design elements that are mostly hand-drawn by graphic illustrators, usually on digital media itself, such that it is easier for printing and online marketing. Unlike other graphic design elements, illustrations are not pixelated and thus the best option for print media."
    }
  },{
    "@type": "Question",
    "name": "Why is graphic design important?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Graphic design is the most widely used medium of visual mass communication nowadays. This is because good graphic design not only captivates viewers, it also delivers information in a concise and simple way such that it is understandable to even laymen. Thus, graphics are the hub of visual communication in today’s digital age."
    }
  },{
    "@type": "Question",
    "name": "What are the Graphic Design services and solutions Possesive Panda offers?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Possesive Panda Provides 360 Graphic Design Services for your business growth and success. Below is the list of graphic design services: Logo and Brand Designs, Advertising and Marketing Design , UI/UX Design, Web Design, Packaging Design , Typographic Design , Art and Illustration, Social Media Posts , Motion Graphic Design."
    }
  }]

}
          `}
      </Script>

      <FinalBanner
        title={"Our Graphic Design Services and Solutions"}
        desciption={"Unlock your brand’s true potential with Possesive Panda’s Graphic Design Services. We turn your visions into vibrant reality and elevate your identity with innovation and creativity."}
        pointone={"Intuitive"}
        pointtwo={"Secure"}
        pointthree={"Scalable"}
        pointfour={"Tailored"}
      />

      <ReviewCardContainer/>
      <div className='sm:mt-[2.208vw] mt-[14.118vw] '>
        <OurServices iconMapping1={iconMapping1} servicesData22={servicesData22} heading={ourService.heading} subHeading={ourService.subHeading} />
      </div>
      <div className='sm:mt-[6.25vw] mt-[14.118vw] '>
        <Why
          mainHeading={whyData.mainHeading}
          subText1={whyData.subText1}
          subText2={whyData.subText2}
          thumbnail={whyData.thumbnail}
          listHeading={whyData.listHeading}
          titles={whyData.titles}
        />
      </div>
      <div className='sm:mt-[6.25vw] mt-[14.118vw] '>
        <Mobile
          heading={mobileData.heading}
          sideImage={mobileData.sideImage}
          paragraphs={mobileData.paragraphs}
        />
      </div>
      <div className='sm:mt-[1.208vw] mt-[14.118vw] '>
        <CardList cardData={cardData} cardList={cardList} />
      </div>
      <div className='sm:mt-[3.208vw] mt-[14.118vw] '>
        <ToolsTech />
      </div>
      <div className='sm:block hidden mt-[4vw] '>
        <h3 className="text-white text-[3.333vw] items-center text-center font-normal leading-[123%] mb-[4.167vw] ">Our Clients</h3>
        <Marquee />
      </div>
      <div className="mt-[14vw] sm:mt-[5vw] ">
        <Platforms platformsData={platformsData} />
      </div>
      <div className='sm:mt-[6.25vw] mt-[14.118vw] '>
        <IndustriesWe />
      </div>
      <div className='sm:mt-[6.25vw] mt-[5vw] '>
        <Scrollbar2 servicesData2={servicesData2} dynamicContent2={dynamicContent2} />
      </div>
      <div className='sm:mt-[2vw] mt-[14.118vw] '>
        <NewContact />
      </div>
      <div className='sm:mt-[7.813vw] sm:mb-0 mb-[15vw] mt-[14.118vw]'>
        <Clients testimonialsData={testimonialsData} headingdata={headingdata} />
      </div>
      <Faq faq={faq} />
      <Footer />
    </div>
  );
};

export default page;
