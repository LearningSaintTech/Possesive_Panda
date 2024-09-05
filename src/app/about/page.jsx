"use client";
import Brands from "./Brands";
import Accordion from "./(accordion)/Accordion";
import Certificate from "./Certificate";
import Banner from "../(Components)/Banner";
import Content from "./Content";
import banner from "../../assets/banners/about-us.png";
import Footer from "../(Components)/Footer";
import AboutMarquee from "./AboutMarquee";
import Values from "./Values";
import Success from "./Success";

const page = () => {
  return (
    <div >
      <Banner
        title={"About Us"}
        desciption={"Professional IT Solution Service"}
        page={"About Us"}
        image={banner}
      />
      <AboutMarquee/>
      <Content />
      <Values/>
      <Accordion />
      <Brands />
      <Certificate />
      <Success/>
      <Footer />
    </div>
  );
};

export default page;
