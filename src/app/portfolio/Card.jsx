import Image from "next/image";
import React from "react";

const Card = ({ card }) => {
  return (
    <div>
      <div className="w-fill h-auto sm:w-[26.563vw] sm:h-[20.313vw] bg-[#eee] rounded-[0.55vw] sm:rounded-[0.8vw] shadow-lg">
        <Image
          src={card.image}
          alt="logo"
          className="w-[20.062vw] h-[15.455vw] sm:w-[10vw] sm:h-[6.7vw] relative top-[5.5vw] left-[3.544vw] sm:top-[2.083vw] sm:left-[1.563vw]"
        />
        <div className="flex gap-[13vw] ml-[5.455vw] pt-[20.091vw] sm:gap-[2.6vw] sm:ml-[2.8vw] sm:pt-[7.5vw]">
          <div className="">
            <h6 className="text-[#212121] text-[25.981px] sm:text-[2.083vw] font-medium leading-[normal] tracking-[0.055rem] sm:tracking-[0.025rem]">
              {card.percent}
            </h6>
            <p className="text-[#212121] text-[3.362vw] sm:text-[1.2vw] font-normal leading-[normal] tracking-[0.053rem] sm:tracking-[0.013rem]">
              Higher Orders
            </p>
          </div>
          <div className="w-[0.25vw] h-[14vw] sm:w-[0.1vw] sm:h-[3.854vw] bg-[#212121] relative" />
          <div className="">
            <h6 className="text-[#212121] text-[25.981px] sm:text-[2.083vw]  font-medium leading-[normal] tracking-[0.055rem] sm:tracking-[0.025rem]">
              {card.num}
            </h6>
            <p className="text-[#212121] text-[3.362vw] sm:text-[1.042vw] font-normal leading-[normal] tracking-[0.053rem] sm:tracking-[0.013rem] pb-[7.455vw]">
              Higher Orders
            </p>
          </div>
        </div>
      </div>
      <h6 className="text-white sm:text-[1.25vw] text-[3.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[3.545vw] sm:mt-[0.5vw]">
        {card.title}
      </h6>
    </div>
  );
};

export default Card;
