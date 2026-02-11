import React from "react";
import Footer from "../../(Components)/Footer";
import Growth from "../(CommonComponent)/Growth";
import FaqSection from "../(CommonComponent)/(FaqSection)/section"
import OurSevices from '../(CommonComponent)/OurSevices';
import Faq from '../(Components)/(Faq)/Faq';
import ToolsTech from '../(CommonComponent)/ToolsTech';
import { Head, Script } from '@/lib/next-compat';
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

      <Script id="application/ld+json">
        {`{
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
    "name": "Service",
    "item": "https://www.possesivepanda.com/services"  
  },{
    "@type": "ListItem", 
    "position": 3, 
    "name": "Digital Marketing Service",
    "item": "https://www.possesivepanda.com/services/digital-marketing"  
  }]

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
      "text": "Digital marketing refers to all parts and actions of marketing an organization, business, or brand via digital channels on the internet. Digital marketing strategies and approaches are designed to reach specific online audiences via a wide range of internet-connected devices. Digital marketing comprises search engine optimization (e.g., Google and Bing), social media visibility and interaction, email marketing communications, website design and development, and integrated applications for connecting and engaging with prospects and consumers."
    }
  },{
    "@type": "Question",
    "name": "Why is Digital Marketing important for my business?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Digital marketing offers you the opportunity to captivate new customers and clients by strategies and marketing campaigns. You can monitor and enhance your ROI (s) and market campaign and be sure that you are investing your money and time for the right customer or audience."
    }
  },{
    "@type": "Question",
    "name": "How does Digital Marketing help my business grow?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Digital marketing directly correlates with business growth by enabling your businesses to have brand value. It also helps increase brand awareness among valuable customers through engagement."
    }
  },{
    "@type": "Question",
    "name": "What services and solutions does Possesive Panda provide?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Ultimately, we offer a plethora of digital marketing services and solutions, to name a few. Below is the list: Search Engine Optimization (SEO), Social Media Marketing (SMM), Copywriting & Content Marketing, Conversion Rate Optimization (CRO), App Store Management (ASO), Email Marketing, Influencer Marketing, Website Design & Development, Online Reputation Management, Youtube Optimization and Video Marketing, Affiliate Marketing , Web Hosting. And we also provide outstanding digital marketing solutions to make your business at the forefront of your industry. Below is the list: Brand Building, Content and Web Personalization, B2B Marketing, Analytics and Data Insights, Voice Search Optimization."
    }
  },{
    "@type": "Question",
    "name": "What are the latest trends in digital marketing?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Current trends include video marketing, influencer marketing, personalized marketing, content marketing, and the use of chatbots."
    }
  },{
    "@type": "Question",
    "name": "Why to choose Possesive Panda for your Digital Marketing Success?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Possesive Panda is one of the leading digital marketing companies, providing onshore and offshore digital marketing services and solutions. With the primary intent of getting your business or brand at the top of your domain."
    }
  },{
    "@type": "Question",
    "name": "How cost-effective is digital marketing as compared to traditional marketing?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Digital marketing is cost-effective since it allows you to directly reach your target audience. Consider how traditional marketing reaches a broad audience. In contrast, digital marketing employs a targeted strategy, engaging the consumer with the appropriate message at the appropriate moment. You can quickly measure your digital marketing activities and associated costs, reducing wasteful spending. This is far more challenging in typical marketing campaigns."
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
      <div className='sm:mt-[1.208vw] mt-[14.118vw] '>
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
      <div className='sm:mt-[5.813vw] mt-[14.118vw] '>
        <ToolsTech />
      </div>
      <div className='sm:mt-[5.813vw] mt-[14.118vw] '>
        <IndustriesWe />
      </div>
      <div className="sm:mt-[5vw]  ">
        <HoverImageComponent hoverImageData={hoverImageData} />
      </div>
      <div className='sm:mt-[4vw] mt-[14.118vw]'>
        <NewContact />
      </div>
      <div className='sm:mt-[4.813vw] sm:mb-0 mb-[15vw] mt-[14.118vw]'>
        <Clients testimonialsData={testimonialsData} headingdata={headingdata} />
      </div>
      <Faq faq={faq} />
      <Footer />
    </div>
  );
};

export default page;
