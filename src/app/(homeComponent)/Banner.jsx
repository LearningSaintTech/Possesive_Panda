"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import banner_1 from "../../assets/home/banner/Banner-1.png";
import banner_2 from "../../assets/home/banner/Banner-2.png";
import banner_3 from "../../assets/home/banner/Banner-3.png";
import banner_4 from "../../assets/home/banner/Banner-4.png";
import shadow from "../../assets/home/banner/shadow.png";
import panda from "../../assets/home/banner/panda-bg.png";

const Banner = () => {
  const upRef = useRef(null);
  const downRef = useRef(null);
  useEffect(() => {
    if (upRef.current) {
      const ul = upRef.current;
      const clone = ul.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      if (ul.parentNode) {
        ul.parentNode.insertBefore(clone, ul);
      }
    }
  }, []);

  useEffect(() => {
    if (downRef.current) {
      const ul = downRef.current;
      const clone = ul.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      if (ul.parentNode) {
        ul.parentNode.insertBefore(clone, ul);
      }
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between px-[3vw] xl:pl-[8.854vw] lg:pl-[5.2vw] lg:mr-[5.729vw] relative overflow-hidden max-h-[125vh] lg:max-h-[100vh]">
      <Image
        src={shadow}
        alt="shadow"
        className="bg-custom-gradient mix-blend-hard-light filter-blur-custom absolute -left-24 -top-3 -z-[1] overflow-visible"
      />
      <div className="w-full lg:w-[35.469vw] mt-[20px] md:mt-[50px] lg:mt-[151px] min-h-[60vh] max-h-[100vh] flex flex-col justify-evenly">
        <h1 className="text-zinc-800 text-[8.2vw] md:text-[6vw] lg:text-[3.333vw] font-semibold leading-[2.5rem] md:leading-[normal] md:tracking-[0.04rem] text-center lg:text-start">
          Boost Your Business With Powerful IT Technology.
        </h1>
        <p className="text-zinc-800 text-[4vw] lg:text-[1.25vw] font-normal leading-[150%] tracking-[0.24px] lg:w-[28.281vw] text-center lg:text-start">
          In accordance with your company's needs, Maxtra Technologies offers
          tailored app and web development solutions.
        </p>
        <div className="flex flex-col lg:flex-row justify-evenly lg:justify-normal gap-5 lg:gap-0">
          <button className="bg-stone-900 text-[4vw] md:text-[2.8vw] lg:text-[1.25vw] flex justify-center font-normal items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white px-[3vw] py-[2.5vw] md:py-[1vw]">
            Lets Start
            <svg
              width="19"
              height="15"
              viewBox="0 0 19 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 md:ml-5 size-[5vw] md:size-[3vw] lg:size-[0.8vw]"
            >
              <path
                d="M0 6.5378C0.078006 6.54149 0.156012 6.54888 0.234018 6.54888C5.44482 6.54888 9.77189 6.54888 14.9827 6.54888C15.0568 6.54888 15.1309 6.54888 15.244 6.54888C13.3719 4.77592 11.5309 3.0325 9.70169 1.30387C10.1775 0.849544 10.6339 0.417385 11.0785 0C13.7151 2.49692 16.3634 5.00492 19 7.49815C16.3673 9.99138 13.7151 12.4994 11.0785 15C10.6378 14.5826 10.1853 14.1541 9.72119 13.7146C11.5465 11.986 13.3914 10.2389 15.2362 8.49544C15.2284 8.48067 15.2167 8.4622 15.2089 8.44743C15.1426 8.44743 15.0724 8.44743 15.0061 8.44743C9.7836 8.44743 5.44092 8.44743 0.218417 8.44743C0.148211 8.44743 0.0780059 8.45481 0.00780058 8.45851C-1.81066e-08 7.81581 0 7.1768 0 6.5378Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="text-[4vw] md:text-[2.8vw] lg:text-[1.25vw] flex justify-center items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-zinc-900 tracking-[0.013vw] ml-0 lg:ml-[5%] px-[3vw] py-[2.5vw] md:py-[1vw]">
            See Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              className="ml-2 md:ml-5 size-[5vw]  md:size-[3vw] lg:size-[0.8vw]"
            >
              <path
                d="M0 7.04621C0.078006 7.04988 0.156012 7.0572 0.234018 7.0572C5.44482 7.0572 9.77189 7.0572 14.9827 7.0572C15.0568 7.0572 15.1309 7.0572 15.244 7.0572C13.3719 5.2997 11.5309 3.57149 9.70169 1.85793C10.1775 1.40757 10.6339 0.979175 11.0785 0.56543C13.7151 3.04058 16.3634 5.52671 19 7.99819C16.3673 10.4697 13.7151 12.9558 11.0785 15.4346C10.6378 15.0209 10.1853 14.5961 9.72119 14.1604C11.5465 12.4469 13.3914 10.715 15.2362 8.98679C15.2284 8.97214 15.2167 8.95383 15.2089 8.93919C15.1426 8.93919 15.0724 8.93919 15.0061 8.93919C9.7836 8.93919 5.44092 8.93919 0.218417 8.93919C0.148211 8.93919 0.0780059 8.94651 0.00780058 8.95017C-1.81066e-08 8.31308 0 7.67965 0 7.04621Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-around  md:justify-end">
        <div className="h-full inline-flex flex-col overflow-hidden mr-[3.125vw]">
          <ul
            ref={upRef}
            className="flex flex-col items-center justify-center md:justify-start [&_li]:my-4 lg:[&_li]:my-[70px] md:[&_Image]:max-w-none md:animate-moveUp"
          >
            <li>
              <Image
                src={banner_1}
                alt="banner-1"
                className="w-[45vw] h-[52vw] lg:w-[19.5vw] lg:h-[29vw]"
              />
            </li>
            <li>
              <Image
                src={banner_2}
                alt="banner-2"
                className="w-[45vw] h-[52vw] lg:w-[19.5vw] lg:h-[29vw]"
              />
            </li>
          </ul>
        </div>

        <div className="h-full inline-flex flex-col overflow-hidden">
          <ul
            ref={downRef}
            className="flex flex-col items-center justify-center md:justify-start [&_li]:my-4 lg:[&_li]:my-[70px] [&_Image]:max-w-none md:animate-moveDown"
          >
            <li>
              <Image
                src={banner_3}
                alt="banner-3"
                className="w-[45vw] h-[52vw] lg:w-[19.5vw] lg:h-[29vw]"
              />
            </li>
            <li>
              <Image
                src={banner_4}
                alt="banner-4"
                className="w-[45vw] h-[52vw] lg:w-[19.5vw] lg:h-[29vw]"
              />
            </li>
          </ul>
        </div>
      </div>
      <Image
        src={panda}
        alt="panda"
        className="hidden lg:block absolute lg:-bottom-[65%] xl:-bottom-[55%] 2xl:-bottom-[45%] left-[15%] z-[-20] h-auto w-auto"
      />
    </div>
  );
};

export default Banner;
