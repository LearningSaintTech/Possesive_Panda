import Image from "next/image";
import React from "react";
import banner from "../../../../assets/services/top-image.png";

const Content = ({ top }) => {
  return (
    <div className="w-fit">
      <Image
        src={banner}
        alt="banner"
        className="w-[90vw] h-[50vw] md:w-[60vw] md:h-[33.958vw]"
      />
      <div className="mt-[20px] lg:mt-[2.6vw] w-[60vw]">
        <h6 className="text-neutral-800 font-semibold tracking-[0.025rem] leading-[normal] text-[4vw] lg:text-[2.083vw]">
          {top.title}
        </h6>
        {top.paragraph.map((para, key) => (
          <p
            key={key}
            className="text-justify text-neutral-800 text-[2.5vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[1.56vw]"
          >
            {para}
          </p>
        ))}
        <h6 className="text-[#212121] text-[1.25vw] font-semibold leading-[normal] tracking-[0.015rem] mt-[2.5vw]">
          {top.title2}
        </h6>
        {top.paragraph2?.map((para, key) => (
          <p
            key={key}
            className="text-justify text-neutral-800 text-[2.5vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[1.56vw]"
          >
            {para}
          </p>
        ))}
        <p className="text-justify text-neutral-800 text-[2.5vw] lg:text-[1.25vw] font-medium leading-[normal] tracking-[0.015rem] mt-[2.6vw]">
          {top.highlight}
        </p>
      </div>
    </div>
  );
};

export default Content;
