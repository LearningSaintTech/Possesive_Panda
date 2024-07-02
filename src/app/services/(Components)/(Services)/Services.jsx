import React from "react";
import "./OurDigital.css";
import seoImage from "../../../assets/Insights/SEOimgs.png";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

const OurDigital = () => {
  return (
    <div className=" ml-[5.156vw] min-h-screen mt-[8.167vw]">
      <div className="w-[43.75vw] [perspective:1000px]">
        <div className="w-[43.75vw] h-[23.44vw] relative transition-all [transform-style:preserve-3d]">
          <div className="card-front bg-[#f2fcfe] text-[#42424A] p-5 rounded-lg shadow-md flex">
            <Image
              src={seoImage}
              alt="SEO"
              className="w-[17.135vw] h-[21.693vw] ml-[1.042vw]"
            />
            <div className="flex-row ml-[1.563vw] mt-[40px]">
              <h2 className="text-neutral-800 text-4xl font-semibold tracking-tight">
                Search Engine Optimisation
              </h2>
              <p className="w-[20.469vw] text-zinc-700 text-xl font-normal leading-[1.814vw] tracking-tight mt-[1.042vw]">
                Search Engine Optimization (SEO) is a digital marketing strategy
                that focuses on organically improving website ranking.
              </p>
            </div>
            <HiArrowRight className="flex relative w-[48px] h-[48px] right-[60px] top-[325px]" />
          </div>
          <div className="card-back bg-[#f2fcfe] text-[#42424A] [transform:rotateY(180deg]">
            <p className="w-[36.667vw] text-zinc-700 text-2xl font-normal leading-[1.814vw] tracking-tight">
              As every business uses social media platforms, Influencer
              marketing has become more important than ever. However, it is
              challenging to find the right influencer for the brand’s face.
              Influencer marketing can improve the visibility of your brand in a
              very short period of time. We shape ideas into powerful impacts
              and brands into legends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDigital;
