"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurServices = ({ servicesData22, iconMapping1, heading, subHeading }) => {
    const [expandedLines, setExpandedLines] = useState({
        1: false,
        2: false,
        3: false,
    });

    const toggleExpandLine = (line) => {
        setExpandedLines((prevState) => ({
            ...prevState,
            [line]: !prevState[line],
        }));
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        arrows: false,
    };

    return (
        <div className="bg-[#00111A]">
            {/* FOR DESKTOP AND TABLET */}
            <div className="px-[5.208vw] py-[5.508vw] hidden sm:block">
                <div>
                    <h6 className="text-white text-[2.5vw] font-medium tracking-wide pb-[1.442vw]">
                        {heading}
                    </h6>
                    <p className="w-[55.729vw] text-justify text-white text-[1.25vw] font-light">
                        {subHeading}
                    </p>
                </div>
                <div className="h-[0.2vw] w-full bg-[#2a2b3a] mt-[4.167vw]"></div>

                {servicesData22.map((lineData, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-[3vw] pt-[3.542vw]">
                            {lineData.services.map((service, index) => (
                                <div key={index}>
                                    <div className="flex items-center gap-[0.573vw]">
                                        <div className="text-[#04b7df] w-[2vw] h-[2vw] relative flex-shrink-0">
                                            {React.cloneElement(iconMapping1[service.icon], {
                                                className: "w-full h-full",
                                            })}
                                        </div>
                                        <h5 className="text-white text-[1.25vw] font-normal leading-[1.719vw]">
                                            {service.title}
                                        </h5>
                                    </div>
                                    {/* Smooth expanding/collapsing with dynamic max-height */}
                                    <div
                                        className={`pt-[1.094vw] w-[23.719vw] transition-all duration-700 ease-in-out overflow-hidden ${expandedLines[lineData.line] ? "max-h-[50vw]" : "max-h-[4.5vw]"}`
                                        }
                                    >
                                        <p className="text-[#babcd2] text-[1.25vw] font-normal leading-[1.719vw]">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-left mt-[2vw]">
                            <button
                                onClick={() => toggleExpandLine(lineData.line)}
                                className="text-white/75 text-[1.146vw] font-normal border border-[#2a2b3a] rounded-full px-[1.5vw] py-[0.5vw] hover:bg-[#04b7df] hover:text-white transition duration-300 ease-in-out flex items-center gap-[0.5vw]" // Added flex and gap for icon spacing
                            >
                                {expandedLines[lineData.line] ? "See Less" : "See More"}
                                {expandedLines[lineData.line] ? (
                                    <FaChevronUp className="ml-2" /> // Upward icon for "See Less"
                                ) : (
                                    <FaChevronDown className="ml-2" /> // Downward icon for "See More"
                                )}
                            </button>
                        </div>

                        <div className="h-[0.2vw] w-full bg-[#2a2b3a] mt-[4.167vw]"></div>
                    </React.Fragment>
                ))}
            </div>

            {/* FOR MOBILE */}
            <div className="sm:hidden">
                <div className="px-[30px] py-[16.471vw]">
                    <h6 className="w-full text-center text-white text-[7.529vw] font-medium">
                        {heading}
                    </h6>
                    <p className="w-full text-center text-white text-[3.765vw] font-normal mt-[3.765vw]">
                        {subHeading}
                    </p>
                    <div className="w-[43.294vw] h-[8.471vw] mx-auto mt-[7.529vw] mb-[7.529vw] rounded-[14.118vw] border border-white/60 flex justify-center items-center gap-[2.824vw]">
                        <p className="text-white/70 text-[2.824vw] font-medium">
                            Drag to see more
                        </p>
                        <FaArrowRight className="w-[2.824vw] h-[3.765vw] text-white/70" />
                    </div>

                    {servicesData22.map((row, index) => (
                        <div key={index} className="w-full mt-[3.765vw]">
                            <Slider {...settings}>
                                {row.services.map((service, serviceIndex) => (
                                    <div
                                        key={serviceIndex}
                                        className="flex flex-col px-2"
                                    >
                                        <div className="flex gap-[3vw] items-center">
                                            <div className="text-[#04b7df] w-[6vw] h-[6vw] relative flex-shrink-0">
                                                {React.cloneElement(iconMapping1[service.icon], {
                                                    className: "w-full h-full",
                                                })}
                                            </div>
                                            <h6 className="text-white text-[3.765vw] font-medium">
                                                {service.title}
                                            </h6>
                                        </div>
                                        <div className="mt-3">
                                            <p className="opacity-70 text-white text-[3.765vw] font-normal">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <div className="h-[0.2vw] w-full bg-[#2a2b3a] mt-[4.167vw]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;
