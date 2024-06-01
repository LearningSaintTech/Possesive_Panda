"use client";
import Image from "next/image";
import React from "react";

const Card = ({ image }) => {
  return (
    <div className="relative overflow-hidden h-[100px] sm:h-[150px] xl:h-[212px] min-w-[100px] sm:min-w-[150px] md:min-w-[222px] xl:min-w-[300px] border border-solid border-[#D9D9D9] flex items-center justify-center">
      <Image
        src={image}
        alt="Image"
        style={{ objectFit: "fill" }}
        className="size-[15vw] sm:size-[12vw] md:size-[9vw] lg:size-[7vw] xl:size-max"
      />
    </div>
  );
};

export default Card;
