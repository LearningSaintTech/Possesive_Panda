import React from "react";
import Footer from "../../(Components)/Footer";
import Growth from "../(CommonComponent)/Growth";
import FaqSection from "../(CommonComponent)/(FaqSection)/section"
import OurSevices from '../(CommonComponent)/OurSevices';
import Faq from '../(Components)/(Faq)/Faq';
import ToolsTech from '../(CommonComponent)/ToolsTech';
import Head from 'next/head';
import Script from 'next/script';
import Solutions from "../(CommonComponent)/Solutions";
import Scrollbar from "../(CommonComponent)/Scrollbar";
import HoverImageComponent from "../(CommonComponent)/HoverImageComp";
import Clients from "../(CommonComponent)/Clients";
import {
  faq,
  growthData,
  paragraphs,
  buttonData,
  smallfaqdata,
  sectionContent,
  servicesData1,
  hoverImageData,
  testimonialsData,
  headingdata,
  iconMapping1,
  ourService,
  servicesData22,
  smallfaqimage
} from "./data";
import IndustriesWe from "../(CommonComponent)/IndustriesWe";
import NewContact from "../(CommonComponent)/NewContact";
import FinalBanner from "../(CommonComponent)/FinalBanner";
import ReviewCardContainer from "../(CommonComponent)/ReviewCardContainer";


export const metadata = {
  title: 'Digital Marketing Services | Best Digital Marketing Agency',
  description: ' Possesive Panda provides digital marketing services to companies across the U.S. & U.K. contact us today to learn more about what services can help your business grow.',
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
    <div className="bg-[#00111A]">
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

      <FinalBanner
        title={"Our Digital Marketing Services and Solutions"}
        desciption={"Elevate your business growth, derive sales, and boost ROI with our result-driven Digital Marketing Services and Solutions."}
        pointone={"Intuitive"}
        pointtwo={"Secure"}
        pointthree={"Scalable"}
        pointfour={"Tailored"}
      />

      <ReviewCardContainer/>
      <div className='sm:mt-[5.208vw] mt-[14.118vw] '>
        <OurSevices iconMapping1={iconMapping1} servicesData22={servicesData22} heading={ourService.heading} subHeading={ourService.subHeading} />
      </div>
      <div className='sm:mt-[5.729vw] mt-[14.118vw] '>
        <Solutions paragraphs={paragraphs} buttonData={buttonData} title="Digital Marketing Solutions we Develop" />
      </div>
      <div className='sm:mt-[5.729vw] mt-[7.5vw] '>
        <Growth heading={growthData.heading} description={growthData.description} cards={growthData.cards} />
      </div>
      <div className='sm:mt-[7.813vw] mt-[14.118vw]'>
        <FaqSection smallfaqdata={smallfaqdata} smallfaqImg={smallfaqimage} heading="Choose Possesive Panda as Your Digital Success Partner " />
      </div>
      <div className='sm:mt-[7.813vw] mt-[10.118vw]'>
        <Scrollbar servicesData1={servicesData1} sectionContent={sectionContent} />
      </div>
      <div className='sm:mt-[7.813vw] mt-[14.118vw] '>
        <ToolsTech />
      </div>
      <div className='sm:mt-[7.813vw] mt-[14.118vw] '>
        <IndustriesWe />
      </div>
      <div className="sm:mt-[5vw]  ">
        <HoverImageComponent hoverImageData={hoverImageData} />
      </div>
      <div className='sm:mt-[8vw] mt-[14.118vw]'>
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
