import Image from "next/image";
import React from "react";
import banner from "../../../../assets/services/top-image.png";

const Content = ({ top }) => {
  return (
    <div className="w-fit">
      {
        top.title !== "Virtual Assistance Service" && <Image
          src={banner}
          alt="banner"
          className="w-full h-[50vw] sm:w-[90vw] sm:h-[50vw] md:w-[60vw] md:h-[33.958vw]"
        />
      }

      <div className="mt-[3.636vw] w-fit sm:w-[60vw]">
        <h6 className="text-neutral-800 font-bold sm:font-semibold tracking-[0.025rem] leading-[normal] text-[4.364vw] lg:text-[2.083vw]">
          {top.title}
        </h6>
        {top.paragraph?.map((para, key) => (
          <p
            key={key}
            className="text-justify text-neutral-600 text-[3.636vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[1.56vw]"
          >
            {para}
          </p>
        ))}
        <h6 className="text-[#212121] text-[4.364vw] sm:text-[1.25vw] font-semibold leading-[normal] tracking-[0.015rem] mt-[2.5vw]">
          {top.title2}
        </h6>
        {top.paragraph2?.map((para, key) => (
          <p
            key={key}
            className="text-justify text-neutral-800 text-[3.636vw] sm:text-[2.5vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[1.56vw]"
          >
            {para}
          </p>
        ))}
        <h6 className="text-[#212121] text-[4.364vw] sm:text-[1.25vw] font-semibold leading-[normal] tracking-[0.015rem] mt-[2.5vw]">
          {top.title3}
        </h6>
        {top.paragraph3?.map((para, key) => (
          <p
            key={key}
            className="text-justify text-neutral-800 text-[3.363vw] sm:text-[2.5vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[1.56vw]"
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
