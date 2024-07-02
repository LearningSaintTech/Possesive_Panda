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
  top,
  whyWe,
} from "./data";
import Grow from "../(Components)/Grow";
import Types from "../(Components)/Types";
import Inventory from "../(Components)/Inventory";
import Benefits from "../(Components)/Benefits";
import Faq from "../(Components)/(Faq)/Faq";
import Strategy from "../(Components)/(Strategy)/Strategy";

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
          <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem]">
            Why We Are the Best Digital Marketing Company
          </h4>

          {whyWe.paragraph.map((para, key) => (
            <p
              className="text-[#212121] text-[1.25vw] leading-[normal] tracking-[0.015rem] w-[60vw] mb-[1.2vw]"
              key={key}
            >
              {para}
            </p>
          ))}
          <div className="py-[5.2vw] grid grid-cols-4 gap-x-[1.25vw] gap-y-[3.646vw]">
            {whyWe.cards.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
          <div className="mt-[3.9vw] flex gap-[2.3vw]"></div>
        </div>
        <div>
          <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[39vw]">
            Your Business Goals with Our Digital Marketing Strategy
          </h4>
          <div className="mt-[3.9vw] flex gap-[2.3vw]">
            {digitalMarketingStrategy.map((item, key) => (
              <Types data={item} digital={true} key={key} />
            ))}
          </div>
        </div>
        <div className="my-[5.2vw]">
          <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[45vw]">
            How Digital Marketing Services Drive Organization Growth
          </h4>
          <div className="grid grid-cols-3 gap-x-[5.2vw] gap-y-[3vw] mt-[5.2vw]">
            {DriveOrganisation.map((item, key) => (
              <Inventory data={item} key={key} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[45vw]">
            Why Your Business Should Be Using Digital Marketing Services?
          </h4>
          <p className="text-[#212121] text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] my-[0.8vw]">
            Digital Marketing is essential for many compelling reasons:-
          </p>
          <div className="flex gap-[1.875vw] overflow-x-scroll no-scrollbar">
            {digitalMarketingServices.map((item, key) => (
              <Benefits data={item} key={key} />
            ))}
          </div>
        </div>
        <Strategy statergy={easyWorkProcess} />
      </div>
      <Faq faq={faq} />
    </div>
  );
};

export default page;
