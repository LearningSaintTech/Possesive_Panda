import React from "react";
import { GoArrowRight } from "react-icons/go";
import { projects } from "../portfolio/data";
import Project from "../portfolio/Project";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="pt-[15.385vw] lg:pt-[7vw] pb-1 px-[7.692vw] lg:px-[6.771vw] bg-[#00111A] text-white rounded-t-[2.083vw] relative">
      <div className="lg:w-[32.292vw] flex flex-col justify-around lg:gap-[1.042vw] gap-[2.5vw]">
        <h5 className="text-[5.128vw] md:text-[2vw] lg:text-[1.667vw] tracking-[0.015rem] text-center lg:text-left">
          Our Portfolio
        </h5>
        <h2 className="text-[8.205vw] md:text-[4vw] text-white lg:text-[3.333vw] font-medium tracking-[0.001rem] lg:tracking-[0.04rem] text-center lg:text-left">
          Project Accomplishments
        </h2>
        <p className="text-[#F9F9F9] font-normal text-[3.6vw] md:text-[2vw] lg:text-[1.25vw] tracking-[0.04vw] lg:tracking-[0.015rem] w-full lg:w-fit text-center lg:text-left">
          Explore our world of standout projects that Possesive Panda
          accomplished and delivered exceptionally across various industries.
        </p>

        <Link
          href="portfolio"
          className="bg-stone-900 text-[3.846vw] md:text-[2.8vw] lg:text-[1.25vw] flex justify-center font-normal items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white px-[3vw] py-[2.5vw] md:py-[1vw] w- lg:w-[15vw] hover:text-[#2a2a2a] hover:bg-[#60E2FF] hover:duration-300 duration-300"
        >
          All Works
          <GoArrowRight className="ml-2 md:ml-5 size-[3.5vw] md:size-[2vw] lg:size-[1.5vw]" />
        </Link>
      </div>
      {
        <div className="sm:my-[6vw] my-[10vw]">
          {projects.map((project, key) => (
            <Project project={project} key={key} home={true} />
          ))}
        </div>
      }
    </div>
  );
};

export default Portfolio;
