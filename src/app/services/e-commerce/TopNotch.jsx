import React from 'react'

const TopNotch = () => {
    return (
        <div className=''>
            <div className='hidden sm:block px-[5vw] bg-[#00111A] py-[5vw] '>
                <div className='w-[89.479vw] h-[13.073vw]  bg-[#131d22] rounded-[0.497vw] flex-col justify-center items-center gap-[2vw] inline-flex pt-[3.958vw]'>
                    <h5 className='opacity-80 text-center text-white text-[1.25vw] font-semibold leading-relaxed'>Industries We Have Worked With</h5>
                    <div class="justify-start items-center gap-[6.25vw] inline-flex pb-[2vw]">
                        <p className='text-center text-white text-[1.667vw] font-semibold leading-relaxed'>FMCG</p>
                        <p className='text-center text-white text-[1.667vw] font-semibold leading-relaxed'>Food and Groceries</p>
                        <p className='text-center text-white text-[1.667vw] font-semibold leading-relaxed'>Healthcare</p>
                        <p className='text-center text-white text-[1.667vw] font-semibold leading-relaxed'>Real estate</p>
                        <p className='text-center text-white text-[1.667vw] font-semibold leading-relaxed'>Hotel</p>
                        <p className='text-center text-white text-[1.667vw] font-semibold leading-relaxed'>Retails</p>
                    </div>
                </div>
                <div>
                </div>
            </div>


            {/* FOR MOBILE */}

            <div className="sm:hidden bg-[#00111A] py-[60vw]">
                <div className="w-[100.235vw] h-[87.059vw] pl-[7.294vw] pr-[7.059vw] pt-[11.529vw] pb-[11.765vw] flex-col justify-center items-center gap-[7.529vw] inline-flex">
                    <h1 className="w-[80vw] text-center text-white text-[7.529vw] font-medium leading-[8.471vw]">
                        Industries We Have Worked With
                    </h1>

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
                            className="w-[57.647vw] h-[18.353vw] px-[5.647vw] py-[7.529vw] bg-[#131d22] rounded-[2.824vw] border border-white flex flex-col justify-center items-center"
                        >
                            <p className="opacity-70 text-center text-white text-[4.706vw] font-semibold leading-relaxed">
                                {industry}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


        </div>

    )
}

export default TopNotch