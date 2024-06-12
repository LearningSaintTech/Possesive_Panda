"use client";
import React, { useState } from "react";

import Image from "next/image";
import OxfamB from "../../assets/aboutus/brands/OxfamB.png"
import OxfamW from "../../assets/aboutus/brands/OxfamW.png"

const data = [
  {
    image1: OxfamW,
    image2: OxfamB,

  },
  {
    image1: OxfamW,
    image2:OxfamB,

  },
  {
    image1: OxfamW,
    image2: OxfamB,

  },
  {
    image1: OxfamW,
    image2: OxfamB,

  },
  {
    image1: OxfamW,
    image2: OxfamB,

  },
  {
    image1: OxfamW,
    image2: OxfamB,

  },
  {
    image1: OxfamW,
    image2: OxfamB,

  },
  {
    image1: OxfamW,
    image2: OxfamB,

  },
  {
    image1: OxfamW,
    image2: OxfamB,

  },
  {
    image1: OxfamW,
    image2: OxfamB,

  },
];



const Brands = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };


  return (
    <div className="flex flex-col w-[90%] mx-auto mt-10 lg:mt-32">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center lg:items-start lg:justify-between ">
        <div className="text-neutral-800 md:text-4xl text-3xl lg:text-5xl lg:w-1/2 font-medium ">
          Brands That Trust Us
        </div>
        <div className="opacity-85 text-zinc-900 text-center lg:text-start lg:w-1/2 md:text-xl text-lg lg:text-2xl font-normal ">
          Our clients love working with us due to our hardcore service
          orientation as we look to align ourselves and take on our clients’
          challenges head on. Our innovative engagement models have resulted in
          a track record of highly satisfied customer relationships.
        </div>
      </div>
      <div className=" w-full mt-24 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid ">

         {data.map((item, index)=>(
          <div
            key={index}
            className="bg-white lg:h-[220px] border border-black/opacity-10 hover:bg-sky-500 hover:text-white text-7xl items-center	md:h-[300px] sm:h-[200px] min-[320px]:h-[200px] max-[600px]:h-[200px] "
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}>
              <div className=""> 
              <Image
              src={hoveredIndex === index ? item.image1 : item.image2}
              className="lg:ml-14 lg:mt-24 lg:w-[100px] w-[100px] ml-20 mt-20 xl:w-[100px] xl:ml-16 xl:mt-24 2xl:ml-32 2xl:mt-20 md:ml-28 md:mt-32 sm:ml-64 sm:mt-14 min-[600px]:ml-44 "
              alt="logo"
            />
              </div>
          </div>
         ))
         }       
      </div>
    </div>
  );
};
export default Brands;
