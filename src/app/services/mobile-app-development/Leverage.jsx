import React from 'react'
import Image from 'next/image'
import img1 from '../../../../public/assets/services/mobile-app/Fingertips.svg'
import img2 from '../../../../public/assets/services/mobile-app/precision.svg'
import img3 from '../../../../public/assets/services/mobile-app/precision.svg'
import img4 from '../../../../public/assets/services/mobile-app/uiux.svg'

const Leverage = () => {
    return (
        <div className='px-[7.059vw] sm:px-[5.208vw] sm:py-[6.25vw] flex flex-col gap-[8vw] sm:gap-[4.167vw] bg-[#00111A] items-center'>
            <h2 className='text-white text-[7.529vw] sm:text-[2.5vw] font-medium sm:leading-[120%] sm:w-[32.76vw] text-center'>
                Why Leverage Mobile App Development Services?
            </h2>
            <div className='flex flex-col sm:flex-row gap-[7.529vw] sm:gap-[3.958vw] '>
                <div className='flex flex-col sm:gap-0 gap-[4vw] '>
                    <Image src={img1} alt="Fingertips" className='sm:w-[27.199vw] rounded-[0.648vw] sm:mb-[1.4vw] ' />
                    <h3 className='text-white text-[3.765vw] sm:text-[1.25vw] font-bold sm:font-semibold sm:mb-1 '>
                        Instant Access at Your Fingertips
                    </h3>
                    <p className='text-white text-[3.765vw] sm:text-[1.042vw] font-normal text-justify  sm:text-left hyphens-auto sm:w-[27.199vw] '>
                        Imagine your brand always within reach, nestled comfortably in your customer&apos;s pockets. Mobile apps offer seamless access, sending timely notifications and keeping your brand&apos;s icon front and center on their screens.                    </p>
                </div>

                <div className='hidden sm:flex flex-col'>
                    <h3 className='text-white text-[3.765vw] sm:text-[1.25vw] font-bold sm:font-semibold sm:mb-1'>
                        Outpacing Web Apps with Precision
                    </h3>
                    <p className='text-white text-[3.765vw] sm:text-[1.042vw] font-normal  sm:mb-[1.4vw]'>
                        Relying solely on websites and web apps? Mobile apps wield unmatched power, tapping directly into device hardware, delivering superior performance, and crafting experiences tailored precisely to user needs.                    </p>
                    <Image src={img2} alt="precision" className='sm:w-[27.199vw] rounded-[0.648vw] ' />
                </div>

                <div className='sm:hidden flex flex-col sm:gap-0 gap-[5.647vw]'>
                    <Image src={img3} alt="precision" className='sm:w-[27.199vw] rounded-[0.648vw] ' />

                    <h3 className='text-white text-[3.765vw] sm:text-[1.25vw] font-bold sm:font-semibold sm:mb-1'>
                        Outpacing Web Apps with Precision
                    </h3>
                    <p className='text-white text-[3.765vw] sm:text-[1.042vw]  font-normal text-justify  sm:text-left hyphens-auto sm:mb-[1.4vw]'>
                        Relying solely on websites and web apps? Mobile apps wield unmatched power, tapping directly into device hardware, delivering superior performance, and crafting experiences tailored precisely to user needs.                    </p>
                </div>

                <div className='flex flex-col sm:gap-0 gap-[5.647vw] '>
                    <Image src={img4} alt="uiux" className='sm:w-[27.199vw] rounded-[0.648vw] sm:mb-[1.4vw] ' />
                    <h3 className='text-white text-[3.765vw] sm:text-[1.25vw] font-bold sm:font-semibold sm:mb-1 '>
                        Elevated Mobile UI/UX
                    </h3>
                    <p className='text-white text-[3.765vw] sm:text-[1.042vw] font-normal text-justify  sm:text-left hyphens-auto'>
                        Dive into a world where user experience is an art form. Mobile apps boast intuitive and sleek interfaces that transform user interaction into a pleasure, making engagement effortless and dynamic.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Leverage