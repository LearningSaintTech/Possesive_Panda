import React from "react";
import Image from "next/image";
import { data } from "./data";

const Brands = () => {
  return (
    <div className="px-[7.692vw] sm:px-[5.2vw] mt-[10.5vw]">
      <div className="flex sm:flex-row flex-col justify-between">
        <h4 className="text-white text-[5.128vw] sm:text-[2.083vw] font-semibold leading-[130%] tracking-[0.03rem] text-center lg:text-left sm:mb-0 mb-[2vw]">
          Brands That Trust Us
        </h4>
        <p className="text-white text-[3.846vw] sm:text-[1.25vw] leading-[160%] tracking-[0.015rem] text-justify opacity-85 w-full sm:w-[45vw]">
          Our clients love working with us due to our hardcore service
          orientation as we look to align ourselves and take on our clients’
          challenges head on. Our innovative engagement models have resulted in
          a track record of highly satisfied customer relationships.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 w-full mt-[7.656vw]">
        {data.map((icon, key) => (
          <div
            key={key}
            className="relative w-full h-[10vw] flex justify-center items-center bg-white border border-black border-opacity-10 transition duration-300 hover:bg-sky-500 group"
          >
            <Image
              src={icon.black}
              alt={`Brand ${key}`}
              className="w-full h-[7vw] sm:h-[3.87vw] sm:w-[10vw] absolute transition-opacity duration-300 group-hover:opacity-0 object-contain table-fixed"
            />
            <Image
              src={icon.white}
              alt={`Brand ${key}`}
              className="hidden sm:block h-[3.87vw] w-[9.48vw] absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 table-fixed object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Brands;
