import React from 'react';
import { Image } from '@/lib/next-compat';

const Mobile = ({ heading, sideImage, paragraphs }) => {
    return (
        <div className='relative bg-[#00111A] flex flex-col gap-[3.294vw] sm:gap-[3vw] sm:pr-[5.208vw] sm:px-0 px-[7.059vw] '>
            <h2 className='text-white text-[7.529vw] sm:text-[2.5vw] font-medium sm:w-[38vw] sm:ml-[5.208vw] sm:leading-[125%] text-center sm:text-left '>
                {heading}
            </h2>
            <div className='flex sm:gap-[1.146vw]'>
                <Image
                    src={sideImage}
                    alt="sidecomponent"
                    width={500}
                    height={750}
                    className="hidden sm:block w-[26.719vw] h-[40vw] bg-[#00111A]"
                />
                <div className='flex flex-col gap-[3.294vw] sm:gap-[1.042vw] '>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className='text-white text-[3.765vw] sm:text-[1.25vw] sm:font-light sm:leading-[160%] text-center sm:text-left '>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Mobile;
