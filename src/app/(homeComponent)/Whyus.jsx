/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import card_1 from "../../assets/home/whyus/card-1.png";
import card_2 from "../../assets/home/whyus/card-2.png";
import card_3 from "../../assets/home/whyus/card-3.png";
import panda from "../../assets/home/whyus/mountain-panda.png";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 400,
      disable: "mobile",
      once: true,
      mirror: true,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row px-[9.375vw] lg:pl-[8.854vw] lg:pr-[3.177VW] pb-[58px] bg-black rounded-t-[2.083vw] h-fit relative">
      <div
        className="lg:w-[38.75vw] mt-[50px] lg:mt-[200px]"
        data-aos="fade-down-right"
      >
        <h6 className="text-[#fff] text-[3.42vw] lg:text-[1.25vw] font-normal tracking-[0.013vw] mb-[9.35px] lg:mb-[50px]">
          Why Us
        </h6>
        <h2 className="text-[#fff] font-medium text-[6.972vw] lg:text-[3.333vw] leading-[125%] tracking-[0.033vw] mb-[19.21px] lg:mb-[50px]">
          Why Have you Been Colaborating With Us?
        </h2>
        <p className="font-normal text-[#fff] text-[2.629vw] lg:text-[1.25vw] leading-[150%] tracking-[0.013vw]">
          We give you the same centralized database, user permissions,
          automation, version and access control that you can find in any modern
          FP&A software. But we're different in many ways. Ways that matter.
          That make our customers the most satisfied in the business.
        </p>
      </div>
      <div className="lg:ml-[7.552vw]">
        <div
          className="w-full lg:w-[20.833vw] min-h-[45vh] lg:min-h-[21.85vw] bg-[#FAFAFA] relative mt-[58px] mb-[60.69px] lg:mb-0"
          data-aos="flip-left"
        >
          <Image
            src={card_1}
            alt="card-1"
            className="absolute right-[7.051vw] lg:right-[1.563vw] lg:top-[1.458vw] top-[6.587vw]"
          />
          <h6 className="w-[56.667vw] lg:w-fit text-[7.521vw] font-semibold lg:text-[1.25vw] leading-[125%] tracking-[0.013vw] absolute bottom-[8.782vw] lg:bottom-[1.946vw] left-[9.403vw] lg:left-[2.083vw]">
            Plan With Confidence
          </h6>
        </div>
        <div
          className="w-full lg:w-[20.833vw] min-h-[45vh] lg:min-h-[21.85vw] bg-[#FAFAFA] relative lg:ml-[20.833vw] mb-[60.69px] lg:mb-0"
          data-aos="flip-right"
        >
          <Image
            src={card_2}
            alt="card-2"
            className="absolute right-[7.051vw] lg:right-[1.563vw] lg:top-[1.458vw] top-[6.587vw]"
          />
          <h6 className="w-[56.667vw] lg:w-fit font-semibold text-[7.521vw] lg:text-[1.25vw] leading-[125%] tracking-[0.013vw] absolute bottom-[8.782vw] lg:bottom-[1.946vw] left-[9.403vw] lg:left-[2.083vw]">
            Self- Serve Modelling
          </h6>
        </div>
        <div
          className="w-full lg:w-[20.833vw] min-h-[45vh] lg:min-h-[21.85vw] bg-[#FAFAFA] relative"
          data-aos="flip-left"
        >
          <Image
            src={card_3}
            alt="card-3"
            className="absolute right-[7.051vw] lg:right-[1.563vw] lg:top-[1.458vw] top-[6.587vw]"
          />
          <h6 className="w-[56.667vw] lg:w-fit font-semibold text-[7.521vw] lg:text-[1.25vw] leading-[125%] tracking-[0.013vw] absolute bottom-[8.782vw] lg:bottom-[1.946vw] left-[9.403vw] lg:left-[2.083vw]">
            On- Demand Reporting
          </h6>
        </div>
      </div>
      <Image
        src={panda}
        alt="panda"
        className="hidden md:block absolute bottom-0 left-0 w-[35.9vw] h-[30.667vw]"
        data-aos="zoom-in-right"
      />
    </div>
  );
};

export default WhyUs;
