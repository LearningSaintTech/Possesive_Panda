import React from 'react'
import Banner from '@/app/(Components)/Banner';
import Hero from '../(Components)/(Hero)/Hero';
import Grow from '../(Components)/Grow';
import OurFeatu from './OurFeatu';
import Strategy from '../(Components)/(Strategy)/Strategy';
import Inventory from '../(Components)/Inventory';
import Faq from '../(Components)/(Faq)/Faq';
import {
    top,
    ppcservices,
    marketingServices,
    leadsAndSales,
    faq
} from "./data";

const page = () => {
    return (
        <div>
            <Banner
                title={"Pay Per Click"}
                desciption={"For catchy, engaging and organized social media handles"}
                page={"Pay Per Click"}
            // image={banner}
            />
            <div className="px-[5.2vw] pt-[5.2vw]">
                <Hero top={top} />
                <div className="mt-[5.2vw]">
                    <h4 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[45vw]">
                        PPC services help you in many ways
                    </h4>
                    <div className="py-[5.2vw] grid sm:grid-cols-4 gap-x-[1.25vw] gap-y-[6vw] sm:gap-y-[3.646vw]">
                        {ppcservices.map((item, key) => (
                            <Grow data={item} key={key} />
                        ))}
                    </div>
                </div>
                <div className="mt-[5.2vw] ">
                    <h5 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem]">
                        Our Features
                    </h5>
                    <OurFeatu />
                </div>
                <div className="pt-[5.2vw]">
                    <Strategy statergy={marketingServices} />
                </div>
                <div className="pt-[5.2vw]">
                    <h3 className="text-[#212121] text-[4.364vw] sm:text-[2.083vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[40vw] mt-[5vw] sm:mt-0">
                    PPC services help to increase your leads and sales
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-[5.2vw] gap-y-[9vw] sm:gap-y-[3vw] mt-[5.2vw]">
                        {leadsAndSales.map((item, key) => (
                            <Inventory data={item} key={key} />
                        ))}
                    </div>
                </div>
            </div>
            <Faq faq={faq} />
        </div>
    )
}

export default page;