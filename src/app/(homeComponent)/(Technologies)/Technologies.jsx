"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { data } from "../../about/data";
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
  <div className="sm:pt-[7.813vw] sm:pb-[2.5vw] sm:px-[5.208vw] px-[7.692vw] py-[16.385vw] overflow-hidden bg-[#00111A]">
      <div className="flex flex-col md:flex-row justify-between items-center not-italic">
        <h1 className="text-white lg:w-[40vw] text-center md:text-start md:w-[45vw] xl:w-[38.25vw] text-[7vw] sm:text-[8.1vw] md:text-[4.5vw] lg:text-[3.333vw] xl:text-[3.334vw] font-medium leading-[125%] tracking-[0.1rem] mb-[20px] lg:mb-0 ">
          Brands That Trust Us:
        </h1>
        <button
          className="w-full lg:w-fit bg-[#05B7DF] sm:bg-[#05B7DF] text-[3.59vw] md:text-[3vw] lg:text-[1.25vw] flex justify-center items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white tracking-[0.015rem] py-[2.821vw] sm:px-[3vw] sm:py-[2.821vw] md:py-[1vw] sm:hover:bg-[#109AD6] hover:border-none duration-500 hover:duration-500 hover:shadow-md sm:mt-[1.4vw] lg:mb-0 mb-[4vw] font-medium "
        >
          Partners with us Today
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 w-full sm:mt-[6.656vw] mt-[10vw]">
        {data.map((icon, key) => (
          <div
            key={key}
            className="relative w-full h-[35vw] sm:h-[13vw] flex justify-center items-center bg-[#00111A] border border-white border-opacity-35 sm:border-opacity-10 transition duration-300 sm:hover:bg-sky-500 sm:group"
          >
            <Image
              src={icon.white}
              alt={`Brand ${key}`}
              className="w-full h-[18vw] sm:h-[4vw] sm:w-[10vw] absolute transition-opacity duration-300 group-hover:opacity-0 object-contain table-fixed"
            />
            <Image
              src={icon.black}
              alt={`Brand ${key}`}
              className="hidden sm:block h-[4vw] w-[10vw] absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 table-fixed object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
