/* eslint-disable react/no-unescaped-entities */
"use client";
// import "./ouservices.css";
import React, { useEffect, useRef, useState } from "react";
import panda from "../../assets/home/services/Panda.png";
import Image from "next/image";

const OurServices = () => {
  const [normal, setNormal] = useState(0);
  const [premium, setPremium] = useState(0);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;
    const containerObserver = new IntersectionObserver(
      (args) => {
        const container = args[0];
        if (container.isIntersecting) {
          setVisible(true);
          containerObserver.disconnect();
        }
      },
      {
        rootMargin: "-300px",
      }
    );

    containerObserver.observe(containerRef.current);

    return () => {
      containerObserver.disconnect();
    };
  }, [containerRef.current]);

  useEffect(() => {
    if (normal >= 18 || !visible) return;

    const timeout = setTimeout(() => {
      setNormal((prev) => prev + 1);
    }, 45);

    return () => clearTimeout(timeout);
  }, [normal, visible]);

  useEffect(() => {
    if (premium >= 8 || !visible) return;

    const timeout = setTimeout(() => {
      setPremium((prev) => prev + 1);
    }, 100);

    return () => clearTimeout(timeout);
  }, [premium, visible]);

  return (
    <div className="my-[7.5vw]">
      <div className="flex justify-between relative lg:px-0 px-[7.692vw] lg:mx-[6.771vw] bg-[#00111A] mb-[4.167vw]">
        <div className="flex flex-col justify-between w-full md:w-[44.271vw] gap-[1vw] h-fit">
          <p className="text-white font-normal tracking-[0.015rem] text-[5.128vw] md:text-[2.5vw] lg:text-[1.25vw] text-center lg:text-left">
            Our Services
          </p>
          <h1 className="text-white text-[8.205vw] md:text-[5.3vw] lg:text-[3.34vw] font-medium leading-[normal] tracking-[0.082vw] lg:tracking-[0.04rem] lg:w-[40vw] ">
            Our Top IT Services
          </h1>
          <p className="text-white text-[3.846vw] md:text-[2.5vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.038vw] lg:tracking-[0.015rem] text-center lg:text-left lg:mb-0 mb-[10vw]">
            "Discover the extensive world of highly demanding IT Services that
            involve cutting-edge technologies and creativity to meet your IT
            needs. "
          </p>
        </div>
        <Image
          src={panda}
          alt="panda"
          className="hidden md:block size-[25.521vw] relative -top-[4.4vw] h-fit"
        />
      </div>

      {/* main circle rotation */}
        <div className="relative w-full h-[40.795vw] flex justify-center items-center bg-[#00111A] ">
          {/* Outer Circle */}
          <div className="hidden sm:block w-[40.795vw] h-[40.795vw] absolute rounded-full border border-gray-600"></div>

          <div className="absolute w-full h-full">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-[5vw] flex flex-col-reverse gap-[0.304vw] items-center">
              <div className="w-[4.744vw] h-[4.744vw] bg-[#00aff1] rounded-full flex justify-center items-center">
                <span className="text-white text-[1.75vw] font-medium">01</span>
              </div>
              <span className="text-white text-[1.667vw] font-medium">Strategy</span>
            </div>

            <div className="absolute top-1/2 transform -translate-y-1/2 right-[15vw] flex gap-[0.571vw] items-center">
              <div className="w-[4.744vw] h-[4.744vw] bg-white rounded-full flex justify-center items-center">
                <span className="text-black text-[1.75vw] font-medium">02</span>
              </div>
              <span className="text-white text-[1.667vw] font-medium">UI/UX Design</span>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-[5vw] flex flex-col gap-[0.521vw] items-center">
              <div className="w-[4.744vw] h-[4.744vw] bg-white rounded-full flex justify-center items-center">
                <span className="text-black text-[1.75vw] font-medium">03</span>
              </div>
              <span className="text-white text-[1.667vw] font-medium">Technology</span>
            </div>

            <div className="absolute top-1/2 transform -translate-y-1/2 left-[18vw] flex flex-row-reverse gap-[0.571vw] items-center">
              <div className="w-[4.744vw] h-[4.744vw] bg-white rounded-full flex justify-center items-center">
                <span className="text-black text-[1.75vw] font-medium">04</span>
              </div>
              <span className="text-white text-[1.667vw] font-medium">Marketing</span>
            </div>
          </div>

          <div className="absolute text-center justify-center max-w-[30.573vw]">
            <h1 className="text-white text-[3.036vw] font-medium tracking-widest ">Strategy</h1>
            <p className="text-white text-[1.25vw] font-normal leading-[2.4vw] mt-[1.563vw] ">
              Strategic planning based on insight is the starting point of everything we do. Combining strategic thinking, wide marketing experience, insights, best practices, and sound judgment, we craft effective strategies that turn insights into measurable results.
            </p>
          </div>
        </div>

    </div>
  );
};

export default OurServices;
