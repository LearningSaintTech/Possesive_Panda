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

const page = () => {
    return (
        <div className='bg-[#00111A]'>
            <FinalBanner title={"Our Accounting & Finance Services"}
                desciption={"Thrive on scalability, cost-effectiveness, and specialized expertise with Possesive Panda’s Finance and Accounting Services. "}
            />
            <div>
                <OurSevices iconMapping1={iconMapping1} servicesData22={servicesData22} heading={ourService.heading} subHeading={ourService.subHeading} />
            </div>
            <div>
                <Mobile
                    heading={mobileData.heading}
                    sideImage={mobileData.sideImage}
                    paragraphs={mobileData.paragraphs}
                />
            </div>
            <div>
                <HoverImageComp hoverImageData={hoverImageData} />
            </div>
            <div>
                <Strategies StrategyData={StrategyData} title="Benefits of Outsourcing F&A Services" />
            </div>
            <div>
                <Platforms platformsData={platformsData} />
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
                <Industries />
            </div>
            <div>
                <NewContact />
            </div>
            <div>
                <Clients testimonialsData={testimonialsData} headingdata={headingdata} />
            </div>
            <div>
                <Faq faq={faq} />
            </div>
            <Footer />
        </div>
    )
}

export default page