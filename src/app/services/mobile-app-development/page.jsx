import Banner from "@/app/(Components)/Banner";
import React from "react";
import banner from "../../../assets/banners/service-details.png";
import Hero from "../(Components)/(Hero)/Hero";
import {
  androidApp,
  faq,
  iosApp,
  leverage,
  ourMadeServices,
  servicesForVariousPurpose,
  tools,
  top,
} from "./data";
import Types from "../(Components)/Types";
import Grow from "../(Components)/Grow";
import IconCard from "../(Components)/IconCard";
import Tools from "./Tools";
import WhyUs from "../(Components)/WhyUs";
import Faq from "../(Components)/(Faq)/Faq";

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
          <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[30vw]">
            Our Mobile Application Development Service
          </h4>
          <p className="text-[#212121] text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[1.8vw] mb-[3.8vw] w-[47vw]">
            Mobile app developers use different programming languages according
            to the custom needs of their client in order to write the code that
            runs the applications. Mobile App Development takes various forms,
            the major ones as follows:
          </p>
          <div className="mt-[3.9vw] flex gap-[2.3vw]">
            {ourMadeServices.map((item, key) => (
              <Types data={item} key={key} digital={true} />
            ))}
          </div>
        </div>
        <div className="mt-[5.2vw]">
          <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[45vw]">
            Android Application Development For All Android Platforms
          </h4>
          <div className="mt-[3.9vw] grid grid-cols-4 gap-x-[1.25vw] gap-y-[2.6vw]">
            {androidApp.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
        </div>
        <div className="mt-[5.2vw]">
          <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[45vw]">
            IOS Application Development For All Apple Platforms
          </h4>
          <div className="mt-[3.9vw] grid grid-cols-4 gap-x-[1.25vw] gap-y-[2.6vw]">
            {iosApp.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[5.2vw] bg-[#F3fcfe] bg-opacity-50 px-[5.2vw]">
        <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[45vw] mb-[2.8vw] pt-[1vw]">
          Mobile Application Development Services For Various Purposes
        </h4>
        <div className="grid grid-cols-4 border-b-2 border-[#D9D9D9]">
          {servicesForVariousPurpose.row1.map((item, key) => (
            <IconCard data={item} key={key} />
          ))}
        </div>
        <div className="flex justify-center">
          {servicesForVariousPurpose.row2.map((item, key) => (
            <IconCard data={item} key={key} />
          ))}
        </div>
        <div className="grid grid-cols-4 border-t-2 border-[#D9D9D9]">
          {servicesForVariousPurpose.row3.map((item, key) => (
            <IconCard data={item} key={key} />
          ))}
        </div>
      </div>
      <div></div>
      <div className="bg-[#F3FCFE] bg-opacity-50 py-[7.6vw] px-[5.2vw] mt-[7vw]">
        <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[55vw] mb-[2.2vw] text-center mx-auto">
          Our Mobile Application Development Tools and Frameworks
        </h4>
        <div>
          <Tools data={tools} />
        </div>
      </div>
      <div className="bg-[#F3FCFE] bg-opacity-50 py-[3.65vw] px-[5.2vw] mt-[5.2vw]">
        <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[40vw] mb-[2.2vw]">
          Why Leverage Mobile App Development Services?
        </h4>
        <div className="grid grid-cols-3 gap-x-[2.1vw]">
          {leverage.map((item, key) => (
            <WhyUs data={item} key={key} />
          ))}
        </div>
      </div>
      <Faq faq={faq} />
    </div>
  );
};

export default page;
