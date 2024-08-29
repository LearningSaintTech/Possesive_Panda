"use client";
import React, { useEffect, useRef, useState } from "react";
import Banner from "./(homeComponent)/Banner";
import OurServices from "./(homeComponent)/OurServices";
import Blogs from "./(homeComponent)/Blogs";
import Cross from "./(Components)/Cross";
import Faq from "./(homeComponent)/(FaqSection)/section";
import WhyUs from "./(homeComponent)/Whyus";
import Technologies from "./(homeComponent)/(Technologies)/Technologies";
import Portfolio from "./(homeComponent)/Portfolio";
import Contact from "./(Components)/Contact";
import Loader from "./(Components)/Loader";
import Footer from "./(Components)/Footer";
import OurWorks from "./(homeComponent)/OurWorks";
import Marquee from "./(homeComponent)/Marquee";

const MainPage = () => {
  const whyUsRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1-second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#00111A]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Banner whyUsRef={whyUsRef} />
          <OurWorks />
          <Marquee/>
          <OurServices />
          <div ref={whyUsRef}>
            <WhyUs />
          </div>
          <Technologies />
          <Contact />
          <Blogs />
          <Faq />
          {/* <Cross /> */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainPage;
