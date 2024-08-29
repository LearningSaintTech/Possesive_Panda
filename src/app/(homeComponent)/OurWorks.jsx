"use client";
import { useRef, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import React from 'react';
import { GoArrowRight } from "react-icons/go";
import dotcom from "../../assets/portfolio/com.svg";
import HRMS from "../../assets/portfolio/HRMS.svg";
import dotin from "../../assets/portfolio/in.svg";
import recess from "../../assets/portfolio/recess.svg";
import trucks from "../../assets/portfolio/truck.svg";


const OurWorks = () => {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 0.8; // adjust scroll speed
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="flex sm:flex-row flex-col pt-[15.385vw] lg:pt-[7vw] pb-0 lg:pb-[5vw] pl-[6.692vw] lg:pl-[5.208vw] bg-[#00111A] text-white relative sm:px-0 px-[7.69vw]">
            {/* Left Side Section */}
            <div className="sm:w-[20.156vw] sm:h-[23.073vw] flex flex-col justify-around gap-1 sm:gap-0 sm:mt-[4vw]">
                <h5 className="text-white sm:font-normal font-medium tracking-[0.015rem] text-[4.103vw] md:text-[2.5vw] lg:text-[1.25vw] text-center lg:text-left sm:mt-2">
                    Portfolio
                </h5>
                <h2 className="text-white text-[8.205vw] md:text-[5.3vw] lg:text-[3.34vw] font-medium leading-[normal] tracking-[0.082vw] lg:tracking-[0.04rem] lg:w-[40vw] text-center sm:text-left sm:mt-[0.7vw] sm:mb-[0.5vw]">
                    Our Work
                </h2>
                <p className="text-[#F9F9F9] font-normal text-[4.103vw] md:text-[2vw] lg:text-[1.25vw] tracking-[0.04vw] lg:tracking-[0.023vw] w-full lg:w-[20vw] text-center lg:text-left">
                    Explore how Possesive Panda shaped businesses by offering innovative, tech-driven solutions. Serving a plethora of companies to be at the forefront.
                </p>

                {/* <button className="bg-[#00111A] mt-[2.083vw] text-[3.846vw] md:text-[2.8vw] lg:text-[1.25vw] flex justify-center font-normal items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white px-[3vw] py-[2.5vw] md:py-[1vw] lg:w-auto hover:text-[#2a2a2a] hover:bg-[#60E2FF] hover:duration-300 duration-300">
                    View All
                    <GoArrowRight className="ml-2 md:ml-5 size-[3.5vw] md:size-[2vw] lg:size-[1.5vw]" />
                </button> */}

                <Link
                    href="/portfolio"
                    // className="w-full lg:w-fit bg-[#05B7DF] sm:bg-[#00111A] text-[3.846vw] md:text-[3vw] lg:text-[1.25vw] flex justify-center items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white tracking-[0.015rem] px-[3vw] py-[2.821vw] md:py-[1vw] hover:text-black sm:hover:bg-[#60E2FF] hover:border-none duration-500 hover:duration-500 hover:shadow-md sm:mt-[1.4vw] mt-[4vw] lg:mb-0 mb-[8vw]"
                    className="w-full lg:w-fit bg-[#05B7DF] sm:bg-[#00111A] text-[3.59vw] md:text-[3vw] lg:text-[1.25vw] flex justify-center items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white tracking-[0.015rem] py-[2.821vw] sm:px-[3vw] sm:py-[2.821vw] md:py-[1vw] hover:text-black sm:hover:bg-[#05B7DF] hover:border-none duration-500 hover:duration-500 hover:shadow-md sm:mt-[1.4vw] mt-[7.692vw] lg:mb-0 mb-[8vw] font-medium "         
                >
                    View All
                    <GoArrowRight className="ml-[0.2vw] size-[3.5vw] md:size-[2vw] lg:size-[1.5vw]" />
                </Link>
            </div>

            {/* Scrollable Section */}
            <div
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="sm:flex sm:gap-2 w-full sm:px-10 py-5 sm:ml-[3.5vw] sm:overflow-x-auto cursor-grab no-scrollbar"
                style={{ scrollBehavior: 'smooth' }}
            >
                {/* Image Card 1 */}
                <div className="flex-none sm:w-[31.25vw] h-auto sm:h-[31.25vw] sm:-ml-10 relative rounded-[0.909vw] sm:rounded-[1.254vw] overflow-hidden">
                    <Image
                        className="sm:absolute sm:mb-0 mb-10 inset-0 w-full h-full object-cover"
                        src={dotcom}
                        alt="HRMS Portal"
                    />
                    {/* <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-end justify-start p-4">
                        <h3 className="text-[2.007vw] font-semibold text-white mb-[2.604vw] ml-[2.865vw] "></h3>
                    </div> */}
                </div>

                {/* Image Card 2 */}
                <div className="flex-none sm:w-[31.25vw] h-auto sm:h-[31.25vw] ml-[1vw] relative rounded-[0.909vw] sm:rounded-[1.254vw] overflow-hidden">
                    <Image
                        className="sm:absolute sm:mb-0 mb-10 inset-0 w-full h-full object-cover"
                        src={HRMS}
                        alt="LearningSaint.in"
                    />
                    {/* <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-end justify-start p-4">
                        <h3 className="text-[2.007vw] font-semibold text-white mb-[2.604vw] ml-[2.865vw]"></h3>
                    </div> */}
                </div>

                {/* Image Card 3 */}
                <div className="flex-none sm:w-[31.25vw] h-auto sm:h-[31.25vw] ml-[1vw] relative rounded-[0.909vw] sm:rounded-[1.254vw] overflow-hidden">
                    <Image
                        className="sm:absolute sm:mb-0 mb-10 inset-0 w-full h-full object-cover"
                        src={dotin}
                        alt="Project 3"
                    />
                    {/* <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-end justify-start p-4">
                        <h3 className="text-[2.007vw] font-semibold text-white mb-[2.604vw] ml-[2.865vw]"></h3>
                    </div> */}
                </div>

                {/* Image Card 4 */}
                <div className="flex-none sm:w-[31.25vw] h-auto sm:h-[31.25vw] ml-[1vw] relative rounded-[0.909vw] sm:rounded-[1.254vw] overflow-hidden">
                    <Image
                        className="sm:absolute sm:mb-0 mb-10 inset-0 w-full h-full object-cover"
                        src={recess}
                        alt="Project 4"
                    />
                    {/* <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-end justify-start p-4">
                        <h3 className="text-[2.007vw] font-semibold text-white mb-[2.604vw] ml-[2.865vw]"></h3>
                    </div> */}
                </div>

                {/* Image Card 5 */}
                <div className="flex-none sm:w-[31.25vw] h-auto sm:h-[31.25vw] ml-[1vw] relative rounded-[0.909vw] sm:rounded-[1.254vw] overflow-hidden">
                    <Image
                        className="sm:absolute sm:mb-0 mb-10 inset-0 w-full h-full object-cover"
                        src={trucks}
                        alt="Project 4"
                    />
                    {/* <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-end justify-start p-4">
                        <h3 className="text-[2.007vw] font-semibold text-white mb-[2.604vw] ml-[2.865vw]"></h3>
                    </div> */}
                </div>

                {/* Image Card 6 */}
                {/* <div className="flex-none w-[31.25vw] h-[31.25vw] ml-[1vw] relative rounded-[1.254vw] overflow-hidden">
                    <Image
                        className="absolute inset-0 w-full h-full object-cover"
                        src={hawkins}
                        alt="Project 4"
                    />
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-end justify-start p-4">
                        <h3 className="text-[2.007vw] font-semibold text-white mb-[2.604vw] ml-[2.865vw]">Project 6</h3>
                    </div>
                </div> */}

                {/* Button*/}
                <div className="hidden sm:block flex-none w-[31.25vw] h-[31.25vw] ml-[1vw] relative rounded-[1.254vw] bg-white flex items-center justify-center">
                    <div className="text-center sm:mt-[9vw]">
                        <p className="text-[3.333vw] font-normal text-black mb-4">View More</p>
                        {/* <button className="bg-black text-white text-[2.007vw] font-normal px-[3.5vw] py-[1.2vw] rounded-full hover:text-[#2a2a2a] hover:bg-[#60E2FF] hover:duration-300 duration-300">
                            All Work
                        </button> */}
                        <Link
                            href="/portfolio"
                            className="bg-black text-white text-[2.007vw] font-normal px-[3.5vw] py-[1.2vw] rounded-full hover:text-[#2a2a2a] hover:bg-[#60E2FF] hover:duration-300 duration-300"
                        >
                            View All
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWorks;
