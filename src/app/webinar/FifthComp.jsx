import { Image } from '@/lib/next-compat';
import React from 'react';
import Paper from '../../../public/assets/landing/paper.svg';

const FifthComp = ({ scrollToEightethComp }) => {
    return (
        <div className="sm:mt-[6.25vw] sm:mb-[6.25vw] mt-[14.118vw]">
            <div className='hidden sm:block'>
                <div className="flex">
                    <div className="w-[49.219vw]">
                        <Image
                            className="w-[49.219vw] h-[29.01vw] rounded-tr-[1.25vw] rounded-br-[1.25vw]"
                            src={Paper}
                            alt="Webinar promotion"
                            width={1000}
                            height={590}
                        />
                    </div>
                    <div className="w-[50.781vw] pl-[4.74vw] pr-[7.708vw]">
                        <div className="mt-[3.802vw] ">
                            <h2 className="text-[#372e32] text-[1.25vw] font-semibold mb-[0.781vw]">
                                Our webinar reveals the key strategies for hiring a top-notch virtual assistant who can elevate your operations and streamline your success.
                            </h2>
                            <p className="opacity-80 text-[#5a5a5a] text-[1.25vw] font-normal mb-[0.781vw]">
                                From automation tools to the latest software, learn how to find the perfect match for your team and watch your productivity soar!
                            </p>
                            <p className="opacity-80 text-[#5a5a5a] text-[1.25vw] font-normal">
                                Transform your business and stay ahead of the curve - let&apos;s dive into the future of real estate together!
                            </p>
                        </div>
                        <button
                            onClick={scrollToEightethComp}
                            className="mt-[2.5vw] bg-[#00c2c5] text-[#f0f2f2] font-bold px-[2vw] py-[1vw] rounded text-[1.125vw] font-sans hover:bg-[#00a9ac] transition-colors duration-300"
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            </div>


            <div className='block sm:hidden'>
                <div className='px-[7.059vw]'>
                    <h1 className='text-center text-[#152f2e] text-[4.706vw] font-semibold mb-[3.529vw]'>Our webinar reveals the key strategies for hiring a top-notch virtual assistant who can elevate your operations and streamline your success. </h1>
                    <p className='text-center text-[#5a5a5a] text-[4.706vw] font-normal mb-[3.529vw]'>From automation tools to the latest software, learn how to find the perfect match for your team and watch your productivity soar!</p>
                    <p className='text-center text-[#5a5a5a] text-[4.706vw] font-normal'>Transform your business and stay ahead of the curve - let&apos;s dive into the future of real estate together!</p>
                    <button
                        onClick={scrollToEightethComp}
                        className="w-full mt-[2.118vw] px-[2.824vw] py-[2.059vw] bg-[#00c2c5] text-white text-[3.529vw] font-bold font-['Open Sans'] rounded-md hover:bg-[#00a9ac] transition duration-300"
                        >
                        Register Now
                    </button>
                </div>

            </div>
        </div>
    );
};

export default FifthComp;