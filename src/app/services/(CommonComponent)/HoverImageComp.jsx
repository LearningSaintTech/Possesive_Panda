"use client";
import Image from 'next/image';
import React, { useState, useRef } from 'react';

const HoverImageComponent = ({ hoverImageData }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);
    const [hover, setHover] = useState(false);

    const isDescriptionAvailable =
        hoverImageData.text.description1 && hoverImageData.text.description2;

    const toggleExpand = () => {
        // Only toggle if description1 and description2 are available
        if (isDescriptionAvailable) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div
            className="relative gap-[6.618vw] flex px-[5.208vw] bg-[#00111A]"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div>
                <p className="text-[#00AFF1] sm:text-[0.833vw] text-[3.765vw] text-center sm:text-start mt-[6.094vw]">
                    {hoverImageData.text.subheading}
                </p>
                <h3 className="text-white sm:text-[1.667vw] text-[7.529vw] text-center sm:text-start mt-[1.25vw]">
                    {hoverImageData.text.heading}
                </h3>
                <p className="text-[#D1D1D1] sm:w-[51.823vw] w-[85.882vw] text-center sm:text-start mt-[0.833vw] sm:text-[1.25vw] text-[3.765vw]">
                    {hoverImageData.text.description}
                </p>
                <div
                    ref={contentRef}
                    className="overflow-hidden transition-all duration-700 ease-in-out"
                    style={{
                        maxHeight: isExpanded ? `${contentRef.current.scrollHeight}px` : '0px',
                    }}
                >
                    {isDescriptionAvailable ? (
                        <>
                            <p className="text-[#D1D1D1] sm:w-[51.823vw] w-[85.882vw] text-center sm:text-start mt-[0.833vw] sm:text-[1.25vw] text-[3.765vw]">
                                {hoverImageData.text.description1}
                            </p>
                            <p className="text-[#D1D1D1] sm:w-[51.823vw] w-[85.882vw] text-center sm:text-start mt-[0.833vw] sm:text-[1.25vw] text-[3.765vw]">
                                {hoverImageData.text.description2}
                            </p>
                        </>
                    ) : (
                        <p className="text-[#D1D1D1] sm:w-[51.823vw] w-[85.882vw] text-center sm:text-start mt-[0.833vw] sm:text-[1.25vw] text-[3.765vw]">
                            Get in touch
                        </p>
                    )}
                </div>
                <button
                    onClick={toggleExpand}
                    className={`bg-[#05B7DF] rounded-[5vw] sm:rounded-[3.906vw] text-white text-[3.765vw] sm:text-[1.25vw] sm:py-0 py-[2.5vw] font-semibold sm:w-[10.521vw] sm:h-[3.333vw] mb-[2.5vw] mt-[7.529vw] sm:mt-[2.5vw]`}
                >
                    {isDescriptionAvailable
                        ? isExpanded
                            ? 'See Less'
                            : 'See More'
                        : 'Get in touch'}
                </button>
            </div>

            <div
                className="relative sm:block hidden pl-[6vw] h-[28.438vw] justify-items-center mt-[2.656vw] w-1/2 overflow-hidden transition-[top] duration-700 ease-in-out"
                style={{
                    top: isExpanded ? '10vw' : '0vw', // Define a default value for smoother transition
                }}
            >
                <div
                    className={`absolute mt-[1.563vw] ml-[2.917vw] w-[13.021vw] h-[23.438vw] transition-transform duration-500 ease-in-out ${
                        hover 
                            ? 'transform -translate-y-[1vw] translate-x-[4vw] rotate-[11deg]'
                            : 'transform translate-y-0 translate-x-0 rotate-0'
                    }`}
                >
                    <Image
                        src={hoverImageData.images.image1}
                        alt="AI Image 1"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>

                <div
                    className={`absolute mt-[1.563vw] w-[13.021vw] h-[23.438vw] transition-transform duration-500 ease-in-out ${
                        hover 
                            ? 'transform -translate-y-[1vw] -translate-x-[4vw] rotate-[-11deg]'
                            : 'transform translate-y-0 translate-x-0 rotate-0'
                    }`}
                >
                    <Image
                        src={hoverImageData.images.image2}
                        alt="AI Image 2"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>

                <div className="absolute w-[15.929vw] h-[26.07vw] transition-transform duration-500 ease-in-out">
                    <Image
                        src={hoverImageData.images.image3}
                        alt="AI Image 3"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default HoverImageComponent;
