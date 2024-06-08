import React from "react";
import Content from "./Content";
import Filter from "./Filter";
import Banner from "../(Components)/Banner";

const Services = () => {
  return (
    <div className="overflow-hidden">
      <Banner
        title={"Service Details"}
        desciption={"Professional IT Solution Insight and Updates"}
        page={"Services"}
      />
      <div className="mt-[6.3rem] mx-[2.6vw] 2xl:mx-[5.2vw] flex gap-8">
        <Content />
        <Filter />
      </div>
    </div>
  );
};

export default Services;
