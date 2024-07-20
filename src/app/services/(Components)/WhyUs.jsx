import React from "react";

const WhyUs = ({ data, graphic }) => {
  const Icon = data.image;
  return (
    <div>
      {graphic ? (
        <div className="rounded-[0.52vw] w-full h-fit sm:w-[43.021vw] sm:h-[33.333vw] border border-[#212121] border-opacity-50 pl-[1.4vw] sm:pl-[0.78vw] pt-[1.3vw] sm:pt-[0.78vw] pr-[1.25vw] ">
          <Icon className="w-[6.28vw] sm:w-[3.28vw] h-[7.583vw] sm:h-[4.583vw] text-[#00AFF1] mt-[3vw] sm:mb-[1vw] mb-[2vw] sm:mt-[0.3vw] sm:ml-[1.162vw]" />
          <h6 className="text-[#212121] text-[4.364vw] sm:text-[1.5vw] font-medium leading-[137.6%] pb-[1.5vw] sm:pb-[0.4vw] sm:ml-[1.162vw] w-full sm:w-auto">
            {data.title}
          </h6>
          <p className="text-[#212121] text-[3.636vw] sm:text-[1.25vw] leading-[6vw] sm:leading-[2.974vw] pb-[5vw] sm:pb-[0.8vw] w-auto sm:w-[39.977vw] sm:ml-[1.162vw]">
            {data.description}
          </p>
        </div>
      ) : (
        <div className="rounded-[0.52vw] border border-[#212121] border-opacity-50 pl-[1.4vw] sm:pl-[0.78vw] pt-[1.3vw] sm:pt-[0.78vw] pr-[1.25vw] hover:scale-95  transition-transform duration-500 cursor-pointer ">
          <Icon className="w-[5.28vw] sm:w-[3.28vw] h-[6.583vw] sm:h-[4.583vw] text-[#00AFF1] mt-[3vw] mb-[2vw] sm:m-0" />
          <h6 className="text-[#212121] text-[4.364vw] sm:text-[1.25vw] font-medium leading-[137.6%] pb-[1.5vw] sm:pb-[0.52vw] w-full sm:w-auto">
            {data.title}
          </h6>
          <p className="text-[#212121] text-[3.636vw] sm:text-[1.25vw] leading-[159.96%] pb-[3vw] sm:pb-[0.52vw] w-full sm:w-[26.875vw] sm:text-justify -tracking-normal">
            {data.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default WhyUs;
