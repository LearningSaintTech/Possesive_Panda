import Image from "next/image";
import React from "react";

const Process = ({ data }) => {
  return (
    <div className="group min-w-[19vw] min-h-[21vw] [perspective:1000px] border rounded-[1.042vw] shadow-lg">
      <div className="relative h-full rounded-[1.042vw] shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="relative  inset-0 [backface-visibility:hidden] z-[10] bg-white">
          <Image
            src={data.image}
            alt="process"
            className="w-[19vw] h-[13.4vw] rounded-t-[1.042vw] "
          />
          <span className="text-white text-[2vw] font-semibold leading-[normal] tracking-[0.025rem] py-[0.8vw] px-[1vw] bg-[#87E9FF] rounded-[2.5vw] relative top-[-2vw] left-[0.8vw]">
            {data.num}
          </span>
          <p className="text-[#212121] text-[1.25vw] font-medium leading-[normal] tracking-[0.018rem] pl-[1.25vw] pb-[2vw] capitalize">
            {data.title}
          </p>
        </div>
        <div className="absolute inset-0 h-full w-full p-[2vw] rounded-xl bg-white text-[#212121] [backface-visibility:visible] [transform:rotateY(180deg)]">
          <p className="text-[#212121] text-[1.25vw] font-medium leading-[140%] tracking-[0.015rem]">
            {data.title}
          </p>
          <p className="text-[#212121] text-[0.94vw] font-normal leading-[140%] tracking-[0.015rem] pt-[0.5vw]">
            {data.paragraph}
          </p>
          <ul className="text-[#212121] text-[0.94vw] leading-[normal] tracking-[0.011rem] list-disc">
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
