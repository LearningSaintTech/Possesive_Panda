"use client";
import React, { useEffect, useRef } from "react";
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
    <div className="my-[50px] lg:mt-[5.208vw] mb-[7vw] overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center not-italic mx-[6.771vw]">
        <h1 className="text-zinc-900 w-[80vw] lg:w-full text-center md:text-start md:w-[45vw] xl:w-[36.25vw] text-[6.154vw] sm:text-[8.1vw] md:text-[4.5vw] lg:text-[3.334vw] xl:text-[3.334vw] font-medium leading-[125%] tracking-[0.1rem] mb-[20px] lg:mb-0 ">
          Technologies We Use to Offer
          :
        </h1>
        <button className="inline-flex self-start py-[16px] lg:py-[1vw] px-[15vw] lg:px-[1.563vw] mx-auto md:mx-0 md:my-auto w-fit bg-[#60E2FF] hover:opacity-55 text-[#212121] rounded-[20px] lg:rounded-[8px] h-fit text-[3.846vw] sm:text-[3.5vw] md:text-[2vw] lg:text-[1.25vw] xl:text-[1.25vw] leading-[125%] tracking-[0.063vw] font-medium">
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
