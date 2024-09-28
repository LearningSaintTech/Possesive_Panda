"use client"
import React from "react";
import Technologies from "../(homeComponent)/(Technologies)/Technologies";
import Certificate from "./Certificate";
import NewBanner from "../(Components)/NewBanner";
import Footer from "../(Components)/Footer";
import AboutMarquee from "../(Components)/AboutMarquee";
import Values from "./Values";
import Success from "./Success";
import Intro from "../about/Intro";
import Review from "./Review";
import Purpose from "../about/Purpose";
import Journey from "../(Components)/Journey";
import NewBannner from "../(Components)/NewBanner";

const page = () => {

  return (
    <div className="bg-[#00111A]">
      <NewBanner
        title={"Welcome to Possesive Panda We’re Possesive for Tech!"}
        desciption={"When it comes to providing IT services, we‘re Panda with Plan  Your Primer IT Service Provider."}
      />
      {/* <AboutMarquee /> */}
      <Journey
        title="Our journey started"
        subtitle="Our journey began with your success - Your achievements are the fuel that drives our excellence and dedication."
        description="We are enabling businesses success over the globe with our cutting-edge IT services and solutions. We are on a mission to hike up your business growth via transformative technologies. As a global leader, we are passionate about driving digital transformation in order to unlock your business’s true potential."
      />
      {/* <NewBannner /> */}
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
