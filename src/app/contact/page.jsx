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
import Head from 'next/head';
import ThankYou from "./ThankYou";




const page = () => {
  return (
    <div className="bg-[#00111A]">
         <head>
        {/* Microsoft Advertising base UET tag */}
        <script>
          {`
            (function(w,d,t,r,u) {
              var f,n,i;
              w[u]=w[u]||[],f=function() {
                var o={ti:"187153115",enableAutoSpaTracking:true};
                o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
              },
              n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function() {
                var s=this.readyState;
                s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
              },
              i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
            })(window,document,"script","//bat.bing.com/bat.js","uetq");
          `}
        </script>
      </head>
      <NewBanner
        title={"Let Possesive Panda be Your Success Partner!"}
        desciption={"Possesive Panda revolutionized businesses by providing innovative, tech-driven solutions, serving numerous companies to stay ahead in the market."}
      // image={banner}
      />
      {/* <AboutMarquee/> */}
      <Journey
        title="Like discussing your ideas in person?"
        subtitle="Swing by our office anytime! We're here to turn your tech dreams into reality and ensure you leave with a smile."
        description="Every project begins with an email or phone call, regardless of whether you need a basic website, a mobile app, custom software, virtual assistance services, or to establish your own development team. You are just a call or an email away from being the pinnacle of your industry."
      />
      {/* <Joinpanda /> */}
      <div className="mt-[7.917vw] mb-[7.917vw]"> 
      <ThankYou/>
      </div>
      <Contact />
      <Review />
      <Faq />
      <Footer />
    </div>
  );
};
export default page;
