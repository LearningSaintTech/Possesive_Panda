import Banner from "@/app/(Components)/Banner";
import React from "react";
import banner from "../../../assets/banners/service-details.png";
import Hero from "../(Components)/(Hero)/Hero";
import {
  faq,
  howSocialMedia,
  managementStrategy,
  mediaManagementServices,
  setUpSocialMedia,
  socialMediaManagement,
  socialMediaPlatforms,
  top,
  whyChooseUs,
} from "./data";
import Types from "../(Components)/Types";
import Grow from "../(Components)/Grow";
import Features from "../(Components)/Features";
import Benefits from "../(Components)/Benefits";
import Strategy from "../(Components)/(Strategy)/Strategy";
import Process from "../(Components)/Process";
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
          <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem]">
            Why is it essential to setup social media ?
          </h4>
          <div className="mt-[3.9vw] flex gap-[2.3vw]">
            {setUpSocialMedia.map((item, key) => (
              <Types data={item} key={key} digital={true} />
            ))}
          </div>
        </div>
        <div className="mt-[5.2vw]">
          <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem]">
            Our Social Media Management Services
          </h4>
          <p className="text-[#212121] text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[1.8vw] mb-[3.8vw] w-[47vw]">
            Social Media Management is about using social media platforms to
            connect with your target audience and organically achieve specific
            goals.
          </p>
          <div className="mt-[3.9vw] grid grid-cols-4 gap-x-[1.25vw]">
            {mediaManagementServices.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
        </div>
        <div className="mt-[5.2vw]">
          <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] mb-[2.6vw]">
            Why Social Media Management?
          </h4>
          <div className="flex overflow-x-scroll py-[5.2vw] h-fit no-scrollbar">
            {socialMediaManagement.map((feature, key) => (
              <Features data={feature} key={key} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] mb-[2.6vw] w-[37vw]">
            Why Choose us for your Social Media Management ?
          </h4>
          <p className="text-[#212121] text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[1.8vw] mb-[3.8vw] w-[55vw]">
            Possesive Panda Prime focuses on building communities that boost
            brand awareness. We understand the power of strong and engaged
            social media for our clients. In a world where everyone uses the
            paid reach process, our team is here to help you become visible by
            crafting social media strategies.
          </p>
          <p className="text-[#212121] text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[1.8vw] mb-[3.8vw] w-[55vw] text-right ml-auto">
            With our time-tested methods, we prioritize organic reach,
            engagement, and a real loyal follower base, and keeping brand value.
            Our team continuously analyzes emerging trends, ensuring your brand
            remains at the forefront of the industry. Our team focuses on a
            result-driven approach, such as increased brand awareness,
            engagement, and ROI.
          </p>
          <div className="flex gap-[2.6vw] overflow-x-scroll py-[5.2vw] h-fit no-scrollbar">
            {whyChooseUs.map((item, key) => (
              <Benefits data={item} key={key} />
            ))}
          </div>
        </div>
        <Strategy statergy={socialMediaPlatforms} />
      </div>
      <div className="bg-[#EBF9FF] bg-opacity-50 px-[5.2vw] pt-[4.17vw]">
        <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] mb-[2.6vw] w-[37vw]">
          Why Choose us for your Social Media Management ?
        </h4>
        <div className="flex overflow-x-scroll pb-[5.2vw] gap-[2.6vw] h-fit no-scrollbar">
          {managementStrategy.map((item, key) => (
            <Process data={item} key={key} />
          ))}
        </div>
      </div>
      <div className="px-[5.2vw] pt-[5.2vw]">
        <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] mb-[2.6vw] w-[58vw]">
          How Social Media Management Service help grow social media account
          organically and inorganically
        </h4>
        <div className="mt-[3.9vw] grid grid-cols-4 gap-x-[1.25vw]">
          {howSocialMedia.map((item, key) => (
            <Grow data={item} key={key} />
          ))}
        </div>
      </div>
      <Faq faq={faq} />
    </div>
  );
};

export default page;