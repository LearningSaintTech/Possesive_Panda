"use client"; // Add this to mark the component as a Client Component

import React, { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js

const Tech = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <div className='px-[7.059vw] sm:px-[5.208vw] py-4 sm:py-[6.25vw] flex flex-col gap-[2.824vw] sm:gap-[1.563vw] bg-[#00111A] items-center'>
            <h2 className='text-white text-[7.529vw] sm:text-[2.5vw] font-medium sm:leading-[120%] text-center'>
                Our Tech-Driven Triumphs
            </h2>
            <p className='text-white text-[3.765vw] sm:text-[1.25vw] font-normal sm:font-light sm:w-[41.51vw] text-center'>
                Explore our mobile app development victories in assorted domains, enabling businesses to attain success.
            </p>

            {/* Image hover effect component starts here */}
            <div className="flex flex-col sm:flex-row  w-full sm:h-[60vh] gap-[5vw] sm:gap-[1vw] mt-[5vw] sm:mt-[2vw]">
                {/* First Image */}
                <div
                    className={`transition-all duration-500 ease-in-out ${hovered === 1 ? 'flex-[2]' : hovered ? 'flex-[1]' : 'flex-[2]'
                        }`}
                    onMouseEnter={() => setHovered(1)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <Image
                        src="/assets/services/mobile-app/animation.svg" // Update with your image path
                        alt="Fingertips"
                        width={500}
                        height={300}
                        className="object-cover w-full h-[85.882vw] sm:h-full rounded-lg"
                    />
                </div>

                {/* Second Image */}
                <div
                    className={`transition-all duration-500 ease-in-out ${hovered === 2 ? 'flex-[2]' : hovered ? 'flex-[1]' : 'flex-[1]'
                        }`}
                    onMouseEnter={() => setHovered(2)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <Image
                        src="/assets/services/mobile-app/animation.svg" // Update with your image path
                        alt="Precision"
                        width={500}
                        height={300}
                        className="object-cover w-full h-[85.882vw] sm:h-full rounded-lg"
                    />
                </div>

                {/* Third Image */}
                <div
                    className={`transition-all duration-500 ease-in-out ${hovered === 3 ? 'flex-[2]' : hovered ? 'flex-[1]' : 'flex-[1]'
                        }`}
                    onMouseEnter={() => setHovered(3)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <Image
                        src="/assets/services/mobile-app/animation.svg" // Update with your image path
                        alt="UI/UX"
                        width={500}
                        height={300}
                        className="object-cover w-full h-[85.882vw] sm:h-full rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Tech;
