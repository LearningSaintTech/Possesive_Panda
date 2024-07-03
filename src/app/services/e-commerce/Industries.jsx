import React from "react";
import { mainSection } from "./data";
import Image from "next/image";

const Industries = () => {
  return (
    <div className="w-full sm:w-full px-[0vw] py-[2.865vw] sm:px-[14.5vw] sm:py-[2.865vw] sm:bg-[#F1FAFF] relative">
      <div className="bg-[#212121] rounded-[1.4vw] pl-[5.2vw] sm:pl-[2.9vw] w-full sm:h-auto h-[66.727vw]">
        <h4 className="text-white text-[3.636vw] sm:text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.028rem]  pt-[5.2vw] sm:pt-[3.5vw] mb-[2vw] sm:mb-[1.77vw] w-[252px] sm:w-auto">
          {mainSection.title}
        </h4>
        <p className="text-white text-[3vw] sm:text-[1.4vw] leading-[normal] tracking-[0.017rem] w-full sm:w-[58.8vw]">
          {mainSection.description}
        </p>
        <div className="flex gap-[7vw] sm:gap-[6vw] mt-[3vw] sm:mt-[3.55vw] text-white text-[2.545vw] sm:text-[1.4vw] leading-[normal] tracking-[0.04rem] pb-[5vw]">
          <ul className="list-disc pl-[5.455vw] sm:pl-[1.8vw]">
            {mainSection.list.slice(0, 3).map((item, key) => (
              <li key={key} className="mb-[2vw]"> 
                {item}
              </li>
            ))}
          </ul>
          <ul className="list-disc">
            {mainSection.list.slice(-3).map((item, key) => (
              <li key={key} className="mb-[2vw]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Image
        src={mainSection.logo}
        alt="logo"
        className="absolute bottom-0 w-[29vw] h-[33vw] sm:w-[20.833vw] sm:h-[23.18vw] right-[3vw] sm:right-[20vw]"
      />
    </div>
  );
};

export default Industries;
