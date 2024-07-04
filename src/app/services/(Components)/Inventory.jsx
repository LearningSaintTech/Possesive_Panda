import React from "react";

const Inventory = ({ data }) => {
  const Icon = data.image;
  return (
    <div>
      <Icon className="size-[7vw] sm:size-[2vw] text-[#00AFF1]" />
      <h6 className="text-[#212121] text-[4vw] sm:text-[1.25vw] font-medium leading-[154.84%] mt-[3.5vw] sm:mt-[1.25vw] ">
        {data.title}
      </h6>
      <p className="text-[#212121] text-[3.636vw] sm:text-[1.25vw] leading-[152.52%] mt-[2vw] sm:mt-[1.25vw] w-full sm:w-[25.5vw] text-justify">
        {data.description}
      </p>
    </div>
  );
};

export default Inventory;
