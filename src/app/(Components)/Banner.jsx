import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = ({ title, desciption, page, image }) => {
  return (
    <div className="flex justify-between relative mt-[5.58vw] min-h-[25.73vw] bg-black bg-opacity-50">
      <Image
        src={image}
        alt="banner"
        className="w-screen h-auto relative z-[-1]"
      />
      <div className="absolute top-[10vw] sm:top-[8vw] md:top-[6.5vw] lg:top-[8vw] left-[8vw] lg:left-[10.4vw]">
        <h1 className="leading-[130%] text-[3.5vw] sm:text-[3vw] lg:text-[2.5vw] font-semibold tracking-[0.03rem] text-white">
          {title}
        </h1>
        <h2 className="leading-[130%] text-white text-[3.2vw] sm:text-[3vw] lg:text-[2.083vw] tracking-[0.025rem]">
          {desciption}
        </h2>
        <div className="flex items-center py-[1.2vw] space-x-2 lg:space-x-5 border-b-2 lg:border-b-4 border-cyan-300 w-[5.2vw]">
          <Link
            href="/"
            className="text-cyan-300 hover:underline text-[3vw] sm:text-[2vw] lg:text-[1.042vw] font-medium leading-[normal] tracking-[0.013rem]"
          >
            Home
          </Link>
          <span className="text-white relative text-[3vw] sm:text-[2vw] lg:text-[1.043vw] font-medium leading-[normal] tracking-[0.013rem]">
            :
          </span>
          <span className="text-white text-[3vw] sm:text-[2vw] lg:text-[1.043vw] font-medium leading-[normal] tracking-[0.013rem]">
            {page}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Banner;
