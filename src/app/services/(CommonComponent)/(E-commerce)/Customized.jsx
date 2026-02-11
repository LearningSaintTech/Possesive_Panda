'use client';
import React, { useState, useRef } from 'react';
import { Image } from '@/lib/next-compat';
import newmap from "../../../../../public/assets/services/e-commerce/Wmap.png";

const Customized = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='relative flex bg-[#131D22] sm:pl-[5.208vw] px-[7.059vw] py-[10vw] sm:py-[5.208vw]'>

            {/* Text Content */}
            <div className='flex flex-col gap-[6vw] sm:gap-[1.563vw]'>
                <div className='flex flex-col gap-[5vw] sm:gap-[1vw]'>
                    <p className='text-[#00AFF1] text-[3.765vw] sm:text-[1.25vw] sm:leading-[180%] text-center sm:text-left'>
                        Drive Online Sales
                    </p>
                    <h2 className='text-[7.529vw] sm:text-[2.5vw] text-white font-medium sm:font-normal sm:leading-[125%] sm:w-[42.448vw]'>
                        With our Customized eCommerce Solution!
                    </h2>
                </div>
                <div className='flex flex-col'>
                    <p className='text-white text-[3.765vw] sm:text-[1.25vw] text-center sm:text-left font-normal sm:font-light sm:leading-[180%] sm:w-[47.24vw]'>
                        Possesive Panda&apos;s eCommerce solutions cover every detail to guarantee that traffic and sales consistently exceed your growth objectives. We provide eCommerce services for global industry verticals in the domain of designing, development, hosting, marketing, and analytics.
                    </p>

                    {/* Expanding Section */}
                    <div
                        ref={contentRef}
                        className='overflow-hidden transition-all duration-700 ease-in-out'
                        style={{
                            maxHeight: isExpanded ? `${contentRef.current.scrollHeight}px` : '0px',
                        }}
                    >
                        <p className='text-white text-[3.765vw] sm:text-[1.25vw] text-center sm:text-left font-normal sm:font-light sm:leading-[180%] sm:w-[47.24vw] mt-[4vw] sm:mt-[1vw]'>
                            You can rely on us to create user journeys that turn visitors into sales while also providing your online store with outstanding and robust designs, a secure Payment Getaway connection, and an efficient shopping cart. With eCommerce SEO and PPC campaigns, we can effectively drive relevant visitors from the backend.
                        </p>
                    </div>

                    {/* Toggle Button */}
                    <button
                        onClick={toggleExpand}
                        className='bg-[#05B7DF] rounded-[5vw] sm:rounded-[3.906vw] text-white text-[3.765vw] sm:text-[1.25vw] sm:py-0 py-[2.5vw] font-semibold sm:w-[10.521vw] sm:h-[3.333vw] mb-[2.5vw] mt-[7.529vw] sm:mt-[2.5vw]'
                    >
                        {isExpanded ? 'See Less' : 'See More'}
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div
                className={`hidden sm:block absolute right-0 w-[48.438vw] overflow-hidden transition-all duration-700 ease-in-out bottom-0`}
                style={{
                    height: isExpanded ? '38.802vw' : '27.135vw', 
                }}
            >
                <Image
                    src={newmap}
                    alt="newmap"
                    className='w-full h-full object-cover'
                    style={{
                        objectPosition: 'top', 
                    }}
                />
            </div>
        </div>
    );
};

export default Customized;
