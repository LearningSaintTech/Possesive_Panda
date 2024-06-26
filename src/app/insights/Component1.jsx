import React from "react";
import Hand from "../../assets/aboutus/Hand.png";
import Image from "next/image";
import Link from "next/link";

const AboutBanner = () => {
    return (
        <div className="flex justify-between relative mt-[20px] md:mt-[50px] 2xl:mt-[151px] min-h-[20vh]">
            <Image src={Hand} alt="Hand" className="w-screen h-auto" />
            <div className="absolute left-[8vw] top-[11vw] md:top-[5vw] lg:left-[10.4vw] lg:top-[7.5vw]">
                <h1 className="leading-[130%] text-[3.5vw] md:text-[3vw] lg:text-[2.5vw] font-semibold tracking-[0.03rem] text-white">
                    Insights
                </h1>
                <h2 className="leading-[130%] text-white text-[3.2vw] md:text-[3vw] lg:text-[2.083vw] tracking-[0.025rem]">
                    Professional IT Solution Insights and Updates
                </h2>
            </div>
            <div className="absolute flex justify-center items-center bottom-0 right-[5vw] lg:right-[8.333vw] py-[2.083vw] space-x-2 lg:space-x-5 border-b-2 lg:border-b-4 bg-white pl-[2.6vw] pr-[5.2vw] border-cyan-300">
                <Link
                    href="/"
                    className="text-cyan-300 hover:underline text-[3vw] md:text-[2vw] lg:text-[1.042vw] font-medium leading-[normal] tracking-[0.013rem]"
                >
                    Home
                </Link>
                <span className="opacity-50 text-neutral-800 text-[3vw] md:text-[2vw] lg:text-[1.043vw] font-medium leading-[normal] tracking-[0.013rem]">
                    :
                </span>
                <span className="opacity-50 text-neutral-800 text-[3vw] md:text-[2vw] lg:text-[1.043vw] font-medium leading-[normal] tracking-[0.013rem]">
                    Insights
                </span>
            </div>
        </div>
    );
};

export default AboutBanner;
