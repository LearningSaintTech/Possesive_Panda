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
    if (upRef.current) {
      const ul = upRef.current;
      const clone = ul.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      if (ul.parentNode) {
        ul.parentNode.insertBefore(clone, ul);
      }
    }
  }, []);

  return (
    <div className="flex justify-between pl-[8.854vw] mr-[5.729vw] mt-[140px] relative overflow-hidden h-[1051px]">
      <Image
        src={shadow}
        alt="shadow"
        className="bg-custom-gradient mix-blend-hard-light filter-blur-custom absolute -left-24 -top-3 -z-[1] overflow-visible"
      />
      <div className="w-[35.469vw] mt-[151px]">
        <h1 className="text-zinc-800 text-[3.333vw] font-semibold leading-[normal] tracking-[0.64px]">
          Boost Your Business With Powerful IT Technology.
        </h1>
        <p className="text-zinc-800 text-[1.25vw] font-normal leading-[normal] tracking-[0.24px] w-[28.281vw] mt-[50px]">
          In accordance with your company's needs, Maxtra Technologies offers
          tailored app and web development solutions.
        </p>
        <button className="bg-stone-900 text-[1.25vw] flex justify-center font-normal items-center rounded-[65.50px] border border-neutral-600 text-white mt-[121px] w-[13.542vw] h-[4.167vw]">
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
        {/* <motion.div
          className="mr-[3.125vw]"
          animate={{ y: [0, -1000, 0] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        > */}
        <div className="h-full inline-flex flex-col overflow-hidden mr-[3.125vw]">
          <ul
            ref={upRef}
            className="flex flex-col items-center justify-center md:justify-start [&_li]:my-4 lg:[&_li]:my-[70px] [&_img]:max-w-none animate-moveUp"
          >
            <li>
              <Image
                src={banner_1}
                alt="banner-1"
                className="w-[19.5vw] h-[29vw]"
              />
            </li>
            <li>
              <Image
                src={banner_2}
                alt="banner-2"
                className="w-[19.5vw] h-[29vw]"
              />
            </li>
          </ul>
        </div>

        {/* </motion.div> */}
        {/* <motion.div
          className="mr-[3.125vw]"
          animate={{ y: [0, 1000] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        > */}
        <div className="h-full inline-flex flex-col overflow-hidden">
          <ul
            ref={downRef}
            className="flex flex-col items-center justify-center md:justify-start [&_li]:my-4 lg:[&_li]:my-[70px] [&_img]:max-w-none animate-moveDown"
          >
            <li>
              <Image
                src={banner_3}
                alt="banner-3"
                className="w-[19.5vw] h-[29vw]"
              />
            </li>
            <li>
              <Image
                src={banner_4}
                alt="banner-4"
                className="w-[19.5vw] h-[29vw]"
              />
            </li>
          </ul>
        </div>
        {/* </motion.div> */}
      </div>
      <Image
        src={panda}
        alt="panda"
        className="absolute top-[45%] left-[12%] z-[-20]"
      />
    </div>
  );
};

export default Banner;
