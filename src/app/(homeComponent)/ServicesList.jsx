import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { RiSeoLine } from "react-icons/ri";
import { MdWeb } from "react-icons/md";
import { Link } from "@/lib/next-compat";


const ServicesList = () => (
  <div className="bg-[#131d22] sm:px-0 px-[7.692vw] sm:py-[4.2vw] py-[8vw]  flex flex-col sm:flex-row">

    {/* Left Section */}
    <div className="sm:w-[32.292vw] sm:ml-[5.208vw] ml-[1.692vw] flex flex-col justify-center items-center sm:justify-start sm:items-start sm:gap-[1.042vw] gap-[2.5vw]">
      <h2 className="sm:w-[7.76vw] w-[23.529vw] sm:text-[1.25vw] text-[3.765vw] text-white">
        Our Services
      </h2>
      <h3 className="sm:w-[32.396vw] w-[72.235vw] sm:text-[3.333vw] text-[7.529vw]  text-white font-medium tracking-tight ">
        Check Our Services
      </h3>
      <Link
        href="/services"
        className="w-full sm:w-fit bg-[#05B7DF] sm:bg-[#05B7DF] text-[3.59vw] sm:text-[1.25vw] flex justify-center items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white tracking-[0.015rem] py-[2.821vw] sm:px-[3vw] sm:py-[2.821vw] md:py-[1vw] hover:text-black sm:hover:bg-[#109AD6] hover:border-none duration-500 hover:duration-500 hover:shadow-md sm:mb-0 mb-[8vw] font-medium"
      >
        View Services
        <GoArrowRight className="ml-[0.2vw] size-[3.5vw] sm:size-[1.5vw]" />
      </Link>


    </div>

    {/* Right Section */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-[9vw] sm:gap-[2.5vw] sm:mr-[5vw] sm:ml-[6.146vw] ">
      {[
        { platform: 'Development', icon: <CiMobile3 className="text-white w-[7vw] h-[6vw] sm:w-[2.76vw] sm:h-[2.5vw]" />, deployText: 'Mobile App' },
        { platform: 'Development', icon: <MdWeb className="text-white w-[7vw] h-[6vw] sm:w-[2.76vw] sm:h-[2.5vw]" />, deployText: 'Web App' },
        { platform: 'Marketing', icon: <RiSeoLine className="text-white w-[7vw] h-[6vw] sm:w-[2.76vw] sm:h-[2.5vw]" />, deployText: 'Digital' },
        { platform: 'Assistance', icon: <IoPeopleOutline className="text-white w-[7vw] h-[6vw] sm:w-[2.76vw] sm:h-[2.5vw]" />, deployText: 'Virtual' },
      ].map(({ platform, icon, deployText }) => (
        <div key={platform} className="bg-[#1d2023] border-l border-r border-t border-white/10 rounded-lg w-full sm:w-[10.625vw] sm:h-[12.5vw] sm:gap-0 gap-[12.564vw] flex flex-col">
          <div className="px-[5vw] mt-[4.615vw] sm:px-[1.3vw] sm:mt-[1.25vw]">
            {icon}
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <p className="text-white opacity-80 text-[2.353vw] sm:text-[0.729vw] font-normal leading-[6vw] sm:leading-[1.563vw] px-[5vw] sm:px-[1.3vw]">
              {deployText}
            </p>
            <p className="text-white text-[3.765vw] sm:text-[1.25vw] font-medium leading-[8vw] sm:leading-[2.083vw] mb-[3vw] sm:mb-[1.563vw] px-[5vw] sm:px-[1.3vw]">
              {platform}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ServicesList;
