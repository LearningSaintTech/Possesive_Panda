import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { FaAws, FaLinux } from "react-icons/fa6";
import { SiGooglecloud, SiMicrosoftazure } from "react-icons/si";
import Link from "next/link";


const ServicesList = () => (
  <div className="bg-[#131d22] sm:px-0 px-[7.692vw] lg:py-[4.2vw] py-[10vw] flex flex-col lg:flex-row lg:mt-0 mt-[15.385vw]">

    {/* Left Section */}
    <div className="lg:w-[32.292vw] lg:ml-[5.208vw] ml-[1.692vw] flex flex-col justify-around lg:gap-[1.042vw] gap-[2.5vw]">
      <h5 className="text-[4.103vw] sm:text-[4vw] md:text-[2vw] lg:text-[1.667vw] tracking-[0.015rem] text-center lg:text-left text-white">
        Our Services
      </h5>
      <h2 className="text-[8.205vw] sm:text-[6vw] md:text-[3.5vw] lg:text-[3.333vw] text-white font-medium tracking-tight text-center lg:text-left">
        Check Our Services
      </h2>
      <Link
        href="/services"
        className="w-full lg:w-fit bg-[#05B7DF] sm:bg-[#05B7DF] text-[3.59vw] md:text-[3vw] lg:text-[1.25vw] flex justify-center items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white tracking-[0.015rem] py-[2.821vw] sm:px-[3vw] sm:py-[2.821vw] md:py-[1vw] hover:text-black sm:hover:bg-[#109AD6] hover:border-none duration-500 hover:duration-500 hover:shadow-md lg:mb-0 mb-[8vw] font-medium"
      >
        View Services
        <GoArrowRight className="ml-[0.2vw] size-[3.5vw] md:size-[2vw] lg:size-[1.5vw]" />
      </Link>


    </div>

    {/* Right Section */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[9vw] sm:gap-[2.5vw] sm:mr-[5vw] sm:ml-[6.146vw] ">
      {[
        { platform: 'AWS', icon: <FaAws className="text-white w-[7vw] h-[6vw] sm:w-[2.76vw] sm:h-[2.5vw]" />, deployText: 'Deploy to' },
        { platform: 'GCP', icon: <SiGooglecloud className="text-white w-[7vw] h-[6vw] sm:w-[2.76vw] sm:h-[2.5vw]" />, deployText: 'Deploy to' },
        { platform: 'Azure', icon: <SiMicrosoftazure className="text-white w-[7vw] h-[6vw] sm:w-[2.76vw] sm:h-[2.5vw]" />, deployText: 'Deploy to' },
        { platform: 'Linux', icon: <FaLinux className="text-white w-[7vw] h-[6vw] sm:w-[2.76vw] sm:h-[2.5vw]" />, deployText: 'Deploy to' },
      ].map(({ platform, icon, deployText }) => (
        <div key={platform} className="bg-[#1d2023] border-l border-r border-t border-white/10 rounded-lg w-full lg:w-[10.625vw] lg:h-[12.5vw] lg:gap-0 gap-[12.564vw] flex flex-col">
          <div className="px-[5vw] mt-[4.615vw] sm:px-[1.3vw] sm:mt-[1.25vw]">
            {icon}
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <p className="text-white text-[4vw] sm:text-[0.729vw] font-normal leading-[6vw] sm:leading-[1.563vw] px-[5vw] sm:px-[1.3vw]">
              {deployText}
            </p>
            <h4 className="text-white text-[6vw] sm:text-[1.25vw] font-medium leading-[8vw] sm:leading-[2.083vw] mb-[3vw] sm:mb-[1.563vw] px-[5vw] sm:px-[1.3vw]">
              {platform}
            </h4>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ServicesList;
