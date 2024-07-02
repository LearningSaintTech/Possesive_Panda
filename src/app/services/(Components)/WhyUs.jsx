import React from "react";

const WhyUs = ({ data }) => {
  const Icon = data.image;
  return (
    <div className="rounded-[0.52vw] border border-[#212121] border-opacity-50 pl-[0.78vw] pt-[0.78vw] pr-[1.25vw]">
      <Icon className="w-[3.28vw] h-[4.583vw] text-[#00AFF1]" />
      <h6 className="text-[#212121] text-[1.25vw] font-medium leading-[137.6%] mb-[0.52vw]">
        {data.title}
      </h6>
      <p className="text-[#212121] text-[1.25vw] leading-[159.96%] pb-[0.52vw] w-[26.875vw]">
        {data.description}
      </p>
    </div>
  );
};

export default WhyUs;
