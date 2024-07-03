"use client";
import React, { useState } from "react";
import Card from "./Card";

const Strategy = ({ statergy }) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  return (
    <div>
      <h3 className="text-[#212121] text-[4.346vw] sm:text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem]">
        Our E-commerce website development Strategy
      </h3>
      <div className="grid grid-cols-2 sm:flex sm:flex-row sm:overflow-x-scroll py-[5.2vw] sm:gap-0 gap-y-8 h-fit no-scrollbar">
        {statergy.map((item, key) => (
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
