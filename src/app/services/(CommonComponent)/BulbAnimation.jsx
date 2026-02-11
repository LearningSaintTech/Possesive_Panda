"use client";
import { useState } from 'react';
import { HiLightBulb } from "react-icons/hi";
import { Image } from '@/lib/next-compat';
import img1 from '../../../../public/assets/services/payPerClick/bulbanim1.svg'
const BulbAnimation = () => {
    // Array to hold the content for the paragraphs
    const ppcParagraphs = [
        "Pay-per-click or PPC, encompasses various methods and aspects to boost online sales. ",
        "PPC advertising is a keyword-based marketing strategy where search terms and phrases are assigned value based on search volume, difficulty, and competition. ",
        "Limited Google pay-per-click advertising slots make it challenging for advertisers to claim their spot. Ads are subject to ad auction, an automated process used by search engines to determine relevance and validity.",
        "To improve ad position and lower cost per click, ads must be relevant to target demographics, include valuable keywords, receive high click-through rates, and drive prospects to an SEO-optimized landing page.",
        "If you don’t have time and resources for PPC operations, you can consider outsourcing the best pay-per-click professionals from Possesive Panda for better outcomes. "
    ];

    const contentData = [
        {
            title: 'Ad Creation and Keyword Selection',
            description: 'Advertisers create ads using relevant keywords, which determine their appearance on search engines like Google and Bing.',
        },
        {
            title: 'Bidding Process',
            description: 'Advertisers bid on keywords in an auction format, setting the maximum price for each click. Ad placement is determined by bid amount and ad quality.',
        },
        {
            title: 'Display Advertising',
            description: 'The search engine conducts an auction when a user searches for a bid-on keyword, displaying the winning ads at the top or bottom of the search results page.',
        },
        {
            title: 'Payment for Clicks',
            description: 'Advertisers pay only when a user clicks on their ad, allowing businesses to track their performance based on clicks and conversions.',
        },
    ];



    const handleToggle = () => {
        setIsOn(!isOn);
    };


    // State to track the toggle
    const [isOn, setIsOn] = useState(false);

    // Toggle handler
    const toggleButton = () => {
        setIsOn((prevState) => !prevState);
    };

    return (
        <div className='relative px-[7.059vw] sm:px-[5.208vw] bg-[#00111A] flex flex-col sm:gap-0 gap-[7.059vw]'>
            <div className='relative flex items-center sm:justify-center sm:mx-[10vw]'>
                <div className='sm:absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-20'>

                    <Image
                        src={img1}
                        alt="bulbanim1"
                        className='hidden sm:block relative w-full'
                    />

                    <div className='sm:absolute flex flex-col items-center justify-center sm:top-0 sm:left-0 w-full h-full sm:px-[4vw]'>
                        <p className='text-white text-[7.529vw] sm:text-[2.5vw] font-medium text-center mb-[2.353vw] sm:mb-[0.2vw]'>
                            What is PPC Marketing
                        </p>
                        <p className='text-white text-[3.765vw] sm:text-[1.25vw] sm:font-light text-center'>
                            Pay-Per-Click or PPC, is a digital marketing strategy that allows you to market your products & services for a fixed amount, & you can choose where you want to show your ads & spend money. It drives immediate traffic to your website & amplify the sales of your products & services.                        </p>
                    </div>
                </div>
            </div>

            <div className='sm:py-0 py-[5.647vw] sm:pt-[8.333vw] px-[3.2vw] sm:px-0 sm:pb-[0.9vw] items-center justify-center bg-[#131D22] relative flex flex-col rounded-[2.824vw] sm:rounded-none  text-center sm:overflow-hidden '>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="502"
                    height="545"
                    viewBox="0 0 502 836"
                    fill="none"
                    className='absolute hidden sm:block sm:-left-10  '
                >
                    <g opacity="0.71" filter="url(#filter0_f_7485_7118)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M37.3054 205.631C96.2506 241.654 61.2531 355.334 118.987 393.269C165.824 424.043 259.379 316.153 282.918 367.013C310.062 425.661 180.154 465.221 182.184 529.815C183.687 577.637 297.582 573.386 290.895 620.762C284.55 665.718 181.273 621.68 163.332 663.385C135.85 727.27 231.404 817.071 184.399 868.325C147.472 908.591 91.364 808.721 37.3054 800.805C-6.31421 794.418 -64.3245 863.625 -90.4099 828.086C-126.008 779.586 -39.7665 700.978 -72.8501 650.728C-101.658 606.973 -183.622 654.318 -225.521 622.871C-265.698 592.717 -302.636 536.762 -289.182 488.364C-275.456 438.987 -194.844 443.266 -164.179 402.204C-132.055 359.19 -150.933 289.285 -112.507 251.794C-74.6293 214.84 -7.84787 178.036 37.3054 205.631Z"
                            fill="#047FC4"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_7485_7118"
                            x="-502.2"
                            y="-14.2"
                            width="1003.58"
                            height="1102.25"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="105.1" result="effect1_foregroundBlur_7485_7118" />
                        </filter>
                    </defs>
                </svg>

                <h2 className='text-white text-[7.529vw] sm:text-[2.5vw] sm:tracking-wide font-medium sm:mb-[1.563vw] mb-[2.353vw] sm:w-[55.729vw]'>
                    How Does PPC Work?
                </h2>

                {ppcParagraphs.map((paragraph, index) => (
                    <p key={index} className='text-white text-[3.765vw] sm:text-[1.25vw] sm:font-light sm:mb-[1.563vw] mb-[2.353vw] sm:w-[55.729vw] sm:opacity-70 '>
                        {paragraph}
                    </p>
                ))}

                <div className="hidden absolute sm:flex justify-center bottom-10 right-16">
                    <div
                        className={`flex items-center w-[6vw] h-[2.5vw] rounded-full border-[0.052vw] cursor-pointer transition-all duration-300 ${isOn ? 'bg-[#00AFF1]' : 'bg-[#00111A]'
                            }`}
                        onClick={toggleButton}
                    >
                        {/* Bulb Icon */}
                        <div
                            className={`ml-[0.4vw] flex items-center justify-center w-[1.667vw] h-[1.667vw] rounded-full transition-all duration-300 ${isOn ? 'translate-x-[3.5vw] bg-white text-[#00AFF1]' : 'translate-x-0 bg-white text-black'}`}
                            style={{
                                transition: 'transform 0.3s ease-in-out',
                            }}
                        >
                            <HiLightBulb size={20} />
                        </div>

                        {/* ON/OFF Text */}
                        <span className={`text-[1.042vw] font-medium px-[0.5vw] ${isOn ? 'text-white -translate-x-[1.4vw]' : 'text-white'}`}>
                            {isOn ? 'ON' : 'OFF'}
                        </span>
                    </div>
                </div>


            </div>

            {/* i have added the bulb on the wall */}

            <div className='hidden sm:flex justify-between px-[8.333vw]'>
                {Array(4)
                    .fill(null)
                    .map((_, index) => (
                        <div key={index} className='flex flex-col justify-center items-center'>
                            <div
                                className='w-[4.844vw] h-[0.625vw] bg-[#282B2C]'
                                style={{
                                    borderRadius: '0vw 0vw 0.208vw 0.208vw',
                                    borderBottom: '0.026vw solid rgba(255, 255, 255, 0.00)',
                                    boxShadow: '0vw 0.208vw 0.208vw 0vw rgba(255, 255, 255, 0.25) inset',
                                }}
                            ></div>

                            <button onClick={handleToggle}>
                                {isOn ? '' : ''}
                            </button>

                            {isOn ? (
                                //    when the toggle is ON ye display hoga
                                <svg xmlns="http://www.w3.org/2000/svg" width="101" height="47" viewBox="0 0 101 47" fill="none">
                                    <g clip-path="url(#clip0_7476_9008)">
                                        <g filter="url(#filter0_f_7476_9008)">
                                            <path d="M73.5098 -4.82051C73.5098 -1.65532 72.8864 1.47888 71.6751 4.40314C70.4638 7.3274 68.6885 9.98444 66.4503 12.2226C64.2122 14.4607 61.5552 16.2361 58.6309 17.4474C55.7066 18.6586 52.5724 19.2821 49.4072 19.2821C46.2421 19.2821 43.1079 18.6586 40.1836 17.4474C37.2593 16.2361 34.6023 14.4607 32.3642 12.2226C30.126 9.98444 28.3507 7.3274 27.1394 4.40314C25.9281 1.47888 25.3047 -1.65532 25.3047 -4.82051L49.4073 -4.82051H73.5098Z" fill="white" />
                                        </g>
                                        <g filter="url(#filter1_f_7476_9008)">
                                            <path d="M73.5098 -4.82051C73.5098 -1.65532 72.8864 1.47888 71.6751 4.40314C70.4638 7.3274 68.6885 9.98444 66.4503 12.2226C64.2122 14.4607 61.5552 16.2361 58.6309 17.4474C55.7066 18.6586 52.5724 19.2821 49.4072 19.2821C46.2421 19.2821 43.1079 18.6586 40.1836 17.4474C37.2593 16.2361 34.6023 14.4607 32.3642 12.2226C30.126 9.98444 28.3507 7.3274 27.1394 4.40314C25.9281 1.47888 25.3047 -1.65532 25.3047 -4.82051L49.4073 -4.82051H73.5098Z" fill="white" />
                                        </g>
                                    </g>
                                    <defs>
                                        <filter id="filter0_f_7476_9008" x="24.7021" y="-5.42308" width="49.4083" height="25.3077" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.301282" result="effect1_foregroundBlur_7476_9008" />
                                        </filter>
                                        <filter id="filter1_f_7476_9008" x="-2.05172" y="-32.1769" width="102.916" height="78.8154" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="13.6782" result="effect1_foregroundBlur_7476_9008" />
                                        </filter>
                                        <clipPath id="clip0_7476_9008">
                                            <rect width="100.026" height="47" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            ) : (

                                //    when the toggle is OFF ye display hoga
                                <svg xmlns="http://www.w3.org/2000/svg" width="101" height="47" viewBox="0 0 101 47" fill="none">
                                    <g clip-path="url(#clip0_7485_7160)">
                                        <g filter="url(#filter0_f_7485_7160)">
                                            <path d="M73.5098 -4.82051C73.5098 -1.65532 72.8864 1.47888 71.6751 4.40314C70.4638 7.3274 68.6885 9.98444 66.4503 12.2226C64.2122 14.4607 61.5552 16.2361 58.6309 17.4474C55.7066 18.6586 52.5724 19.2821 49.4072 19.2821C46.2421 19.2821 43.1079 18.6586 40.1836 17.4474C37.2593 16.2361 34.6023 14.4607 32.3642 12.2226C30.126 9.98444 28.3507 7.3274 27.1394 4.40314C25.9281 1.47888 25.3047 -1.65532 25.3047 -4.82051L49.4073 -4.82051H73.5098Z" fill="white" />
                                        </g>
                                    </g>
                                    <defs>
                                        <filter id="filter0_f_7485_7160" x="24.7021" y="-5.42308" width="49.4083" height="25.3077" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="0.301282" result="effect1_foregroundBlur_7485_7160" />
                                        </filter>
                                        <clipPath id="clip0_7485_7160">
                                            <rect width="100.026" height="47" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            )}
                        </div>
                    ))}
            </div>


            <div className={`relative overflow-hidden  flex sm:flex-row flex-col gap-[2.353vw] sm:gap-[1.25vw] ${isOn ? '' : 'sm:opacity-10 opacity-100'}`}>
                {contentData.map((content, index) => (
                    <div
                        key={index}
                        className='glowup flex flex-col px-[1.35vw] gap-[2.353vw] sm:gap-[0.833vw]  py-[7.529vw] sm:py-0 sm:pt-[1.667vw] text-center items-center'
                        style={{
                            background: 'linear-gradient(180deg, #2A2A2A 0%, rgba(0, 17, 26, 0.00) 100%)',
                        }}
                    >
                        <div className="absolute rounded-[261px] bg-[rgba(255,255,255,0.60)] filter blur-[50px] w-[61.412vw] h-[15vw] sm:w-[13.594vw] sm:h-[13.594vw] sm:-top-24 ">
                        </div>
                        <h3 className='text-white text-[7.529vw] sm:text-[1.667vw] font-medium sm:w-[18.75vw]'>{content.title}</h3>
                        <p className='text-white text-[3.765vw] sm:text-[1.25vw] sm:font-light sm:w-[17.344vw] sm:mb-[7.24vw] sm:mx-0 mx-[3.765vw] '>{content.description}</p>
                    </div>
                ))}
            </div>




        </div>
    );
}

export default BulbAnimation;
