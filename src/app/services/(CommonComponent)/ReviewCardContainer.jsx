"use client"
import React, { useState, useEffect } from 'react';
import { HiMiniStar } from "react-icons/hi2";
import Image from "next/image";
import { TiStarHalf } from "react-icons/ti";

import Google from "../../../../public/assets/banner/google.svg";
import Clutch from "../../../../public/assets/banner/clutch.svg";
import Goodfirms from "../../../../public/assets/banner/good.svg";
import Capterra from "../../../../public/assets/banner/capterra.svg";

const platforms = [
    { name: "Google", rating: 4.8, reviews: 54, image: Google },
    { name: "Clutch", rating: 4.8, reviews: 18, image: Clutch },
    { name: "Goodfirms", rating: 4.8, reviews: 18, image: Goodfirms },
    { name: "Capterra", rating: 4.7, reviews: 27, image: Capterra }
];

const ReviewCardContainer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 400);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='bg-[#00111a] px-[7.059vw] sm:px-[13.802vw] py-[3.765vw] sm:pt-[6.094vw]'>
            <div className='bg-white/10 rounded-lg sm:rounded-[0.625vw] flex flex-col justify-center items-center gap-[3.765vw] sm:gap-[1.667vw] sm:w-[71.927vw] sm:py-[1.563vw]'>
                <div className={`px-[3.765vw] sm:px-[7.01vw] mt-[3.765vw] sm:mt-0 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h6 className='text-center text-white text-[3.765vw] sm:text-[1.25vw] py-0 sm:py-[0.2vw] font-light sm:w-[41.042vw] sm:px-[2vw] mb-4'>
                        Possesive Panda has been top ranked as an IT service provider by many of the B2B review platforms.
                    </h6>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-[1.25vw] px-[3.765vw] sm:px-0 pb-[0vw] sm:pb-0">
                    {platforms.map((platform, index) => (
                        <div
                            key={index}
                            className={`flex flex-row relative bg-white/10 rounded-md sm:rounded-[0.26vw] shadow w-full sm:w-[15.078vw] h-[22.588vw] sm:h-[6.302vw] gap-[3.765vw] sm:gap-[1.719vw] transition-all duration-3000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${index * 400}ms` }}
                        >
                            <div className="flex flex-col gap-[0.941vw] sm:gap-[0.313vw] pt-[7.765vw] sm:pt-[1.25vw] pl-[3.765vw] sm:pl-[1.979vw]">
                                <Image
                                    src={platform.image}
                                    alt={`${platform.name} logo`}
                                    className="w-[5.882vw] h-[5.882vw] sm:w-[2.396vw] sm:h-[2.448vw] relative"
                                />
                                <p className="text-white text-[1.882vw] sm:text-[0.729vw] font-medium sm:w-[3.021vw] sm:h-[0.865vw]">
                                    {platform.name}
                                </p>
                            </div>

                            <div className="grid flex-col gap-0 sm:gap-[0.625vw] mt-[3.118vw] sm:mt-[0.885vw]">
                                <p className="text-white text-[3.294vw] sm:text-[1.324vw] font-medium sm:w-[2.448vw] sm:h-[1.324vw]">
                                    {platform.rating}
                                </p>
                                <p className="text-white text-[1.716vw] sm:text-[0.729vw] font-medium sm:w-[4.323vw]">
                                    {platform.reviews} Reviews
                                </p>
                                <div className="flex flex-row gap-[0.941vw] sm:gap-[0.417vw] mr-4 sm:mr-[4.167vw] mb-0 sm:mb-[0.938vw]">
                                    {[...Array(Math.floor(platform.rating))].map((_, i) => (
                                        <HiMiniStar
                                            key={i}
                                            className="w-[2.353vw] h-[2.353vw] sm:w-[1vw] sm:h-[1vw] text-orange-400"
                                        />
                                    ))}
                                    {platform.rating % 1 !== 0 && (
                                        <TiStarHalf className="w-[2.353vw] h-[2.353vw] sm:w-[1vw] sm:h-[1vw] text-orange-400" />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewCardContainer;