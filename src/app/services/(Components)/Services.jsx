import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

const Services = ({ data }) => {
  const paragraph = data.description[0].split(".")[0];
  return (
    <div className="group min-w-[43.75vw] min-h-[23.438vw] [perspective:1000px] shadow-2xl [clip-path:polygon(4%0%,96%0%,100%8%,100%89.5%,69%90%,66%100%,4%100%,0%92%,0%8%)]">
      <div className="relative h-full shadow-2xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="relative flex inset-0 [backface-visibility:hidden] z-[10] bg-[#f2fcfe] text-[#42424A]">
          <Image
            src={data.image}
            alt="service-image"
            className="w-[17.135vw] h-[21.693vw] ml-[1.042vw]"
          />
          <div className="flex-row ml-[1.563vw] mt-[2.1vw]">
            <h2 className="text-neutral-800 text-4xl font-semibold tracking-tight">
              {data.title}
            </h2>
            <p className="w-[20.469vw] text-zinc-700 text-xl font-normal leading-[1.814vw] tracking-tight mt-[1.042vw]">
              {paragraph}.
            </p>
          </div>
          <HiArrowRight className="flex relative size-[2.5vw] right-[3.125vw] top-[16.93vw]" />
        </div>
        <div className="absolute inset-0 h-full w-full p-[2vw] rounded-xl bg-[#f2fcfe] text-[#42424A] [backface-visibility:visible] [transform:rotateY(180deg)]">
          {data.description.map((para, key) => (
            <p
              className="text-[1.2vw] font-normal leading-[145.1%] tracking-[0.015rem] text-justify"
              key={key}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
