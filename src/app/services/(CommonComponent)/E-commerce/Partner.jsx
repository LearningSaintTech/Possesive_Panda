import React from 'react';
import { FaAngleRight } from "react-icons/fa6";

const titleData = [
  { title: "Delivered 50+ eCommerce websites across industries" },
  { title: "Live Video Consultation" },
  { title: "Expertise with all eCommerce development platforms." },
  { title: "Voice-Assisted Shopping" },
  { title: "Enhanced traffic and sales" },
  { title: "Decentralized Marketplaces" },
  { title: "Google Partnership" },
  { title: "Interactive User Manuals" },
  { title: "Provide eCommerce solutions powered by AI/AR" },
  { title: "IOT-Powered eCommerce Operations" },
];

const Partner = () => {
  return (
    <div className='flex flex-col gap-[7.529vw] sm:gap-[4.167vw] bg-[#00111A] px-[7.059vw] sm:px-[5.208vw] py-[14.118vw] sm:py-[5.729vw]'>
      <h2 className='text-white text-[7.529vw] sm:text-[2.5vw] font-medium sm:w-[42.552vw] text-center sm:text-left '>
        Choose Possesive Panda as Your eCommerce Success Partner
      </h2>
      <div className='grid sm:grid-cols-2 sm:gap-x-[4.479vw] gap-y-[2.353vw] sm:gap-y-[1.042vw] '>
        {titleData.map((item, index) => (
          <div
            key={index}
            className='flex justify-between px-[3vw] sm:px-[1.667vw] py-[3vw] sm:py-[1.406vw] rounded-[1.176vw] sm:rounded-[0.521vw] border-[0.447px] sm:border sm:cursor-pointer hover:bg-[rgba(217,217,217,0.2)]'
          >
            <p className='text-white text-[2.824vw] sm:text-[1.25vw] font-normal capitalize'>{item.title}</p>
            <FaAngleRight className='text-white hidden sm:block size-[2vw] ' />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Partner;
