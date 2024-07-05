import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = ({ project, home }) => {
  return (
    <div
      className={` py-[1.563vw] rounded-[1.042vw] flex flex-col sm:flex-row justify-between mb-[4vw] duration-200 hover:duration-200 ${
        home ? "" : "hover:bg-[#EEE] hover:shadow-lg px-[3.125vw]"
      } ${project.reverse ? "flex-row-reverse pr-0" : ""}`}
    >
      <Image
        src={project.image}
        alt="banner-1"
        className="w-full h-[35.708vw] sm:w-[44.688vw] sm:h-[27.708vw] rounded-[2.5vw] sm:rounded-[1.042vw]"
      />
      <div
        className={`pt-[3.5vw] sm:pt-[2vw]  ${
          home ? "text-white" : "text-[#212121]"
        } `}
      >
        <h2
          className={`text-[4vw] sm:text-[2.083vw] font-semibold leading-[normal] uppercase tracking-[0.045rem] sm:tracking-[0.025rem]
           
          `}
        >
          {project.title}
        </h2>
        <p className="text-[3vw] sm:text-[1.25vw] font-normal leading-[normal] w-fit sm:w-[36.042vw] tracking-[0.021rem] sm:tracking-[0.015rem]">
          {project.description}
        </p>
        <div className="flex gap-[10vw] sm:gap-[5.2vw]">
          <div>
            <p className="text-[3.5vw] sm:text-[2.5vw] font-medium leading[normal] tracking-[0.03rem] mb-0 mt-[3vw] sm:mt-0">
              7+
            </p>
            <p className=" text-[3vw] sm:text-[1.042vw] font-normal leading-normal w-[30vw] sm:w-[10.677vw] tracking-[0.013rem]">
              Design brings ideas, messages.
            </p>
          </div>
          <div>
            <p className=" text-[3.5vw] sm:text-[2.5vw] font-medium leading[normal] tracking-[0.03rem] mb-0 mt-[3vw] sm:mt-0">
              #1
            </p>
            <p className=" text-[3vw] sm:text-[1.042vw] font-normal leading[normal] w-[30vw] sm:w-[10.677vw] tracking-[0.013rem] pb-[1.5vw]">
              Design brings ideas, messages.
            </p>
          </div>
        </div>
        <Link
          href={project.url}
          className="bg-[#60E2FF] hover:opacity-55 rounded-[0.5vw] py-[1.1vw] px-[2.5vw] sm:py-[1.042vw] sm:px-[2vw] text-[#212121] text-[3.25vw] sm:text-[1.042vw]  leading-[normal] tracking-[0.013rem] sm:mt-[1vw] mt-[1.9vw]"
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default Project;
