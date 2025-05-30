import React from 'react';
import Faq from '../(Components)/(Faq)/Faq';
import Footer from "../../(Components)/Footer";
import IntroServices from '../(CommonComponent)/(E-commerce)/IntroServices';
import Customized from '../(CommonComponent)/(E-commerce)/Customized';
import Partner from '../(CommonComponent)/Partner';
import OurSevices from '../(CommonComponent)/OurSevices';
import Benefits from '../(CommonComponent)/Benefits';
import Industries from '../search-engine-optimization/Industries';
import Clients from '../(CommonComponent)/Clients';
import Solutions from '../(CommonComponent)/Solutions';
import Platforms from '../(CommonComponent)/Platforms'
import FaqSection from "../(CommonComponent)/(FaqSection)/section"
//import CostCalculator from "../(CommonComponent)/CostCalculator"
import {
  faq,
  introServicesData,
  titleData,
  servicesData22,
  iconMapping1,
  ourService,
  cardData,
  cardList,
  paragraphs,
  buttonData,
 
  smallfaqdata,
  headingdata,
  testimonialsData,
  platformsData,
  StrategyData,
  smallfaqimage
  
} from './data';
import FinalBanner from "../(CommonComponent)/FinalBanner";
import Head from 'next/head';
import Script from 'next/script';
import ToolsTech, { frameworks } from '../(CommonComponent)/ToolsTech';
import CardList from '../(CommonComponent)/(AgileApproach)/CardList';


import Strategies from '../(CommonComponent)/Strategies';
import NewContact from '../(CommonComponent)/NewContact';
import ReviewCardContainer from '../(CommonComponent)/ReviewCardContainer';

export const metadata = {
  title: 'Ecommerce Services | Ecommerce Management Solutions',
  description: 'Possesive Panda a provider of e-commerce management services. we offer managed ecommerce services, infrastructure management, website development & customer support.',
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
    <div className="bg-[#00111A]">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.alternates.canonical} />

        
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
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


      </Head>
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
    "name": "Service Page",
    "item": "https://www.possesivepanda.com/services"  
  },{
    "@type": "ListItem", 
    "position": 3, 
    "name": "E-Commerce Service",
    "item": "https://www.possesivepanda.com/services/e-commerce"  
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
    "name": "Why should you choose Possesive Panda as your eCommerce partner?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Possesive Panda is a reliable and reputable eCommerce service and solutions provider, catering to each and every need of the clients. We deliver eCommerce solutions in their totality, ranging from building an eCommerce platform to delivering your products seamlessly."
    }
  },{
    "@type": "Question",
    "name": "How much will it cost to build an eCommerce platform?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Depending on the features required, the intricacy of the platform, and the resources and experience of the development team, the price of creating an eCommerce website can vary greatly. Working with an experienced development team that can provide accurate estimates and milestones is crucial. If you want to know about this, then have a quick meeting with our consultant and resolve every doubt of yours."
    }
  },{
    "@type": "Question",
    "name": "Do we integrate third-party tools and services into your eCommerce site?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we incorporate necessary third-party solutions to improve your online store. We can help with everything from payments (Stripe, PayPal) and marketing automation (Mailchimp, Klaviyo) to shipping (ShipStation, EasyPost), analytics (Google Analytics), and shipment."
    }
  },{
    "@type": "Question",
    "name": "Why do I need eCommerce solutions?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "E-commerce solutions help in the smooth running of processes in setting up and managing an online store. They enable businesses to reach a wider audience and increase sales. They also help manage inventory, the payment process, and logistics."
    }
  },{
    "@type": "Question",
    "name": "How do I choose the right eCommerce platform?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "When choosing an e-commerce platform, consider factors such as ease of use, scalability, cost, customization options, and your business's specific needs."
    }
  },{
    "@type": "Question",
    "name": "How will I follow up on my eCommerce website development project?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We regularly update you on the status of the tasks. Also, a project manager will be appointed to assist you with all the details of your project."
    }
  },{
    "@type": "Question",
    "name": "How long does it take to design and launch an eCommerce website?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "This depends upon how big and complex the project is. Our aim is to provide quick and effective solutions while making sure the work is done on time. When we plan the project our project manager gives a clear deadline."
    }
  }]

          }
          `}
      </Script>


      <FinalBanner
        title={"Our eCommerce Services and Solutions"}
        desciption={"We Create, Enhance, and Oversee - Allowing You to Focus on What’s More Important: Growing Your Business"}
        pointone={"Intuitive"}
        pointtwo={"Secure"}
        pointthree={"Scalable"}
        pointfour={"Tailored"}
      />

      <ReviewCardContainer />
      <div className='sm:mt-[2.208vw] mt-[14.118vw] '>
        <OurSevices iconMapping1={iconMapping1} servicesData22={servicesData22} heading={ourService.heading} subHeading={ourService.subHeading} />
      </div>
      <div className='sm:mt-[5.208vw] mt-[14.118vw] '>
        <IntroServices heading={introServicesData.heading} content={introServicesData.content} />
      </div>
      <div className='sm:mt-[6.5vw] mt-[14.118vw] '>
        <Benefits />
      </div>
      <div className='sm:mt-[6vw] mt-[14.118vw] '>
        <Partner heading={titleData.heading} title={titleData.title} />
      </div>
      <div className="sm:mt-[7.813vw] mt-[14.118vw]  ">
        <Solutions paragraphs={paragraphs} buttonData={buttonData} title="eCommerce Solutions We Develop" />
      </div>
      <div className='sm:mt-[5.5vw] mt-[14.118vw] '>
        <Customized />
      </div>
      <div className='sm:mt-[6vw] mt-[14.118vw] '>
        <ToolsTech />
      </div>
      <div className='sm:mt-[6vw] mt-[14.118vw] '>
        <CardList cardData={cardData} cardList={cardList} />
      </div>
      <div className='sm:mt-[7.292vw] mt-[14.118vw] '>
        <Platforms platformsData={platformsData} />
      </div>
      <div className='sm:mt-[7.292vw] mt-[14.118vw] '>
        <Industries />
      </div>
      <div className='sm:mt-[5.208vw] mt-[40.118vw]'>
        <Strategies StrategyData={StrategyData} title="Our eCommerce Website Development Strategies" />
      </div>
      <div className='sm:mt-[7.813vw] mt-[14.118vw]'>
        <FaqSection smallfaqdata={smallfaqdata} smallfaqImg={smallfaqimage} heading="Choose Possesive Panda as Your Digital Success Partner " />
      </div>
      <div className='sm:mt-[8vw] mt-[14.118vw]'>
        <NewContact />
      </div>
      <div className='sm:mt-[7.813vw] sm:mb-0 mb-[15vw] mt-[14.118vw]'>
        <Clients testimonialsData={testimonialsData} headingdata={headingdata} />
      </div>
      <div>
        <Faq faq={faq} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
