"use client"
import Image from 'next/image';
import img1 from '../../../../../public/assets/image_1821.svg';
import img2 from '../../../../../public/assets/image_1822.svg';
import img3 from '../../../../../public/assets/image.svg';
import { useState } from 'react';
import { hoverImageData } from './data.js'; // Import the data

const HoverImageComponent = () => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="relative gap-[6.618vw] flex px-[5.208vw] py-[5.208vw] bg-[#00111A] "
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="">
                <p className="text-[#00AFF1] text-[0.833vw] mt-[6.094vw] ">{hoverImageData.text.subheading}</p>
                <h1 className=" text-white text-[1.667vw] mt-[1.25vw]">{hoverImageData.text.heading}</h1>
                <p className="text-[#D1D1D1] w-[51.823vw] mt-[0.833vw] text-[1.25vw] ">
{hoverImageData.text.description}
                </p>
                <button className=" bg-[#05B7DF] text-white px-[1.25vw] py-[0.938vw] mt-[3.333vw] font-semibold rounded-full">Read More</button>
            </div>
            <div className="relative  pl-[6vw]  h-[28.438vw] mt-[51px] w-1/2  overflow-hidden">

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
