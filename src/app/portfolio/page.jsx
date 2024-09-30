"use client"
import React, { useState } from "react";
import Content from "./Content";
import RelatedPortfolio from "./RelatedPortfolio";
import NewBanner from "../(Components)/NewBanner";
import { cards, projects } from "./data";
import Project from "./Project";
import Card from "./Card";
import Footer from "../(Components)/Footer";
import Pagination from "./Pagination";
import AboutMarquee from "../(Components)/AboutMarquee";
import Journey from "../(Components)/Journey";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); // Set how many posts you want per page

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = projects.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="bg-[#00111A]">
      <NewBanner
        title={"Let Possesive Panda be Your Success Partner!"}
        desciption={
          "Possesive Panda revolutionized businesses by providing innovative, tech-driven solutions, serving numerous companies to stay ahead in the market."
        }
      />
      <div className="hidden sm:block sm:mt-[1.042vw]">
        <AboutMarquee />
      </div>
      <div className="mt-[16.941vw] sm:mt-[5.25vw]">
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
