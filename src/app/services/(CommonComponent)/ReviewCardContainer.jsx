import React from 'react';
import { HiMiniStar } from "react-icons/hi2";
import Image from "next/image";
import { TiStarHalf } from "react-icons/ti";

// Icons
import Google from "../../../../public/assets/banner/google.svg";
import Clutch from "../../../../public/assets/banner/clutch.svg";
import Goodfirms from "../../../../public/assets/banner/good.svg";
import Capterra from "../../../../public/assets/banner/capterra.svg";

const platforms = [
    {
        name: "Google",
        rating: 4.8,
        reviews: 54,
        image: Google,
    },
    {
        name: "Clutch",
        rating: 4.8,
        reviews: 18,
        image: Clutch,
    },
    {
        name: "Goodfirms",
        rating: 4.8,
        reviews: 18,
        image: Goodfirms,
    },
    {
        name: "Capterra",
        rating: 4.7,
        reviews: 27,
        image: Capterra,
    }
];

const ReviewCardContainer = () => {
    return (
        <div className='px-[13.802vw] pt-[6.094vw] bg-[#00111a]'>
            <div className='w-[71.927vw] py-[1.563vw] bg-white/10 rounded-[0.625vw] flex-col justify-center items-center gap-[1.667vw] inline-flex'>
                <div className='px-[4.01vw]'>
                    <h6 className='w-[41.042vw] text-center text-white text-[1.25vw] font-light'>
                        Possesive Panda has been top ranked as an IT service provider by many of the B2B review platforms.
                    </h6>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1.25vw]">
                    {platforms.map((platform, index) => (
                        <div key={index} className="flex flex-row relative bg-white/10 rounded-[0.26vw] shadow sm:w-[15.078vw] sm:h-[6.302vw] gap-[1.719vw]">
                            <div className="flex flex-col gap-[0.313vw] pt-[1.25vw] pl-[1.979vw]">
                                <Image
                                    src={platform.image}
                                    alt={`${platform.name} logo`}
                                    className="w-[2.396vw] h-[2.448vw] relative"
                                />
                                <p className="w-[3.021vw] h-[0.865vw] text-white text-[0.729vw] font-medium">
                                    {platform.name}
                                </p>
                            </div>

                            <div className="flex flex-col gap-[0.625vw] mt-[0.885vw]">
                                <p className="w-[2.448vw] h-[1.324vw] text-white text-[1.324vw] font-medium">
                                    {platform.rating}
                                </p>
                                <p className="w-[4.323vw] text-white text-[0.729vw] font-medium ">
                                    {platform.reviews} Reviews
                                </p>
                                <p className="flex flex-row gap-[0.417vw] mr-[4.167vw]">
                                    {[...Array(Math.floor(platform.rating))].map((_, i) => (
                                        <HiMiniStar
                                            key={i}
                                            className="w-[1vw] h-[1vw] text-orange-400"
                                        />
                                    ))}
                                    {platform.rating % 1 !== 0 && (
                                        <TiStarHalf className="w-[1vw] h-[1vw] text-orange-400" />
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewCardContainer;
