import React from 'react'
import Hand from '../../assets/aboutus/Hand.png'
import Image from 'next/image'

const AboutBanner = () => {
    return (
        <div>
            <div className="flex justify-between mt-32 relative overflow-hidden">
                <Image
                    src={Hand}
                    alt="Hand"
                    className="w-full h-auto bg-black/opacity-40 bg-custom-gradient mix-blend-hard-light overflow-visible relative"
                />
                <div className='absolute top-0 left-0 p-8 md:p-12 lg:p-16 xl:p-20'>
                    <h1 className='leading-[normal] text-[3.333vw] md:text-4xl lg:text-3xl xl:text-5xl font-semibold tracking-wide text-white ml-32 mt-28'> About Us </h1>
                    <h2 className='leading-[normal] text-white ml-0 md:ml-32 text-[2vw] md:text-4xl mt-3'>Professional IT Solution Service</h2>
                   
                </div>
                <div className='flex absolute items-center bottom-0 right-40 space-x-2 text-sm md:text-base lg:text-lg py-2 border-b-4 bg-white w-[340px] h-[110px] border-cyan-300 font-medium capitalize justify-center'>
                        <a href="/" className="text-cyan-300 hover:underline text-xl">
                            Home
                        </a>
                        <span className='opacity-50 text-neutral-800 text-xl'>:</span>
                        <span className='opacity-50 text-neutral-800 text-xl'>About Us</span>
                    </div>
            </div>

        </div>


    )
}
export default AboutBanner;