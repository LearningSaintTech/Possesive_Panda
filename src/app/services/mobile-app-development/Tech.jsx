"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Tech = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <div className='px-[7.059vw] sm:px-[5.208vw] flex flex-col gap-[2.824vw] sm:gap-[1.563vw] bg-[#00111A] items-center'>
            <h2 className='text-white text-[7.529vw] sm:text-[2.5vw] font-medium sm:leading-[120%] text-center'>
                Our Tech-Driven Triumphs
            </h2>
            <p className='text-white text-[3.765vw] sm:text-[1.25vw] font-normal sm:font-light sm:w-[41.51vw] text-center'>
                Explore our mobile app development victories in assorted domains, enabling businesses to attain success.
            </p>


            <div className=" flex flex-col sm:flex-row  w-full sm:h-[60vh] gap-[5vw] sm:gap-[1vw] mt-[5vw] sm:mt-[2vw]">
                <div
                    className={` relative  transition-all duration-500 ease-in-out ${hovered === 1 ? 'flex-[2]' : hovered ? 'flex-[1]' : 'flex-[2]'
                        }`}
                    onMouseEnter={() => setHovered(1)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <Image
                        src="/assets/services/mobile-app/animation.svg"
                        alt="Fingertips"
                        width={500}
                        height={300}
                        className="relative object-cover w-full h-[85.882vw] md:h-[40vw] lg:h-full rounded-lg"
                    />


                    <div className="absolute inset-0 flex flex-col gap-[2.824vw] md:gap-1 lg:gap-2 p-4 top-2 left-2 ">
                        <p className="text-white text-[2.824vw] sm:text-[1.042vw] capitalize font-normal leading-[150%] sm:leading-[134%] tracking-wider">Industry</p>
                        <h2 className="text-white font-bold sm:font-extrabold leading-[133%] text-[5.647vw] sm:text-[1.945vw] w-[44.471vw] sm:w-[19.167vw] ">Mobile App Development</h2>
                    </div>
                </div>



                <div
                    className={` relative transition-all duration-500 ease-in-out ${hovered === 2 ? 'flex-[2]' : hovered ? 'flex-[1]' : 'flex-[1]'
                        }`}
                    onMouseEnter={() => setHovered(2)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <Image
                        src="/assets/services/mobile-app/animation.svg"
                        alt="Precision"
                        width={500}
                        height={300}
                        className=" relative object-cover w-full h-[85.882vw] md:h-[40vw] lg:h-full rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col gap-[2.824vw] md:gap-1 lg:gap-2 p-4 top-2 left-2 ">
                        <p className="text-white text-[2.824vw] sm:text-[1.042vw] capitalize font-normal leading-[150%] sm:leading-[134%] tracking-wider">Industry</p>
                        <h2 className="text-white font-bold sm:font-extrabold leading-[133%] text-[5.647vw] sm:text-[1.945vw] w-[44.471vw] sm:w-[19.167vw] ">Mobile App Development</h2>
                    </div>
                </div>

                {/* Third Image */}
                <div
                    className={` relative transition-all duration-500 ease-in-out ${hovered === 3 ? 'flex-[2]' : hovered ? 'flex-[1]' : 'flex-[1]'
                        }`}
                    onMouseEnter={() => setHovered(3)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <Image
                        src="/assets/services/mobile-app/animation.svg"
                        alt="UI/UX"
                        width={500}
                        height={300}
                        className=" relative object-cover w-full h-[85.882vw] md:h-[40vw] lg:h-full rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col gap-[2.824vw] md:gap-1 lg:gap-2 p-4 top-2 left-2 ">
                        <p className="text-white text-[2.824vw] sm:text-[1.042vw] capitalize font-normal leading-[150%] sm:leading-[134%] tracking-wider">Industry</p>
                        <h2 className="text-white font-bold sm:font-extrabold leading-[133%] text-[5.647vw] sm:text-[1.945vw] w-[44.471vw] sm:w-[19.167vw] ">Mobile App Development</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tech;
