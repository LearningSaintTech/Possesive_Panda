import React from "react";

const Cross = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute w-[110vw] bg-zinc-100 border border-zinc-900 h-[7.813vw] flex items-center justify-center rotate-[8.9deg]">
        <span className="text-black sm:text-[3vh] md:text-[4vh] lg:text-[3.958vw] font-normal">
          Possesive Pandas Pvt. Ltd.
        </span>
        <span className="text-black ml-[2vw] sm:text-[3vh] md:text-[4vh] lg:text-[3.958vw] font-normal">
          Possesive Pandas Pvt. Ltd.
        </span>
      </div>

      <div className="absolute w-[110vw] bg-zinc-900 h-[7.813vw] flex items-center justify-center rotate-[-8.9deg]">
        <span className="text-zinc-100 sm:text-[3vh] md:text-[4vh] lg:text-[3.958vw] font-normal">
          Possesive Pandas Pvt. Ltd.
        </span>
        <span className="text-zinc-100 ml-[2vw] sm:text-[3vh] md:text-[4vh] lg:text-[3.958vw] font-normal">
          Possesive Pandas Pvt. Ltd.
        </span>
      </div>
    </div>
  );
};

export default Cross;
