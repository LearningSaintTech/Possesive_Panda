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
      <div className="hidden sm:block sm:mt-[1.771vw]">
        <AboutMarquee />
      </div>
      <div className="mt-[14vw] sm:mt-[5.25vw]">
        <Journey
          title="Our journey started"
          subtitle="Our journey began with your success - Your achievements are the fuel that drives our excellence and dedication."
          description="We are enabling businesses success over the globe with our cutting-edge IT services and solutions. We are on a mission to hike up your business growth via transformative technologies. As a global leader, we are passionate about driving digital transformation in order to unlock your business’s true potential."
        />
      </div>
      <div className="mt-[14.118vw] sm:mt-[6.25vw] ">
        <Intro />
      </div>
      <div>
        <Purpose />
      </div>
      <div>
        <Values />
      </div>
      <div>
        <Review />
      </div>
      <div className="mt-[6.5vw] sm:mt-[6vw] ">
        <Technologies />
      </div>
      <div>
        <Certificate />
      </div>
      <div>
        <Success />
      </div>
      <div>
        <Footer />
      </div>

    </div>
  );
};

export default page;
