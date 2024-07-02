import React from "react";

const Types = ({ data }) => {
  const title = data.title.split("-");
  const first = title[0] + "-" + title[1];
  const second = "-" + title[2];
  return (
    <div className="relative w-[20.625vw] h-fit">
      <h6 className="text-[#212121] text-[1.823vw] font-semibold tracking-[0.022rem] w-fit pt-[1.458vw]">
        {first} <br /> {second}
      </h6>
      <div className="w-[3.125vw] h-[0.2vw] bg-[#60E2FF] rounded-[0.229vw] my-[0.93vw]" />
      <p className="text-[#212121] text-[1.25vw] leading-[normal] tracking-[0.015rem] text-justify">
        {data.description}
      </p>
      <span className="text-[#60E2FF] opacity-20 text-[20.8vw] absolute top-0 right-[4.6vw] leading-none">
        {data.num}
      </span>
    </div>
  );
};

export default Types;
