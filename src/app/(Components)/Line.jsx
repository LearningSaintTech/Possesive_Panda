import React from "react";
import line from "../../assets/footer/line.png";
import { Image } from "@/lib/next-compat";

const Line = () => {
  return <Image src={line} alt="line" className="mx-auto w-full lg:w-8/12" />;
};

export default Line;
