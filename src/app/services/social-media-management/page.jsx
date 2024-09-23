import React from "react";
import NewBanner from "@/app/(Components)/NewBanner";
import Footer from "../../(Components)/Footer";
import Models from "../(CommonComponent)/Models";
import Growth from "../(CommonComponent)/Growth";
import Why from "../(CommonComponent)/Why";
import Mobile from "../(CommonComponent)/Mobile";import Clients from '../(CommonComponent)/Clients';
import Solutions from '../(CommonComponent)/Solutions';
import OurSevices from '../(CommonComponent)/OurSevices';
import Marquee from "../../(homeComponent)/Marquee";

import {
  faq,
  growthData,
  whyData,
  mobileData,
  headingdata,
  testimonialsData,
  paragraphs,
  buttonData,
  ourService,
  servicesData22,
  iconMapping1,
} from "./data";

import Faq from "../(Components)/(Faq)/Faq";
import Script from 'next/script';

export const metadata = {
  title: 'Social Media Management Agency | Top Social Media Management Services',
  description: 'Possesive panda is the best social media management company . we offer top quality social media management services at low prices. contact us for effective social media strategies.',


};
const page = () => {
  return (
    <div className="bg-[#00111A]">

      <Script id="application/ld+json">
        {`
       {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Social Media Management Service",
  "alternateName": "Top Social Media Management Services",
  "url": "https://possesivepanda.com/services/social-media-management",
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
    "name": "What is Social Media Management?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Social Media Management is the process of creating content for social media platforms to promote your products and services to your target audience and engage website traffic."
    }
  },{
    "@type": "Question",
    "name": "Why is Social Media Management important?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Social media management is important because it helps with audience engagement, increases brand visibility, and drives traffic to your website. Social media helps reach an audience globally."
    }
  },{
    "@type": "Question",
    "name": "How do you measure the results of social media campaigns?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our team tracks key performance indicators such as engagement rates, reach, website traffic, and conversion. Using advanced tools, we provide detailed reports. We also continuously optimize your social media for optimal results."
    }
  },{
    "@type": "Question",
    "name": "Why should you choose us as your Social Media Management partner?",
    "acceptedAnswer": {
      "@type": "Answer",
  "text": "Possesive Panda focuses on quality over quantity. We bring bold and creative ideas and fresh perspectives to the table. Our dynamic team is dedicated to helping your brand grow."    }
  },{
    "@type": "Question",
    "name": "What is the role of a social media manager?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Role of a social media manager is very crucial as they have to manage a company's online presence across various social media platforms. Their responsibilities include strategy, creativity, maintaining the brand's image, and engaging with the audience."
    }
  },{
    "@type": "Question",
    "name": "What is needed for social media management?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Social Media Management requires a combination of strategic planning, content creation, and analytical skills."
    }
  }]
}


          `}
      </Script>

      <NewBanner
        title={"Welcome to Possesive Panda We’re Possesive for Tech!"}
        desciption={"When it comes to providing IT services, we‘re Panda with Plan  Your Primer IT Service Provider."}
      />
      <div>
        <OurSevices iconMapping1={iconMapping1} servicesData22={servicesData22} heading={ourService.heading} subHeading={ourService.subHeading} />
      </div>
      <div>
        <Growth heading={growthData.heading} description={growthData.description} cards={growthData.cards} />
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
      <Models />
      <Clients testimonialsData={testimonialsData} headingdata={headingdata} />
      <Solutions paragraphs={paragraphs} buttonData={buttonData} />

      <div className='mt-[10vw]'>
        <Marquee />
      </div>
      <Faq faq={faq} />
      <Footer />
    </div>
  );
};

export default page;
