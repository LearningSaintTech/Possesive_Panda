import { Pridi } from "next/font/google";
import React from "react";

const pridi = Pridi({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});

const Types = ({ data, digital }) => {
  const title = data.title.split("-");
  const first = title[0] + "-" + title[1];
  const second = "-" + title[2];
  const edge =
    data.title == "Brand loyalty & customer retention" ||
    data.title == "Cross-Platform App Development";
  return (
    <div className="relative min-w-[20.625vw] h-fit">
       <h3 className="text-[#212121] text-[4.346vw] sm:text-[1.667vw] font-semibold tracking-[0.022rem] w-fit pt-[1.458vw] capitalize block sm:hidden">
          {data.title}
          
        </h3>
      {digital ? (
        <h5
          className={`text-[#212121] text-[1.667vw] font-semibold tracking-[0.022rem] pt-[1.458vw] capitalize hidden sm:block ${
            edge ? "w-full" : "w-[15.1vw]"
          }`}
        >
          {data.title}
        </h5>
      ) : (
        <h6 className="text-[#212121] text-[4.346vw] sm:text-[1.667vw] font-semibold tracking-[0.022rem] w-fit pt-[1.458vw] capitalize hidden sm:block">
          {first} <br /> {second}
        </h6>
      )}
      <div className="w-[8vw] sm:w-[3.125vw] h-[0.4vw] sm:h-[0.2vw] bg-[#60E2FF] rounded-[0.4vw] sm:rounded-[0.229vw] my-[0.93vw]" />
      <p className="text-[#212121] text-[3.636vw] sm:text-[1.25vw] leading-[normal] font-normal tracking-[0.035rem] sm:tracking-[0.015rem] sm:text-justify">
        {data.description}
      </p>
      <span
        className={`text-[#60E2FF] opacity-20 text-[40vw] sm:text-[20.8vw] z-[-1] absolute top-[-3.6vw] right-[40vw] sm:top-[-1.5vw] sm:right-[4vw] leading-none ${pridi.className}`}
      >
        {data.num}
      </span>
    </div>
  );
};

export default Types;
