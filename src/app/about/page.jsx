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
import Script from "next/script";
export const metadata = {
  title: 'About Us - Possesive Panda',
  description: 'Possesive Panda is a Leading Software & App Development Company Working with many experts engineers Offers services like Web & App Development, Virtual Assistance, Digital Marketing & Much More.',
  alternates: {
    canonical: 'https://www.possesivepanda.com/about'
  },


};
const page = () => {

  return (
    <div className="bg-[#00111A]">
      <head>
      <script
    dangerouslySetInnerHTML={{
      __html: `
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
      `,
    }}
  />

      </head>




      <Script
        id="real-estate-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What does Possesive Panda do?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Possesive Panda tailors solutions according to clients’s expectations by providing a unique blend of onshore and offshore services. Client satisfaction and quick turnaround enable us to achieve success day by day. We offer a comprehensive range of IT services, covering every aspect, from software development and digital marketing to cloud services and beyond. From early-age startups to seasoned organizations in Fintech, Healthcare, Travel, Retail and many more, we deliver the best services across the globe."
              }
            },{
              "@type": "Question",
              "name": "What services and solutions does Possesive Panda provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Possesive Panda as a global leader offers IT services across varied domains like Web Development, Mobile App Development, Software Development, Digital Marketing, Search Engine Optimization, Social Media Management, Search Engine Marketing, Performance Marketing, eCommerce, Cloud Services, UI & UX Design, Cybersecurity, PPC, ORM, and Virtual Assistant Services. With this wide range of services, we are uplifting budding startups and enterprises of assorted domains."
              }
            },{
              "@type": "Question",
              "name": "What are Possesive Panda’s pricing models, and how do you estimate project costs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Possesive Panda’s flexible pricing structure ensures that you may satisfy your company objectives without going over budget. A developer's estimated cost depends on several variables, such as project need, skill level, and experience. With this strategy, you can quickly scale your staff up or down to meet your needs, which will save costs and increase efficiency."
              }
            },{
              "@type": "Question",
              "name": "What is Possesive Panda’s process for onboarding new clients and project delivery?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Possesive Panda’s process for onboarding consists of 4 steps, first, fill out our form, then within 24 hours for consultation. Our industry expert consultants scrutinize your project and require your wants and needs for better project delivery. Afterward, price and budget discussion leads to the onboarding."
              }
            },{
              "@type": "Question",
              "name": "How do you provide virtual assistants?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Possesive Panda offers virtual assistant services for various domains and processes such as web app development, mobile development, digital marketing, PPC, social media marketing, eCommerce, real estate services, health care services, and many more. We provide onshore and offshore virtual assistants for the betterment and overall growth of your business."
              }
            },{
              "@type": "Question",
              "name": "How does Possesive Panda handle project timelines and deadlines?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We use an Agile Project Execution Methodology in conjunction with AI-driven planning to manage projects. We ensure that your project stays on schedule and is delivered on time by using advanced tools like JIRA and TFS for effective tracking and monitoring."
              }
            }]
          
      
          })
        }}
      />


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
