/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import banner from "../../assets/services/top-image.png";
import feature_main from "../../assets/services/feature-main.png";
import feature_1 from "../../assets/services/feature-1.png";
import feature_2 from "../../assets/services/feature-2.png";
import work_1 from "../../assets/services/01.png";
import work_2 from "../../assets/services/02.png";
import work_3 from "../../assets/services/03.png";
import work_4 from "../../assets/services/04.png";
import data from "./data";
import Faq from "./Faq";

const Content = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div className="w-[62vw]">
      <Image src={banner} alt="banner" className="w-[61.875vw] h-[33.958vw]" />
      <div className="mt-[20px] lg:mt-[50px] xl:mt-[70px] mb-[10vw] lg:mb-[5vw]">
        <h6 className="text-neutral-800 font-semibold tracking-[0.025rem] leading-[normal] text-[6vw] lg:text-[3vw] xl:text-[2.083vw]">
          We Would love to share a similar experience
        </h6>
        <p className="text-justify text-neutral-800 text-[4vw] lg:text-[2vw] xl:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[15px] lg:mt-[30px] xl:mt-[50px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-[3.646vw]">
        <Image
          src={feature_main}
          alt="feature"
          className="lg:w-[20vw] 2xl:w-[25.6vw]"
        />
        <div className="w-[27.083vw]">
          <h6 className="text-neutral-800 lg:text-[2.083vw] font-semibold leading-[normal] tracking-[0.025rem] lg:mb-2 2xl:mb-8">
            Our Features :
          </h6>
          <p className="text-neutral-800 lg:text-[1.25vw] font-normal tracking-[0.015rem] leading-[normal]">
            Loreum ipsum dolar sit amet,consectetur adipiscing elid, sed do
            eiusmod tempor.
          </p>
          <div className="flex gap-6 mt-[4.688vw] mb-[2.604vw]">
            <div className="w-[6rem] mt-2">
              <Image
                src={feature_1}
                alt="feature-1"
                className="w-[4.4rem] h-12"
              />
            </div>
            <div>
              <h6 className="text-neutral-800 text-[1.667vw] font-medium leading-[normal] tracking-[0.02rem]">
                Best Business consulting
              </h6>
              <p className="text-neutral-800 text-[1.042vw] font-normal leading-[normal] tracking-[0.013rem]">
                Loreum ipsum dolar sit amet,consectetur adipiscing elid, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-[6rem] mt-2">
              <Image
                src={feature_2}
                alt="feature-2"
                className="w-[4.4rem] h-12"
              />
            </div>
            <div>
              <h6 className="text-neutral-800 text-[1.667vw] font-medium leading-[normal] tracking-[0.02rem]">
                24/7 customer support
              </h6>
              <p className="text-neutral-800 text-[1.042vw] font-normal leading-[normal] tracking-[0.013rem]">
                Loreum ipsum dolar sit amet,consectetur adipiscing elid, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[4.167vw] flex flex-col gap-[1.667vw]">
        <h2 className="text-neutral-800 text-[2.083vw] font-medium leading-[normal] tracking-[0.025rem]">
          Benefits With Our Service:
        </h2>
        <p className="text-neutral-800 text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] w-[59.167vw]">
          Loreum ipsum dolar sit amet,consectetur adipiscing elid, sed do
          eiusmod tempor. Loreum ipsum dolar sit amet,consectetur adipiscing
          elid, sed do eiusmod tempor. Loreum ipsum dolar sit amet,consectetur
          adipiscing elid, sed do eiusmod tempor.
        </p>
        <ol className="list-decimal text-neutral-800 text-[1.25vw] font-medium leading-[normal] tracking-[0.015rem] ml-[1.25vw]">
          <li>Save Valuable Time</li>
          <li>Offer an Outsider's Perception</li>
          <li>Fill in Gaps in Your Knowledge</li>
          <li>Save Money</li>
          <li>Achieve Goals</li>
          <li>Offer Expertise</li>
        </ol>
      </div>
      <div>
        <h2 className="text-neutral-800 text-[2.083vw] font-semibold leading-[normal] tracking-[0.025rem] mb-[2.083vw]">
          Our Work Process
        </h2>
        <div className="flex gap-[1.042vw]">
          <div>
            <div className="flex items-center gap-[1.042vw]">
              <Image src={work_1} alt="work-1" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="183"
                height="29"
                viewBox="0 0 183 29"
                fill="none"
              >
                <path
                  d="M4.5 10.3276C93.5 -28.5127 89 64 178.5 10.3276"
                  stroke="#212121"
                  stroke-dasharray="2 2"
                />
                <circle cx="4.5" cy="10.5" r="4.5" fill="#212121" />
                <circle cx="178.5" cy="10.5" r="4.5" fill="#212121" />
              </svg>
            </div>
            <h2 className="text-neutral-80 text-[1.25vw] font-medium leading-[normal] tracking-[0.015rem] my-[1.667vw]">
              Identifying Problem
            </h2>
            <p className="text-neutral-800 text-[1.042vw] font-normal leading-[150%] tracking-[0.0125rem] w-[12.5vw]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
          <div>
            <div className="flex items-center gap-[1.042vw]">
              <Image src={work_2} alt="work-2" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="183"
                height="29"
                viewBox="0 0 183 29"
                fill="none"
              >
                <path
                  d="M4.5 10.3276C93.5 -28.5127 89 64 178.5 10.3276"
                  stroke="#212121"
                  stroke-dasharray="2 2"
                />
                <circle cx="4.5" cy="10.5" r="4.5" fill="#212121" />
                <circle cx="178.5" cy="10.5" r="4.5" fill="#212121" />
              </svg>
            </div>
            <h2 className="text-neutral-80 text-[1.25vw] font-medium leading-[normal] tracking-[0.015rem] my-[1.667vw]">
              Identifying Problem
            </h2>
            <p className="text-neutral-800 text-[1.042vw] font-normal leading-[150%] tracking-[0.0125rem] w-[12.5vw]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
          <div>
            <div className="flex items-center gap-[1.042vw]">
              <Image src={work_3} alt="work-3" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="183"
                height="29"
                viewBox="0 0 183 29"
                fill="none"
              >
                <path
                  d="M4.5 10.3276C93.5 -28.5127 89 64 178.5 10.3276"
                  stroke="#212121"
                  stroke-dasharray="2 2"
                />
                <circle cx="4.5" cy="10.5" r="4.5" fill="#212121" />
                <circle cx="178.5" cy="10.5" r="4.5" fill="#212121" />
              </svg>
            </div>
            <h2 className="text-neutral-80 text-[1.25vw] font-medium leading-[normal] tracking-[0.015rem] my-[1.667vw]">
              Identifying Problem
            </h2>
            <p className="text-neutral-800 text-[1.042vw] font-normal leading-[150%] tracking-[0.0125rem] w-[12.5vw]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
          <div>
            <div className="flex items-center gap-[1.042vw]">
              <Image src={work_4} alt="work-4" />
            </div>
            <h2 className="text-neutral-80 text-[1.25vw] font-medium leading-[normal] tracking-[0.015rem] my-[1.667vw]">
              Identifying Problem
            </h2>
            <p className="text-neutral-800 text-[1.042vw] font-normal leading-[150%] tracking-[0.0125rem] w-[12.5vw]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-neutral-800 text-[2.083vw] font-semibold leading-[normal] tracking-[0.025rem] mb-[2.083vw] mt-[5vw]">
          Frequently asked questions
        </h2>
        <div className="w-full lg:w-[58.542vw] h-[12vh] 2xl:h-[12vh] flex-shrink-0 mb-[18vw]">
          {data.map((item) => (
            <Faq
              key={item.key}
              title={item.title}
              index={item.key}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              <p className="w-full mx-auto">{item.data}</p>
            </Faq>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
