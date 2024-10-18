import React from 'react';
import Image from 'next/image';
import Customer from '../../../public/assets/landing/customer.svg'

const RealEstateVirtualAssistant = () => {
    return (
        <div className='px-[7.3vw]'>
            <div className="relative w-full h-[35.729vw] bg-[#152f2e] rounded-[1.563vw] overflow-hidden hidden sm:block">
                {/* Background Image */}
                <div className="absolute right-0 top-0 w-[46.354vw] h-full">
                    <Image
                        src={Customer}
                        alt="Virtual Assistant"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-r-[1.563vw]"
                    />
                </div>

                {/* Content Box */}
                <div className="absolute top-[2.552vw] left-[2.552vw] w-[51.042vw] h-[30.625vw] px-[2.5vw] py-[1.25vw]  bg-[#f0f2f2] rounded-[1.25vw]">
                    <h1 className="text-black text-[3.333vw] font-bold mt-[5vw] leading-tight">
                        Real Estate Virtual Assistant Hiring Essentials
                    </h1>
                    <p className="text-[#787878] text-[1.458vw] font-normal mt-[1.667vw]">
                        Learn Ways to Boost Your Business With Cutting-Edge Technology
                    </p>
                    <p className="text-[#787878] text-[1.458vw] font-normal mt-[0.833vw]">
                        Discover how to supercharge your real estate business by harnessing the power of innovative technology.
                    </p>
                </div>
            </div>

            <div className='block sm:hidden relative'>
                {/* Background */}
                <div className="w-full h-[159.294vw] bg-[#152f2e] rounded-[3.765vw]">
                    {/* Image at the top */}
                    <div className="w-full h-[93.176vw] relative">
                        <Image
                            src={Customer}
                            alt="Virtual Assistant"
                            layout="fill"
                            objectFit="cover"
                            className='rounded-[3.765vw]'
                        />
                    </div>

                    {/* Content Card */}
                    <div className="absolute w-[78.353vw] top-[76.235vw] left-[3.8235vw] h-[79.294vw] px-[5.412vw] py-[7.529vw] bg-white rounded-[3.765vw] flex-col justify-center items-center inline-flex shadow-lg">
                        <h1 className="text-[#152f2e] text-[8vw] font-bold leading-tight mb-[5.647vw]">
                            Real Estate Virtual Assistant Hiring Essentials
                        </h1>
                        <p className="text-[#152f2e] text-[3.765vw] font-normal mb-[3.765vw]">
                            Learn Ways to Boost Your Business With Cutting-Edge Technology
                        </p>
                        <p className="text-[#152f2e] text-[3.765vw] font-normal">
                            Discover how to supercharge your real estate business by harnessing the power of innovative technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealEstateVirtualAssistant;