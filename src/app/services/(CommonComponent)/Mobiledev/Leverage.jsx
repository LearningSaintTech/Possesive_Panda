import React from 'react'

const Leverage = () => {
    return (
        <div className='px-[5.208vw] py-[6.25vw] flex flex-col gap-[1.563vw] bg-[#00111A] items-center'> 
            <h2 className='text-white text-[2.5vw] font-medium leading-[120%] w-[32.76vw] text-center'>
                Why Leverage Mobile App Development Services?
            </h2>
            <p className='text-white text-[1.25vw] font-light w-[41.51vw] text-center'>
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>

            <div className='flex flex-row gap-[3.958vw] mt-[2.969vw]'>
                <div className='flex flex-col  '>
                    <img src="/assets/services/mobile-app/Fingertips.svg" alt="Fingertips" className='w-[27.199vw] rounded-[0.648vw] mb-[1.4vw] ' />
                    <h3 className='text-white text-[1.25vw] font-semibold mb-1 '>
                        Instant Access at Your Fingertips
                    </h3>
                    <p className='text-white text-[1.042vw] font-normal w-[27.199vw] '>
                        Imagine your brand always within reach, nestled comfortably in your customers' pockets. Mobile apps offer seamless access, sending timely notifications and keeping your brand’s icon front and center on their screens.
                    </p>
                </div>

                <div className='flex flex-col'>
                    <h3 className='text-white text-[1.25vw] font-semibold mb-1'>
                        Outpacing Web Apps with Precision
                    </h3>
                    <p className='text-white text-[1.042vw] font-normal mb-[1.4vw]'>
                        Relying solely on websites and web apps? Mobile apps wield unmatched power, tapping directly into device hardware, delivering superior performance, and crafting experiences tailored precisely to user needs.
                    </p>
                    <img src="/assets/services/mobile-app/precision.svg" alt="precision" className='w-[27.199vw] rounded-[0.648vw] ' />
                </div>

                <div className='flex flex-col '>
                    <img src="/assets/services/mobile-app/uiux.svg" alt="uiux" className='w-[27.199vw] rounded-[0.648vw] mb-[1.4vw] ' />
                    <h3 className='text-white text-[1.25vw] font-semibold mb-1 '>
                        Elevated Mobile UI/UX
                    </h3>
                    <p className='text-white text-[1.042vw] font-normal'>
                        Dive into a world where user experience is an art form. Mobile apps boast intuitive and sleek interfaces that transform user interaction into a pleasure, making engagement effortless and dynamic.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Leverage
