"use client";
import { useRef, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import dotcom from "../../../public/assets/portfolio/com.svg";
import HRMS from "../../../public/assets/portfolio/hr.svg";
import dotin from "../../../public/assets/portfolio/learin.svg";
import recess from "../../../public/assets/portfolio/rec.svg";
import trucks from "../../../public/assets/portfolio/trucking.svg";

const OurWorks = () => {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        if (scrollContainerRef.current) {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(true);
            setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
            setScrollLeft(scrollContainerRef.current.scrollLeft);
            scrollContainerRef.current.style.cursor = 'grabbing';
        }
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            scrollContainerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
            scrollContainerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 1;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const cardData = [
        { src: dotcom, alt: "Project 1", text: "Learning Saint", info: "Leading EdTech Course Provider" },
        { src: HRMS, alt: "Project 2", text: "HRMS PORTAL", info: "Human Resource Management System" },
        { src: dotin, alt: "Project 3", text: "Learning Saint Bharat", info: "Indian Competitive Exam Preparation Platform" },
        { src: recess, alt: "Project 4", text: "Recess", info: "Non-alcoholic Beverage Brand" },
        { src: trucks, alt: "Project 5", text: "M.T.G.", info: "Professional Transport Service Provide" },
    ];

    return (
        <div className="flex sm:flex-row flex-col pt-[13.385vw] sm:pt-[7vw] md:pt-[0vw] lg:pt-[7.813vw] pb-0 lg:pb-[5vw] pl-[6.692vw] lg:pl-[5.208vw] bg-[#00111A] text-white relative sm:px-0 px-[7.69vw] md:pl-[5.208vw] lg:px-0">
            {/* Left Side Section */}
            <div className="sm:w-[20.156vw] lg:h-[23.073vw] flex flex-col justify-around gap-1 sm:gap-0 sm:mt-[4vw] md:mt-[2.5vw]">
                <h5 className="text-white sm:font-normal font-medium tracking-[0.015rem] text-[4.103vw] md:text-[1.5vw] lg:text-[1.25vw] text-center md:text-left md:mt-4 lg:mt-[0.417vw]  lg:ml-[0.5vw]">
                    Portfolio
                </h5>
                <h2 className="text-white text-[8.205vw] lg:text-[3.34vw] font-medium leading-[normal] tracking-[0.082vw] lg:tracking-[0.04rem] sm:w-[40vw] text-center sm:text-left sm:mt-[0.7vw] sm:mb-[0.5vw] md:text-[2.5vw]">
                    Our Work
                </h2>
                <p className="text-[#F9F9F9] font-normal text-[4.103vw] md:text-[1.5vw] lg:text-[1.25vw] tracking-[0.04vw] lg:tracking-[0.023vw] w-full sm:w-[20vw] text-center sm:text-left md:text-start">
                    Explore how Possesive Panda shaped businesses by offering innovative, tech-driven solutions. Serving a plethora of companies to be at the forefront.
                </p>

                <Link
                    href="/portfolio"
                    className="w-full sm:w-fit bg-[#05B7DF] sm:bg-[#05B7DF] text-[3.59vw] md:text-[1.5vw] lg:text-[1.25vw] flex justify-center items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white tracking-[0.015rem] py-[2.821vw] sm:px-[3vw] sm:py-[2.821vw] md:py-[1vw]  sm:hover:bg-[#109AD6] hover:border-none duration-500 hover:duration-500 hover:shadow-md sm:mt-[1.4vw] mt-[7.692vw] lg:mb-0 mb-[8vw] font-medium"
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
                className="sm:flex sm:gap-[0.417vw] w-full sm:px-[2.083vw] py-[1.042vw] sm:ml-[3.5vw] sm:overflow-x-auto cursor-grab no-scrollbar select-none"
                style={{ scrollBehavior: 'smooth' }}
            >
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="flex-none sm:w-[31.25vw] h-auto sm:h-[31.25vw] sm:ml-[1vw] relative rounded-[0.909vw] sm:rounded-[1.254vw] overflow-hidden group"
                    >
                        <Image
                            className="sm:absolute sm:mb-0 mb-[7vw] inset-0 w-full h-full object-cover pointer-events-none"
                            src={card.src}
                            alt={card.alt}
                            onDragStart={(e) => e.preventDefault()}
                        />
                        {/* Hover effect text */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {/* A separate div for the blur effect */}
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-[0.8vw] transform transition-transform duration-300 ease-out">
                            <span className="block text-[5.647vw] sm:text-[2.083vw] font-semibold text-white sm:mb-[0.138vw] sm:ml-[2.135vw] opacity-85 tracking-wide transform group-hover:translate-y-[-1vw] transition-transform duration-300 ease-out">{card.text}</span>
                            <span className="block text-[3.765vw] sm:text-[1.25vw] text-white sm:ml-[2.135vw] sm:mb-[1.875vw] mb-[8vw] opacity-0 group-hover:opacity-70 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out">{card.info}</span>
                        </div>
                    </div>
                ))}

                {/* Button */}
                <div className="hidden sm:block flex-none w-[31.25vw] h-[31.25vw] sm:ml-[1vw] relative rounded-[1.254vw] bg-white flex items-center justify-center">
                    <div className="text-center sm:mt-[9vw]">
                        <p className="text-[3.333vw] font-normal text-black mb-4">View More</p>
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