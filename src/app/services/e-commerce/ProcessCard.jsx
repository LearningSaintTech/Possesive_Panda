"use client";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Process from "../(Components)/Process";

const ProcessCard = ({ process }) => {
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
    <div className="relative">
      <button
        onClick={scrollLeftFunc}
        className="hidden sm:block absolute left-[-4vw] top-[50%] p-[1vw] rounded-full hover:text-white hover:bg-[#00AFF1] duration-500 hover:duration-500"
      >
        <FaArrowLeft className="size-[2vw] opacity-80" />
      </button>
      <button
        onClick={scrollRightFunc}
        className="hidden sm:block absolute right-[-4vw] top-[50%] p-[1vw] rounded-full hover:text-white hover:bg-[#00AFF1] duration-500 hover:duration-500"
      >
        <FaArrowRight className="size-[2vw] opacity-80" />
      </button>
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="sm:flex sm:overflow-x-scroll pb-[5.2vw] sm:gap-[2.6vw] h-fit sm:no-scrollbar grid grid-cols-2 gap-x-[6vw] gap-y-[7vw] sm:cursor-grab active:cursor-grabbing sm:select-none"
      >
        {process.map((item, key) => (
          <Process data={item} key={key} />
        ))}
      </div>
    </div>
  );
};

export default ProcessCard;
