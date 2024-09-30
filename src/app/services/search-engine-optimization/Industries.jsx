"use client";
import React, { useState, useEffect } from "react";
const Industries = () => {
      
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <=425); // 640px as the breakpoint for mobile
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
    return (
        <div className=''>
      {!isMobile ? (
            <div className='hidden sm:block px-[5vw] bg-[#00111A] '>
                <div className='w-[89.531vw] h-[14.063vw]  bg-[#131d22] rounded-[0.497vw] flex-col justify-center items-center gap-[2vw] inline-flex pt-[2.5vw]'>
                    <h3 className=' text-center text-white text-[2.5vw] font-medium leading-relaxed'>Industries We Have Worked With</h3>
                    <div class="justify-start items-center gap-[6.25vw] inline-flex pb-[2vw]">
                        <p className='opacity-80 text-center text-white text-[1.667vw] font-medium leading-relaxed'>FMCG</p>
                        <p className='opacity-80 text-center text-white text-[1.667vw] font-medium leading-relaxed'>Food and Groceries</p>
                        <p className='opacity-80 text-center text-white text-[1.667vw] font-medium leading-relaxed'>Healthcare</p>
                        <p className='opacity-80 text-center text-white text-[1.667vw] font-medium leading-relaxed'>Real estate</p>
                        <p className='opacity-80 text-center text-white text-[1.667vw] font-medium leading-relaxed'>Hotel</p>
                        <p className='opacity-80 text-center text-white text-[1.667vw] font-medium leading-relaxed'>Retails</p>
                    </div>
                </div>
                <div>
                </div>
            </div>


      ):(
            <div className="sm:hidden bg-[#00111A] ">
                <div className="w-[100.235vw] h-[87.059vw] pl-[7.294vw] pr-[7.059vw] pt-[11.529vw] pb-[11.765vw] flex-col justify-center items-center gap-[1.469vw] inline-flex ">
                    <h3 className="w-[80vw] text-center text-white text-[7.529vw] font-medium leading-[8.471vw]">
                        Industries We Have Worked With
                    </h3>
                    {/* Cards */}
                    {[
                        'FMCG',
                        'Food and Groceries',
                        'HealthCare',
                        'Real estate',
                        'Hotel',
                        'Retails',
                    ].map((industry, index) => (
                        <div
                            key={index}
                            className="w-[57.647vw] h-[18.353vw] px-[5.647vw] py-[7.529vw] bg-[#131d22] rounded flex flex-col justify-center items-center"
                        >
                            <p className="opacity-70 text-center text-white text-[4.042vw] font-semibold leading-relaxed">
                                {industry}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
      )}

        </div>

    )
}

export default Industries