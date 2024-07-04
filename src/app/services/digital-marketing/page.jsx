import Banner from "@/app/(Components)/Banner";
import React from "react";
import banner from "../../../assets/banners/service-details.png";
import Hero from "../(Components)/(Hero)/Hero";
import {
  DriveOrganisation,
  digitalMarketingServices,
  digitalMarketingStrategy,
  easyWorkProcess,
  faq,
  ourDigitalMarketingServices,
  top,
  whyWe,
} from "./data";
import Grow from "../(Components)/Grow";
import Types from "../(Components)/Types";
import Inventory from "../(Components)/Inventory";
import Benefits from "../(Components)/Benefits";
import Faq from "../(Components)/(Faq)/Faq";
import Strategy from "../(Components)/(Strategy)/Strategy";
import Services from "../(Components)/Services";

const page = () => {
  return (
    <div>
      <Banner
        title={"Service Details"}
        desciption={"Professional IT Solution Insight and Updates"}
        page={"Services"}
        image={banner}
      />
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Hero top={top} />
        <div className="mt-[5.2vw]">
          <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem]">
            Why We Are the Best Digital Marketing Company
          </h4>

          {whyWe.paragraph.map((para, key) => (
            <p
              className="text-[#212121] text-[3.363vw] sm:text-[1.25vw] leading-[normal] tracking-[0.015rem] w-full sm:w-[60vw] mb-[2vw] sm:mb-[1.2vw]"
              key={key}
            >
              {para}
            </p>
          ))}
          <div className="py-[5.2vw] grid sm:grid-cols-4 gap-x-[1.25vw] gap-y-[6vw] sm:gap-y-[3.646vw]">
            {whyWe.cards.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[70vw] sm:w-[39vw] mt-9 sm:mt-0">
            Your Business Goals with Our Digital Marketing Strategy
          </h4>
          <div className="mt-[3.9vw] flex flex-col sm:flex-row gap-[2.3vw]">
            {digitalMarketingStrategy.map((item, key) => (
              <Types data={item} digital={true} key={key} />
            ))}
          </div>
        </div>
        <div className="my-[5.2vw]">
          <h4 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-[75vw] sm:w-[45vw] mt-12 sm:mt-0 sm:mb-0 mb-6">
            How Digital Marketing Services Drive Organization Growth
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-[5.2vw] gap-y-[9vw] sm:gap-y-[3vw] mt-[5.2vw]">
            {DriveOrganisation.map((item, key) => (
              <Inventory data={item} key={key} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[45vw] sm:mt-0 mt-8">
            Why Your Business Should Be Using Digital Marketing Services?
          </h4>
          <p className="text-[#212121] text-[3.363vw] sm:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[2.5vw] sm:mt-[1.8vw] mb-[4.5vw] sm:mb-[3.8vw]">
            Digital Marketing is essential for many compelling reasons:-
          </p>
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-x-2 sm:gap-[1.875vw] sm:overflow-x-scroll no-scrollbar">
            {digitalMarketingServices.map((item, key) => (
              <Benefits data={item} key={key} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[rgba(243,252,254,0.5)] py-[4.167vw] px-[5.2vw]">
        <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[60vw] sm:w-[37.6vw]">
          Our Digital Marketing Services
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3vw] sm:gap-x-[2.1vw] gap-y-[3vw] sm:gap-y-[2.6vw] pt-[5.2vw] pb-[5vw] sm:pb-[3vw]">
          {ourDigitalMarketingServices.map((item, key) => (
            <Services data={item} key={key} />
          ))}
        </div>
      </div>
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Strategy statergy={easyWorkProcess} />
      </div>
      <Faq faq={faq} />
    </div>
  );
};

export default page;
