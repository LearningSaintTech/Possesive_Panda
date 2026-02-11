"use client";
import React, { useState } from "react";
import image_1 from "../../../assets/ecommerce/comparision/image-1.png";
import image_2 from "../../../assets/ecommerce/comparision/image-2.png";
import image_3 from "../../../assets/ecommerce/comparision/image-3.png";
import image_4 from "../../../assets/ecommerce/comparision/image-4.png";
import image_5 from "../../../assets/ecommerce/comparision/image-5.png";
import { Image } from "@/lib/next-compat";

const Comparison = () => {
  const [activeTab, setActiveTab] = useState("ios");

  return (
    <div className="px-[5.2vw] pt-[8vw] hidden sm:block">
      <h2 className="w-[80vw] sm:w-[45vw] text-neutral-800 text-[4.346vw] sm:text-[2.083vw] font-semibold tracking-[0.025rem] capitalize mb-[5.2vw]">
        Comparison Between Android and iOS Development Services
      </h2>
      <div className=" flex flex-col sm:flex-row justify-center sm:gap-0 gap-[70vw]">
        <button
          className={`w-full sm:w-[44.792vw] h-[7vw] sm:h-[4.167vw] rounded-tl-[1vw] rounded-bl-[1vw] sm:rounded-tl-[0.26vw] sm:rounded-bl-[0.26vw] shadow border border-neutral-300 text-zinc-600 text-[4.346vw] sm:text-[1.25vw] font-normal leading-[1.941vw] ${activeTab === "android" ? "bg-gray-200" : "bg-white"
            }`}
          onClick={() => setActiveTab("android")}
        >
          Android App Development
        </button>
        <button
          className={`w-full sm:w-[44.792vw] h-[7vw] sm:h-[4.167vw] rounded-tl-[1vw] rounded-bl-[1vw] sm:rounded-tl-[0.26vw] sm:rounded-bl-[0.26vw] shadow border border-neutral-300 text-zinc-600 text-[4.346vw] sm:text-[1.25vw] font-normal leading-[1.941vw] ${activeTab === "ios" ? "bg-gray-200" : "bg-white"
            }`}
          onClick={() => setActiveTab("ios")}
        >
          IOS App Development
        </button>
      </div>
      <div className="border border-gray-300 rounded-b-lg p-4 bg-[#f6fcfe]">
        {activeTab === "ios" ? (
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 ">
            <div className="h-[45vw] sm:h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 pb-[5.5vw] pt-[3vw] px-[2vw] sm:pt-[1.4vw] sm:px-[1.5vw] bg-[#d3f6fe] bg-opacity-25 mt-[4.5vw] sm:mt-[3.49vw]">
              <Image
                src={image_1}
                alt="image-1"
                className="size-[7vw] mb-[2vw] sm:size-[3.5vw] sm:mb-[1.4vw]"
              />
              <p classname="w-full sm:w-[13.49vw] text-neutral-800 text-[3vw] sm:text-[1.042vw] font-normal leading-[1.411vw]">
                Limited hardware, speeding up the development process
              </p>
            </div>
            <div className=" h-[45vw] sm:h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 pb-[5.5vw] pt-[3vw] px-[2vw] sm:pt-[1.4vw] sm:px-[1.5vw] bg-[#d3f6fe] bg-opacity-25 mt-[15.885vw] sm:mt-[10.885vw]">
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
                Major revenue from app purchases & subscriptions
              </p>
            </div>
            <div className=" h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 pb-[5.5vw] pt-[1.4vw] px-[1.5vw] bg-[#d3f6fe] bg-opacity-25 mt-[10.885vw]">
              <Image
                src={image_4}
                alt="image-4"
                className="size-[3.5vw] mb-[1.4vw]"
              />
              <p classname="w-[13.49vw] text-neutral-800 text-[1.042vw] font-normal leading-[1.411vw]">
                More secure due to closed ecosystem & rigorous App Store policies
              </p>
            </div>
            <div className=" h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 pb-[5.5vw] pt-[1.4vw] px-[1.5vw] bg-[#d3f6fe] bg-opacity-25 mt-[3.49vw]">
              <Image
                src={image_5}
                alt="image-5"
                className="size-[3.5vw] mb-[1.4vw]"
              />
              <p classname="w-[13.49vw] text-neutral-800 text-[1.042vw] font-normal leading-[1.411vw]">
                Restrictive in UI & functionality to ensure consistent UX
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
                Diverse screen sizes & hardware, requiring elaborate development
              </p>
            </div>
            <div className="h-[14.689vw] rounded-[0.94vw] shadow border border-zinc-700 pb-[5.5vw] pt-[1.4vw] px-[1.5vw] bg-[#d3f6fe] bg-opacity-25 mt-[10.885vw]">
              <Image
                src={image_2}
                alt="image-2"
                className="size-[3.5vw] mb-[1.4vw]"
              />
              <p classname="w-[13.49vw] text-neutral-800 text-[1.042vw] font-normal leading-[1.411vw]">
                Lenient approval process for Google Play Store
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
