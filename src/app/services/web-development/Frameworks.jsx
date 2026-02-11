"use client";
import { Image } from "@/lib/next-compat";
import React, { useState } from "react";

const Frameworks = ({ data }) => {
  const [selected, setSelected] = useState("dev");
  const selectedCategory = data.buttons.find(
    (button) => button.id === selected
  );
  return (
    <div>
      <div className="flex gap-[7.2vw] justify-center h-[2vw] ">
        {data.buttons.map((button, key) => (
          <button
            key={key}
            onClick={() => setSelected(button.id)}
            className={`text-[1.25vw] font-medium leading-[normal] tracking-[-0.015rem] capitalize text-center hover:text-[#00AFF1] hover:border-b-4 hover:border-[#00AFF1] ${
              selected == button.id
                ? "text-[#00AFF1] border-b-4 border-[#00AFF1]"
                : "text-[#212121]"
            }`}
          >
            {button.name}
          </button>
        ))}
      </div>
      <div className="w-full h-[0.1vw] bg-black bg-opacity-20 mt-[1.875vw] mb-[2.9vw]" />
      <div className="flex gap-[8.9vw] items-center px-[8vw] justify-center">
        {selectedCategory.images.map((item, key) => (
          <div key={key} className="flex flex-col items-center">
            <Image src={item.image} alt={item.name} className="size-[4.95vw]" />
            <p className="text-[1.25vw] mt-[0.5vw] text-[#212121] leading-[normal] tracking-[0.015rem]">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frameworks;