"use client";
import React, { useRef } from "react";
import { Image } from "@/lib/next-compat";

const AccordionItems = ({
  question,
  answer,
  image,
  index,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`w-[90%] py-4 sm:py-8 mx-auto bg-transparent overflow-hidden ${
        index === 0 ? "" : "border-t-[1px]"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`flex justify-between items-center cursor-pointer ${
          isOpen ? "text-gray-900" : ""
        }`}
      >
        <p className="md:text-4xl text-[6.154vw] lg:text-4xl font-medium">
          {isOpen ? "" : question}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          className={`lg:w-10 w-4 md:w-6 transition-transform  ${
            isOpen ? "hidden" : ""
          }`}
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M35.2716 9.02309L37.4054 6.8892L34.3877 6.8892L4.46537 6.8892L4.51285 1.52375L46.5716 1.52374L46.5716 43.5825L41.2061 43.63L41.2061 13.7077L41.2061 10.6899L39.0723 12.8238L6.0581 45.8379L2.2574 42.0372L35.2716 9.02309Z"
            fill="gray"
            stroke="white"
            strokeWidth="2.5"
          />
        </svg>
      </div>

      <div
        className={`overflow-hidden transition-all duration-700 flex gap-6 lg:gap-10 flex-col lg:flex-row justify-between ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div>
          <p className="md:text-4xl text-[5.128vw] lg:text-4xl font-medium text-center lg:text-left">
            {question}
          </p>
          <p className="w-full sm:w-[49.375vw] opacity-90 text-justify text-zinc-900 text-[3.846vw] sm:text-[1.25vw] font-normal sm:leading-[2vw] tracking-tight md:text-xl lg:text-xl mt-4">
            {answer}
          </p>
        </div>
        <Image
          src={image}
          alt="shadow"
          className="hidden sm:block lg:w-[34.375vw] lg:h-[20.833vw] w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default AccordionItems;