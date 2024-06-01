"use client";
import React, { useEffect, useRef, useState } from "react";
import data from "./data";
import Card from "./Card";

const Technologies = () => {
  const logosRef = useRef(null);
  const logosRevRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      const clone = ul.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      if (ul.parentNode) {
        ul.parentNode.insertBefore(clone, ul);
      }
    }
  }, []);
  useEffect(() => {
    if (logosRevRef.current) {
      const ul = logosRevRef.current;
      const clone = ul.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      if (ul.parentNode) {
        ul.parentNode.insertBefore(clone, ul);
      }
    }
  }, []);

  return (
    <div className=" my-[131px] overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center not-italic mx-[5.208vw]">
        <h1 className="text-zinc-900 w-full text-center md:text-start md:w-[45vw] xl:w-[36.25vw] text-[9.5vw] sm:text-[8.1vw] md:text-[4.5vw] lg:text-[4vw] xl:text-[3.25vw] font-medium leading-[125%] tracking-[0.1rem] mb-[10px] lg:mb-0">
          Technologies We Use to Offer
        </h1>
        <button className="inline-flex self-start py-[15px] lg:py-[20px] px-[1.563vw] mx-auto md:mx-0 w-fit bg-[#797777] rounded-[5px] h-fit text-white text-[4.375vw] sm:text-[3.5vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.114vw] leading-[125%] tracking-[0.063vw] font-medium">
          Partners with us Today
        </button>
      </div>

      <div className="mt-[50px] md:mt-[90px] w-full inline-flex flex-nowrap overflow-hidden">
        <ul
          ref={logosRef}
          className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-scroll"
        >
          {data.map((data, index) => (
            <li key={index}>
              <Card image={data.image} name={data.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full inline-flex flex-nowrap overflow-hidden ">
        <ul
          ref={logosRevRef}
          className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-scrollReverse"
        >
          {data.map((data, index) => (
            <li key={index}>
              <Card image={data.image} name={data.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Technologies;
