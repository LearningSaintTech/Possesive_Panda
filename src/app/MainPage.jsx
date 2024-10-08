"use client";
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Script from "next/script";
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
import ToolsTech from "../app/services/(CommonComponent)/ToolsTech";
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
           <script
        id="organisation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "Possesive Panda Pvt. Ltd.",
  "url": "https://www.possesivepanda.com/",
  "logo": "https://www.possesivepanda.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpp-trademark-logo.cd05e1c9.png&w=3840&q=75",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1 (415) 800-3326",
    "contactType": "customer service",
    "areaServed": ["US","IN","GB"],
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61559502103126",
    "https://x.com/possesivepanda",
    "https://www.instagram.com/possesivepanda/",
    "https://in.linkedin.com/company/possesive-panda"
  ]

          
          })
        }}
      />
      </head>

      <Script
        id="home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What technologies are used in web development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "HTML, CSS, JavaScript, PHP, React, and Angular are some technologies used in web development. We use many more to deliver services based on clients’ needs."
              }
            },{
              "@type": "Question",
              "name": "Does Possesive Panda provide services for startups?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely, yes. We have Startup Bundle Services for aspiring entrepreneurs and startup businesses, through which they can achieve great heights."
              }
            },{
              "@type": "Question",
              "name": "How can your IT services benefit our business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our IT services can help improve your business operations, efficiency, and customer satisfaction. We also help maintain security and effectively achieve digital goals."
              }
            },{
              "@type": "Question",
              "name": "Is there any Customer support available here?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our customers are our priority. Our customer support is always available to handle customer queries and provide timely phone, email, and chat assistance."
              }
            },{
              "@type": "Question",
              "name": "What services does Possesive Panda offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Possesive Panda offers multiple IT services, such as software development, app development, cloud services, web development, and digital marketing. We also provide a range of services to suit your business needs."
              }
            },{
              "@type": "Question",
              "name": "How do you guarantee the security of my business data?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The security of your business data is our responsibility. We implement standard cybersecurity measures, such as encryption, firewalls, intrusion detection systems, and regular security audits in accordance with data protection regulations."
              }
            },{
              "@type": "Question",
              "name": "Why choose Possesive Panda as your IT services and success partner?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Possesive Panda tailors solutions according to client's expectations by providing a unique blend of onshore and offshore services. Client satisfaction and quick turnaround enable us to achieve success day by day. We offer a comprehensive range of IT services, covering every aspect, from software development and digital marketing to cloud services. From early-age startups to seasoned organizations in Fintech, Healthcare, Travel, Retail, and many more, we deliver the best services across the globe."
              }
            }]
          
          })
        }}
      />

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/", 
            "@type": "BreadcrumbList", 
            "itemListElement": [{
              "@type": "ListItem", 
              "position": 1, 
              "name": "Home Page",
              "item": "https://www.possesivepanda.com/"  
            },{
              "@type": "ListItem", 
              "position": 2, 
              "name": "About Us",
              "item": "https://www.possesivepanda.com/about"  
            },{
              "@type": "ListItem", 
              "position": 3, 
              "name": "Service",
              "item": "https://www.possesivepanda.com/services"  
            },{
              "@type": "ListItem", 
              "position": 4, 
              "name": "Portfolio",
              "item": "https://www.possesivepanda.com/portfolio"  
            },{
              "@type": "ListItem", 
              "position": 5, 
              "name": "All Blogs",
              "item": "https://www.possesivepanda.com/blog"  
            }]
          
          })
        }}
      />

      <>
   
          <>
            <Banner whyUsRef={whyUsRef} />
            <div className="mt-[14.118vw] sm:mt-[3.25vw]">
              <OurWorks />
            </div>
            <div className="mt-0 sm:mt-[4.063vw]">
              <Marquee />
            </div>
            <div className="mt-[8vw] sm:mt-[5.313vw]">
              <ServicesList />
            </div>
            <div className="mt-[14.118vw] sm:mt-[8.167vw]">
              <OurServices />
            </div>
            <div className="hidden lg:block">
              <Canvas />
            </div>
            <div ref={whyUsRef} className="mt-[14.118vw] sm:mt-[1vw]">
              <WhyUs />
            </div>
            <div className="sm:mt-[6vw] mt-[14.118vw]">
              <Technologies />
            </div>
            <div className="sm:mt-[5.896vw] mt-[14.118vw]">
              <ToolsTech />
            </div>
            <div className="sm:mt-[7.188vw] mt-[14.118vw]">
              <Contact />
            </div>
            <div className="sm:mt-[7.969vw] mt-[19vw]">
              <WorldClocks />
            </div>
            <div className="sm:mt-[5.208vw] mt-[8vw]">
              <Blogs />
            </div>
            <div className="sm:mt-[3vw] mt-[14.118vw]">
              <Faq />
            </div>
            <div className="sm:mt-[3vw] mt-[10vw]">
              <Footer />
            </div>
          </>
      </>
    </div>
  );
};

export default MainPage;
