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

const page = () => {
    return (
        <div className='bg-[#00111A]'>
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
            <FinalBanner
                title={"Our Accounting & Finance Services"}
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