/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef, useState } from "react";
import panda from "../../assets/home/services/panda.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const OurServices = () => {
  const [normal, setNormal] = useState(0);
  const [premium, setPremium] = useState(0);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 0,
      disable: "mobile",
      once: true,
      mirror: true,
      easing: "ease-in-sine",
    });
  }, []);
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
    <div className="mt-[50px] lg:mt-[100px]">
      <div className="flex justify-between relative mx-[8.854vw]">
        <div
          className="flex flex-col justify-between w-full md:w-[44.271vw] min-h-[25vh] lg:max-h-[20vh]"
          data-aos="fade-right"
        >
          <p className="text-zinc-900 font-normal tracking-[0.015rem] text-[3.42vw] md:text-[2.5vw] lg:text-[1.25vw]">
            Our Services
          </p>
          <h1 className="text-zinc-900 text-[5.5vw] md:text-[5.3vw] lg:text-[3.34vw] font-medium capitalize lg:leading-[6rem] tracking-[0.04rem] w-[40vw]">
            Check Our Top Services
          </h1>
          <p className="text-zinc-900 text-[3.42vw] md:text-[2.5vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem]">
            "Empowering businesses with cutting-edge IT solutions: software
            development, cloud services, cybersecurity, IT consulting, and
            managed services for optimal performance."
          </p>
        </div>
        <Image
          src={panda}
          alt="panda"
          className="hidden md:block h-auto w-auto"
          data-aos="fade-left"
        />
      </div>
      <div
        ref={containerRef}
        className="flex my-[50px] lg:my-[180px] flex-col md:flex-row justify-between items-center mx-[5.2vw]"
      >
        <div className="min-h-[40vh] md:min-h-[30vh] lg:min-h-[55vh] w-full md:w-[43vw] lg:w-[40.573vw] rounded-3xl border border-solid border-[#C7C7C7] bg-[#F6FFE7] relative hover:shadow-2xl duration-300 mb-[50px] md:mb-0">
          <span className="text-[#1A1A1A] font-medium tracking-[0.064rem] text-[12vw] md:text-[6.5vw] lg:text-[5.73vw] absolute top-[5vw] left-[8vw] md:top-0 md:left-[3.125vw]">
            {normal}+
          </span>
          <p className="text-[#1A1A1A] font-normal tracking-[0.34rem] leading-[107%] text-[6vw] md:text-[3.8vw] lg:text-[2.917vw] absolute bottom-[7vw] right-[30vw] md:bottom-[3vw] md:right-[12vw] lg:bottom-[1.9vw] lg:right-[5.148vw] w-[12.292vw]">
            Normal Services
          </p>
        </div>
        <div className="min-h-[40vh] md:min-h-[30vh] lg:min-h-[55vh] w-full md:w-[43vw] lg:w-[40.573vw] rounded-3xl border border-solid border-[#C7C7C7] bg-[#F3F2FF] relative hover:shadow-2xl duration-300">
          <span className="text-[#1A1A1A] font-medium tracking-[0.064rem] text-[12vw] md:text-[6.5vw] lg:text-[5.73vw] absolute top-[5vw] left-[8vw] md:top-0 md:left-[3.125vw]">
            {premium}+
          </span>
          <p className="text-[#1A1A1A] font-normal tracking-[0.34rem] leading-[107%] text-[6vw] md:text-[3.8vw] lg:text-[2.917vw] absolute bottom-[7vw] right-[30vw] md:bottom-[3vw] md:right-[12vw] lg:bottom-[1.9vw] lg:right-[5.148vw] w-[12.292vw]">
            Premium Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
