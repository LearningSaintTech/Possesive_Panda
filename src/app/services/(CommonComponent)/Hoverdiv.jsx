import React from 'react';
import { FaChevronRight } from "react-icons/fa6";

const Hoverdiv = ({ heading, paragraph, modelData }) => {
    return (
        <div className='flex flex-col gap-[7.059vw] sm:gap-[4.167vw] px-[7.059vw] sm:px-[5.208vw]'>
            <div className='flex sm:flex-row flex-col sm:justify-between'>
                <h2 className='text-white text-[7.529vw] sm:text-[2.5vw] font-medium w-[37.708vw]'>
                    {heading}
                </h2>
                <p className='text-white text-[1.25vw] font-light leading-[187%] text-right w-[37vw]'>
                    {paragraph}
                </p>
            </div>
            <div className='flex flex-col gap-[3.765vw] sm:gap-[1.667vw]'>
                {modelData.map((model, index) => (
                    <div
                        key={index}
                        className='group sm:pt-[2.344vw] sm:pb-[1.5vw] sm:pl-[4.115vw] sm:pr-[1.25vw] p-[5.647vw] sm:p-0 bg-[#131D22] rounded-[4.706vw] sm:rounded-[1.042vw] transition-all duration-300 hover:bg-[#D6D6D6]'
                    >
                        <div className='flex flex-col justify-center items-center gap-[4vw] sm:gap-[0.5vw]'>
                            <h2 className='text-white text-[7.529vw] sm:text-[1.875vw] font-medium transition-all duration-300 group-hover:text-[#131D22]'>
                                {model.title}
                            </h2>
                            <p className='text-white text-[3.765vw] sm:text-[1.25vw] font-light sm:w-[73.542vw] transition-all duration-300 group-hover:text-[#131D22] text-center '>
                                {model.paragraph}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hoverdiv;
