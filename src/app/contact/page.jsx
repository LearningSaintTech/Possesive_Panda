import React from "react";
import Journey from "./Journey";
import Joinpanda from "./Joinpanda";
import Banner from "../(Components)/Banner";
import Contact from "../(Components)/Contact";
import banner from "../../assets/banners/contact-us.png";
import Footer from "../(Components)/Footer";


const page = () => {
  return (
    <div>
      <Banner
        title={"Contact Us"}
        desciption={"Professional IT Solution Insights and Updates"}
        page={"Contact Us"}
        image={banner}
      />
      <Journey />
      <Joinpanda />
      <Contact />
      <Footer/>
    </div>
  );
};
export default page;
