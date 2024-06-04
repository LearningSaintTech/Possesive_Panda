"use client";
import { useState } from "react";
import data from "./data";
import Accordian from "./Accordian";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="mx-[9.375vw] lg:mx-[5.208vw] mt-[165px] flex flex-col lg:flex-row lg:justify-between h-[1300px] lg:h-[800px]">
      <div className="w-screen lg:w-[24.15vw] h-fit flex-shrink-0 text-black not-italic mb-[149px]">
        <h5 className="text-[#2A2A2A] text-[5.472vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[1.2px] mb-[14.75px] lg:mb-[32px]">
          FAQ
        </h5>
        <h2 className="text-[#2A2A2A] text-[14.563vw] lg:text-[3.333vw]  font-medium leading-[normal] tracking-[2.335px] lg:tracking-[0.033vw] mb-[38px] lg:mb-[8px]">
          Quick answers to questions you may have
        </h2>
        <p className="text-[#2A2A2A] text-[4.56vw] lg:text-[1.042vw] font-normal leading-[normal] mb-[14px] lg:mb-[13px]">
          Can’t find what you’re looking for?
        </p>
        <p className="text-[#2A2A2A] text-[4.56vw] lg:text-[1.042vw] font-normal leading-[normal] mb-[28.7px] lg:mb-[46px]">
          Contact us here:
        </p>
        <a
          href=""
          className="text-[4.56vw] lg:text-[1.042vw] font-medium leading-[normal] underline text-[#60E2FF]"
        >
          hello@possesivepanda.com
        </a>
      </div>
      <div className="w-full ml-0 lg:ml-[4.219vw] h-fit mt-[50px] lg:mt-0">
        <div className="w-full lg:w-[58.542vw] h-[100px] lg:h-[112px] flex-shrink-0">
          {data.map((item) => (
            <Accordian
              key={item.key}
              title={item.title}
              index={item.key}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              <p className="w-full mx-auto">{item.data}</p>
            </Accordian>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
