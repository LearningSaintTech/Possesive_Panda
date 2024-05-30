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
      <div className="flex justify-between items-center not-italic mx-[5.208vw]">
        <h1 className="text-zinc-900 w-[36.25vw] text-[3.25vw] font-medium leading-[normal] tracking-[0.033vw]">
          Technologies We Use to Offer :
        </h1>
        <button className="inline-flex py-[20px] px-[1.563vw] w-[17.344vw] bg-[#797777] rounded-[5px] h-[70px] text-white text-[1.114vw] leading-[125%] tracking-[0.063vw] font-medium">
          Partners with us Today
        </button>
      </div>

      <div className="mt-[90px] w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
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
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
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
