import Image from "next/image";
import React from "react";

const Benefits = ({ data }) => {
  return (
    <div className="">
      <Image
        src={data.image}
        alt="benefits"
        className="w-[21vw] h-[21.875vw]"
      />
      <h6 className="text-[#1D1D1D] text-[1.25vw] font-medium leading-[145.101%] mt-[1.042vw] mb-[0.521vw]">
        {data.title}
      </h6>
      <p className="text-[#42424A] text-[1.042vw] leading-[174.15%] mb-[2.8vw] w-[21vw]">
        {data.description}
      </p>
    </div>
  );
};

export default Benefits;
