import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { FaAws, FaLinux } from "react-icons/fa6";
import { SiGooglecloud, SiMicrosoftazure } from "react-icons/si";

const ServicesList = () => (
  <div className="bg-[#131d22] py-[6.2vw] flex flex-col lg:flex-row">
    {/* Left Section */}
    <div className="flex flex-col mb-[1.667vw] lg:mb-[0vw] lg:w-1/2 ml-[5.208vw]">
      <h2 className="text-white text-[1.25vw] font-normal leading-[2.083vw]">Our Services</h2>
      <h3 className="w-[32.396vw] text-white text-[3.333vw] font-normal mt-[1.443vw]">Check Our Services</h3>
      <button
        className="bg-stone-900 text-[4vw] md:text-[2.8vw] lg:text-[1.25vw] flex justify-center font-normal items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white px-[3vw] py-[2.5vw] md:py-[1vw] w-full lg:w-fit mx-auto lg:mx-0 hover:text-[#2a2a2a] hover:bg-[#60E2FF] hover:duration-300 duration-300 border-none mt-[2.604vw]"
      >
        View Services
        <GoArrowRight className="ml-[0.104vw] md:ml-[1.042vw] size-[3.5vw] md:size-[2vw] lg:size-[1.5vw]" />
      </button>
    </div>

    {/* Right Section */}
    <div className="flex space-x-[2.5vw] mr-[5vw]">
      {[
        {
          platform: 'AWS',
          icon: <FaAws className="text-white w-[2.76vw] h-[2.5vw]" />,
          deployText: 'Deploy to',
        },
        {
          platform: 'GCP',
          icon: <SiGooglecloud className="text-white w-[2.76vw] h-[2.5vw]" />,
          deployText: 'Deploy to',
        },
        {
          platform: 'Azure',
          icon: <SiMicrosoftazure className="text-white w-[2.76vw] h-[2.5vw]" />,
          deployText: 'Deploy to',
        },
        {
          platform: 'Linux',
          icon: <FaLinux className="text-white w-[2.76vw] h-[2.5vw]" />,
          deployText: 'Deploy to',
        },
      ].map(({ platform, icon, deployText }) => (
        <div key={platform} className="bg-[#1d2023] border-l border-r border-t border-white/10 rounded-lg w-[10.625vw] lg:h-[12.5vw] flex flex-col">
          <div className="px-[1.3vw] mt-[1.25vw] w-[2.76vw] h-[2.5vw]">
            {icon}
          </div>
          <div className=" flex-1 flex flex-col justify-end">
            <div className="px-[1.3vw]">
              <p className="text-white text-[0.729vw] font-normal leading-[1.563vw]">{deployText}</p>
            </div>
            <div className="px-[1.3vw]">
              <h4 className="text-white text-[1.25vw] font-medium leading-[2.083vw] mb-[1.563vw]">{platform}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ServicesList;
