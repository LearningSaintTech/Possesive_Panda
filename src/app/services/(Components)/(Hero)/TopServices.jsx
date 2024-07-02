import React from "react";
import { BsArrowRight } from "react-icons/bs";

const TopServices = () => {
  const categories = [
    "Bussiness Consulting",
    "Statergy Growth",
    "Finance Solutions",
    "Text Management",
    "Investment",
  ];
  return (
    <div className="hidden md:block sticky top-[7vw] rounded-[0.521vw] bg-neutral-50 border-opacity-50 border shadow-[0px_4.078px_4.078px_0px_rgba(0,0,0,0.25)] pl-[2.083vw] pb-[2.604vw] w-full h-fit">
      <h2 className="text-neutral-800 text-[1.25vw] font-semibold leading-[91.6%] tracking-[0.02rem] mt-[2.5vw] mb-[1.5vw]">
        Categories
      </h2>
      <div className="flex flex-col gap-[0.677vw] items-start">
        {categories.map((category, key) => (
          <button
            key={key}
            className="bg-[#F8F9FA] text-neutral-800 text-[1vw] font-normal leading-[normal] tracking-[0.015rem] border border-opacity-50 rounded-[0.3125rem] w-11/12 py-[0.8vw] text-start pl-[1.458vw] flex justify-between pr-[0.781vw] hover:bg-sky-500 hover:text-white items-center duration-300 hover:duration-300"
          >
            {category} <BsArrowRight className="size-[1.875vw]" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopServices;
