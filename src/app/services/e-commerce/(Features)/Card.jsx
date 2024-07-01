import Image from "next/image";
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="flex gap-[2vw] min-w-[46.875vw]">
      <Image
        src={data.image}
        alt="feature"
        className="w-[15.57vw] h-[21.875vw]"
      />
      <div>
        <Image
          src={data.num}
          alt="num"
          className={`w-[29vw] h-[10.89vw] relative top-[-5vw]`}
        />
        <h6
          className={`text-[#212121] text-[1.25vw] font-medium leading-[normal] tracking-[0.015rem] $ mt-[-4vw] mb-[1vw]`}
        >
          {data.title}
        </h6>
        <p className="text-[#212121] text-[1.042vw] leading-[normal] tracking-[0.013rem] text-justify w-[23.96vw]">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
