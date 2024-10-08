import React from "react";

const Journey = ({ title, subtitle, description }) => {
  return (
    <div className=" sm:pt-[0.5vw] px-[7.692vw] sm:px-[5.2vw] sm:mb-0 mb-8">
      <h1 className="text-[5vw] sm:text-[1.25vw] font-medium leading-[normal] tracking-[0.015rem] text-[#00AFF1] mb-[1.25vw] md:mt-[3vw] lg:mt-0 text-center sm:text-left">
        {title}
      </h1>
      <div className="flex sm:flex-row flex-col justify-between">
        <p className="text-white text-[5.4vw] sm:text-[1.667vw] font-medium leading-[150%] tracking-[0.017vw] w-full sm:w-[41.042vw] text-center sm:text-left">
          {subtitle}
        </p>
        <div className="w-full sm:w-[36.771vw]">
          <p className="text-white text-[3.846vw] sm:text-[1.25vw] font-normal sm:leading-[160%] tracking-[0.013vw] text-center sm:text-justify opacity-85 sm:mt-0 mt-[2vw]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journey;
