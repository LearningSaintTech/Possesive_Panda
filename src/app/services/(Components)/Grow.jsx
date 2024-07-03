import React from "react";

const Grow = ({ data }) => {
  return (
    <div className="rounded-[0.52vw] border border-[rgba(146, 142, 142, 0.50)] shadow-lg relative px-[0.78vw]">
      <span className="text-[#1E1E1E] text-[3.33vw] leading-[137.143%] opacity-10 absolute top-[0.5vw] right-[2vw]">
        {data.num}
      </span>
      <h6 className="text-[#212121] text-[1.15vw] leading-[137.835%] mt-[6.78vw] mb-[0.521vw] capitalize">
        {data.title}
      </h6>
      <p className="text-[#1E1E1E] text-[1.042vw] leading-[137.835%] tracking-[0.013rem] opacity-60 mb-[2.8vw]">
        {data.description}
      </p>
    </div>
  );
};

export default Grow;
