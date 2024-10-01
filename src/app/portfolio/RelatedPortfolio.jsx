import Image from "next/image";
import React from "react";


const RelatedPortfolio = () => {
  return (
    <div className="mt-[25vw] md:mt-[15vw] lg:mt-[10vw] mx-[5.2vw]">
      <div className="flex justify-between items-center">
        <h2 className="text-neutral-800 text-[8vw] lg:text-[2.5vw] font-semibold lg:font-medium leading-[normal] tracking-[0.03rem]">
          Related Portfolio
        </h2>
        <div className="hidden lg:block">
          <button className="bg-neutral-50 border border-black border-opacity-50 shadow-xl rounded-full p-[2vw] lg:p-[1.2vw] mr-[5vw] lg:mr-[1vw]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="23"
              viewBox="0 0 31 23"
              fill="none"
              className="lg:size-[1.5vw] xl:size-[0.8vw]"
            >
              <path
                opacity="0.7"
                d="M9.71795 0.999994L1 11.0181M1 11.0181L9.71795 21.1089M1 11.0181L29.3333 11.0181"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="bg-neutral-50 border border-black border-opacity-50 shadow-xl rounded-full p-[2vw] lg:p-[1.2vw]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="23"
              viewBox="0 0 31 23"
              fill="none"
              className="md:size-[3vw] lg:size-[1.5vw] xl:size-[0.8vw]"
            >
              <path
                opacity="0.7"
                d="M20.6151 0.999994L29.333 11.0181M29.333 11.0181L20.6151 21.1089M29.333 11.0181L0.999677 11.0181"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-[5vw] flex flex-col lg:flex-row justify-between">
        <div className="relative mb-[50px] lg:mb-0">
          <Image
            src={portfolio_1}
            alt="portfolio-1"
            className="size-full lg:size-[28vw]"
          />
          <div className="bg-neutral-50 rounded-[0.65rem] pt-[32px] pb-[23px] shadow-lg w-[85%] mx-auto relative bottom-[15vw] lg:bottom-[10%]">
            <p className="text-sky-500 text-[4vw] lg:text-[1.042vw] font-500 leading-[normal] mb-[5px] text-center">
              Business Audit
            </p>
            <h5 className="text-neutral-800 text-[5vw] lg:text-[1.667vw] leading-[normal] text-center font-medium">
              Our Business Growth
            </h5>
          </div>
        </div>
        <div className="relative mb-[50px] lg:mb-0">
          <Image
            src={portfolio_2}
            alt="portfolio-2"
            className="size-full lg:size-[28vw]"
          />
          <div className="bg-neutral-50 rounded-[0.65rem] pt-[32px] pb-[23px] shadow-lg w-[85%] mx-auto relative bottom-[15vw] lg:bottom-[10%]">
            <p className="text-sky-500 text-[4vw] lg:text-[1.042vw] font-500 leading-[normal] text-center">
              Business Audit
            </p>
            <h5 className="text-neutral-800 text-[5vw] lg:text-[1.667vw] leading-[normal] text-center font-medium">
              Our Business Growth
            </h5>
          </div>
        </div>
        <div className="relative">
          <Image
            src={portfolio_3}
            alt="portfolio-3"
            className="size-full lg:size-[28vw]"
          />
          <div className="bg-neutral-50 rounded-[0.65rem] pt-[32px] pb-[23px] shadow-lg w-[85%] mx-auto relative bottom-[15vw] lg:bottom-[10%]">
            <p className="text-sky-500 text-[4vw] lg:text-[1.042vw] font-500 leading-[normal] text-center">
              Business Audit
            </p>
            <h5 className="text-neutral-800 text-[5vw] lg:text-[1.667vw] leading-[normal] text-center font-medium">
              Our Business Growth
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedPortfolio;
