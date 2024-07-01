import Image from "next/image";
import React from "react";

const Card = ({ card }) => {
  return (
    <div>
      <div className="w-[26.563vw] h-[20.313vw] bg-[#eee] rounded-[0.55vw] shadow-lg">
        <Image
          src={card.image}
          alt="logo"
          className="w-[7.083vw] h-[5.052vw] relative top-[2.083vw] left-[1.563vw]"
        />
        <div className="flex gap-[2.6vw] ml-[2.8vw] pt-[7.5vw]">
          <div className="">
            <h6 className="text-[#212121] text-[2.083vw] font-medium leading-[normal] tracking-[0.025rem]">
              {card.percent}
            </h6>
            <p className="text-[#212121] text-[1.042vw] font-normal leading-[normal] tracking-[0.013rem]">
              Higher Orders
            </p>
          </div>
          <div className="w-[0.1vw] h-[3.854vw] bg-[#212121] relative" />
          <div className="">
            <h6 className="text-[#212121] text-[2.083vw] font-medium leading-[normal] tracking-[0.025rem]">
              {card.num}
            </h6>
            <p className="text-[#212121] text-[1.042vw] font-normal leading-[normal] tracking-[0.013rem]">
              Higher Orders
            </p>
          </div>
        </div>
      </div>
      <h6 className="text-[#212121] text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[0.5vw]">
        {card.title}
      </h6>
    </div>
  );
};

export default Card;
