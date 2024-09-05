import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = ({ project, home, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`py-[1.563vw] rounded-[1.042vw] flex flex-col sm:flex-row justify-between mb-[15vw] lg:mb-[4vw] duration-200 hover:duration-500 
        ${isEven ? '' : 'sm:flex-row-reverse'} 
        ${home ? "" : "hover:bg-[#131D22] hover:shadow-lg px-[1.563vw]"}
      `}
    >
      <Image
        src={project.image}
        alt={project.title}
        className="w-full h-[63.581vw] sm:w-[44.688vw] sm:h-[27.708vw] rounded-[2.5vw] sm:rounded-[1.042vw]"
      />
      <div
        className={`pt-[3.5vw] sm:pt-[0.5vw] ${home ? "text-white" : "text-[#212121]"}`}
      >
        <h2
          className={`text-white text-[5.128vw] sm:text-[2.083vw] text-center lg:text-left lg:mt-0 mt-[5.128vw] font-semibold leading-[normal] uppercase tracking-[0.045rem] sm:tracking-[0.025rem]`}
        >
          {project.title}
        </h2>
        <p className="text-white text-[3.846vw] sm:text-[1.25vw] font-normal leading-[normal] mb-[2vw] tracking-[0.033vw] lg:tracking-[0.021rem] sm:tracking-[0.015rem] text-center lg:text-left">
          {project.moto}
        </p>
        <p className="text-white text-[3.846vw] sm:text-[1.25vw] font-normal leading-[normal] lg:mb-[1vw] mb-[2vw] w-fit sm:w-[36.042vw] tracking-[0.033vw] lg:tracking-[0.021rem] sm:tracking-[0.015rem] text-center lg:text-left">
          {project.description}
        </p>
        <div className="flex gap-[5vw] sm:gap-[5.2vw] px-[5vw] sm:px-0 text-white">
          <div>
            <p className="text-[6.154vw] sm:text-[2.5vw] font-medium leading[normal] tracking-[0.03rem] mb-0 mt-[3vw] sm:mt-0">
              7+
            </p>
            <p className="text-[3.846vw] sm:text-[1.042vw] font-normal leading-normal w-[30vw] sm:w-[10.677vw] tracking-[0.033vw] lg:tracking-[0.013rem]">
              Design brings ideas, messages.
            </p>
          </div>
          <div>
            <p className="text-[6.154vw] sm:text-[2.5vw] font-medium leading[normal] tracking-[0.03rem] mb-0 mt-[3vw] sm:mt-0">
              #1
            </p>
            <p className="text-[3.846vw] sm:text-[1.042vw] font-normal leading[normal] w-[35vw] sm:w-[10.677vw] tracking-[0.033vw] lg:tracking-[0.013rem] pb-[8.205vw] lg:pb-[1.5vw]">
              Design brings ideas, messages.
            </p>
          </div>
        </div>
        <Link
          href={project.url}
          className="bg-[#60E2FF] hover:opacity-55 rounded-[5.128vw] lg:rounded-[0.521vw] py-[2.821vw] px-[29.744vw] sm:py-[0.65vw] sm:px-[2vw] text-white text-[3.846vw] sm:text-[1.25vw] leading-[normal] tracking-[0.013rem] sm:mt-0 mt-[1.9vw] w-full lg:w-fit"
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default Project;
