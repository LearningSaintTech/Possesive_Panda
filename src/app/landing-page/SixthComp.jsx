import Image from 'next/image';
import React from 'react';
import Abhishek from '../../../public/assets/landing/abhishek.svg';
import ImageBG from '../../../public/assets/landing/imagebg.svg';
import Abhi from '../../../public/assets/landing/abhisir.svg';

const SixthComp = () => {
    return (
        <div className=' sm:mb-[10vw] sm:mt-[10vw] mt-[14.118vw] mb-[14.118vw]'>
            <div className="px-[6.458vw] hidden sm:block">
                <h2 className="text-[#372e32] text-[3.333vw] font-bold ml-[3.125vw] mb-[3vw]">Meet The Speaker</h2>
                <div className="relative">
                    <Image
                        src={ImageBG}
                        alt="Background"
                        className="w-full h-auto"
                        layout="responsive"
                    />
                    <div className="absolute inset-0 flex">
                        <div className=" py-[2.5vw] pl-[3.594vw] text-white">
                            <p className="text-[#c3c3c3] w-[46.333vw] text-[1.25vw] font-normal mb-[1.25vw]">
                                <span className="text-white  text-[1.25vw] font-semibold">Mr. Abhishek Sharma,</span> the visionary founder of Possesive Panda, a dynamic IT solution and virtual assistant service provider. With over a decade of pioneering experience in virtual assistance, he&apos;s been a catalyst for growth across diverse businesses, helping them thrive in the digital age.
                            </p>
                            <p className="w-[46.333vw] text-[#c3c3c3] text-[1.25vw] font-normal mb-[1.25vw]">
                                An entrepreneur at heart, Abhishek juggles four thriving enterprises spanning the tech and IT industries, each one a testament to his innovative spirit and business acumen. A passionate public speaker, he inspires and empowers others, sharing his journey and expertise to guide aspiring entrepreneurs in building their dreams from the ground up.
                            </p>
                            <p className="w-[46.333vw] text-[#c3c3c3] text-[1.25vw] font-normal">
                                Join him on a journey where technology meets ambition, and discover how Abhishek is shaping the future of business one venture at a time!
                            </p>
                        </div>
                        <div className="w-[34.427vw] h-[45.365vw] relative ml-[4.75vw] bottom-[15.1vw]">
                            <Image
                                src={Abhishek}
                                alt="Abhishek Sharma"
                                layout="fill"
                                objectFit="cover"
                                className="absolute right-0 top-0 h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='block sm:hidden'>
                <div className='px-[7.059vw]'>
                    <h1 className='text-center text-[#372e32] text-[7.529vw] font-bold mb-[3.529vw]'>Meet The Speaker</h1>
                    <p className='text-[#5a5a5a] text-[3.765vw] font-normal mb-[3.529vw] w-[85vw]'>
                        <span className='text-[#372e32] text-base font-semibold'>Mr. Abhishek Sharma</span>, the visionary founder of Possesive Panda, a dynamic IT solution and virtual assistant service provider. With over a decade of pioneering experience in virtual assistance, he&apos;s been a catalyst for growth across diverse businesses, helping them thrive in the digital age.
                    </p>
                    <p className='text-[#5a5a5a] text-[3.765vw] font-normal mb-[3.529vw] w-[85vw]'>
                        An entrepreneur at heart, Abhishek juggles four thriving enterprises spanning the tech and IT industries, each one a testament to his innovative spirit and business acumen. A passionate public speaker, he inspires and empowers others, sharing his journey and expertise to guide aspiring entrepreneurs in building their dreams from the ground up.
                    </p>
                    <p className='text-[#5a5a5a] text-[3.765vw] font-normal w-[85vw] mb-[3.529vw]'>
                        Join him on a journey where technology meets ambition, and discover how Abhishek is shaping the future of business one venture at a time!
                    </p>
                </div>
                <div className="relative w-[85.882vw] h-[113.176vw] ml-[7.059vw]">
                    <Image
                        src={Abhi}
                        alt="Abhishek Sharma"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>

        </div>
    );
};

export default SixthComp;