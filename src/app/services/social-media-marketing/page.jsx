import React from "react";
import NewBanner from "@/app/(Components)/NewBanner";
import Footer from "../../(Components)/Footer";
import Models from "../(CommonComponent)/Models";
import Growth from "../(CommonComponent)/Growth";
import Why from "../(CommonComponent)/Why";
import Mobile from "../(CommonComponent)/Mobile"; import Clients from '../(CommonComponent)/Clients';
import Solutions from '../(CommonComponent)/Solutions';
import OurSevices from '../(CommonComponent)/OurSevices';
import Marquee from "../../(homeComponent)/Marquee";
import Scrollbar2 from "../(CommonComponent)/Scrollbar2";

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
  modelData,
  servicesData2,
  dynamicContent2
} from "./data";
import FinalBanner from "../(CommonComponent)/FinalBanner";
import Faq from "../(Components)/(Faq)/Faq";
import { Script } from '@/lib/next-compat';
import NewContact from "../(CommonComponent)/NewContact";
import ReviewCardContainer from "../(CommonComponent)/ReviewCardContainer";

export const metadata = {
  title: 'Social Media Marketing Agency | Best Social Media Management Services',
  description: 'Possesive Panda is the best Social Media Marketing company.we offer top quality Social Media Marketing at low prices. contact us for effective social media strategies.',


};
const page = () => {
  return (
    <div className="bg-[#00111A]">
<head>
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
    "name": "Service",
    "item": "https://www.possesivepanda.com/services"  
  },{
    "@type": "ListItem", 
    "position": 3, 
    "name": "Social Media Marketing",
    "item": "https://www.possesivepanda.com/services/social-media-marketing"  
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
    "name": "What is Social Media Marketing?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Social media marketing promotes a brand, product, or service through platforms like Facebook, Twitter, and Instagram, aiming to drive website traffic, generate leads, and increase conversions while building brand awareness, fostering customer relationships, and staying competitive."
    }
  },{
    "@type": "Question",
    "name": "Why is Social Media Marketing important?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Social media marketing is crucial for businesses as it increases brand awareness, drives website traffic, and builds trust. With over 3.8 billion active users, it provides valuable insights into consumer behavior, preferences, and demographics."
    }
  },{
    "@type": "Question",
    "name": "What are the services offered by Possesive Panda?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Possesive Panda offers a full suite of Social Media Marketing services, here is the list: Content Development, Social Media Management, Social Media Advertising, Engagement Growth , Influencer Collaboration, Reputation Management, SEO Integration , Online Reputation Management , Social Media Account Handling ."
    }
  },{
    "@type": "Question",
    "name": "Can I get a dedicated team for my social media management?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can hire a dedicated team for social media management. You can hire Possesive Panda’s social media management services in three ways: Project Based, Recurring Projects, Dedicated Resources and Teams."
    }
  },{
    "@type": "Question",
    "name": "Why choose Possesive Panda for Social Media Marketing?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Possesive Panda provides complete transparency, allowing you to witness firsthand how our efforts are elevating your ROI(s). Our dedication to successful social media management and marketing tactics results in a significant network resource for your online marketing requirements."
    }
  },{
    "@type": "Question",
    "name": "What is the role of a social media manager?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The role of a social media manager is very crucial as they have to manage a company's online presence across various social media platforms. Their responsibilities include strategy, creativity, maintaining the brand's image, and engaging with the audience."
    }
  },{
    "@type": "Question",
    "name": "How do you measure the results of social media campaigns?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our team tracks key performance indicators such as engagement rates, reach, website traffic, and conversion. Using advanced tools, we provide detailed reports. We also continuously optimize your social media for optimal results."
    }
  }]

}


          `}
      </Script>

      <FinalBanner
        title={"Our Social Media Marketing Services and Solutions"}
        desciption={"Witness successful brand promotions and enhanced social media growth for your business with Possesive Panda’s Social Media Management Services and Solutions"}
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
      <Solutions paragraphs={paragraphs} buttonData={buttonData} title="Personalized Social Media Marketing Solutions" />
      </div>
      <div className="sm:mt-[6.25vw] mt-[2vw] ">
        <Mobile
          heading={mobileData.heading}
          sideImage={mobileData.sideImage}
          paragraphs={mobileData.paragraphs}
        />
      </div>
      <div className='sm:mt-[4.25vw] mt-[14vw] '>
        <Scrollbar2 servicesData2={servicesData2} dynamicContent2={dynamicContent2} />
      </div>
      <div className="sm:mt-[5.5vw] mt-[14vw]  ">
        <Models modelData={modelData} />
      </div>
      <div className='sm:mt-[6.25vw] mt-[14vw] '>
        <Growth heading={growthData.heading} description={growthData.description} cards={growthData.cards} />
      </div>
      <div className='sm:mt-[6.25vw] mt-[14vw] '>
        <Why
          mainHeading={whyData.mainHeading}
          subText1={whyData.subText1}
          subText2={whyData.subText2}
          thumbnail={whyData.thumbnail}
          listHeading={whyData.listHeading}
          titles={whyData.titles}
        />
      </div>
      <div className='sm:block hidden mt-[5.5vw] mb-[5.469vw]'>
        <h2 className="text-white text-[3.333vw] items-center text-center font-semibold leading-[123%] mb-[4.167vw] ">Our Clients</h2>
        <Marquee />
      </div>
      <div className='sm:mt-[2vw] mt-[14.118vw]'>
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
