"use client";
import { useRef, useState } from "react";
import Image from 'next/image';
import React from 'react';
import { GoArrowRight } from "react-icons/go";
import saint from "../../assets/portfolio/Saint.png";
import hawkins from "../../assets/portfolio/Hawkins.png";


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
        <div className="flex pt-[15.385vw] lg:pt-[7vw] pb-0 px-[6.692vw] lg:px-[6.171vw] bg-[#161616] text-white relative">
            {/* Left Side Section */}
            <div className="w-[20.156vw] h-[23.073vw] flex flex-col justify-around gap-2 mt-[4vw]">
                <h5 className="text-[5.128vw] md:text-[2vw] lg:text-[1.667vw] tracking-[0.015rem] text-center lg:text-left">
                    Portfolio
                </h5>
                <h2 className="text-[8.205vw] md:text-[4vw] lg:text-[3.333vw] font-medium tracking-[0.001rem] lg:tracking-[0.04rem] text-center lg:text-left leading-none whitespace-nowrap">
                    Our Work
                </h2>
                <p className="text-[#F9F9F9] font-normal text-[3.6vw] md:text-[2vw] lg:text-[1.25vw] tracking-[0.04vw] lg:tracking-[0.023vw] w-full lg:w-[22vw] text-center lg:text-left">
                    Explore our world of standout projects that Possesive Panda
                    accomplished and delivered exceptionally across various industries.
                </p>

                <button className="bg-stone-900 mt-[2.083vw] text-[3.846vw] md:text-[2.8vw] lg:text-[1.25vw] flex justify-center font-normal items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white px-[3vw] py-[2.5vw] md:py-[1vw] lg:w-auto hover:text-[#2a2a2a] hover:bg-[#60E2FF] hover:duration-300 duration-300">
                    View All
                    <GoArrowRight className="ml-2 md:ml-5 size-[3.5vw] md:size-[2vw] lg:size-[1.5vw]" />
                </button>
            </div>

            {/* Scrollable Section */}
            <div
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="flex gap-6 w-full px-10 py-5 ml-[4.16vw] overflow-x-auto cursor-grab no-scrollbar"
                style={{ scrollBehavior: 'smooth' }}
            >
                {/* Image Card 1 */}
                <div className="flex-none w-[40.25vw] h-[31.25vw] ml-[0.326vw] relative rounded-[1.254vw] overflow-hidden">
                    <Image
                        className="absolute inset-0 w-full h-full object-cover"
                        src={saint}
                        alt="HRMS Portal"
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-end justify-start p-4">
                        <h3 className="text-3xl font-bold text-white mb-[50px] ml-[55px]">HRMS Portal</h3>
                    </div>
                </div>

                {/* Image Card 2 */}
                <div className="flex-none w-[31.25vw] h-[31.25vw] ml-[1.4vw] relative rounded-[1.254vw] overflow-hidden">
                    <Image
                        className="absolute inset-0 w-full h-full object-cover"
                        src={saint}
                        alt="LearningSaint.in"
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-end justify-start p-4">
                        <h3 className="text-3xl font-bold text-white mb-[50px] ml-[55px]">LearningSaint.in</h3>
                    </div>
                </div>

                {/* Image Card 3 */}
                <div className="flex-none w-[31.25vw] h-[31.25vw] ml-[2vw] relative rounded-[1.254vw] overflow-hidden">
                    <Image
                        className="absolute inset-0 w-full h-full object-cover"
                        src={hawkins}
                        alt="Project 3"
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-end justify-start p-4">
                        <h3 className="text-3xl font-bold text-white">Project 3</h3>
                    </div>
                </div>

                {/* Image Card 4 */}
                <div className="flex-none w-[31.25vw] h-[31.25vw] ml-[2vw] relative rounded-[1.254vw] overflow-hidden">
                    <Image
                        className="absolute inset-0 w-full h-full object-cover"
                        src={hawkins}
                        alt="Project 4"
                    />
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-end justify-start p-4">
                        <h3 className="text-3xl font-bold text-white">Project 4</h3>
                    </div>
                </div>

                {/* Image Card 5 */}
                <div className="flex-none w-[31.25vw] h-[31.25vw] ml-[2vw] relative rounded-[1.254vw] overflow-hidden">
                    <Image
                        className="absolute inset-0 w-full h-full object-cover"
                        src={hawkins}
                        alt="Project 4"
                    />
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-end justify-start p-4">
                        <h3 className="text-3xl font-bold text-white">Project 4</h3>
                    </div>
                </div>

                {/* Image Card 6 */}
                <div className="flex-none w-[31.25vw] h-[31.25vw] ml-[2vw] relative rounded-[1.254vw] overflow-hidden">
                    <Image
                        className="absolute inset-0 w-full h-full object-cover"
                        src={hawkins}
                        alt="Project 4"
                    />
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-end justify-start p-4">
                        <h3 className="text-3xl font-bold text-white">Project 4</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWorks;
