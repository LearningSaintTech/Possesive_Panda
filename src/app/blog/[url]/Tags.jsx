import React from "react";

const Tags = ({ tag }) => {
  return (
    <p className="bg-[#60E2FF] rounded-[0.26vw] ml-[1vw] sm:ml-[0.5vw] capitalize text-center px-[1.89vw] py-[0.7vw] mb-0 sm:px-[0.7vw] sm:py-[0.2vw] text-white font-normal text-[3vw] sm:text-[1.2vw] leading-[normal]">
      {tag}
    </p>
  );
};

export default Tags;
