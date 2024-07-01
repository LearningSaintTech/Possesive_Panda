import React from "react";
import { typesOfECommerce } from "../data";
import Card from "./Card";

const Types = () => {
  return (
    <div className="mt-[5.2vw]">
      <h4 className="text-[#212121] text-[2.5vw] font-medium leading-[normal] tracking-[0.03rem]">
        Types of E-commerce
      </h4>
      <div className="mt-[3.9vw] flex gap-[2.3vw]">
        {typesOfECommerce.map((item, key) => (
          <Card data={item} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Types;
