import { Image } from "@/lib/next-compat";
import React from "react";

const Features = ({ data }) => {
  return (
    <div className="flex gap-[2.727vw] sm:gap-[2vw] sm:min-w-[46.875vw] sm:mb-0 mb-[4vw]">
      <Image
        src={data.image}
        alt="feature"
        className="w-[28.182vw] h-[45vw] sm:w-[15.57vw] sm:h-[23.3vw] select-none"
      />
      <div>
        <Image
          src={data.num}
          alt="num"
          className={`w-[35.647vw] h-[15vw] sm:w-[29vw] sm:h-[10.89vw] relative top-[-7vw] sm:top-[-6vw]  select-none`}
        />
        <h4
          className={`text-[#212121] text-[2.7vw] sm:text-[1.25vw] font-medium leading-[normal] tracking-[0.015rem] mt-[-7.4vw] sm:mt-[-5.5vw] mb-[1vw]  select-none`}
        >
          {data.title}
        </h4>
        <p className="text-[#212121] text-[2.5vw] sm:text-[1.25vw] leading-[normal] tracking-[0.013rem] text-justify w-fit sm:w-[27.5vw]  select-none">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Features;
