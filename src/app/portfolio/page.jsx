"use client"
import React, { useState } from "react";
import Content from "./Content";
import RelatedPortfolio from "./RelatedPortfolio";
import NewBanner from "../(Components)/NewBanner";
import { cards, projects } from "./data";
import Project from "./Project";
import Card from "./Card";
import banner from "../../assets/banners/portfolio-details.png";
import Footer from "../(Components)/Footer";
import Pagination from "./Pagination"; // Import the Pagination component

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); // Set how many posts you want per page

  // Calculate the indexes of the current posts
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = projects.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="bg-[#00111A]">
      <NewBanner
        title={"Let Possessive Panda be Your Success Partner!"}
        desciption={
          "Possessive Panda revolutionized businesses by providing innovative, tech-driven solutions, serving numerous companies to stay ahead in the market."
        }
        // image={banner}
      />
      <div className="sm:mx-[5.2vw] sm:my-[6vw] mx-[5.455vw] my-[6vw]">
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

      <div className="mx-[5.455vw] sm:mx-[5.2vw] mb-[2.3vw]">
        <h2 className="w-[53vw] sm:w-[38.958vw]  text-white font-semibold leading-[normal] tracking-[0.03rem] text-[3.6vw] sm:text-[2.083vw] mb-[5.2vw]">
          Unleashing the Digital Potential of Global Leaders
        </h2>
        <div className="flex flex-col sm:flex sm:flex-row justify-between">
          {cards.map((card, key) => (
            <Card card={card} key={key} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
