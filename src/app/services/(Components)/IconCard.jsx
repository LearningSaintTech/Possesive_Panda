import Image from "next/image";
import React from "react";

const IconCard = ({ data, image }) => {
  const Icon = data.image;
  return (
    <div className={`flex flex-col justify-center items-center w-[22.278vw] hover:text-[#00AFF1] hover:duration-500 duration-500 ${image ? "" : "border-x-2 border-[#D9D9D9]"}`}>
      {image ? (
        <Image src={data.image} alt={data.name} className="size-[10vw] sm:size-[3vw] mt-[2.8vw]" />

      ) : (
        <Icon className="size-[1.667vw] mt-[2.8vw]" />
      )
      }
      <p className="text-[#212121] text-[3vw] sm:text-[1.25vw] leading-[150%] font-normal py-[2.8vw] text-center">
        {data.name}
      </p>
    </div>
  );
};

export default IconCard;
