import React from "react";
import { GoArrowRight } from "react-icons/go";
import { projects } from "../portfolio/data";
import Project from "../portfolio/Project";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="py-[7vw] px-[5.2vw] lg:px-[6.771vw] bg-[#161616] text-white rounded-t-[2.083vw] relative">
      <div className="lg:w-[32.292vw] flex flex-col justify-around gap-[1.5vw]">
        <h5 className="text-[2.5vw] md:text-[2vw] lg:text-[1.25vw] tracking-[0.015rem]">
          Our Portfolio
        </h5>
        <h2 className="text-[5vw] md:text-[4vw] text-white lg:text-[3.333vw] font-medium tracking-[0.04rem]">
          Portfolio Highlights
        </h2>
        <p className="text-[#F9F9F9] font-normal text-[2.5vw] md:text-[2vw] lg:text-[1.25vw] tracking-[0.015rem] w-[52vw] lg:w-fit">
          Explore our world of standout projects that Possesive Panda
          accomplished and delivered exceptionally across various industries.
        </p>

        <Link
          href="portfolio"
          className="bg-stone-900 text-[2.5vw] md:text-[2.8vw] lg:text-[1.25vw] flex justify-center font-normal items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white px-[3vw] py-[2.5vw] md:py-[1vw] w-[30vw] lg:w-[15vw] hover:text-[#2a2a2a] hover:bg-white hover:duration-300 duration-300"
        >
          All Works
          <GoArrowRight className="ml-2 md:ml-5 size-[3.5vw] md:size-[2vw] lg:size-[1.5vw]" />
        </Link>
      </div>
      {
        <div className="sm:my-[6vw] my-[6vw]">
          {projects.map((project, key) => (
            <Project project={project} key={key} home={true} />
          ))}
        </div>
      }
    </div>
  );
};

export default Portfolio;
