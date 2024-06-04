"use client";
import React, { useEffect, useRef } from "react";
import data from "./data";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";

const Technologies = () => {
  const logosRef = useRef(null);
  const logosRevRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 300,
      disable: "mobile",
      once: true,
      mirror: true,
      easing: "ease-in-sine",
    });
  }, []);

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
    <div className="my-[30px] lg:my-[100px] overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center not-italic mx-[5.208vw]">
        <h1
          className="text-zinc-900 w-full text-center md:text-start md:w-[45vw] xl:w-[36.25vw] text-[9.5vw] sm:text-[8.1vw] md:text-[4.5vw] lg:text-[4vw] xl:text-[3.25vw] font-medium leading-[125%] tracking-[0.1rem] mb-[10px] lg:mb-0 "
          data-aos="fade-up-right"
        >
          Technologies We Use to Offer
        </h1>
        <button
          className="inline-flex self-start py-[15px] lg:py-[1vw] px-[3vw] lg:px-[1.563vw] mx-auto md:mx-0 w-fit bg-[#797777] rounded-[8px] h-fit text-white text-[4.375vw] sm:text-[3.5vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.114vw] leading-[125%] tracking-[0.063vw] font-medium"
          data-aos="fade-up-left"
        >
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
