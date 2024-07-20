import React from "react";
import "../(Components)/cross.css";

const Cross = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative h-[30vh] lg:h-[90vh] w-screen flex flex-col justify-center items-center">
        <div className="absolute w-[110vw] bg-zinc-100 border border-zinc-900 h-[7.813vw] flex items-center justify-center rotate-[8.9deg] overflow-hidden">
          <div className="flex animate-marquee">
            <span className="text-black text-[3.6vw] lg:text-[3.8vw] font-normal">
              Possesive Panda Pvt. Ltd.
            </span>
            <span className="text-black ml-[2vw] text-[3.6vw] lg:text-[3.8vw] font-normal">
              Possesive Panda Pvt. Ltd.
            </span>
          </div>
        </div>

        <div className="absolute w-[110vw] bg-zinc-900 h-[7.813vw] flex items-center justify-center rotate-[-8.9deg] overflow-hidden">
          <div className="flex animate-marquee-reverse">
            <span className="text-zinc-100 text-[3.6vw] lg:text-[3.8vw] font-normal">
              Possesive Panda Pvt. Ltd.
            </span>
            <span className="text-zinc-100 ml-[2vw] text-[3.6vw] lg:text-[3.8vw] font-normal">
              Possesive Panda Pvt. Ltd.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cross;