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
        className={`flex w-full justify-between p-2 mt-2 border-t border-solid border-black mx-auto cursor-pointer`}
      >
        <p className="text-black text-[4vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.25vw] font-normal leading-[normal] tracking-[0.013vw] my-auto">
          {title}
        </p>

        <div className="flex items-center justify-center">
          <svg
            width="53"
            height="49"
            viewBox="0 0 53 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[28px] w-[28px] lg:w-[35px] lg:h-[35px] xl:w-[53px] xl:h-[49px]"
          >
            <g id="system-uicons:plus">
              <path
                id="Vector"
                d="M14.3828 24.5002H38.7344M26.5586 12.8335V36.1668"
                stroke="black"
                strokeWidth="2.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M14.3818 24.5002H38.7334M26.5576 12.8335V36.1668"
                stroke="black"
                strokeWidth="2.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <div
        className={`overflow-hidden text-[4vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.042vw]`}
        style={{
          height: isOpen ? accordianRef.current?.scrollHeight : "0px",
          transition: "height 0.7s ease-in-out",
        }}
      >
        <div className="p-[0.833vw] mb-[1.51vw]" ref={accordianRef}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Accordian;
