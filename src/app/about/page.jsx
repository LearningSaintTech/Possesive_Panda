import React from "react";
import Brands from "./Brands";
import Accordion from "./(accordion)/Accordion";
import Certificate from "./Certificate";
import Banner from "../(Components)/Banner";
import Content from "./Content";
import banner from "../../assets/banners/about-us.png";
import Footer from "../(Components)/Footer";

const page = () => {
  return (
    <div>
      <Banner
        title={"About Us"}
        desciption={"Professional IT Solution Service"}
        page={"About Us"}
        image={banner}
      />
      <Content />
      <Accordion />
      <Brands />
      <Certificate />
      <Footer />
    </div>
  );
};

export default page;
