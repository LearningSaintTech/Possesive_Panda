"use client"
import React from "react";
import Technologies from "../(homeComponent)/(Technologies)/Technologies";
import Certificate from "./Certificate";
import NewBanner from "../(Components)/NewBanner";
import Footer from "../(Components)/Footer";
import AboutMarquee from "./AboutMarquee";
import Values from "./Values";
import Success from "./Success";
import Intro from "../about/Intro";
import Review from "./Review";
import Purpose from "../about/Purpose";
import Journey from "../contact/Journey";


const page = () => {

  return (
    <div className="bg-[#00111A]">
      <NewBanner
        title={"Welcome to Possesive Panda We’re Possessive for Tech!"}
        desciption={"When it comes to providing IT services, we‘re Panda with Plan  Your Primer IT Service Provider."}
      // image={banner}
      />
      <AboutMarquee />
      <Journey />
      <Intro />
      <Purpose />
      <Values />
      <Review />
      <Technologies />
      <Certificate />
      <Success />
      <Footer />

    </div>
  );
};

export default page;
