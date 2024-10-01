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
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className={`flex w-full h-full justify-between px-2 py-[2vw] sm:py-[1vw] 2xl:py-[1.667vw] mt-2 border-t border-solid border-white mx-auto cursor-pointer`}
      >
        <p className="text-[#FFF] text-[3.846vw] md:text-[2vw] sm:text-[1.5vw] xl:text-[1.25vw] font-normal leading-[normal] tracking-[0.033vw] sm:tracking-[0.013vw] my-auto">
          {title}
        </p>

        <div className="flex items-center justify-center">
          <svg
            width="53"
            height="49"
            viewBox="0 0 53 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[28px] w-[28px] sm:w-[35px] sm:h-[35px] xl:w-[53px] xl:h-[49px] mr-[0.5vw] text-white"
          >
            <g id="system-uicons:plus">
              <path
                id="Vector"
                d="M14.3828 24.5002H38.7344M26.5586 12.8335V36.1668"
                stroke="white"
                strokeWidth="2.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M14.3818 24.5002H38.7334M26.5576 12.8335V36.1668"
                stroke="white"
                strokeWidth="2.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>

        </div>
      </div>
      <div
        className={`overflow-hidden text-[3.846vw] md:text-[2vw] sm:text-[1.5vw] xl:text-[1.042vw] text-white`}
        style={{
          height: isOpen ? accordianRef.current?.scrollHeight : "0px",
          transition: "height 0.7s ease-in-out",
        }}
      >
        <div className="px-[2.5vw] sm:p-[0.7vw] mb-[10vw]" ref={accordianRef}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Accordian;
