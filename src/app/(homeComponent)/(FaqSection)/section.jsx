"use client";
import { useEffect, useState } from "react";
import data from "./data";
import Accordian from "./Accordian";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  console.log("sdafismkb",data);
  const [activeIndex, setActiveIndex] = useState(-1);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 0,
      disable: "mobile",
      once: true,
      mirror: true,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div className="mx-[5.2vw] lg:mx-[5.208vw] mt-[50px] lg:mt-[165px] flex flex-col lg:flex-row lg:justify-between min-h-fit overflow-hidden">
      <div
        className="w-full lg:w-[24.15vw] h-fit flex-shrink-0 text-black not-italic mb-[20px] lg:mb-[149px]"
        data-aos="zoom-out-right"
      >
        <h5 className="text-[#2A2A2A] text-[3.42vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[1.2px] mb-[14.75px] lg:mb-[32px]">
          FAQ
        </h5>
        <h2 className="text-[#2A2A2A] text-[10vw] md:text-[7.5vw] lg:text-[3.333vw]  font-medium leading-[normal] tracking-[0.122vw] lg:tracking-[0.033vw] mb-[38px] lg:mb-[8px]">
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
          PossesivePanda.com
        </a>
      </div>
      <div
        className="w-full ml-0 lg:ml-[4.219vw] mt-[50px] lg:mt-0"
        data-aos="zoom-out"
      >
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
  );
};

export default Faq;
