import Image from "next/image";
import React from "react";
import portfolio_1 from "../../assets/home/portfolio/Portfolio-1.png";
import portfolio_2 from "../../assets/home/portfolio/Portfolio-2.png";
import portfolio_3 from "../../assets/home/portfolio/Portfolio-3.png";
import portfolio_4 from "../../assets/home/portfolio/Portfolio-4.png";

const Portfolio = () => {
  return (
    <div className="py-[7vw] px-[5.2vw] lg:px-[6.771vw] bg-[#161616] text-white rounded-t-[2.083vw] relative">
      <div className="lg:w-[32.292vw] flex flex-col justify-around gap-[1.5vw] lg:sticky lg:top-[10.417vw] z-[1]">
        <h5 className="text-[2.5vw] md:text-[2vw] lg:text-[1.25vw] tracking-[0.015rem]">
          Our Portfolio
        </h5>
        <h2 className="text-[5vw] md:text-[4vw] lg:text-[3.333vw] font-medium tracking-[0.04rem]">
          Featured Works
        </h2>
        <p className="text-[#F9F9F9] font-normal text-[2.5vw] md:text-[2vw] lg:text-[1.25vw] tracking-[0.015rem] w-[52vw] lg:w-fit">
          Dive into a world where design meets strategy, only at Possessive
          Panda. Our creative designing services are more than just aesthetics.
        </p>

        <button className="bg-stone-900 text-[2.5vw] md:text-[2.8vw] lg:text-[1.25vw] flex justify-center font-normal items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white px-[3vw] py-[2.5vw] md:py-[1vw] w-[30vw] lg:w-[15vw]">
          All Works
          <svg
            width="19"
            height="15"
            viewBox="0 0 19 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 md:ml-5 size-[3.5vw] md:size-[2vw] lg:size-[0.8vw]"
          >
            <path
              d="M0 6.5378C0.078006 6.54149 0.156012 6.54888 0.234018 6.54888C5.44482 6.54888 9.77189 6.54888 14.9827 6.54888C15.0568 6.54888 15.1309 6.54888 15.244 6.54888C13.3719 4.77592 11.5309 3.0325 9.70169 1.30387C10.1775 0.849544 10.6339 0.417385 11.0785 0C13.7151 2.49692 16.3634 5.00492 19 7.49815C16.3673 9.99138 13.7151 12.4994 11.0785 15C10.6378 14.5826 10.1853 14.1541 9.72119 13.7146C11.5465 11.986 13.3914 10.2389 15.2362 8.49544C15.2284 8.48067 15.2167 8.4622 15.2089 8.44743C15.1426 8.44743 15.0724 8.44743 15.0061 8.44743C9.7836 8.44743 5.44092 8.44743 0.218417 8.44743C0.148211 8.44743 0.0780059 8.45481 0.00780058 8.45851C-1.81066e-08 7.81581 0 7.1768 0 6.5378Z"
              fill="white"
            />
          </svg>
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
