"use client";
/* eslint-disable react/no-unescaped-entities */
import "./why.css";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import banner_1 from "../../assets/home/banner/Banner-1.svg";
import banner_2 from "../../assets/home/banner/Banner-2.svg";
import banner_3 from "../../assets/home/banner/Banner-3.svg";
import banner_4 from "../../assets/home/banner/Banner-4.svg";
import banner_5 from "../../assets/home/banner/Banner-5.svg";
import banner_6 from "../../assets/home/banner/Banner-6.svg";
import banner_7 from "../../assets/home/banner/Banner-7.svg";
import banner_8 from "../../assets/home/banner/Banner-8.svg";
import banner_9 from "../../assets/home/banner/Banner-3.svg";

const WhyUs = () => {
  const upRef = useRef(null);
  const downRef = useRef(null);

  useEffect(() => {
    if (upRef.current) {
      const ul = upRef.current;
      const clone = ul.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      if (ul.parentNode) {
        ul.parentNode.appendChild(clone); // Change `insertBefore` to `appendChild`
      }
    }
  }, []);
  
  useEffect(() => {
    if (downRef.current) {
      const ul = downRef.current;
      const clone = ul.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      if (ul.parentNode) {
        ul.parentNode.appendChild(clone); // Change `insertBefore` to `appendChild`
      }
    }
  }, []);
  


  return (
    <div className="flex flex-col sm:flex-row sm:justify-between md:gap-[4vw] px-[7.69vw] sm:px-[5.208vw] relative overflow-hidden max-h-[97.5vh] md:max-h-[45vh] lg:max-h-[80vh]">
      <div className="sm:w-[36vw]  sm:mt-[10vw]">
        <h3 className="text-[#fff] text-[4.103vw] sm:text-[1.25vw] font-medium sm:font-normal tracking-[0.051vw] sm:tracking-[0.015rem] mb-[4vw] sm:mb-[1.042vw] text-center sm:text-left">
          Why Us
        </h3>
        <h2 className="text-[#fff] font-medium text-[8.205vw] sm:text-[3.333vw] leading-[125%] tracking-[0.062vw] sm:tracking-[0.04rem] mb-[5.128vw] sm:mb-[1.042vw] text-center sm:text-left">
          Why collaborate with us?
        </h2>
        <p className="font-normal text-[#fff] text-[4.103vw] sm:text-[1.25vw] leading-[150%] tracking-[0.038vw] sm:tracking-[0.015rem] text-center sm:text-left">
          We are a leading global IT Service provider that adapts, overcomes, and solves complex technical and business problems. From building cutting-edge software to organizing seamless virtual assistant services, we propel your business’s growth to the next level. Let us be the catalyst that transforms your ambitions into achievements.
        </p>
      </div>
      <div className="flex justify-around md:justify-end mt-[7.692vw] sm:mt-[8vw]">
        <div className="h-full inline-flex flex-col overflow-hidden mr-[3.846vw] sm:mr-[3.125vw] ">
          <ul
            ref={upRef}
            className="flex flex-col items-center justify-center md:justify-start [&_li]:my-[3vw] lg:[&_li]:my-[1vw] md:[&_Image]:max-w-none md:animate-moveUp"
          >
            <li>
              <Image
                src={banner_1}
                alt="banner-1"
                className="w-[40.319vw] h-[35.432vw] sm:w-[17.188vw] sm:h-[15.104vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_2}
                alt="banner-2"
                className="w-[40.319vw] h-[35.432vw] sm:w-[17.188vw] sm:h-[15.104vw] rounded-[4vw] sm:rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_6}
                alt="banner-6"
                className=" w-[40.319vw] h-[35.432vw] sm:w-[17.188vw] sm:h-[15.104vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_8}
                alt="banner-8"
                className="w-[40.319vw] h-[35.432vw] sm:w-[17.188vw] sm:h-[15.104vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_9}
                alt="banner-9"
                className=" w-[40.319vw] h-[35.432vw] sm:w-[17.188vw] sm:h-[15.104vw] rounded-[1vw]"
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
                className="w-[40.319vw] h-[35.432vw] sm:w-[17.188vw] sm:h-[15.104vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_4}
                alt="banner-4"
                className="w-[40.319vw] h-[35.432vw] sm:w-[17.188vw] sm:h-[15.104vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_5}
                alt="banner-5"
                className=" w-[40.319vw] h-[35.432vw] sm:w-[17.188vw] sm:h-[15.104vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_7}
                alt="banner-7"
                className="w-[40.319vw] h-[35.432vw] sm:w-[17.188vw] sm:h-[15.104vw] rounded-[1vw]"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
