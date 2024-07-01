import Image from "next/image";
import React from "react";
import portfolio_1 from "../../assets/home/portfolio/Portfolio-1.png";
import portfolio_2 from "../../assets/home/portfolio/Portfolio-2.png";
import portfolio_3 from "../../assets/home/portfolio/Portfolio-3.png";
import portfolio_4 from "../../assets/home/portfolio/Portfolio-4.png";
import { GoArrowRight } from "react-icons/go";

const Portfolio = () => {
  return (
    <div className="py-[7vw] px-[5.2vw] lg:px-[6.771vw] bg-[#161616] text-white rounded-t-[2.083vw] relative">
      <div className="lg:w-[32.292vw] flex flex-col justify-around gap-[1.5vw] lg:sticky lg:top-[10.417vw] z-[1]">
        <h5 className="text-[2.5vw] md:text-[2vw] lg:text-[1.25vw] tracking-[0.015rem]">
          Our Portfolio
        </h5>
        <h2 className="text-[5vw] md:text-[4vw] lg:text-[3.333vw] font-medium tracking-[0.04rem]">
          Portfolio Highlights
        </h2>
        <p className="text-[#F9F9F9] font-normal text-[2.5vw] md:text-[2vw] lg:text-[1.25vw] tracking-[0.015rem] w-[52vw] lg:w-fit">
          Explore our world of standout projects that Possesive Panda
          accomplished and delivered exceptionally across various industries.
        </p>

        <button className="bg-stone-900 text-[2.5vw] md:text-[2.8vw] lg:text-[1.25vw] flex justify-center font-normal items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white px-[3vw] py-[2.5vw] md:py-[1vw] w-[30vw] lg:w-[15vw] hover:text-[#2a2a2a] hover:bg-white hover:duration-300 duration-300">
          All Works
          <GoArrowRight className="ml-2 md:ml-5 size-[3.5vw] md:size-[2vw] lg:size-[1.5vw]" />
        </button>
      </div>
      <div className="lg:absolute lg:top-[140px] lg:right-[7.5vw] lg:mb-[100px]">
        <Image
          src={portfolio_1}
          alt="portfolio-1"
          className="size-[83vw] lg:h-auto lg:w-auto mt-[40px] lg:mt-0 mx-auto lg:mx-0"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:mt-[300px] relative z-[10]">
        <Image
          src={portfolio_1}
          alt="portfolio-1"
          className="size-[83vw] lg:h-[35vw] lg:w-[40vw] mt-[40px] lg:mt-0 mx-auto lg:mx-0"
        />
        <Image
          src={portfolio_2}
          alt="portfolio-2"
          className="md:size-[50vw] size-[83vw] lg:h-auto lg:w-auto mt-[2.083vw] lg:mt-0 mx-auto lg:mx-0"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:mt-[5.2vw] relative z-[10]">
        <Image
          src={portfolio_3}
          alt="portfolio-3"
          className="md:size-[50vw] size-[83vw] lg:h-auto lg:w-[40vw] mt-[2.083vw] lg:mt-0 mx-auto lg:mx-0"
        />
        <Image
          src={portfolio_4}
          alt="portfolio-4"
          className="md:size-[50vw] size-[83vw] lg:h-auto lg:w-auto mt-[2.083vw] lg:mt-0 mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
};

export default Portfolio;
