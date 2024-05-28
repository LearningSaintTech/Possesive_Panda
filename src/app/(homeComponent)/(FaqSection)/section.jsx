"use client";
import { useState } from "react";
import data from "./data";
import Accordian from "./Accordian";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="ml-[8.698vw] mt-[165px] mr-[5.2vw] flex justify-between mb-[100px] h-[800px]">
      <div className="w-[24.15vw] h-fit flex-shrink-0 text-black not-italic">
        <h5 className="text-[1.25vw] font-normal leading-[normal] tracking-[1.2px] mb-[20px]">
          FAQ
        </h5>
        <h2 className="text-[3.333vw]  font-medium leading-[125%] tracking-[3.2px] mb-[50px]">
          Quick answers to questions you may have
        </h2>
        <p className="text-[1.042vw] font-normal leading-[normal]  mb-[20px]">
          Can’t find what you’re looking for?
        </p>
        <p className="text-[1.042vw] font-normal leading-[normal] mb-[40px]">
          Contact us here:
        </p>
        <a
          href=""
          className="text-[1.042vw] font-medium leading-[normal] underline text-[#60E2FF]"
        >
          PossesivePanda@.com
        </a>
      </div>
      <div className="w-full ml-[4.219vw] h-fit">
        <div className="w-[58.542vw] h-[112px] flex-shrink-0">
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
