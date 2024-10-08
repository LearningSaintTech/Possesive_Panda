import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from "react-icons/fa6";

const ServicepageComponent = ({ heading, description, modelData }) => {
    return (
        <div className='flex flex-col gap-[7.059vw] sm:gap-[4.167vw] px-[7.059vw] sm:px-[5.208vw] mb-[14.118vw] sm:mb-[7.813vw] mt-[14.118vw] sm:mt-[6.25vw] '>
            <div className='flex sm:flex-row flex-col sm:gap-0 gap-[5.647vw] sm:justify-between'>
                <h2 className='text-white text-[7.529vw] sm:text-[2.5vw] w-[88.235vw] sm:w-[34.219vw] font-medium sm:font-semibold sm:text-left text-center '>
                    {heading}
                </h2>
                <p className='text-white text-[3.765vw] sm:text-[1.25vw] sm:leading-[212%] sm:w-[27.292vw] text-center sm:text-right font-light '>
                    {description}
                </p>
            </div>
            <div className='flex flex-col gap-[3.765vw] sm:gap-[1.667vw]'>
                {modelData.map((model, index) => (
                    <div
                        key={index}
                        className='group sm:pt-[3.021vw] sm:pb-[1.875vw] sm:pl-[4.115vw] sm:pr-[1.302vw] p-[5.647vw] sm:p-0 bg-[#131D22] rounded-[4.706vw] sm:rounded-[1.042vw] transition-all duration-300 hover:bg-[#D6D6D6]'
                    >
                        <div className='flex flex-col gap-[4vw] sm:gap-[0.5vw]'>
                            <h3 className='text-white text-[7.529vw] sm:text-[1.667vw] font-semibold leading-[125%] sm:leading-[125%] transition-all duration-300 group-hover:text-[#131D22]'>
                                {model.title}
                            </h3>
                            <div className='flex justify-between'>
                                <p className='text-white text-[3.765vw] sm:text-[1.25vw] font-light sm:w-[73.75vw] transition-all duration-300 group-hover:text-[#131D22]'>
                                    {model.paragraph}
                                </p>
                                <div className='hidden sm:block'>
                                    <Link
                                        href={model.link}
                                        className='w-[3.802vw] h-[4.01vw] flex items-center justify-center bg-[#2B3439] text-white rounded-[0.8vw] mt-[5vw] transition-all duration-300 group-hover:bg-[#C0C2C3] group-hover:text-black'
                                    >
                                        <FaChevronRight className='w-[2vw] h-[2vw] cursor-pointer' />
                                    </Link>
                                </div>
                            </div>
                            <Link
                                href={"/contact"}
                                className="sm:hidden px-[2vw] py-[2vw] bg-[rgba(255,255,255,0.10)] text-gray-400 text-[3.765vw] rounded-[8px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.20)] group-hover:text-black"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicepageComponent;
