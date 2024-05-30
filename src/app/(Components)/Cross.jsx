import React from "react";

const Cross = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute w-[110vw] bg-zinc-100 border border-zinc-900 h-[7.813vw] flex items-center justify-center rotate-[8.9deg]">
        <span className="text-black text-[3.2vw] md:text-[4vh] lg:text-[3.4vw] font-normal">
          Possesive Pandas Pvt. Ltd.
        </span>
        <span className="text-black ml-[2vw] text-[3.2vw] md:text-[4vh] lg:text-[3.4vw] font-normal">
          Possesive Pandas Pvt. Ltd.
        </span>
      </div>

      <div className="absolute w-[110vw] bg-zinc-900 h-[7.813vw] flex items-center justify-center rotate-[-8.9deg]">
        <span className="text-zinc-100 text-[3.2vw] md:text-[4vh] lg:text-[3.4vw] font-normal">
          Possesive Pandas Pvt. Ltd.
        </span>
        <span className="text-zinc-100 ml-[2vw] text-[3.2vw] md:text-[4vh] lg:text-[3.4vw] font-normal">
          Possesive Pandas Pvt. Ltd.
        </span>
      </div>
    </div>
  );
};

export default Cross;
