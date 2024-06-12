import React from "react";
import Content from "./Content";
import Filter from "./Filter";
import Banner from "../(Components)/Banner";

const Services = () => {
  return (
    <div className="">
      <Banner
        title={"Service Details"}
        desciption={"Professional IT Solution Insight and Updates"}
        page={"Services"}
      />
      <div className="mt-[5.208vw] pb-[2.5vw] mx-[2.6vw] 2xl:mx-[4.7vw] flex flex-col md:flex-row-reverse gap-[1.667vw] h-fit">
        <div className="md:sticky top-[7vw] md:w-fit h-full">
          <Filter />
        </div>
        <Content />
      </div>
    </div>
  );
};

export default Services;
