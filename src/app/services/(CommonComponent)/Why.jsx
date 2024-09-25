import React from 'react';
import Image from 'next/image';

const Why = ({ mainHeading, subText1, subText2, thumbnail, listHeading, titles }) => {
    return (
        <div className='relative flex flex-col bg-[#00111A] gap-[3.646vw] sm:px-[5.208vw] sm:py-[6.25vw] px-[7.059vw] py-[14.118vw] '>
            <h2 className='text-white sm:text-[2.5vw] text-[7.529vw] font-medium tracking-[0.025vw] sm:w-[52.969vw] leading-normal text-center sm:text-left'>
                {mainHeading}
            </h2>

            <div className='flex  '>
                <div className='flex flex-col gap-[2.824vw] sm:gap-[1.042vw] ml-[3.059vw] sm:ml-0'>
                    <p className='text-white text-[3.765vw] sm:text-[1.25vw] font-light text-center sm:text-left sm:w-[55.729vw]'>
                        {subText1}
                    </p>
                    <p className='text-white text-[3.765vw] sm:text-[1.25vw] font-light text-center sm:text-left sm:w-[55.729vw]'>
                        {subText2}
                    </p>
                </div>
                <Image
                    src={thumbnail}
                    alt="thumbnail"
                    width={400}
                    height={400}
                    className=" absolute w-[22vw] top-16 right-[10.417vw] hidden sm:block"
                />
            </div>

            <div className='flex flex-col gap-[7.529vw] sm:gap-[3.646vw] bg-[#00111A]'>
                
                <div className='grid sm:grid-cols-2 sm:gap-x-[4.479vw] gap-y-[2.353vw] sm:gap-y-[1.042vw]'>
                    {titles.map((item, index) => (
                        <div
                            key={index}
                            className='flex px-[3vw] sm:px-[1.667vw] py-[3vw] sm:py-[1.146vw] rounded-[1.176vw] sm:rounded-[0.625vw] border-[0.104vw] border-white sm:border sm:cursor-pointer hover:bg-[rgba(217,217,217,0.2)] text-center items-center justify-center'
                        >
                            <p className='text-white text-[2.824vw] sm:text-[1.25vw] font-normal capitalize'>
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Why;
