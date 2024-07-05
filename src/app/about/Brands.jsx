import React from "react";
import Image from "next/image";
import { data } from "./data";

const Brands = () => {
  return (
    <div className="px-[5.2vw] mt-[10.5vw]">
      <div className="flex justify-between">
        <h4 className="text-[#212121] text-[2.526vw] font-medium leading-[130%] tracking-[0.03rem]">
          Brands That Trust Us
        </h4>
        <p className="text-[#212121] text-[1.25vw] leading-[160%] tracking-[0.015rem] text-justify opacity-85 w-[37.2vw]">
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
              layout="fixed"
              width="10.479vw"
              height="9.3vw"
              objectFit="contain"
              className="absolute transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src={icon.white}
              alt={`Brand ${key}`}
              layout="fixed"
              width="10.479vw"
              height="9.3vw"
              objectFit="contain"
              className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>

    </div>
  );
};
export default Brands;
