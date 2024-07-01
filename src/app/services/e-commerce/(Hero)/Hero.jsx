import React from "react";
import Content from "./Content";
import TopServices from "./TopServices";

const Hero = () => {
  return (
    <div className="flex gap-[1.56vw]">
      <Content />
      <TopServices />
    </div>
  );
};

export default Hero;
