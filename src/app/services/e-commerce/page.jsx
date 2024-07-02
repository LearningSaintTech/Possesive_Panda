import Banner from "@/app/(Components)/Banner";
import React from "react";
import banner from "../../../assets/banners/service-details.png";
import Hero from "../(Components)/(Hero)/Hero";
import Features from "../(Components)/Features";
import Industries from "./Industries";
import Benefits from "../(Components)/Benefits";
import Inventory from "../(Components)/Inventory";
import WhyUs from "../(Components)/WhyUs";
import Grow from "../(Components)/Grow";
import Process from "../(Components)/Process";
import Strategy from "../(Components)/(Strategy)/Strategy";
import {
  benefits,
  businessToGrow,
  features,
  typesOfECommerce,
  process,
  inventory,
  whyUs,
  top,
  statergy,
  faq,
} from "./data";
import Types from "../(Components)/Types";
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
            Types of E-commerce
          </h4>
          <div className="mt-[3.9vw] flex gap-[2.3vw]">
            {typesOfECommerce.map((item, key) => (
              <Types data={item} key={key} />
            ))}
          </div>
        </div>
        <div className="mt-[5.2vw]">
          <h5 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem]">
            Our Features
          </h5>
          <p className="text-[#212121] text-[1.25vw] leading-[normal] tracking-[0.02rem] w-[56.5vw] pt-[1.3vw] mb-[5.2vw]">
            Our e-commerce service makes your online store look great and
            attractive, which helps drive sales. They are designed to attract
            more and more customers. We help in making your brand strong and
            visible.
          </p>
          <div className="flex overflow-x-scroll py-[5.2vw] h-fit no-scrollbar">
            {features.map((feature, key) => (
              <Features data={feature} key={key} />
            ))}
          </div>
        </div>
      </div>
      <Industries />
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Strategy statergy={statergy} />
        <div>
          <h3 className="text-[#212121] text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-[45vw]">
            Benefits of E-commerce Management software
          </h3>
          <div className="py-[5.2vw] flex gap-[1.875vw]">
            {benefits.map((item, key) => (
              <Benefits data={item} key={key} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[#212121] text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-[45vw]">
            How does e-commerce service help businesses to grow?
          </h3>
          <div className="py-[5.2vw] grid grid-cols-4 gap-x-[1.25vw] gap-y-[3.646vw]">
            {businessToGrow.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[#212121] text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem]">
            Our E-commerce process
          </h3>
          <p className="text-[#212121] text-[1.25vw] leading-[normal] tracking-[0.02rem] w-[45vw] pt-[1.3vw] mb-[5.2vw]">
            We follow a sequence to build an e-commerce store offering the best
            features. Our transparent process helps clients to have all access
          </p>
          <div className="flex overflow-x-scroll pb-[5.2vw] gap-[2.6vw] h-fit no-scrollbar">
            {process.map((item, key) => (
              <Process data={item} key={key} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[#212121] text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-[45vw]">
            E-commerce inventory management software
          </h3>
          <div className="grid grid-cols-3 gap-x-[5.2vw] gap-y-[3vw] mt-[5.2vw]">
            {inventory.map((item, key) => (
              <Inventory data={item} key={key} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#F3FCFE] bg-opacity-50 px-[5.2vw] py-[3.385vw] mt-[3.3vw]">
        <h3 className="text-[#212121] text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-[45vw]">
          Why choose an E-commerce solution service?
        </h3>
        <p className="text-[#212121] text-[1.67vw] leading-[normal] tracking-[0.02rem] w-[46vw] mt-[2.4vw]">
          Choosing the best E-commerce fulfillment service offers countless
          advantages for businesses looking to establish their online presence.
        </p>

        <div className="grid grid-cols-3 gap-x-[1.3vw] gap-y-[3.125vw] mt-[3.125vw]">
          {whyUs.map((item, key) => (
            <WhyUs data={item} key={key} />
          ))}
        </div>
      </div>
      <Faq faq={faq} />
    </div>
  );
};

export default page;
