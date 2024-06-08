import React from "react";
import ServiceBanner from "./Banner";
import Content from "./Content";
import Filter from "./Filter";

const Services = () => {
  return (
    <div className="overflow-hidden">
      <ServiceBanner />
      <div className="mt-[6.3rem] mx-[2.6vw] 2xl:mx-[5.2vw] flex gap-8">
        <Content />
        <Filter />
      </div>
    </div>
  );
};

export default Services;
