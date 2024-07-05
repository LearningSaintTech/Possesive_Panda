"use client";
import React, { useRef } from "react";
import { GoPlus } from "react-icons/go";

const Accordian = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    } else {
      setActiveIndex(-1);
    }
  };

  const isOpen = activeIndex === index;
  const accordianRef = useRef(null);

  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className={`flex w-full h-full justify-between px-2 py-[2vw] lg:py-[1vw] 2xl:py-[1.667vw] mt-2 border-t border-solid border-black mx-auto cursor-pointer`}
      >
        <p className="text-black text-[4vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.25vw] font-normal leading-[normal] tracking-[0.013vw] my-auto">
          {title}
        </p>

        <div className="flex items-center justify-center">
          <GoPlus className="size-[7vw] sm:size-[2vw] mr-[0.5vw] opacity-50" />
        </div>
      </div>
      <div
        className={`overflow-hidden text-[3.7vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.042vw] ml-[1.2vw] sm:ml-0`}
        style={{
          height: isOpen ? accordianRef.current?.scrollHeight : "0px",
          transition: "height 0.7s ease-in-out",
        }}
      >
        <div className="p-[0.833vw] mb-[1.51vw] mt-0" ref={accordianRef}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Accordian;
