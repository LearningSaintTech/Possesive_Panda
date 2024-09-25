import React from 'react';
import { FaChevronRight } from "react-icons/fa6";

const Models = ({ modelData }) => {
    return (
        <div className='flex flex-col gap-[7.059vw] sm:gap-[4.167vw] px-[7.059vw] sm:px-[5.208vw]'>
            <h2 className='text-white text-[7.529vw] sm:text-[2.5vw] sm:leading-[84%] font-medium sm:font-semibold text-center'>
                Engagement Model
            </h2>
            <div className='flex flex-col gap-[3.765vw] sm:gap-[1.667vw]'>
                {modelData.map((model, index) => (
                    <div
                        key={index}
                        className='group sm:pt-[2.344vw] sm:pb-[1.5vw] sm:pl-[4.115vw] sm:pr-[1.25vw] p-[5.647vw] sm:p-0 bg-[#131D22] rounded-[4.706vw] sm:rounded-[1.042vw] transition-all duration-300 hover:bg-[#D6D6D6]'
                    >
                        <div className='flex flex-col gap-[4vw] sm:gap-[0.5vw]'>
                            <h2 className='text-white text-[7.529vw] sm:text-[2.5vw] font-medium leading-[125%] sm:leading-[84%] transition-all duration-300 group-hover:text-[#131D22]'>
                                {model.title}
                            </h2>
                            <div className='flex justify-between'>
                                <p className='text-white text-[3.765vw] sm:text-[1.25vw]  font-normal sm:w-[64.063vw] transition-all duration-300 group-hover:text-[#131D22]'>
                                    {model.paragraph}
                                </p>
                                <div className='hidden sm:block'>
                                    <button
                                        className='w-[3.802vw] h-[4.01vw] flex items-center justify-center bg-[#2B3439] text-white rounded-[0.8vw] mt-6 transition-all duration-300 group-hover:bg-[#C0C2C3] group-hover:text-black'
                                    >
                                        <FaChevronRight className='size-5 cursor-pointer' />
                                    </button>
                                </div>
                            </div>
                            <button
                                className="sm:hidden px-[2vw] py-[2vw] bg-[rgba(255,255,255,0.10)] text-gray-400 text-[3.765vw] rounded-[8px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.20)] group-hover:text-black"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Models;
