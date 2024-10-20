import Image from "next/image";
import React from "react";

const Benefits = ({ data }) => {
  return (
    <div className="w-fit">
      <Image
        src={data.image}
        alt="benefits"
        className="min-w-[45vw] h-[50vw] sm:min-w-[21vw] sm:h-[21.875vw]"
      />
      <h2 className="text-[#1D1D1D] text-[4.346vw] sm:text-[1.25vw] font-medium leading-[145.101%] mt-[2.5vw] sm:mt-[1.2vw] mb-[0.521vw] sm:ml-2 
      ">
        {data.title}
      </h2>
      <p className="text-[#42424A] text-[3.5vw] sm:text-[1.25vw] leading-[174.15%] min-w-[21vw] sm:ml-2">
        {data.description}
      </p>
    </div>
  );
};

export default Benefits;
