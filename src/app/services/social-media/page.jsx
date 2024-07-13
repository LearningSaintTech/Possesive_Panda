import Banner from "@/app/(Components)/Banner";
import React from "react";
import banner from "../../../assets/banners/social-media.png";
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
import WhySection from "./WhySection";
import BenefitsCard from "./BenefitsCard";
import ProcessCard from "./ProcessCard";

const page = () => {
  return (
    <div>
      <Banner
        title={"Social Media Service"}
        desciption={"For catchy, engaging and organized social media handles"}
        page={"Social Media"}
        image={banner}
      />
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Hero top={top} />
        <div className="mt-[5.2vw]">
          <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem]">
            Why is it essential to set up social media?
          </h4>
          <div className="mt-[3.9vw] flex flex-col sm:flex-row gap-[2.3vw]">
            {setUpSocialMedia.map((item, key) => (
              <Types data={item} key={key} digital={true} />
            ))}
          </div>
        </div>
        <div className="mt-[5.2vw]">
          <h4 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[45vw]">
            Our Social Media Management Services
          </h4>
          <p className="text-[#212121] text-[3.636vw] sm:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[1.8vw] mb-[2vw] w-full sm:w-[47vw]">
          Social Media Management is about using social media platforms to connect with your target audience and organically achieve specific goals.
          </p>
          <div className="py-[5.2vw] grid sm:grid-cols-4 gap-x-[1.25vw] gap-y-[6vw] sm:gap-y-[3.646vw]">
            {mediaManagementServices.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
        </div>
        <div className="mt-[5.2vw]">
          <h4 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem]">
          Why Social Media Management?
          </h4>
          {/* <div className="sm:flex sm:flex-row flex-col sm:overflow-x-scroll py-[5.2vw] h-fit no-scrollbar">
            {socialMediaManagement.map((feature, key) => (
              <Features data={feature} key={key} />
            ))}
          </div> */}
          <WhySection />
        </div>
        <div>
          <h4 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] mb-[2.6vw] w-full sm:w-[37vw]">
          Why Choose Us for Your Social Media Management?
          </h4>
          <p className="text-[#212121] text-[3.636vw] sm:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[1.8vw] mb-[3.8vw] w-full sm:w-[55vw]">
          Possesive Panda Prime focuses on building communities that boost brand awareness. We understand the power of strong and engaged social media for our clients. In a world where everyone uses the paid reach process, our team is here to help you become visible by crafting social media strategies.
          </p>
          <p className="text-[#212121] text-[3.636vw] sm:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[1.8vw] mb-[3.8vw] w-full sm:w-[55vw] sm:text-right sm:ml-auto ">
          With our time-tested methods, we prioritize organic reach, engagement, a real loyal follower base, and keeping brand value. Our team continuously analyzes emerging trends, ensuring your brand remains at the forefront of the industry. Our team focuses on a result-driven approach, such as increased brand awareness, engagement, and ROI.
          </p>
          {/* <div className="sm:flex sm:flex-row grid grid-cols-2 gap-[2.6vw] sm:overflow-x-scroll py-[5.2vw] h-fit no-scrollbar">
            {whyChooseUs.map((item, key) => (
              <Benefits data={item} key={key} />
            ))}
          </div> */}
          <BenefitsCard />
        </div>
        <Strategy statergy={socialMediaPlatforms} />
      </div>
      <div className="bg-[#EBF9FF] bg-opacity-50 px-[5.2vw] pt-[4.17vw]">
        <h4 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] mb-[2.6vw] w-full sm:w-[37vw]">
        Our Social Media Management Strategy
        </h4>
        {/* <div className="sm:flex sm:flex-row grid grid-cols-2 sm:overflow-x-scroll pb-[5.2vw] gap-[3vw] sm:gap-[2.6vw] h-fit no-scrollbar">
          {managementStrategy.map((item, key) => (
            <Process data={item} key={key} />
          ))}
        </div> */}
        <ProcessCard />
      </div>
      <div className="px-[5.2vw] pt-[5.2vw]">
        <h4 className="text-[#212121]  text-[4.364vw] sm:text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[45vw]">
        How do Social Media Management services help Grow Social Media Accounts Organically and Inorganically?
        </h4>
        <div className="py-[5.2vw] grid sm:grid-cols-4 gap-x-[1.25vw] gap-y-[6vw] sm:gap-y-[3.646vw]">
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
