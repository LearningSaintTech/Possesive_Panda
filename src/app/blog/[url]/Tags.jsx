import React from "react";

const Tags = ({ tag }) => {
  return (
    <p className="bg-[#60E2FF] rounded-[0.26vw] ml-[0.5vw] capitalize text-center px-[0.7vw] py-[0.2vw] mb-0 text-white font-normal text-[1.042vw] leading-[normal]">
      {tag}
    </p>
  );
};

export default Tags;
