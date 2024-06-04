import React from "react";
import line from "../../assets/footer/line.png";
import Image from "next/image";

const Cross = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative h-[40vh] lg:h-[100vh] w-screen flex flex-col justify-center items-center">
        <div className="absolute w-[110vw] bg-zinc-100 border border-zinc-900 h-[7.813vw] flex items-center justify-center rotate-[8.9deg]">
          <span className="text-black text-[3.2vw]  lg:text-[3.4vw] font-normal">
            Possesive Panda Pvt. Ltd.
          </span>
          <span className="text-black ml-[2vw] text-[3.2vw]  lg:text-[3.4vw] font-normal">
            Possesive Panda Pvt. Ltd.
          </span>
        </div>

        <div className="absolute w-[110vw] bg-zinc-900 h-[7.813vw] flex items-center justify-center rotate-[-8.9deg]">
          <span className="text-zinc-100 text-[3.2vw] lg:text-[3.4vw] font-normal">
            Possesive Panda Pvt. Ltd.
          </span>
          <span className="text-zinc-100 ml-[2vw] text-[3.2vw] lg:text-[3.4vw] font-normal">
            Possesive Panda Pvt. Ltd.
          </span>
        </div>
        <Image src={line} alt="line" className="absolute bottom-0" />
      </div>
    </div>
  );
};

export default Cross;
