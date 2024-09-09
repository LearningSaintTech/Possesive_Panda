"use client"
import React from "react";
import Joinpanda from "./Joinpanda";
import NewBanner from "../(Components)/NewBanner";
import Contact from "../(Components)/Contact";
import banner from "../../assets/banners/contact-us.png";
import Footer from "../(Components)/Footer";
import Faq from "../(homeComponent)/(FaqSection)/section";
import Journey from "../(Components)/Journey";
import AboutMarquee from "../(Components)/AboutMarquee";
import Review from "../about/Review";




const page = () => {
  return (
    <div className="bg-[#00111A]">
      <NewBanner
        title={"Let Possesive Panda be Your Success Partner!"}
        desciption={"Possesive Panda revolutionized businesses by providing innovative, tech-driven solutions, serving numerous companies to stay ahead in the market."}
      // image={banner}
      />
      <AboutMarquee/>
      <Journey
        title="Like discussing your ideas in person?"
        subtitle="Swing by our office anytime! We're here to turn your tech dreams into reality and ensure you leave with a smile."
        description="Every project begins with an email or phone call, regardless of whether you need a basic website, a mobile app, custom software, virtual assistance services, or to establish your own development team. You are just a call or an email away from being the pinnacle of your industry."
      />
      <Joinpanda />
      <Contact />
      <Review />
      <Faq />
      <Footer />
    </div>
  );
};
export default page;
