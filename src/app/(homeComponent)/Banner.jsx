/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import banner_1 from "../../assets/home/banner/Banner-1.png";
import banner_2 from "../../assets/home/banner/Banner-2.png";
import banner_3 from "../../assets/home/banner/Banner-3.png";
import banner_4 from "../../assets/home/banner/Banner-4.png";
import shadow from "../../assets/home/banner/shadow.png";

const Banner = () => {
  return (
    <div className="flex justify-between mx-[5.2vw]">
      <Image
        src={shadow}
        alt="shadow"
        className="bg-custom-gradient mix-blend-hard-light filter-blur-custom absolute -left-24 -top-3 -z-[1] overflow-hidden"
      />
      <div>
        <h1 className="text-zinc-800 text-8xl font-normal tracking-wide w-[48vw]">
          Boost Your Business With Powerful IT Technology.
        </h1>
        <p className="text-zinc-800 text-2xl font-normal leading-[38.40px] tracking-wide w-[30vw] mt-[50px]">
          In accordance with your company's needs, Maxtra Technologies offers
          tailored app and web development solutions.
        </p>
        <button className="bg-stone-900 text-2xl flex h-[3vw] justify-center items-center rounded-[65.50px] border border-neutral-600 text-white mt-[121px] w-[8.5vw]">
          Lets Start
          <svg
            width="19"
            height="15"
            viewBox="0 0 19 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-5"
          >
            <path
              d="M0 6.5378C0.078006 6.54149 0.156012 6.54888 0.234018 6.54888C5.44482 6.54888 9.77189 6.54888 14.9827 6.54888C15.0568 6.54888 15.1309 6.54888 15.244 6.54888C13.3719 4.77592 11.5309 3.0325 9.70169 1.30387C10.1775 0.849544 10.6339 0.417385 11.0785 0C13.7151 2.49692 16.3634 5.00492 19 7.49815C16.3673 9.99138 13.7151 12.4994 11.0785 15C10.6378 14.5826 10.1853 14.1541 9.72119 13.7146C11.5465 11.986 13.3914 10.2389 15.2362 8.49544C15.2284 8.48067 15.2167 8.4622 15.2089 8.44743C15.1426 8.44743 15.0724 8.44743 15.0061 8.44743C9.7836 8.44743 5.44092 8.44743 0.218417 8.44743C0.148211 8.44743 0.0780059 8.45481 0.00780058 8.45851C-1.81066e-08 7.81581 0 7.1768 0 6.5378Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-end">
        <div className="mr-[2.2vw]">
          <Image
            src={banner_1}
            alt="banner-1"
            className="mb-[93px] -mt-[14vh]"
          />
          <Image src={banner_2} alt="banner-2" className="" />
        </div>
        <div>
          <Image src={banner_3} alt="banner-3" className="mb-[73px] mt-[2vh]" />
          <Image src={banner_4} alt="banner-4" className="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
