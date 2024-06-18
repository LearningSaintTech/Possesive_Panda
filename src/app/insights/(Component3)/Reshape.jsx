'use client';

import React, { useState } from 'react';
import Cdata from './Cdata';
import ReshapeItems from './ReshapeItems';

const Reshape = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === Cdata.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? Cdata.length - 1 : prevIndex - 1));
    };

    return (
        <div className=' '>
            <div className='flex mt-[9.259vh] gap-y-[14.815vh] gap-x-[1vw] relative '>
                {Cdata.map((item, index) => (
                    <div key={index} className={index === currentIndex ? '' : 'hidden'}>
                        <ReshapeItems
                            image={item.image}
                            heading={item.heading}
                            para={item.para}
                        />
                    </div>
                ))}
                <div className='absolute lg:top-[76.5%] w-[17.5%] h-[17%] lg:left-[16.1%] lg:right-[20%] top-[45%] md:top-[60%] md:left-[40%]  max-[425px]:w-[60%] max-[425px]:h-[35%] max-[320]:h-[20%] max-[425px]:left-[20.1%] max-[425px]:right-[20%] bg-neutral-50 rounded-[110px] items-center justify-center shadow border border-black/opacity-50 flex'>
                    <button onClick={prevSlide} className="  text-gray-800 font-bold  max-[425px]:py-[10%] max-[425px]:px-[4%] rounded-l md:px-[2%] md:py-[4%]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none " className=" "
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                        >
                            <g opacity="">
                                <path d="M20.6145 4.6551C20.7263 4.55287 20.8571 4.47366 20.9995 4.42198C21.1419 4.37031 21.2931 4.34718 21.4444 4.35393C21.5957 4.36067 21.7442 4.39716 21.8814 4.4613C22.0187 4.52544 22.1419 4.61598 22.2441 4.72776C22.4506 4.95349 22.5589 5.25199 22.5453 5.5576C22.5385 5.70892 22.5021 5.85743 22.4379 5.99465C22.3738 6.13187 22.2832 6.25512 22.1715 6.35735L7.94454 19.3456H39.8467C40.1526 19.3456 40.4459 19.4672 40.6622 19.6834C40.8785 19.8997 41 20.1931 41 20.4989C41 20.8048 40.8785 21.0981 40.6622 21.3144C40.4459 21.5307 40.1526 21.6522 39.8467 21.6522L7.95146 21.6522L22.1715 34.6336C22.2834 34.7357 22.3741 34.8588 22.4385 34.9959C22.5028 35.1331 22.5395 35.2815 22.5464 35.4329C22.5534 35.5842 22.5305 35.7354 22.479 35.8779C22.4275 36.0203 22.3485 36.1513 22.2464 36.2632C22.1444 36.3751 22.0212 36.4658 21.8841 36.5302C21.747 36.5945 21.5985 36.6312 21.4472 36.6382C21.2958 36.6451 21.1446 36.6222 21.0022 36.5707C20.8597 36.5193 20.7288 36.4402 20.6168 36.3381L4.6646 21.7745C4.46465 21.5918 4.3104 21.3647 4.21425 21.1115C4.1181 20.8583 4.08274 20.5861 4.11102 20.3167C4.15487 19.8953 4.35185 19.5046 4.6646 19.2188L20.6145 4.6551Z" fill="black" />
                            </g>
                        </svg>
                    </button>
                    <div className="flex  justify-center lg:mt-6">
                        {Cdata.map((_, index) => (
                            <div
                                key={index}
                                className={`w-[1vw] lg:mt-0 lg:h-[2vh] md:w-[1vw] md:h-[1vh] mx-2 mb-[26.5px] max-[425px]:w-[3vw] max-[425px]:h-[1.5vh] max-[425px]:mx-2 max-[425px]:my-2 md:py-[2%] md:mt-[30%] rounded-full cursor-pointer ${index === currentIndex ? 'bg-sky-500' : 'bg-zinc-300'
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="text-gray-800 font-bold  max-[425px]:py-[10%] max-[425px]:px-[4%] md:px-[2%] md:py-[4%] rounded-r"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="33" viewBox="0 0 37 33" fill="none"
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                        >
                            <g opacity="">
                                <path d="M20.3855 0.302316C20.2737 0.200086 20.1429 0.120872 20.0005 0.0691974C19.8581 0.0175224 19.7069 -0.00560202 19.5556 0.0011448C19.4043 0.00789163 19.2558 0.0443775 19.1186 0.108519C18.9813 0.172661 18.8581 0.263202 18.7559 0.374973C18.5494 0.600705 18.4411 0.899209 18.4547 1.20482C18.4615 1.35614 18.4979 1.50465 18.5621 1.64187C18.6262 1.77909 18.7168 1.90234 18.8285 2.00457L33.0555 14.9929L1.15328 14.9929C0.847412 14.9929 0.55407 15.1144 0.337788 15.3307C0.121506 15.5469 0 15.8403 0 16.1461C0 16.452 0.121506 16.7454 0.337788 16.9616C0.55407 17.1779 0.847412 17.2994 1.15328 17.2994L33.0485 17.2994L18.8285 30.2808C18.7166 30.3829 18.6259 30.506 18.5615 30.6431C18.4972 30.7803 18.4605 30.9288 18.4536 31.0801C18.4466 31.2314 18.4695 31.3826 18.521 31.5251C18.5725 31.6675 18.6515 31.7985 18.7536 31.9104C18.8556 32.0223 18.9788 32.113 19.1159 32.1774C19.253 32.2417 19.4015 32.2784 19.5528 32.2854C19.7042 32.2923 19.8554 32.2694 19.9978 32.218C20.1403 32.1665 20.2712 32.0874 20.3832 31.9854L36.3354 17.4217C36.5353 17.239 36.6896 17.0119 36.7858 16.7587C36.8819 16.5055 36.9173 16.2333 36.889 15.9639C36.8451 15.5425 36.6482 15.1518 36.3354 14.866L20.3855 0.302316Z" fill="black" />
                            </g>
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Reshape;
