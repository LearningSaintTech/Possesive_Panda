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
import Canvas from "./(homeComponent)/Canvas";

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
      {loading ? (
        <Loader />
      ) : (
        <>
          <Banner whyUsRef={whyUsRef} />
          <div style={{ paddingTop: "60px" }}> {/* Adjust paddingTop to ensure content is visible */}
            <OurWorks />
            <Marquee />
            <ServicesList />
            <OurServices />
            <Canvas />
            <div ref={whyUsRef}>
              <WhyUs />
            </div>
            <Technologies />
            <Contact />
            <Blogs />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};
export default MainPage;