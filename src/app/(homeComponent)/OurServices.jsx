/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import panda from "../../assets/home/services/panda.png";
import Image from "next/image";

const OurServices = () => {
  const [normal, setNormal] = useState(0);
  const [premium, setPremium] = useState(0);
  useEffect(() => {
    if (normal >= 18) return;

    const timeout = setTimeout(() => {
      setNormal((prev) => prev + 1);
    }, 45);

    return () => clearTimeout(timeout);
  }, [normal]);

  useEffect(() => {
    if (premium >= 8) return;

    const timeout = setTimeout(() => {
      setPremium((prev) => prev + 1);
    }, 100);

    return () => clearTimeout(timeout);
  }, [premium]);

  return (
    <div className="mt-[100px]">
      <div className="flex justify-between relative mx-[8.854vw]">
        <div className="w-[44.271vw]">
          <p className="text-zinc-900 font-normal tracking-[0.015rem] text-[1.25vw] mb-[50px]">
            Our Services
          </p>
          <h1 className="text-zinc-900 text-[3.333vw] font-medium capitalize tracking-[0.04rem] w-[44.271vw] mb-[50px]">
            Check Our Top Services
          </h1>
          <p className="text-zinc-900 text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mb-[161px]">
            "Empowering businesses with cutting-edge IT solutions: software
            development, cloud services, cybersecurity, IT consulting, and
            managed services for optimal performance."
          </p>
        </div>
        <Image src={panda} alt="panda" className="h-auto w-auto" />
      </div>
      <div className="flex my-[180px] justify-between items-center mx-[5.2vw]">
        <div className="h-[489px] w-[40.573vw] rounded-3xl border border-solid border-[#C7C7C7] bg-[#F6FFE7] relative">
          <span className="text-[#1A1A1A] font-medium tracking-[0.064rem] text-[5.73vw] absolute top-0 left-[3.125vw]">
            {normal}+
          </span>
          <p className="text-[#1A1A1A] font-normal tracking-[0.34rem] leading-[107%] text-[2.917vw] absolute bottom-[1.9vw] right-[5.148vw] w-[12.292vw]">
            Normal Services
          </p>
        </div>
        <div className="h-[489px] w-[40.573vw] rounded-3xl border border-solid border-[#C7C7C7] bg-[#F3F2FF] relative">
          <span className="text-[#1A1A1A] font-medium tracking-[0.064rem] text-[5.73vw] absolute top-0 left-[3.125vw]">
            {premium}+
          </span>
          <p className="text-[#1A1A1A] font-normal tracking-[0.34rem] leading-[107%] text-[2.917vw] absolute bottom-[1.9vw] right-[5.148vw] w-[12.292vw]">
            Premium Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
