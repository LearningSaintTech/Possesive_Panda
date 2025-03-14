"use client"
import React, { useState } from "react";

import NewBanner from "../(Components)/NewBanner";
import { projects } from "./data";
import Project from "./Project";
import Footer from "../(Components)/Footer";
import Pagination from "./Pagination";
import AboutMarquee from "../(Components)/AboutMarquee";
import Journey from "../(Components)/Journey";
// export const metadata = {
//   title: "Possesive Panda's Portfolio of Digital Innovation and Transformation",
//   description: 'Explore the standout projects from our web design and mobile app development portfolio, featuring both iOS and Android solutions. See why our clients trust us to bring their vision to life, with successful results across a range of brands.',
//   alternates: {
//     canonical: 'https://www.possesivepanda.com/portfolio'
//   },


// };
const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); // Set how many posts you want per page

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = projects.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="bg-[#00111A]">
      <head>
        <title>Possesive Panda&apos;s Portfolio of Digital Innovation and Transformation        </title>
        <meta name="description" content=" Explore the standout projects from our web design and mobile app development portfolio, featuring both iOS and Android solutions. See why our clients trust us to bring their vision to life, with successful results across a range of brands.
" />
        <link rel="canonical" href="https://www.possesivepanda.com/portfolio" />
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
      <NewBanner
        title={"Let Possesive Panda be Your Success Partner!"}
        desciption={
          "Possesive Panda revolutionized businesses by providing innovative, tech-driven solutions, serving numerous companies to stay ahead in the market."
        }
      />
      <div className="hidden sm:block sm:mt-[1.771vw]">
        <AboutMarquee />
      </div>
      <div className="mt-[14vw] sm:mt-[5.25vw]">
        <Journey
          title="Explore our tech-driven triumphs:"
          subtitle="From pioneering startups to well-established enterprises, discover the ultimate success stories that redefine innovation. "
          description="At Possesive Panda, we weave magic across various industries, transforming ideas into stunning digital realities. Our talented in-house team doesn't just build websites and software; they sculpt exceptional products that reflect their expertise and creativity. With every project, we blend innovation and skill to create masterpieces that stand out and shine."
        />
      </div>
      <div className="sm:mx-[5.2vw] md:pt-3 sm:my-[6vw] mx-[5.455vw] my-[6vw]">
        {currentPosts.map((project, index) => (
          <Project key={index} project={project} index={index} home={false} />
        ))}
      </div>

      <Pagination
        totalPosts={projects.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <Footer />
    </div>
  );
};

export default Portfolio;
