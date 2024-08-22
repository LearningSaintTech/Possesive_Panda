"use client";
import { useState } from "react";
import data from "./data";
import Accordian from "../(FaqSection)/Accordian.jsx";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(-1); 
  return (
    <div className="bg-[#00111A]">
      <div className="mx-[5.2vw] lg:mx-[6.771vw] mt-[15.385vw] lg:mt-[8.594vw] flex flex-col lg:flex-row lg:justify-between min-h-fit overflow-hidden ">
        <div className="w-full lg:w-[24.15vw] h-fit flex-shrink-0 text-white not-italic mb-[1.042vw] lg:mb-[7.76vw]">
          <h5 className="text-[#FFF] text-[5.128vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[1.2px] mb-[2.564vw] lg:mb-[32px] text-center lg:text-left">
            FAQ
          </h5>
          <h2 className="text-[#FFF] sm:px-0 px-3 text-[8.5vw] md:text-[7.5vw] lg:text-[3.334vw] font-semibold leading-[normal] tracking-[0.062vw] lg:tracking-[0.033vw] mb-[5.128vw] lg:mb-[2vw] text-center lg:text-left">
            Quick answers to questions you may have
          </h2>
          <p className="text-[#FFF] text-[4vw] lg:text-[1.042vw] font-normal leading-[normal] mb-[2.564vw] lg:mb-[13px] text-center lg:text-left">
            Can’t find what you’re looking for?
          </p>
          <p className="text-[#FFF] text-[4vw] lg:text-[1.042vw] font-normal leading-[normal] mb-[2vw] lg:mb-[2vw] text-center lg:text-left">
            Contact us here:
          </p>
          <a
            href="mailto:hello@possesivepanda.com"
            className="text-[5.128vw] lg:text-[1.042vw] font-normal leading-[normal] underline text-[#60E2FF] hover:text-[#56a5b6] lg:ml-0 ml-[17vw]"
          >
            PossesivePanda.com
          </a>
        </div>
        <div className="w-full ml-0 lg:ml-[4.219vw] mt-[7vw] lg:mt-0">
          <div className="w-full lg:w-[58.542vw] min-h-full 2xl:min-h-full flex-shrink-0">
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
    </div>
  );
};

export default Faq;
