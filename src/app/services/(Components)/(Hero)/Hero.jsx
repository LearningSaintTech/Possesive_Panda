import React from "react";
import Content from "./Content";
import TopServices from "./TopServices";

const Hero = ({ top }) => {
  return (
    <div className="flex gap-[1.56vw]">
      <Content top={top} />
      <TopServices />
    </div>
  );
};

export default Hero;
