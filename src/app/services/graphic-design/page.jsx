import React from "react";
import Banner from "@/app/(Components)/Banner";
import banner from "../../../assets/banners/graphic-design-slider.png";
import Hero from "../(Components)/(Hero)/Hero";
import Types from "../(Components)/Types";
import Services from "../(Components)/Services";
import Grow from "../(Components)/Grow";
import WhyUs from "../(Components)/WhyUs";
import Faq from "../(Components)/(Faq)/Faq";
import IconCard from "../(Components)/IconCard";
import {
  top,
  whyIs,
  customgraphicdesign,
  weProvide,
  weEnsure,
  graphicDesignSoftware,
  faq,
} from "./data";
import ServicesCard from "./ServicesCard";
import Head from 'next/head';
import Script from 'next/script';

export const metadata = {
  title: 'Graphic Design Service | Custom Graphic Design Agency',
  description: 'possesive panda offers Engaging , Banner, Creative , Designs ,Logo a complete collection of graphics design services to showcase your identity. Working with our talented designers and developers, you can create eye-catching designs for your site that will help tell your business.',
 
  
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
       {/* Schema Markup for Breadcrumbs */}
       <Script type="application/ld+json">
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

        <Script type="application/ld+json">
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
  },{
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
  }]
}

          `}
        </Script>
      <Banner
        title={"Graphic Design Service"}
        desciption={"Design that combines aesthetics with conciseness"}
        page={"Graphic Design"}
        image={banner}
      />
      <div className=" px-[5.2vw] pt-[5.2vw]">
        <Hero top={top} />

        <div className="mt-[5.2vw]">
          <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.083vw] font-semibold leading-[normal] tracking-[0.03rem]">
            Why is Graphic Design Important?
          </h4>
          <div className="mt-[3.9vw] flex flex-col sm:flex-row gap-[2.3vw]">
            {whyIs.map((item, key) => (
              <Types data={item} key={key} digital={true} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[rgba(243,252,254,0.5)] py-[4.167vw] px-[5.2vw]">
        <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.083vw] font-semibold leading-[normal] tracking-[0.03rem] w-[70vw] sm:w-[44vw] sm:mt-[2vw]">
          Why Choose Possesive Panda For Custom Graphic Design Services?
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3vw] sm:gap-x-[2.1vw] gap-y-[3vw] sm:gap-y-[2.6vw] pt-[5.2vw] pb-[5vw] sm:pb-[3vw]">
          {customgraphicdesign.map((item, key) => (
            <Services data={item} key={key} />
          ))}
        </div>
      </div>
      <div className="px-[5.2vw] pt-[5.2vw]">
        <h4 className="text-[#212121] text-[4.364vw] sm:text-[2.083vw] font-semibold leading-[normal] tracking-[0.03rem] w-[60vw] sm:w-[45vw]">
          Graphic Design Services We Provide
        </h4>
        {/* <div className="flex flex-col sm:flex-row overflow-x-scroll py-[5.2vw] h-fit no-scrollbar gap-[1.25vw]">
          {weProvide.map((item, key) => (
            <Grow data={item} key={key} />
          ))}
        </div> */}
        <ServicesCard />
      </div>
      <div className=" py-[3.65vw] px-[5.2vw] mt-[4vw]">
        <h4 className="text-[#212121] text-[4.364vw] sm:text-[2.083vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[38vw]">
          We Ensure You Get The Best Graphic Design Solutions
        </h4>
        <p className="text-[#212121] sm:text-[1.25vw] text-[3.636vw] leading-[normal] tracking-[0.02rem] w-full sm:w-[59.74vw] mt-[2.4vw] mb-10">
          Possesive Panda follows a standard yet dynamic process to deliver its
          services. It ensures that our solutions align with our clients’
          specific needs, while at the same time deliver top class services that
          adhere to our quality standards and customer-first approach.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[3.542vw] gap-y-[4.583vw] ">
          {weEnsure.map((item, key) => (
            <WhyUs data={item} key={key} graphic={true} />
          ))}
        </div>
      </div>
      <div className="mt-[5.2vw] bg-[#F3fcfe] bg-opacity-50 px-[5.2vw]">
        <h4 className="text-[#212121] text-[4.636vw] sm:text-[2.083vw] font-semibold leading-[normal] tracking-[0.03rem] w-full sm:w-[45vw] mb-[2.8vw] pt-[4vw] sm:pt-[1vw]">
          Mobile Application Development Services For Various Purposes
        </h4>
        <div className="sm:flex justify-center px-[2vw] hidden">
          {graphicDesignSoftware.row1.map((item, key) => (
            <IconCard data={item} key={key} image={true} />
          ))}
        </div>
        <div className="sm:flex justify-center items-center px-[4vw] hidden">
          {graphicDesignSoftware.row2.map((item, key) => (
            <IconCard data={item} key={key} image={true} />
          ))}
        </div>
        <div className="sm:hidden grid grid-cols-3 mx-auto">
          {graphicDesignSoftware.row3.map((item, key) => (
            <IconCard data={item} key={key} image={true} />
          ))}
        </div>
      </div>
      <Faq faq={faq} />
    </div>
  );
};

export default page;
