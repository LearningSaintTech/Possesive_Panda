"use client";
import React from "react";

const Card = ({ data, index, hoveredIndex, setHoveredIndex }) => {
  const isHovered =
    hoveredIndex >= 0 && index <= hoveredIndex && index !== hoveredIndex;
  const current = hoveredIndex >= 0 && index <= hoveredIndex;
  const hovered = index === hoveredIndex;
  return (
    <div
      className={`w-[22vw] border-t-0 sm:border-t pr-[2.6vw] ${
        isHovered ? "border-[#60E2FF] duration-1000" : "duration-1000"
      }`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(-1)}
    >
      <span
        className={`text-[3.5vw] sm:text-[1.042vw] font-medium leading-[133.333%] mt-4
           sm:m-0 p-[3vw] sm:p-[0.8vw] border rounded-full w-[4vw] h-[4vw] sm:w-[2vw] sm:h-[2vw] flex items-center justify-center relative top-[-1vw] z-[1] ${
          current
            ? "bg-[#60E2FF] text-white duration-700"
            : "bg-white text-[#212121] duration-700"
        }`}
      >
        {data.num}
      </span>
      <h6
        className={`text-[4.346vw] sm:text-[1.25vw] font-medium leading-[145.1%] mt-[2vw] w-[50vw] sm:w-auto" ${
          hovered ? "text-[#60E2FF] duration-700" : "text-[#212121] duration-700"
        }`}
      >
        {data.title}
      </h6>
      <p className="text-[#42424A] text-[3.63vw] sm:text-[1.042vw] leading-[174.15%] mt-[1.5vw] sm:mt-[0.8vw] w-[40vw] sm:w-[20vw] sm:text-justify">
        {data.description}
      </p>
    </div>
  );
};

export default Card;
