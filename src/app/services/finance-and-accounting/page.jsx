import React from 'react';
import FinalBanner from '../(CommonComponent)/FinalBanner';
import OurSevices from '../(CommonComponent)/OurSevices';
import Mobile from '../(CommonComponent)/Mobile';
import HoverImageComp from '../(CommonComponent)/HoverImageComp';
import Strategies from '../(CommonComponent)/Strategies';
import Platforms from "../(CommonComponent)/Platforms";
import Why from '../(CommonComponent)/Why';
import Industries from '../search-engine-optimization/Industries';
import NewContact from '../(CommonComponent)/NewContact';
import Faq from '../(Components)/(Faq)/Faq';
import Footer from "../../(Components)/Footer";
import Clients from '../(CommonComponent)/Clients';
import Script from 'next/script';

import {
    iconMapping1,
    ourService,
    servicesData22,
    mobileData,
    hoverImageData,
    StrategyData,
    platformsData,
    whyData,
    testimonialsData,
    headingdata,
    faq
} from "./data";
import ReviewSection from './ReviewSection';
import IndustriesWe from '../(CommonComponent)/IndustriesWe';


export const metadata = {
    title: 'Finance and accounting services | Outsourcing Financial Management Service',
    description: 'Streamline your business with expert finance and accounting services. Possesive Panda offers reliable outsourcing for financial management, bookkeeping, and reporting solutions.',
    alternates: {
      canonical: 'https://www.possesivepanda.com/services/finance-and-accounting'
    },
  
  
  };

const page = () => {
    return (
        <div className='bg-[#00111A]'>
            <head>
            <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonical} />

        
       
      
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

            <Script
        id="finance-and-accountibg-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "How long does it take to make a website?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It can vary as per the business's needs. The site will be strategically planned out, which will decide its features, complexity, structure, and overall approach. Accordingly, website development with advanced requirements will take more time than basic websites, which get finished in 1-3 months."
              }
            },{
              "@type": "Question",
              "name": "How much do web development services cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost of getting your website built and ready depends on the structure, features, web development and design software and tools that are employed, and other such requirements of the website. Possesive Panda gives you the option to set your budget frame for the project, keeping everything open to discussion to ensure maximum satisfaction."
              }
            },{
              "@type": "Question",
              "name": "Why should you choose Possesive Panda for making your website?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Possesive Panda is a dynamic IT service provider that offers a wide range of benefits for our customers. These are flexible pricing, dedicated project management and tracking, customized and innovative solutions, high-priority data security, qualified experts, and more. Additionally, we hand the source code of the project over to the client, so that they can make updates and maintenance through any web developer of their choice."
              }
            },{
              "@type": "Question",
              "name": "What are web development frameworks?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Web development frameworks, web application frameworks, or web frameworks are sets of resources and tools used by developers in order to build and maintain websites, web applications, web services, and also to develop APIs."
              }
            },{
              "@type": "Question",
              "name": "What is the website development process?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Web development and design is a complex and integrated process that commences with defining and planning the project before designing the layout and structure of the website. The content of the website is then created in alignment with the project planning, after which developers code the website into life. Testing of the site is done thoroughly before its final deployment, and regular maintenance is performed afterwards."
              }
            },{
              "@type": "Question",
              "name": "Why is website development important?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Having a website for your business is not a luxury, but a necessity in today’s age where businesses exist online more than they do traditionally. It helps you deliver information about your business offerings to the audience of your site, and market them by showing their importance and unique selling points."
              }
            }]
          

          })
        }}
      />

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
              "name": "Finance & Accounting Service",
              "item": "https://www.possesivepanda.com/services/finance-and-accounting"  
            }]
          
          
          })
        }}
      />

            <FinalBanner
                title={"Our Finance & Accounting Services"}
                desciption={"Thrive on scalability, cost-effectiveness, and specialized expertise with Possesive Panda’s Finance and Accounting Services"}
                pointone={"Intuitive"}
                pointtwo={"Secure"}
                pointthree={"Scalable"}
                pointfour={"Tailored"}
            />
            <ReviewSection />
            <div className='mt-[9.647vw] sm:mt-[3.125vw]'>
                <OurSevices iconMapping1={iconMapping1} servicesData22={servicesData22} heading={ourService.heading} subHeading={ourService.subHeading} />
            </div>
            <div className='mt-[14.118vw] sm:mt-[5.208vw]'>
                <Mobile
                    heading={mobileData.heading}
                    sideImage={mobileData.sideImage}
                    paragraphs={mobileData.paragraphs}
                />
            </div>
            <div className='mt-[14.118vw] sm:mt-0'>
                <HoverImageComp hoverImageData={hoverImageData} />
            </div>
            <div className='mt-[14.118vw] sm:mt-[5.208vw]'>
                <Strategies StrategyData={StrategyData} title="Benefits of Outsourcing F&A Services" />
            </div>
            <div className='mt-[14.118vw] sm:mt-[5.313vw]'>
                <Platforms platformsData={platformsData} />
            </div>

            <div className='mt-[14.118vw] sm:mt-[8.646vw]'>
                <Why
                    mainHeading={whyData.mainHeading}
                    subText1={whyData.subText1}
                    subText2={whyData.subText2}
                    thumbnail={whyData.thumbnail}
                    listHeading={whyData.listHeading}
                    titles={whyData.titles}
                />
            </div>
            <div className='mt-[14.118vw] sm:mt-[4.167vw]'>
                <IndustriesWe />
            </div>
            <div className='mt-[14.118vw] sm:mt-[5.208vw]'>
                <NewContact />
            </div >
            <div className='mt-[14.118vw] sm:mt-[6.25vw]'>
                <Clients testimonialsData={testimonialsData} headingdata={headingdata} />
            </div>
            <div className='mt-[14.118vw] sm:mt-[6.25vw]'>
                <Faq faq={faq} />
            </div>
            <div className='mt-[14.118vw] sm:mt-[5.208vw]'>
                <Footer />
            </div>
        </div>
    )
}

export default page