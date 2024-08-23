import React from 'react';
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
  return (
    <div className="relative w-auto h-[55.417vw] overflow-hidden bg-blue-600">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-1"></div>

      {/* Text Content */}
      <div className="relative ml-[5.208vw] w-full z-10 lg:w-[43.333vw] mt-[13.958vw] lg:mt-[13.958vw] flex flex-col gap-[5vw] lg:gap-[1.042vw]">
        <h1 className="w-[46.875vw] text-white text-[3.333vw] font-semibold tracking-wide">
          Boost Your <span className="text-[#60e2ff]">Business</span> With Powerful IT Technology
        </h1>
        <p className="text-white  text-[3.846vw] lg:text-[1.25vw] font-normal leading-[150%] lg:tracking-[0.015rem] tracking-[0.033vw] lg:w-[44.115vw] text-center lg:text-start">
          Elevate your business with our cutting-edge IT services and solutions, designed to meet every need and fuel your tech-driven dreams. .
        </p>

        <button
          className="bg-[#00111A] text-[3.846vw] md:text-[2.8vw] lg:text-[1.25vw] flex justify-center font-normal items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white px-[3vw] py-[2.821vw] md:py-[1vw] w-full lg:w-fit mx-auto lg:mx-0 sm:hover:text-[#2a2a2a] sm:hover:bg-[#60E2FF] hover:duration-300 duration-300 border-none mb-[7vw] sm:mb-0 mt-[2.083vw]"
        >
          Why Us
          <GoArrowRight className="hidden sm:block ml-2 md:ml-5 size-[3.5vw] md:size-[2vw] lg:size-[1.5vw]" />
        </button>
      </div>

      {/* Second Div Content Positioned at the Bottom Right */}
      <div className="absolute bottom-[10.417vw] z-10 text-left  px-2 py-2 right-[6.25vw]">
        <h1 className='w-[15.208vw] text-white text-[1.406vw] font-normal leading-[2.083vw] '> Trust us to keep your technology running smoothly,<span className='text-[#60e2ff] font-medium'> so you can focus on what truly matters</span>—growing your business.</h1>
        <div className="w-[14.688vw] overflow-hidden z-10">
          <div className="whitespace-nowrap animate-marquee text-white text-[0.938vw] font-medium font-['Helvetica Now Display'] leading-[35px] mt-[20px]">
            <span className="mx-4">Scroll down to discover how it works</span>
            <span className="mx-4">Scroll down to discover how it works</span>
            <span className="mx-4">Scroll down to discover how it works</span>
            <span className="mx-4">Scroll down to discover how it works</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
