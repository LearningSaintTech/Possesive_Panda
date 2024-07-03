"use client";
import React, { useState } from "react";

const Comparison = () => {
  const [activeTab, setActiveTab] = useState("ios");

  return (
    <div className="container mx-auto p-4 mt-[10.417vw] w-[89.583vw] h-[27.24vw]">
      <h2 className="w-[747px] text-neutral-800 text-[40px] font-semibold tracking-tight">
        Comparison Between Android and iOS Development Services
      </h2>
      <div className=" flex justify-center mb-4 ">
        <button
          className={` w-[44.792vw] h-[4.167vw] rounded-tl-[0.26vw] rounded-bl-[0.26vw] shadow border border-neutral-300 text-zinc-600 text-2xl font-normal leading-[1.941vw] ${
            activeTab === "android" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => setActiveTab("android")}
        >
          Android App Development
        </button>
        <button
          className={`w-[44.792vw] h-[4.167vw] rounded-tl-[0.26vw] rounded-bl-[0.26vw] shadow border border-neutral-300 text-zinc-600 text-2xl font-normal leading-[1.941vw] ${
            activeTab === "ios" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => setActiveTab("ios")}
        >
          iOS App Development
        </button>
      </div>
      <div className="border border-gray-300 rounded-b-lg p-4 ">
        {activeTab === "ios" ? (
          <div className="grid grid-cols-5 gap-4 ">
            <div className="h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 py-[5.5vw] px-[1.5vw] bg-[#60E2FF] mt-[3.49vw]">
              <p classname="w-[13.49vw] text-neutral-800 text-xl font-normal leading-[1.411vw]">
                Diverse screen sizes and hardware, requiring more elaborate
                development and testing
              </p>
            </div>
            <div className=" h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 py-[5.5vw] px-[1.5vw] bg-[#60E2FF] mt-[10.885vw]">
              <p classname="w-[13.49vw] text-neutral-800 text-xl font-normal leading-[1.411vw]">
                Lenient approval process
              </p>
            </div>
            <div className="h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 py-[5.5vw] px-[1.5vw] bg-[#60E2FF] mt-[3.49vw]">
              <p classname="w-[13.49vw] text-neutral-800 text-xl font-normal leading-[1.411vw]">
                Major revenue from advertisements, due to larger user base
              </p>
            </div>
            <div className=" h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 py-[5.5vw] px-[1.5vw] bg-[#60E2FF] mt-[10.885vw]">
              <p classname="w-[13.49vw] text-neutral-800 text-xl font-normal leading-[1.411vw]">
                More prone to Malware and other viruses
              </p>
            </div>
            <div className=" h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 py-[5.5vw] px-[1.5vw] bg-[#60E2FF] mt-[3.49vw]">
              <p classname="w-[13.49vw] text-neutral-800 text-xl font-normal leading-[1.411vw]">
                Higher flexibility for developers in terms of UI and
                functionality
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-4">
            <div className="h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 py-[5.5vw] px-[1.5vw] bg-[#60E2FF] mt-[3.49vw]">
              <p classname="w-[13.49vw] text-neutral-800 text-xl font-normal leading-[1.411vw]">
                Dummy data 1
              </p>
            </div>
            <div className="h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 py-[5.5vw] px-[1.5vw] bg-[#60E2FF] mt-[10.885vw]">
              <p classname="w-[13.49vw] text-neutral-800 text-xl font-normal leading-[1.411vw]">
                Dummy data 2
              </p>
            </div>
            <div className="h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 py-[5.5vw] px-[1.5vw] bg-[#60E2FF] mt-[3.49vw]">
              <p classname="w-[13.49vw] text-neutral-800 text-xl font-normal leading-[1.411vw]">
                Dummy data 3
              </p>
            </div>
            <div className="h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 py-[5.5vw] px-[1.5vw] bg-[#60E2FF] mt-[10.885vw]">
              <p classname="w-[13.49vw] text-neutral-800 text-xl font-normal leading-[1.411vw]">
                Dummy data 4
              </p>
            </div>
            <div className="h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 py-[5.5vw] px-[1.5vw] bg-[#60E2FF] mt-[3.49vw]">
              <p classname="w-[13.49vw]text-neutral-800 text-xl font-normal leading-[1.411vw]">
                Dummy data 5
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comparison;
