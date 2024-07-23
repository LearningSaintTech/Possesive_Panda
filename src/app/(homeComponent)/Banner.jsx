"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import banner_1 from "../../assets/home/banner/Banner-1.png";
import banner_2 from "../../assets/home/banner/Banner-2.png";
import banner_3 from "../../assets/home/banner/Banner-3.png";
import banner_4 from "../../assets/home/banner/Banner-4.png";
import banner_5 from "../../assets/home/banner/Banner-5.png";
import banner_6 from "../../assets/home/banner/Banner-6.png";
import banner_7 from "../../assets/home/banner/Banner-7.png";
import banner_8 from "../../assets/home/banner/Banner-8.png";
import banner_9 from "../../assets/home/banner/Banner-9.png";
import shadow from "../../assets/home/banner/shadow.png";
import panda from "../../assets/home/banner/panda-bg.png";
import { GoArrowRight } from "react-icons/go";

const Banner = ({ whyUsHeight }) => {
  const upRef = useRef(null);
  const downRef = useRef(null);
  const handleScroll = () => {
    const startPosition = window.scrollY;
    const distance = whyUsHeight - startPosition;
    const duration = 2000;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      const easeInOutQuad =
        percentage < 0.5
          ? 2 * percentage * percentage
          : -1 + (4 - 2 * percentage) * percentage;
      window.scrollTo(0, startPosition + easeInOutQuad * distance);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };
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
    <div className="flex flex-col lg:flex-row lg:justify-between px-[7.69vw] lg:px-[3vw] lg:pl-[6.771vw] lg:mr-[5.2vw] relative overflow-hidden max-h-[123vh] lg:max-h-[92vh]">
      <Image
        src={shadow}
        alt="shadow"
        className="bg-custom-gradient mix-blend-hard-light filter-blur-custom absolute -left-24 -top-3 -z-[1] overflow-visible"
      />
      <div className="w-full lg:w-[35.469vw] mt-[26vw] lg:mt-[11.5vw] flex flex-col gap-[5vw] lg:gap-[1.042vw]">
        <h1 className="text-zinc-800 text-[8.205vw] md:text-[6vw] lg:text-[3.333vw] font-semibold leading-[normal] md:leading-[normal] tracking-[0.082vw] md:tracking-[0.04rem] text-center lg:text-start lg:w-[35.469vw] w-[85.128vw]" >
          Boost your business  with powerful IT Technology
        </h1>
        <p className="text-zinc-800 text-[3.846vw] lg:text-[1.25vw] font-normal leading-[150%] lg:tracking-[0.015rem] tracking-[0.033vw] lg:w-[28.281vw] text-center lg:text-start">
          Satisfy all of your IT requirements with our advancing IT service
          solutions.
        </p>

        <button
          onClick={handleScroll}
          className="bg-stone-900 text-[3.846vw] md:text-[2.8vw] lg:text-[1.25vw] flex justify-center font-normal items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white px-[3vw] py-[2.821vw] md:py-[1vw] w-full lg:w-fit mx-auto lg:mx-0 sm:hover:text-[#2a2a2a] sm:hover:bg-[#60E2FF] hover:duration-300 duration-300 border-none mb-[7vw] sm:mb-0"
        >
          Why Us
          <GoArrowRight className="hidden sm:block ml-2 md:ml-5 size-[3.5vw] md:size-[2vw] lg:size-[1.5vw]" />
        </button>
      </div>
      <div className="flex justify-around md:justify-end">
        <div className="h-full inline-flex flex-col overflow-hidden mr-[5.128vw] lg:mr-[3.125vw] ">
          <ul
            ref={upRef}
            className="flex flex-col items-center justify-center md:justify-start [&_li]:my-[3vw] lg:[&_li]:my-[1vw] md:[&_Image]:max-w-none md:animate-moveUp"
          >
            <li>
              <Image
                src={banner_1}
                alt="banner-1"
                className="w-[45vw] h-[55.128vw] lg:w-[19.5vw] lg:h-[27vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_2}
                alt="banner-2"
                className="w-[45vw] h-[55.128vw] lg:w-[19.5vw] lg:h-[27vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_6}
                alt="banner-6"
                className="hidden lg:block w-[45vw] h-[55.128vw] lg:w-[19.5vw] lg:h-[27vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_8}
                alt="banner-5"
                className="hidden lg:block w-[45vw] h-[55.128vw] lg:w-[19.5vw] lg:h-[27vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_9}
                alt="banner-5"
                className="hidden lg:block w-[45vw] h-[55.128vw] lg:w-[19.5vw] lg:h-[27vw] rounded-[1vw]"
              />
            </li>
          </ul>
        </div>

        <div className="h-full inline-flex flex-col overflow-hidden">
          <ul
            ref={downRef}
            className="flex flex-col items-center justify-center md:justify-start [&_li]:my-[3vw] lg:[&_li]:my-[1vw] md:[&_Image]:max-w-none md:animate-moveDown"
          >
            <li>
              <Image
                src={banner_3}
                alt="banner-3"
                className="w-[45vw] h-[55.128vw] lg:w-[19.5vw] lg:h-[27vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_4}
                alt="banner-4"
                className="w-[45vw] h-[55.128vw] lg:w-[19.5vw] lg:h-[27vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_5}
                alt="banner-5"
                className="hidden lg:block w-[45vw] h-[55.128vw] lg:w-[19.5vw] lg:h-[27vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_7}
                alt="banner-5"
                className="hidden lg:block w-[45vw] h-[55.128vw] lg:w-[19.5vw] lg:h-[27vw] rounded-[1vw]"
              />
            </li>
          </ul>
        </div>
      </div>
      <Image
        src={panda}
        alt="panda"
        className="hidden lg:block absolute lg:-bottom-[30vw] xl:-bottom-[30vw] 2xl:-bottom-[25vw] left-[11
        %] z-[-20] h-auto w-auto"
      />
    </div>
  );
};

export default Banner;
