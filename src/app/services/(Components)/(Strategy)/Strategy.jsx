"use client";
import React, { useState } from "react";
import Card from "./Card";

const Strategy = ({ statergy }) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  return (
    <div>
      <h3 className="text-[#212121] text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem]">
        {statergy.title}
      </h3>
      <p className="text-[#212121] text-[1.25vw] font-normal capitalize leading-[normal] tracking-[0.015rem] w-[47.66vw] mt-[0.8vw]">
        {statergy.paragraph}{" "}
        <span className="font-medium">{statergy.hilighted}</span>
      </p>
      <div className="flex overflow-x-scroll py-[4vw] h-fit no-scrollbar">
        {statergy.cards.map((item, key) => (
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
