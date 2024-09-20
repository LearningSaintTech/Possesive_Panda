"use client";

import React, { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Growth = ({ heading, description, cards }) => {    const scrollContainerRef = useRef(null);

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
        <div className='flex flex-col  px-[5.208vw] py-[6.25vw] relative'>
            <div className='flex justify-between'>
                <h2 className='text-white text-[2.5vw] font-medium w-[35.052vw]'>
                    {heading}
                </h2>
                <p className='text-white text-[1.25vw] font-light leading-[185%] text-right w-[39vw]'>
                    {description}
                </p>
            </div>

            <div
                ref={scrollContainerRef} // Attach ref to the scroll container
                className="flex items-center overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth gap-[5.208vw] mt-[4.5vw] "
            >
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="min-w-[26.042vw] text-white flex flex-col justify-between snap-center gap-[2vw]"
                    >
                        <div className='flex flex-col gap-[0.1vw]'>
                            <h4 className="text-[#00AFF1] text-[1.042vw] font-semibold leading-[168%]">
                                {card.category}
                            </h4>
                            <h2 className="text-white text-[2.5vw] font-normal w-[21.25vw]">
                                {card.title}
                            </h2>
                        </div>
                        <div className='flex gap-[1.042vw] ml-[1.2vw]'>
                            <div className='w-[0.05vw] bg-white'></div>
                            <p className="text-white text-[1.042vw] font-light w-[24vw] py-[1.302vw]">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex gap-[0.625vw] items-center justify-center mt-[1.563vw] '>
                <button
                    onClick={scrollLeftFunc}
                    className="rounded-full p-[0.586vw] bg-[rgba(255,255,255,0.1)] text-white hover:text-black hover:bg-[#00AFF1] duration-500"
                >
                    <FaAngleLeft className="size-[1.5vw] opacity-100" />
                </button>
                <button
                    onClick={scrollRightFunc}
                    className="rounded-full p-[0.586vw] bg-[rgba(255,255,255,0.1)] text-white hover:text-black hover:bg-[#00AFF1] duration-500"
                >
                    <FaAngleRight className="size-[1.5vw] opacity-80" />
                </button>
            </div>
        </div>
    );
};

export default Growth;
