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
import shadow from "../../assets/home/banner/shadow.png";

const WhyUs = () => {
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
    <div className="flex flex-col lg:flex-row lg:justify-between px-[7.69vw] lg:px-[3vw] lg:pl-[6.771vw] lg:mr-[5.2vw] relative overflow-hidden max-h-[110vh] lg:max-h-[80vh]">
      <div className="lg:w-[36vw] mt-[15.385vw] sm:mt-[10vw]">
        <h6 className="text-[#fff] text-[5.128vw] lg:text-[1.25vw] font-normal tracking-[0.051vw] lg:tracking-[0.015rem] mb-[5.128vw] sm:mb-[1.042vw] text-center lg:text-left">
          Why Us
        </h6>
        <h2 className="text-[#fff] font-medium text-[6.154vw] lg:text-[3.333vw] leading-[125%] tracking-[0.062vw] lg:tracking-[0.04rem] mb-[5.128vw] sm:mb-[1.042vw] text-center lg:text-left">
          Why collaborate with us?
        </h2>
        <p className="font-normal text-[#fff] text-[3.846vw] lg:text-[1.25vw] leading-[150%] tracking-[0.038vw] lg:tracking-[0.015rem] text-center lg:text-left">
          Your one-stop IT service provider is here. Collaborate with us to get
          the best IT services and solutions according to your requirements and
          state-of-the-art technology. Give your business wings to soar high
          with the top-notch technologies.
        </p>
      </div>
      <div className="flex justify-around md:justify-end mt-[10vw] sm:mt-[8vw]">
        <div className="h-full inline-flex flex-col overflow-hidden mr-[5.128vw] lg:mr-[3.125vw] ">
          <ul
            ref={upRef}
            className="flex flex-col items-center justify-center md:justify-start [&_li]:my-[3vw] lg:[&_li]:my-[1vw] md:[&_Image]:max-w-none md:animate-moveUp"
          >
            <li>
              <Image
                src={banner_1}
                alt="banner-1"
                className="w-[45vw] h-[55.128vw] lg:w-[17.188vw] lg:h-[15.104vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_2}
                alt="banner-2"
                className="w-[45vw] h-[55.128vw] lg:w-[17.188vw] lg:h-[15.104vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_6}
                alt="banner-6"
                className="hidden lg:block w-[45vw] h-[55.128vw] lg:w-[17.188vw] lg:h-[15.104vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_8}
                alt="banner-8"
                className="hidden lg:block w-[45vw] h-[55.128vw] lg:w-[17.188vw] lg:h-[15.104vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_9}
                alt="banner-9"
                className="hidden lg:block w-[45vw] h-[55.128vw] lg:w-[17.188vw] lg:h-[15.104vw] rounded-[1vw]"
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
                className="w-[45vw] h-[55.128vw] lg:w-[17.188vw] lg:h-[15.104vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_4}
                alt="banner-4"
                className="w-[45vw] h-[55.128vw] lg:w-[17.188vw] lg:h-[15.104vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_5}
                alt="banner-5"
                className="hidden lg:block w-[45vw] h-[55.128vw] lg:w-[17.188vw] lg:h-[15.104vw] rounded-[1vw]"
              />
            </li>
            <li>
              <Image
                src={banner_7}
                alt="banner-7"
                className="hidden lg:block w-[45vw] h-[55.128vw] lg:w-[17.188vw] lg:h-[15.104vw] rounded-[1vw]"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
