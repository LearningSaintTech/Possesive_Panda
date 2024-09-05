import React from "react";
import Image from "next/image";
import Link from "next/link";
import bannerbg from "../../../public/assets/banner/bannerbg.png"

const NewBanner = ({ title, desciption }) => {
  return (
    <div className="flex justify-between relative ">
      <Image
        src={bannerbg}
        alt="bannerbg"
        className="w-screen h-full sm:h-auto relative  "
      />
      <div className="absolute md:top-[15vw] lg:top-[11.406vw] flex flex-col text-center justify-center items-center gap-[2.24vw] ">
        <div className="flex flex-col gap-[1.042vw] ">
          <h2 className="leading-[130%] text-[3.5vw] sm:text-[3vw] lg:text-[2.587vw] tracking-[0.03rem] text-white font-medium md:px-[30vw] lg:px-[28vw] ">
            {title}
          </h2>
          <p className="lg:px-[32vw] text-white text-[3.2vw] sm:text-[3vw] lg:text-[1.104vw] ">
            {desciption}
          </p>
        </div>
        <div className="flex flex-col gap-[1.042vw] ">
          <button className="bg-[#05B7DF] text-white text-[1.25vw] font-semibold lg:py-[0.729vw] lg:px-[1.328vw] rounded-[3.906vw] ">Get In Touch</button>
          <p className="text-white text-[0.835vw] font-normal leading-6 ">Feel Free to Connect with Us</p>
        </div>
      </div>
    </div>
  );
};
export default NewBanner;
