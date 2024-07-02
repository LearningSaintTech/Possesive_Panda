import React from "react";
import { mainSection } from "./data";
import Image from "next/image";

const Industries = () => {
  return (
    <div className="w-full px-[14.5vw] py-[2.865vw] bg-[#F1FAFF] relative">
      <div className="bg-[#212121] rounded-[1.4vw] pl-[2.9vw]">
        <h4 className="text-white text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.028rem] pt-[3.5vw] mb-[1.77vw]">
          {mainSection.title}
        </h4>
        <p className="text-white text-[1.4vw] leading-[normal] tracking-[0.017rem] w-[58.8vw]">
          {mainSection.description}
        </p>
        <div className="flex gap-[6vw] mt-[3.55vw] text-white text-[1.4vw] leading-[normal] tracking-[0.04rem] pb-[5vw]">
          <ul className="list-disc pl-[1.8vw]">
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
        className="absolute bottom-0 w-[20.833vw] h-[23.18vw] right-[20vw]"
      />
    </div>
  );
};

export default Industries;
