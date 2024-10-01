import React from 'react';
import Image from 'next/image';
import thumbnail from "../../../../../public/assets/services/e-commerce/1.png";

const IntroServices = ({ heading, content }) => {
    return (
        <div className='flex flex-col bg-[#00111A] gap-[4.375vw] sm:px-[5.208vw] px-[7.059vw]'>
            <h2 className='text-white sm:text-[2.5vw] text-[7.529vw] font-medium tracking-[0.025vw] sm:w-[40.885vw] leading-normal text-center sm:text-left'>
                {heading}
            </h2>
            <div className='flex sm:gap-[10.938vw]'>
                <Image
                    src={thumbnail}
                    alt="thumbnail"
                    className="w-[16.922vw] ml-[6.146vw] hidden sm:block"
                />
                <div className='flex flex-col gap-[2.824vw] sm:gap-[1.042vw]'>
                    {content.map((text, index) => (
                        <p key={index} className='text-white text-[3.765vw] sm:text-[1.25vw] font-light text-center sm:text-justify'>
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IntroServices;
