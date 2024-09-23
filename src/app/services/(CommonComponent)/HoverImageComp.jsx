"use client"
import Image from 'next/image';

import { useState } from 'react';

const HoverImageComponent = ({hoverImageData}) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="relative gap-[6.618vw] flex px-[5.208vw] py-[5.208vw] bg-[#00111A] "
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="">
                <p className="text-[#00AFF1] sm:text-[0.833vw] text-[3.765vw] text-center sm:text-start mt-[6.094vw] ">{hoverImageData.text.subheading}</p>
                <h1 className=" text-white sm:text-[1.667vw] text-[7.529vw] text-center sm:text-start mt-[1.25vw]">{hoverImageData.text.heading}</h1>
                <p className="text-[#D1D1D1] sm:w-[51.823vw] w-[85.882vw] text-center sm:text-start mt-[0.833vw] sm:text-[1.25vw] text-[3.765vw] ">
{hoverImageData.text.description}
                </p>
                <button className=" bg-[#05B7DF] text-white sm:px-[1.25vw] px-[30.118vw] sm:py-[0.938vw] py-[2.824vw] mt-[3.333vw] font-semibold sm:rounded-full rounded-[1.176vw]">Read More</button>
            </div>










            <div className="relative  sm:block hidden pl-[6vw]  h-[28.438vw] mt-[2.656vw] w-1/2  overflow-hidden">

            <div
                    className={`absolute   mt-[1.563vw] ml-[2.917vw] w-[13.021vw] h-[23.438vw] transition-transform duration-500 ease-in-out ${hover ? 'transform -translate-y-[1vw] translate-x-[4vw] rotate-[11deg]' : 'transform translate-y-0 translate-x-0 rotate-0'
                        }`}
                >
                    <Image
                        src={hoverImageData.images.image1}
                        alt="AI Image 2"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>

           

                <div
                    className={`absolute mt-[1.563vw]  w-[13.021vw] h-[23.438vw] transition-transform duration-500 ease-in-out ${hover ? 'transform -translate-y-[1vw] -translate-x-[4vw] rotate-[-11deg]' : 'transform translate-y-0 translate-x-0 rotate-0'
                        }`}
                >
                    <Image
                        src={hoverImageData.images.image2}
                        alt="AI Image 1"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>

              
                <div className="absolute  w-[15.929vw] h-[26.07vw] transition-transform duration-500 ease-in-out">
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
