import Banner from "@/app/(Components)/Banner";
import React from "react";
import banner from "../../../assets/banners/service-details.png";
import Hero from "./(Hero)/Hero";
import Types from "./(Types)/Types";
import Features from "./(Features)/Features";
import Industries from "./Industries";
import Benefits from "./(Benefits)/Benefits";
const page = () => {
  return (
    <div>
      <Banner
        title={"Service Details"}
        desciption={"Professional IT Solution Insight and Updates"}
        page={"Services"}
        image={banner}
      />
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Hero />
        <Types />
        <Features />
      </div>
      <Industries />
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Benefits />
      </div>
    </div>
  );
};

export default page;
