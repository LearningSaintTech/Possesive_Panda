/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import card_1 from "../../assets/home/whyus/card-1.png";
import card_2 from "../../assets/home/whyus/card-2.png";
import card_3 from "../../assets/home/whyus/card-3.png";

const WhyUs = () => {
  return (
    <div className="flex flex-col lg:flex-row px-[9.375vw] lg:pl-[11.25vw] lg:pr-0 py-[100px] bg-black mt-[100px] rounded-[2.083vw] h-fit">
      <div className="lg:w-[37.74vw] flex flex-col justify-center">
        <h6 className="text-[#fff] text-[3.42vw] lg:text-[1.25vw] font-normal tracking-[0.063vw] mb-[9.35px] lg:mb-[20px]">
          Why Us
        </h6>
        <h2 className="text-[#fff] font-medium text-[6.972vw] lg:text-[3.3vw] leading-[125%] tracking-[0.167vw] mb-[19.21px] lg:mb-[40px]">
          Why Have you Been Colaborating With Us?
        </h2>
        <p className="font-medium text-[#fff] text-[2.629vw] lg:text-[1.25vw] leading-[200%] tracking-[0.063vw]">
          We give you the same centralized database, user permissions,
          automation, version and access control that you can find in any modern
          FP&A software. But we're different in many ways. Ways that matter.
          That make our customers the most satisfied in the business.
        </p>
      </div>
      <div className="lg:ml-[9.375vw]">
        <div className="w-full lg:w-[18.75vw] h-[420px] bg-[#D9D9D9] relative mt-[58px] mb-[60.69px] lg:mb-0">
          <Image
            src={card_1}
            alt="card-1"
            className="absolute right-[7.051vw] lg:right-[1.563vw] lg:top-[1.458vw] top-[6.587vw]"
          />
          <h6 className="w-[56.667vw] lg:w-[12.604vw] text-[7.521vw] lg:text-[1.667vw] leading-[125%] tracking-[0.083vw] absolute bottom-[8.782vw] lg:bottom-[1.946vw] left-[9.403vw] lg:left-[2.083vw]">
            Plan With Confidence
          </h6>
        </div>
        <div className="w-full lg:w-[18.75vw] h-[420px] bg-[#D9D9D9] relative lg:ml-[18.75vw] mb-[60.69px] lg:mb-0">
          <Image
            src={card_2}
            alt="card-2"
            className="absolute right-[7.051vw] lg:right-[1.563vw] lg:top-[1.458vw] top-[6.587vw]"
          />
          <h6 className="w-[56.667vw] lg:w-[12.604vw] text-[7.521vw] lg:text-[1.667vw] leading-[125%] tracking-[0.083vw] absolute bottom-[8.782vw] lg:bottom-[1.946vw] left-[9.403vw] lg:left-[2.083vw]">
            Self- Serve Modelling
          </h6>
        </div>
        <div className="w-full lg:w-[18.75vw] h-[420px] bg-[#D9D9D9] relative">
          <Image
            src={card_3}
            alt="card-3"
            className="absolute right-[7.051vw] lg:right-[1.563vw] lg:top-[1.458vw] top-[6.587vw]"
          />
          <h6 className="w-[56.667vw] lg:w-[12.604vw] text-[7.521vw] lg:text-[1.667vw] leading-[125%] tracking-[0.083vw] absolute bottom-[8.782vw] lg:bottom-[1.946vw] left-[9.403vw] lg:left-[2.083vw]">
            On- Demand Reporting
          </h6>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
