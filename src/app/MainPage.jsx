"use client";
import React, { useEffect, useRef, useState } from "react";
import { useNavbar } from "./layout";
import Banner from "./(homeComponent)/Banner";
import OurServices from "./(homeComponent)/OurServices";
import Blogs from "./(homeComponent)/Blogs";
import WhyUs from "./(homeComponent)/Whyus";
import Technologies from "./(homeComponent)/(Technologies)/Technologies";
import Contact from "./(Components)/Contact";
import Loader from "./(Components)/Loader";
import Footer from "./(Components)/Footer";
import OurWorks from "./(homeComponent)/OurWorks";
import Marquee from "./(homeComponent)/Marquee";
import ServicesList from "./(homeComponent)/ServicesList";
import Faq from "./(homeComponent)/(FaqSection)/section";
import Canvas from "./(homeComponent)/Canvas";
import ToolsTech from '../app/services/(CommonComponent)/ToolsTech';

import WorldClocks from "./(homeComponent)/WorldClocks";

const MainPage = () => {
  const whyUsRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const { toggleNavbar } = useNavbar();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#00111A]">
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <>
        <Banner whyUsRef={whyUsRef} />
        <div style={{ paddingTop: "60px" }}>
          <OurWorks />
          <Marquee />
          <ServicesList />
          <div className="mt-[14.118vw] sm:mt-[8.167vw] ">
            <OurServices />
          </div>
          <div className=" hidden lg:block">
            <Canvas />
          </div>
          <div ref={whyUsRef} className="mt-[14.118vw] sm:mt-[1vw] ">
            <WhyUs />
          </div>
          <div className="sm:mt-[6vw] mt-[14.118vw] ">
            <Technologies />
          </div>
          <div className="sm:mt-[9.896vw] mt-[14.118vw] ">
            <ToolsTech />
          </div>
          <div className="sm:mt-[7.188vw] mt-[14.118vw] ">
            <Contact />
          </div>
          <div className="sm:mt-[5.208vw] mt-[14.118vw] ">
            <WorldClocks/>
            <Blogs />
          </div>
          <div className="sm:mt-[3vw] mt-[14.118vw] ">
            <Faq />
          </div>
          <div className="sm:mt-[3vw] mt-[10vw] ">
            <Footer />
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  );
};
export default MainPage;