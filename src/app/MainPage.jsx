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

const MainPage = () => {
  const whyUsRef = useRef(null);
  const [whyUsHeight, setWhyUsHeight] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (whyUsRef.current) {
      setWhyUsHeight(whyUsRef.current.offsetTop);
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1-second delay

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Banner whyUsHeight={whyUsHeight} />
          <Portfolio />
          <OurServices />
          <div ref={whyUsRef}>
            <WhyUs />
          </div>
          <Technologies />
          <Contact />
          <Blogs />
          <Faq />
          <Cross />
          <Footer/>
        </>
      )}
    </div>
  );
};

export default MainPage;
