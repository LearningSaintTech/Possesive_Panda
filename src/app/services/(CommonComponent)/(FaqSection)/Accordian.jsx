"use client";
import React, { useRef } from "react";

const Accordian = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const isOpen = activeIndex === index; // Check if the current accordion should be open
  const accordianRef = useRef(null); // Reference for the accordion

  // Handle mouse enter event to set the active index
  const handleMouseEnter = () => {
    // If the hovered index is not the current active index, set the active index to the hovered index
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    // Close the accordion if the current index is not the first one
    if (index !== 1) {
      setActiveIndex(null);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex cursor-pointer flex-row rounded-[0.625vw] bg-[#131D22] sm:mb-[1.198vw] sm:pl-[1.25vw] sm:pr-[1.667vw] sm:pt-[2.448vw] sm:pb-[2.448vw] mb-[4.198vw] pl-[4.25vw] pr-[4.667vw] pt-[4.448vw] pb-[4vw] relative transition-shadow duration-[1.2s] ease-in-out`}
      style={{
        boxShadow: isOpen ? "0 10px 8px rgba(255, 255, 255, 0.3)" : "none", // Shadow effect based on open state
      }}
    >
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <p className="text-[#FFF] sm:text-[1.25vw] text-[3.294vw] sm:font-medium font-normal capitalize">
            {title}
          </p>
        </div>
        <div
          className={`overflow-hidden transition-all duration-[1.2s] ease-in-out`}
          style={{
            maxHeight: isOpen ? `200px` : "0px", // Set max height based on open state
          }}
        >
          <div
            className="w-full sm:w-[29.583vw] sm:mt-[1.188vw] opacity-[0.6] ml-[10px] sm:ml-[1.25vw] text-white text-[14px] sm:text-[1.042vw] font-normal flex items-start"
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
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="transition-transform sm:block lg:h-[1.529vw] lg:w-[1.529vw] md:h-[2vw] md:w-[2vw] hidden duration-300 ease-in-out"
        >
          <path d="M28 10L16 22L4 10" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          className="transition-transform sm:hidden block duration-300 ease-in-out"
        >
          <path d="M15.4961 5.53369L8.99475 12.035L2.4934 5.53369" stroke="white" strokeWidth="2.16712" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default Accordian;
