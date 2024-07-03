"use client";
import React, { useState } from "react";
import image_1 from "../../../assets/ecommerce/comparision/image-1.png";
import image_2 from "../../../assets/ecommerce/comparision/image-2.png";
import image_3 from "../../../assets/ecommerce/comparision/image-3.png";
import image_4 from "../../../assets/ecommerce/comparision/image-4.png";
import image_5 from "../../../assets/ecommerce/comparision/image-5.png";
import Image from "next/image";

const Comparison = () => {
  const [activeTab, setActiveTab] = useState("ios");

  return (
    <div className="px-[5.2vw] pt-[8vw]">
      <h2 className="w-[45vw] text-neutral-800 text-[2.5vw] font-semibold tracking-[0.025rem] capitalize mb-[5.2vw]">
        Comparison Between Android and iOS Development Services
      </h2>
      <div className=" flex justify-center">
        <button
          className={` w-[44.792vw] h-[4.167vw] rounded-tl-[0.26vw] rounded-bl-[0.26vw] shadow border border-neutral-300 text-zinc-600 text-[1.25vw] font-normal leading-[1.941vw] ${
            activeTab === "android" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => setActiveTab("android")}
        >
          Android App Development
        </button>
        <button
          className={`w-[44.792vw] h-[4.167vw] rounded-tl-[0.26vw] rounded-bl-[0.26vw] shadow border border-neutral-300 text-zinc-600 text-[1.25vw] font-normal leading-[1.941vw] ${
            activeTab === "ios" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => setActiveTab("ios")}
        >
          IOS App Development
        </button>
      </div>
      <div className="border border-gray-300 rounded-b-lg p-4 bg-[#f6fcfe]">
        {activeTab === "ios" ? (
          <div className="grid grid-cols-5 gap-4 ">
            <div className="h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 pb-[5.5vw] pt-[1.4vw] px-[1.5vw] bg-[#d3f6fe] bg-opacity-25 mt-[3.49vw]">
              <Image
                src={image_1}
                alt="image-1"
                className="size-[3.5vw] mb-[1.4vw]"
              />
              <p classname="w-[13.49vw] text-neutral-800 text-[1.042vw] font-normal leading-[1.411vw]">
                Limited screen sizes and hardware, making for a faster
                development process
              </p>
            </div>
            <div className=" h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 pb-[5.5vw] pt-[1.4vw] px-[1.5vw] bg-[#d3f6fe] bg-opacity-25 mt-[10.885vw]">
              <Image
                src={image_2}
                alt="image-2"
                className="size-[3.5vw] mb-[1.4vw]"
              />
              <p classname="w-[13.49vw] text-neutral-800 text-[1.042vw] font-normal leading-[1.411vw]">
                Strict and thorough approval process
              </p>
            </div>
            <div className="h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 pb-[5.5vw] pt-[1.4vw] px-[1.5vw] bg-[#d3f6fe] bg-opacity-25 mt-[3.49vw]">
              <Image
                src={image_3}
                alt="image-3"
                className="size-[3.5vw] mb-[1.4vw]"
              />
              <p classname="w-[13.49vw] text-neutral-800 text-[1.042vw] font-normal leading-[1.411vw]">
                Major revenue from app purchases and subscriptions due to users’
                willingness to spend
              </p>
            </div>
            <div className=" h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 pb-[5.5vw] pt-[1.4vw] px-[1.5vw] bg-[#d3f6fe] bg-opacity-25 mt-[10.885vw]">
              <Image
                src={image_4}
                alt="image-4"
                className="size-[3.5vw] mb-[1.4vw]"
              />
              <p classname="w-[13.49vw] text-neutral-800 text-[1.042vw] font-normal leading-[1.411vw]">
                More secure due to the closed Apple ecosystem and rigorous app
                store policies
              </p>
            </div>
            <div className=" h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 pb-[5.5vw] pt-[1.4vw] px-[1.5vw] bg-[#d3f6fe] bg-opacity-25 mt-[3.49vw]">
              <Image
                src={image_5}
                alt="image-5"
                className="size-[3.5vw] mb-[1.4vw]"
              />
              <p classname="w-[13.49vw] text-neutral-800 text-[1.042vw] font-normal leading-[1.411vw]">
                Restrictive in terms of UI and functionality to ensure
                consistent UX
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-4">
            <div className="h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 pb-[5.5vw] pt-[1.4vw] px-[1.5vw] bg-[#d3f6fe] bg-opacity-25 mt-[3.49vw]">
              <Image
                src={image_1}
                alt="image-1"
                className="size-[3.5vw] mb-[1.4vw]"
              />
              <p classname="w-[13.49vw] text-neutral-800 text-[1.042vw] font-normal leading-[1.411vw]">
                Diverse screen sizes and hardware, requiring more elaborate
                development and testing
              </p>
            </div>
            <div className="h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 pb-[5.5vw] pt-[1.4vw] px-[1.5vw] bg-[#d3f6fe] bg-opacity-25 mt-[10.885vw]">
              <Image
                src={image_2}
                alt="image-2"
                className="size-[3.5vw] mb-[1.4vw]"
              />
              <p classname="w-[13.49vw] text-neutral-800 text-[1.042vw] font-normal leading-[1.411vw]">
                Lenient approval process
              </p>
            </div>
            <div className="h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 pb-[5.5vw] pt-[1.4vw] px-[1.5vw] bg-[#d3f6fe] bg-opacity-25 mt-[3.49vw]">
              <Image
                src={image_3}
                alt="image-3"
                className="size-[3.5vw] mb-[1.4vw]"
              />
              <p classname="w-[13.49vw] text-neutral-800 text-[1.042vw] font-normal leading-[1.411vw]">
                Major revenue from advertisements, due to larger user base
              </p>
            </div>
            <div className="h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 pb-[5.5vw] pt-[1.4vw] px-[1.5vw] bg-[#d3f6fe] bg-opacity-25 mt-[10.885vw]">
              <Image
                src={image_4}
                alt="image-4"
                className="size-[3.5vw] mb-[1.4vw]"
              />
              <p classname="w-[13.49vw] text-neutral-800 text-[1.042vw] font-normal leading-[1.411vw]">
                More prone to Malware and other viruses
              </p>
            </div>
            <div className="h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 pb-[5.5vw] pt-[1.4vw] px-[1.5vw] bg-[#d3f6fe] bg-opacity-25 mt-[3.49vw]">
              <Image
                src={image_5}
                alt="image-5"
                className="size-[3.5vw] mb-[1.4vw]"
              />
              <p classname="w-[13.49vw] text-neutral-800 text-[1.042vw] font-normal leading-[1.411vw]">
                Higher flexibility for developers in terms of UI and
                functionality
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comparison;
