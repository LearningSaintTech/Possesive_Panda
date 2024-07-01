import Image from "next/image";
import React from "react";

const Project = ({ project }) => {
  return (
    <div
      className={`px-[3.125vw] py-[1.563vw] hover:bg-[#EEE] hover:shadow-lg rounded-[1.042vw] flex justify-between mb-[4vw] duration-200 hover:duration-200 ${
        project.reverse ? "flex-row-reverse pr-0" : ""
      }`}
    >
      <Image
        src={project.image}
        alt="banner-1"
        className="w-[44.688vw] h-[27.708vw] rounded-[1.042vw]"
      />
      <div className="pt-[2vw]">
        <h2 className="text-[#212121] text-[2.083vw] font-semibold leading[normal] uppercase tracking-[0.025rem]">
          {project.title}
        </h2>
        <p className="text-[#212121] text-[1.25vw] font-normal leading[normal] w-[36.042vw] tracking-[0.015rem]">
          {project.description}
        </p>
        <div className="flex gap-[5.2vw]">
          <div>
            <p className="text-[#212121] text-[2.5vw] font-medium leading[normal] tracking-[0.03rem] mb-0">
              7+
            </p>
            <p className="text-[#212121] text-[1.042vw] font-normal leading[normal] w-[10.677vw] tracking-[0.013rem]">
              Design brings ideas, messages.
            </p>
          </div>
          <div>
            <p className="text-[#212121] text-[2.5vw] font-medium leading[normal] tracking-[0.03rem] mb-0">
              #1
            </p>
            <p className="text-[#212121] text-[1.042vw] font-normal leading[normal] w-[10.677vw] tracking-[0.013rem]">
              Design brings ideas, messages.
            </p>
          </div>
        </div>
        <button className="bg-[#60E2FF] rounded-[0.5vw] py-[1.042vw] px-[2vw] text-[#212121] text-[1.042vw] leading-[normal] tracking-[0.013rem] mt-[1vw]">
          Case Study
        </button>
      </div>
    </div>
  );
};

export default Project;
