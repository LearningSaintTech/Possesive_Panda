import React from "react";
import { data } from "./data";

const Brands = () => {
  return (
    <div className="px-[5.2vw] mt-[10.5vw]">
      <div className="flex justify-between">
        <h4 className="text-[#212121] text-[2.526vw] font-medium leading-[130%] tracking-[0.03rem]">
          Brands That Trust Us
        </h4>
        <p className="text-[#212121] text-[1.25vw] leading-[160%] tracking-[0.015rem] text-justify opacity-85 w-[37.2vw]">
          Our clients love working with us due to our hardcore service
          orientation as we look to align ourselves and take on our clients’
          challenges head on. Our innovative engagement models have resulted in
          a track record of highly satisfied customer relationships.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 w-full mt-[7.656vw]">
        {data.map((icon, key) => (
          <p
            key={key}
            className="bg-white border px-[4vw] py-[5.833vw] border-black border-opacity-10 hover:bg-sky-500 hover:text-white text-[3.33vw] items-center"
          >
            {icon}
          </p>
        ))}
      </div>
    </div>
  );
};
export default Brands;
