import React from 'react';
import { FaAngleRight } from "react-icons/fa6";



const Partner = ({ heading, heading2, title }) => {
  return (
    <div className='flex flex-col gap-[7.529vw] sm:gap-[4.167vw] bg-[#00111A] px-[7.059vw] sm:px-[5.208vw] py-[14.118vw] sm:py-[5.729vw]'>
      <div className='flex sm:flex-row  flex-col gap-[2.353vw] sm:gap-0 sm:justify-between '>
        <h2 className='text-white text-[7.529vw] sm:text-[2.5vw] font-medium sm:w-[42.552vw] text-center sm:text-left '>
          {heading}
        </h2>
        <p className='text-white text-[3.765vw] sm:text-[1.25vw] font-normal sm:w-[37.135vw] text-center sm:text-right '> {heading2} </p>
      </div>
      <div className='grid sm:grid-cols-2 sm:gap-x-[4.479vw] gap-y-[3vw] sm:gap-y-[1vw] '>
        {title.map((text, index) => (
          <div
            key={index}
            className='flex items-center justify-center px-[3vw] sm:px-[1.667vw] py-[3vw] sm:py-[1.406vw] rounded-[1.176vw] sm:rounded-[0.521vw] border-[0.447px] sm:border sm:cursor-pointer hover:bg-[rgba(217,217,217,0.2)]'
          >
            <p className='text-white text-[2.824vw] sm:text-[1.25vw] font-normal  text-center'>{text}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Partner;
