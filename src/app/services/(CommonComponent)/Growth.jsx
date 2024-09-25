"use client";

import React, { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Growth = ({ heading, description, cards }) => {
    const scrollContainerRef = useRef(null);

    const scrollLeftFunc = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= 200;
        }
    };

    const scrollRightFunc = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += 200;
        }
    };

    return (
        <div className='relative flex flex-col px-[7.059vw] sm:px-[5.208vw] sm:py-[6.25vw] '>
            <div className='flex sm:flex-row flex-col sm:gap-0 gap-[7.059vw] sm:justify-between'>
                <h2 className='text-white text-[7.529vw] sm:text-[2.5vw] font-medium sm:w-[35.052vw] text-center sm:text-left '>
                    {heading}
                </h2>
                <p className='text-white text-[3.765vw] sm:text-[1.25vw] font-light leading-[185%] text-center sm:text-right sm:w-[39vw]'>
                    {description}
                </p>
            </div>

            <div
                ref={scrollContainerRef} // Attach ref to the scroll container
                className="flex items-center overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth gap-[7.529vw] sm:gap-[5.208vw] mt-[7.059vw] sm:mt-[4.5vw] "
            >
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="min-w-[70.588vw] sm:min-w-[26.042vw] text-white flex flex-col sm:justify-between snap-center gap-[8.471vw] sm:gap-[2vw]"
                    >
                        <div className='flex flex-col gap-[4.471vw] sm:gap-[0.1vw]'>
                            <h4 className="text-[#00AFF1] text-[2.824vw] sm:text-[1.042vw] font-semibold sm:leading-[168%]">
                                {card.category}
                            </h4>
                            <h2 className="text-white text-[5.647vw] sm:text-[2.5vw] font-normal sm:w-[24vw]">
                                {card.title}
                            </h2>
                        </div>
                        <div className='flex gap-[2.929vw] sm:gap-[1.042vw] ml-[2.929vw] sm:ml-[1.2vw]'>
                            <div className='sm:w-[0.05vw] w-2 bg-white'></div>
                            <p className="text-white text-[2.824vw] sm:text-[1.042vw] font-light sm:w-[24vw] py-[1.302vw]">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex gap-1 sm:gap-[0.625vw] items-center justify-center mt-[6vw] sm:mt-1 '>
                <button
                    onClick={scrollLeftFunc}
                    className="rounded-full p-[2vw] sm:p-[0.586vw] bg-[rgba(255,255,255,0.1)] text-white hover:text-black hover:bg-[#00AFF1] duration-500"
                >
                    <FaAngleLeft className="size-4 sm:size-[1.5vw] opacity-100" />
                </button>
                <button
                    onClick={scrollRightFunc}
                    className="rounded-full p-[2vw] sm:p-[0.586vw] bg-[rgba(255,255,255,0.1)] text-white hover:text-black hover:bg-[#00AFF1] duration-500"
                >
                    <FaAngleRight className="size-4 sm:size-[1.5vw] opacity-80" />
                </button>
            </div>
        </div>
    );
};

export default Growth;
