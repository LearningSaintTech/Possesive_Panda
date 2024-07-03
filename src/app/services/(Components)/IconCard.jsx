import React from "react";

const IconCard = ({ data }) => {
  const Icon = data.image;
  return (
    <div className="flex flex-col items-center justify- border-x-2 border-[#D9D9D9] w-[22.278vw] hover:text-[#00AFF1] hover:duration-500 duration-500">
      <Icon className="size-[1.667vw] mt-[2.8vw]" />
      <p className="text-[#212121] text-[1.25vw] leading-[150%] font-normal py-[2.8vw]">
        {data.name}
      </p>
    </div>
  );
};

export default IconCard;
