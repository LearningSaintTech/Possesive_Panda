import React from "react";
import { features } from "../data";
import Card from "./Card";

const Features = () => {
  return (
    <div className="mt-[5.2vw]">
      <h5 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem]">
        Our Features
      </h5>
      <p className="text-[#212121] text-[1.25vw] leading-[normal] tracking-[0.02rem] w-[56.5vw] pt-[1.3vw] mb-[5.2vw]">
        Our e-commerce service makes your online store look great and
        attractive, which helps drive sales. They are designed to attract more
        and more customers. We help in making your brand strong and visible.
      </p>
      <div className="flex overflow-x-scroll py-[5.2vw] h-fit no-scrollbar">
        {features.map((feature, key) => (
          <Card data={feature} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Features;
