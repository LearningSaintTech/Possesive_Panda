import React from "react";
import Technologies from "../(homeComponent)/(Technologies)/Technologies";
import Accordion from "./(accordion)/Accordion";
import Certificate from "./Certificate";
import NewBanner from "../(Components)/NewBanner";
import Content from "./Content";
import banner from "../../assets/banners/about-us.png";
import Footer from "../(Components)/Footer";
import Intro from "../about/Intro";
import Purpose from "../about/Purpose";


const page = () => {
  
  return (
    <div className="bg-[#00111A]">
      <NewBanner
        title={"Let Possesive Panda be Your Success Partner!"}
        desciption={"Possesive Panda revolutionized businesses by providing innovative, tech-driven solutions, serving numerous companies to stay ahead in the market."}
      // image={banner}
      />
      <Content />
      <Intro />
      <Purpose/>
      {/* <Accordion /> */}
      <Technologies />
      <Certificate />
      <Footer />
    </div>
  );
};

export default page;
