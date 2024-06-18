import React from "react";
import Journey from "./Journey";
import Joinpanda from "./Joinpanda";
import Banner from "../(Components)/Banner";
import Contact from "../(Components)/Contact";

const page = () => {
  return (
    <div>
      <Banner
        title={"Contact Us"}
        desciption={"Professional IT Solution Insights and Updates"}
        page={"Contact Us"}
      />
      <Journey />
      <Joinpanda />
      <Contact />
    </div>
  );
};
export default page;
