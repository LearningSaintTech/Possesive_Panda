"use client";
import React, { useRef } from "react";

const Accordian = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    } else {
      setActiveIndex(null);
    }
  };

  const isOpen = activeIndex === index;
  const accordianRef = useRef(null);

  return (
    <div
      onClick={() => handleSetIndex(index)} // Click handler on the parent div
      className={`flex cursor-pointer flex-row rounded-[0.625vw] bg-[#131D22] mb-[1.198vw] pl-[1.25vw] pr-[1.667vw] pt-[2.448vw] sm:pb-[2.448vw] pb-[1vw] relative transition-shadow duration-[1.2s] ease-in-out`}
      style={{
        boxShadow: isOpen
          ? "0 10px 8px rgba(255, 255, 255, 0.3)" // White shadow
          : "none",
      }}
    >
      <div className="flex flex-col w-full">
        <div className="flex  justify-between">
          <p className="text-[#FFF] sm:text-[1.25vw] text-[3.294vw] sm:font-medium font-normal capitalize">
            {title}
          </p>
        </div>
        <div
          className={`overflow-hidden transition-all duration-[1.2s] ease-in-out`}
          style={{
            maxHeight: isOpen ? `200px` : "0px",
          }}
        >
          <div
            className="w-full sm:w-[29.583vw]  sm:mt-[1.188vw] opacity-[0.6] ml-[10px] sm:ml-[1.25vw] text-white text-[14px] sm:text-[1.042vw] font-normal flex items-start"
            ref={accordianRef}
          >
            <ul>
              <li>{children}</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center transition-transform duration-300 ease-in-out"
        style={{
          transform: isOpen ? "translateY(42%) rotate(180deg)" : "rotate(0)",
          transition: "transform 0.7s ease-in-out",
        }}
      >
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"

          className="transition-transform sm:block hidden duration-300 ease-in-out"
        >
         <path d="M28 10L16 22L4 10" stroke="white" stroke-width="4" stroke-linecap="round"/>

        </svg>


        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"

          className="transition-transform sm:hidden block duration-300 ease-in-out"

        >
          <path d="M15.4961 5.53369L8.99475 12.035L2.4934 5.53369" stroke="white" stroke-width="2.16712" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default Accordian;
