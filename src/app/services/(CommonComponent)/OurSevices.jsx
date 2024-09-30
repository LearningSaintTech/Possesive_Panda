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

    const contentRefs = useRef({});

    const toggleExpandLine = (line) => {
        setExpandedLines((prevState) => ({
            ...prevState,
            [line]: !prevState[line],
        }));
    };

    useEffect(() => {
        Object.keys(expandedLines).forEach((line) => {
            if (contentRefs.current[line]) {
                if (expandedLines[line]) {
                    contentRefs.current[line].style.maxHeight = `${contentRefs.current[line].scrollHeight}px`;
                    contentRefs.current[line].style.transition = 'max-height 0.7s ease-in-out';
                } else {
                    contentRefs.current[line].style.maxHeight = '6.5vw';
                    contentRefs.current[line].style.transition = 'max-height 0.5s ease-in-out';
                }
            }
        });
    }, [expandedLines]);

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
            <div className="px-[5.208vw] hidden sm:block">
                <div>
                    <h1 className="text-white text-[2.5vw] font-medium tracking-wide pb-[1.442vw]">
                        {heading}
                    </h1>
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
                                        <h3 className="text-white text-[1.25vw] font-normal leading-[1.719vw]">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <div
                                        ref={(el) => contentRefs.current[lineData.line] = el}
                                        className="pt-[1.094vw] w-[23.719vw] overflow-hidden"
                                        style={{
                                            maxHeight: expandedLines[lineData.line] ? '1000px' : '6.5vw',
                                            transition: expandedLines[lineData.line]
                                                ? 'max-height 0.7s ease-in-out'
                                                : 'max-height 0.5s ease-in-out'
                                        }}
                                    >
                                        <p className="text-white text-[1.25vw] font-normal leading-[1.719vw]">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-left mt-[2vw]">
                            <button
                                onClick={() => toggleExpandLine(lineData.line)}
                                className="text-white/75 text-[1.146vw] font-normal border border-[#2a2b3a] rounded-full px-[1.5vw] py-[0.5vw] hover:bg-[#04b7df] hover:text-white transition duration-300 ease-in-out flex items-center gap-[0.5vw]"
                            >
                                {expandedLines[lineData.line] ? "See Less" : "See More"}
                                {expandedLines[lineData.line] ? (
                                    <FaChevronUp className="ml-2" />
                                ) : (
                                    <FaChevronDown className="ml-2" />
                                )}
                            </button>
                        </div>

                        {/* Render divider only for the first three lines */}
                        {lineIndex < 3 && (
                            <div className="h-[0.2vw] w-full bg-[#2a2b3a] mt-[4.167vw]"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* FOR MOBILE */}
            <div className="sm:hidden">
                <div className="px-[30px]">
                    <h1 className="w-full text-center text-white text-[7.529vw] font-medium">
                        {heading}
                    </h1>
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
                                            <h3 className="text-white text-[3.765vw] font-medium">
                                                {service.title}
                                            </h3>
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