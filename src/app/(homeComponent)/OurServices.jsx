/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef, useState } from "react";
import panda from "../../assets/home/services/panda.png";
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
    <div className="flex justify-between relative lg:px-0 px-[7.692vw] lg:mx-[6.771vw]">
        <div className="flex flex-col justify-between w-full md:w-[44.271vw] gap-[1vw] h-fit">
          <p className="text-zinc-900 font-normal tracking-[0.015rem] text-[5.128vw] md:text-[2.5vw] lg:text-[1.667vw] text-center lg:text-left">
            Our Services
          </p>
          <h1 className="text-zinc-900 text-[8.205vw] md:text-[5.3vw] lg:text-[3.34vw] font-medium leading-[normal] tracking-[0.082vw] lg:tracking-[0.04rem] lg:w-[40vw] ">
            Our Top IT Services
          </h1>
          <p className="text-zinc-900 text-[3.846vw] md:text-[2.5vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.038vw] lg:tracking-[0.015rem] text-center lg:text-left lg:mb-0 mb-[10vw]">
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
      <div
        ref={containerRef}
        className="flex mb-[3vw] flex-col md:flex-row justify-between items-center mx-[6.771vw]"
      >
        <div className="min-h-[53.077vw] md:min-h-[30vh] lg:h-[25.495vw] w-full md:w-[43vw] lg:w-[40.573vw] rounded-3xl border border-solid border-[#C7C7C7] bg-[#F6FFE7] relative hover:shadow-lg duration-300 mb-[50px] md:mb-0">
          <span className="text-[#1A1A1A] font-medium tracking-[0.064rem] text-[12vw] md:text-[6.5vw] lg:text-[5.73vw] absolute top-[5vw] left-[8vw] md:top-0 md:left-[3.125vw]">
            {normal}+
          </span>
          <p className="text-[#1A1A1A]  sm:font-medium tracking-[0.34rem] leading-[107%] text-[6.154vw] md:text-[3.8vw] lg:text-[2.083vw] absolute bottom-[7vw] right-[35vw] md:bottom-[3vw] md:right-[12vw] lg:bottom-[1.9vw] lg:right-[5.148vw] w-[12.292vw]">
            Standard Services
          </p>
        </div>
        <div className="min-h-[53.077vw] md:min-h-[30vh] lg:h-[25.495vw] w-full md:w-[43vw] lg:w-[40.573vw] rounded-3xl border border-solid border-[#C7C7C7] bg-[#F3F2FF] relative hover:shadow-lg duration-300">
          <span className="text-[#1A1A1A] font-medium tracking-[0.064rem] text-[12vw] md:text-[6.5vw] lg:text-[5.73vw] absolute top-[5vw] left-[8vw] md:top-0 md:left-[3.125vw]">
            {premium}+
          </span>
          <p className="text-[#1A1A1A] sm:font-medium tracking-[0.34rem] leading-[107%] text-[6.154vw] md:text-[3.8vw] lg:text-[2.083vw] absolute bottom-[7vw] right-[35vw] md:bottom-[3vw] md:right-[12vw] lg:bottom-[1.9vw] lg:right-[5.148vw] w-[12.292vw]">
            Premium Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
