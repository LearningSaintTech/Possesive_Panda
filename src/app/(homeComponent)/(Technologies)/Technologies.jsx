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
    <div className="my-[50px] lg:mt-[5.208vw] mb-[7vw] overflow-hidden bg-[#00111A]">
      <div className="flex flex-col md:flex-row justify-between items-center not-italic mx-[6.771vw]">
        <h1 className="text-white w-[80vw] lg:w-[40vw] text-center md:text-start md:w-[45vw] xl:w-[38.25vw] text-[6.154vw] sm:text-[8.1vw] md:text-[4.5vw] lg:text-[3.333vw] xl:text-[3.334vw] font-medium leading-[125%] tracking-[0.1rem] mb-[20px] lg:mb-0 ">
        Brands That Trust Us:
        </h1>
        <button className="inline-flex self-start py-[2.727vw] lg:py-[1.042vw] px-[15vw] lg:px-[1.563vw] mx-auto md:mx-0 md:my-auto w-fit bg-[#00AFF1] sm:hover:opacity-55 text-[#FFF] rounded-[0.5vw] lg:rounded-[4.427vw] border border-[1px white solid] h-fit text-[3.846vw] sm:text-[3.5vw] md:text-[2vw] lg:text-[1.25vw] xl:text-[1.25vw] leading-[125%] tracking-[0.063vw] font-medium">
          Partners with us Today
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 w-full sm:mt-[6.656vw] mt-[10vw] sm:px-[5.2vw] px-[7.692vw]">
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
