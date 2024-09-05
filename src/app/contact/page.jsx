import React from "react";
import Journey from "./Journey";
import Joinpanda from "./Joinpanda";
import NewBanner from "../(Components)/NewBanner";
import Contact from "../(Components)/Contact";
import banner from "../../assets/banners/contact-us.png";
import Footer from "../(Components)/Footer";
import Faq from "../(homeComponent)/(FaqSection)/section";



const page = () => {
  return (
    <div className="bg-[#00111A]">
      <NewBanner
        title={"Let Possesive Panda be Your Success Partner!"}
        desciption={"Possesive Panda revolutionized businesses by providing innovative, tech-driven solutions, serving numerous companies to stay ahead in the market."}
      // image={banner}
      />
      <Journey />
      <Joinpanda />
      <Contact />
      <Faq />
      <Footer />
    </div>
  );
};
export default page;
