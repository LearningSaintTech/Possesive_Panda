import React from "react";
import Image from "next/image";
import Link from "next/link";
import bannerbg from "../../../public/assets/banner/bannerbg.png"

const Banner = ({ title, desciption }) => {
  return (
    <div className="flex justify-between relative h-[36vw] sm:h-[25.73vw] min-h-[25.73vw] bg-opacity-50">
      <Image
        src={bannerbg}
        alt="bannerbg"
        className="w-screen h-full sm:h-auto relative z-[-1]"
      />
      <div className="absolute top-[13vw] sm:top-[8vw] md:top-[6.5vw] lg:top-[8vw] left-[8vw] lg:left-[10.4vw]">
        <h2 className="leading-[130%] text-[3.5vw] sm:text-[3vw] lg:text-[2.587vw]  tracking-[0.03rem] text-white font-medium ">
          {title}
        </h2>
        <p className="leading-8 text-white text-[3.2vw] sm:text-[3vw] lg:text-[1.104vw] tracking-[0.025rem]">
          {desciption}
        </p>
        <button className="bg-[305B7DF] text-white   ">Get In Touch</button>
        <p className="text-white text-[0.835vw] font-normal leading-6 ">Feel Free to Connect with Us</p>
      </div>

      <div className="top-12 sm:w-[7.5vw] sm:h-[0.15vw] w-[15.2vw] h-[0.5vw] bg-cyan-300"></div>
    </div>
    // </div>
  );
};
export default NewBanner;
