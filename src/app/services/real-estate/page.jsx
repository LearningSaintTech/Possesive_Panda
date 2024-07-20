import React from 'react'
import Banner from "@/app/(Components)/Banner";
import Hero from '../(Components)/(Hero)/Hero';
import {
    top,
    ourRealEstate,
    benefits,
    faq
} from './data'
import OurFeatures from './OurFeatures';
import Services from '../(Components)/Services';
import BenefitCard from './BenefitCard';
import Faq from '../(Components)/(Faq)/Faq';

const page = () => {
    return (
        <div>
            <Banner
                title={"Real Estate"}
                desciption={"For catchy, engaging and organized social media handles"}
                page={"Real Estate"}
            // image={banner}
            />
            <div className="px-[5.2vw] pt-[5.2vw]">
                <Hero top={top} />
                <div className="mt-[5.2vw] ">
                    <h5 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem]">
                        Our Features
                    </h5>
                    {/* <div className="flex flex-col sm:flex-row overflow-x-scroll py-[5.2vw] h-fit no-scrollbar">
            {howWeDevelop.map((feature, key) => (
              <Features data={feature} key={key} />
            ))}
          </div> */}
                    <OurFeatures />
                </div>
            </div>
            <div className="bg-[rgba(243,252,254,0.5)] py-[4.167vw] px-[5.2vw]">
                <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[80vw] sm:w-[45vw]">
                Our Real Estate Virtual Assistants Services
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3vw] sm:gap-x-[2.1vw] gap-y-[3vw] sm:gap-y-[2.6vw] pt-[5.2vw] pb-[5vw] sm:pb-[3vw]">
                    {ourRealEstate.map((item, key) => (
                        <Services data={item} key={key} />
                    ))}
                </div>
                <div className="pt-[5.2vw]">
                    <h3 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] mt-[5vw] sm:mt-0 pb-[4.167vw]">
                    Benefits of Real Estate Virtual Assistants
                    </h3>
                    <BenefitCard benefits={benefits} />
                </div>
            </div>
            <Faq faq={faq}/>
        </div>
    )
}

export default page;