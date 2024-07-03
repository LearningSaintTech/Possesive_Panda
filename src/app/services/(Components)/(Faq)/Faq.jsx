"use client";
import { useState } from "react";
import Accordian from "./Accordian";

const Faq = ({ faq }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="mx-[5.2vw] lg:mx-[6.771vw] mt-[30px] lg:mt-[5.2vw] flex flex-col lg:flex-row lg:justify-between min-h-fit overflow-hidden">
      <div className="w-full lg:w-[24.15vw] h-fit flex-shrink-0 text-black not-italic mb-[1.042vw] lg:mb-[7.76vw]">
        <h5 className="text-[#2A2A2A] text-[6.346vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[1.2px] mb-[14.75px] lg:mb-[32px]">
          FAQ
        </h5>
        <h2 className="text-[#2A2A2A] text-[8vw] md:text-[7.5vw] lg:text-[3.333vw] font-medium leading-[normal] tracking-[0.090vw] lg:tracking-[0.033vw] mb-[30px] lg:mb-[8px]">
          Quick answers to questions you may have
        </h2>
        <p className="text-[#2A2A2A] text-[4.56vw] lg:text-[1.042vw] font-normal leading-[normal] mb-[14px] lg:mb-[13px] hidden lg:block">
          Can’t find what you’re looking for?
        </p>
        <p className="text-[#2A2A2A] text-[4.56vw] lg:text-[1.042vw] font-normal leading-[normal] mb-[28.7px] lg:mb-[46px] hidden lg:block">
          Contact us here:
        </p>
        <a
          href="mailto:hello@possesivepanda.com"
          className="text-[4.56vw] lg:text-[1.042vw] font-medium leading-[normal] underline text-[#60E2FF] hover:text-[#56a5b6] hidden lg:block"
        >
          PossesivePanda.com
        </a>
      </div>
      <div className="w-full ml-0 lg:ml-[4.219vw] mt-[1.8vw] lg:mt-0">
        <div className="w-full lg:w-[58.542vw] min-h-full 2xl:min-h-full flex-shrink-0">
          {faq.map((item, key) => (
            <Accordian
              key={item.key}
              title={item.title}
              index={key}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              <p className="w-full mx-auto">{item.description}</p>
            </Accordian>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
