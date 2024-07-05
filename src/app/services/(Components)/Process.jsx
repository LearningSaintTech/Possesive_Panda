import Image from "next/image";
import React from "react";

const Process = ({ data }) => {
  return (
    <div className="group sm:min-w-[19vw] sm:min-h-[21vw] min-w-[45vw] min-h-[50vw]  [perspective:1000px] border rounded-[1.042vw] shadow-lg">
      <div className="relative h-full rounded-[1.042vw] shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="relative  inset-0 [backface-visibility:hidden] z-[10] bg-white">
          <Image
            src={data.image}
            alt="process"
            className="w-full h-[31.81vw] sm:w-[19vw] sm:h-[13.4vw] rounded-t-[1.042vw] "
          />
          <span className="text-white text-[3.6vw] sm:text-[2vw] font-semibold leading-[normal] tracking-[0.031rem] sm:tracking-[0.025rem] py-[1.4vw] px-[1.6vw] sm:py-[0.8vw] sm:px-[1vw] bg-[#87E9FF] rounded-[3.096vw] sm:rounded-[2.5vw] relative top-[-2vw] left-[2vw] sm:left-[0.8vw]">
            {data.num}
          </span>
          <p className="text-[#212121] text-[3.2vw] sm:text-[1.25vw] font-medium leading-[normal] tracking-[0.022vw] sm:tracking-[0.018rem] pl-[2.8vw] pb-[4vw] sm:pl-[1.25vw] sm:pb-[2vw] capitalize">
            {data.title} 
          </p>
        </div>
        <div className="absolute inset-0 h-full w-full pl-[4vw] pr-[4vw] pt-[2.822vw] pb-[2.822vw] sm:p-[2vw] rounded-xl bg-white text-[#212121] [backface-visibility:visible] [transform:rotateY(180deg)]">
          <p className="text-[#212121] text-[3.5vw] sm:text-[1.25vw] font-medium leading-[140%] tracking-[0.015rem]">
            {data.title}
          </p>
          <p className="text-[#212121] text-[2.4vw] sm:text-[0.94vw]font-normal leading-[140%] tracking-[0.015rem] pt-[0.5vw]">
            {data.paragraph}
          </p>
          <ul className="text-[#212121] text-[2.4vw] sm:text-[0.94vw] leading-[normal] tracking-[0.011rem] list-disc">
            {data.list?.map((item, key) => (
              <li key={key} className=" mt-[1.042vw]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Process;
