"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";

const Strategy = ({ statergy }) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollLeftFunc = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 200;
    }
  };

  const scrollRightFunc = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200;
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 0.8;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div>
      <h2 className="text-[#212121] text-[4.346vw] sm:text-[2.083vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[40vw] mt-4 sm:mt-[5.2vw] ">
        {statergy.title}
      </h2>
      <p className="text-[#212121] text-[3.363vw] sm:text-[1.25vw] font-normal capitalize leading-[normal] tracking-[0.015rem] w-full sm:w-[47.66vw] mt-[2vw] sm:mt-[0.8vw]">
        {statergy.paragraph}
        <span className="font-medium">{statergy.hilighted}</span>
      </p>
      <div className="relative">
        <button
          onClick={scrollLeftFunc}
          className="hidden sm:block absolute left-[-5vw] top-[7.5vw] p-[1vw] rounded-full hover:text-white hover:bg-[#00AFF1] duration-500 hover:duration-500"
        >
          <FaArrowLeft className="size-[2vw] opacity-80" />
        </button>
        <button
          onClick={scrollRightFunc}
          className="hidden sm:block absolute right-[-5vw] top-[7.5vw] p-[1vw] rounded-full hover:text-white hover:bg-[#00AFF1] duration-500 hover:duration-500"
        >
          <FaArrowRight className="size-[2vw] opacity-80" />
        </button>
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="sm:flex grid grid-cols-2 sm:overflow-x-scroll py-[4vw] h-fit no-scrollbar mb-8 sm:mb-0 sm:cursor-grab active:cursor-grabbing select-none"
        >
          {statergy.cards.map((item, key) => (
            <Card
              data={item}
              key={key}
              index={key}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Strategy;
