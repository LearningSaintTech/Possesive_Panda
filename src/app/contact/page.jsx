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
import { Helmet } from 'react-helmet-async';
import ThankYou from "./ThankYou";




const page = () => {
  return (
    <div className="bg-[#00111A]">
            <Helmet>
            <title>Contact Us - Possesive Panda</title>
        <meta name="description" content="At Possesive Panda, we thrive on collaborating with innovative startups, ambitious brands, and enterprises. If you have a groundbreaking app idea, let's bring it to life together. Reach out to us at hello@possesivepanda.com to get started!" />
        <link rel="canonical" href="https://www.possesivepanda.com/contact" />
            </Helmet>
      <NewBanner
        title={"Let Possesive Panda be Your Success Partner!"}
        desciption={"Possesive Panda revolutionized businesses by providing innovative, tech-driven solutions, serving numerous companies to stay ahead in the market."}
      />
      <div className="hidden sm:block sm:mt-[1.771vw]">
        <AboutMarquee />
      </div>
      <div className="sm:hidden block mt-[10vw]">
      <Contact />
      </div>
      <div className="mt-[14vw] sm:mt-[5.25vw]">
        <Journey
          title="Like discussing your ideas in person?"
          subtitle="Swing by our office anytime! We're here to turn your tech dreams into reality and ensure you leave with a smile."
          description="Every project begins with an email or phone call, regardless of whether you need a basic website, a mobile app, custom software, virtual assistance services, or to establish your own development team. You are just a call or an email away from being the pinnacle of your industry."
        />
      </div>
      <div className="mt-[6.25vw] mb-[6.25vw]">
        <ThankYou />
      </div>
      <div className="hidden sm:block">
      <Contact />
      </div>
      <Review />
      <div className="mt-[6vw]">
        <Faq />
      </div>
      <Footer />
    </div>
  );
};
export default page;
