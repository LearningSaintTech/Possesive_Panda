"use client"
import React from "react";
import Technologies from "../(homeComponent)/(Technologies)/Technologies";
// import Accordion from "./(accordion)/Accordion";
import Certificate from "./Certificate";
import NewBanner from "../(Components)/NewBanner";
// import Content from "./Content";
import Footer from "../(Components)/Footer";
import AboutMarquee from "../(Components)/AboutMarquee";
import Values from "./Values";
import Success from "./Success";
import Intro from "../about/Intro";
import Review from "./Review";
import ReviewSlider from "./ReviewSlider";
import Purpose from "../about/Purpose";
import Journey from "../(Components)/Journey";


const page = () => {

  return (
    <div className="bg-[#00111A]">
      <NewBanner
        title={"Welcome to Possesive Panda We’re Possessive for Tech!"}
        desciption={"When it comes to providing IT services, we‘re Panda with Plan  Your Primer IT Service Provider."}
      // image={banner}
      />
      <AboutMarquee />
      <Journey
        title="Our journey started"
        subtitle="Our journey began with your success - Your achievements are the fuel that drives our excellence and dedication."
        description="Possessive Panda is a global powerhouse, renowned for its innovation and expertise. Our diverse team, from around the world, brings varied knowledge and perspectives. This cultural richness fuels our cutting-edge solutions and industry leadership. Our commitment to excellence keeps us at the forefront, meeting clients' evolving needs globally."
      />
      <Intro />
      <Purpose />
      {/* <Accordion /> */}
      <Values />
      <Review />
      <ReviewSlider />
      <Technologies />
      <Certificate />
      <Success />
      <Footer />

    </div>
  );
};

export default page;
