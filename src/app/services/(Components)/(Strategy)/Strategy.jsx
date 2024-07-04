"use client";
import React, { useState } from "react";
import Card from "./Card";

const Strategy = ({ statergy }) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  return (
    <div>
      <h3 className="text-[#212121] text-[4.346vw] sm:text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[40vw] mt-4 sm:mt-0">
        {statergy.title}
      </h3>
      <p className="text-[#212121] text-[3.363vw] sm:text-[1.25vw] font-normal capitalize leading-[normal] tracking-[0.015rem] w-full sm:w-[47.66vw] mt-[2vw] sm:mt-[0.8vw]">
        {statergy.paragraph}
        <span className="font-medium">{statergy.hilighted}</span>
      </p>
      <div className="grid grid-cols-2 sm:flex sm:flex-row sm:overflow-x-scroll py-[4vw] h-fit no-scrollbar mb-8 sm:mb-0">
        {statergy.cards?.map((item, key) => (
          <Card
            data={item}
            key={key}
            index={key}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Strategy;
