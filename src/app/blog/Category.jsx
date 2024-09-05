import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Category = ({ category  , blogs}) => {

  return (
    <button className="bg-[#00111A] text-white text-[1vw] font-normal leading-[normal] tracking-[0.015rem] w-11/12 border border-opacity-50 rounded-[0.3125rem] py-[0.8vw] text-start pl-[1.458vw] flex justify-between pr-[0.781vw] hover:bg-sky-500 hover:text-black items-center duration-300 hover:duration-300"
    >

      {category} <BsArrowRight className="size-[2vw]" />
    </button>

  );
};

export default Category;
