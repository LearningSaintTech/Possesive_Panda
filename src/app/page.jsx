"use client";
import Banner from "./(homeComponent)/Banner";
import OurServices from "./(homeComponent)/OurServices";
import Blogs from "./(homeComponent)/Blogs";
import Cross from "./(Components)/Cross";
import Faq from "./(homeComponent)/(FaqSection)/section";
import WhyUs from "./(homeComponent)/Whyus";
import Technologies from "./(homeComponent)/(Technologies)/Technologies";
import Portfolio from "./(homeComponent)/Portfolio";
import Contact from "./(Components)/Contact";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const whyUsRef = useRef(null);
  const [whyUsHeight, setWhyUsHeight] = useState(0);

  useEffect(() => {
    if (whyUsRef.current) {
      setWhyUsHeight(whyUsRef.current.offsetTop);
    }
  }, []);
  return (
    <main className="">
      <Banner whyUsHeight={whyUsHeight}/>
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
    </main>
  );
}
