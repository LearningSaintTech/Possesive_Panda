import React, { useState, useEffect } from 'react';

const IndustriesWe = () => {
    const industries = [
        ['Healthcare', 'Finance', 'Logistics', 'eCommerce', 'Real Estate'],
        ['Manufacturing', 'Education', 'Technology', 'Automotive', 'Retail'],
    ]; // Two groups of industries for sliding

    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to handle manual dot click
    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    // Auto sliding effect
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev === industries.length - 1 ? 0 : prev + 1));
        }, 3000); // 5 seconds interval for the auto-slide

        return () => clearInterval(slideInterval); // Clean up the interval on component unmount
    }, [industries.length]);

    return (
        <div className="w-full bg-[#00111A] ">
            <div className=' px-[5.208vw] py-[5vw]'>
                <div className='hidden sm:block w-[89.479vw] py-[3.5vw] bg-[#131d22] rounded-[0.497vw] flex-col justify-center items-center gap-[2vw]  pt-[3.958vw]'>
                    <h5 className='opacity-80 text-center text-white text-[1.25vw] font-semibold leading-relaxed'>
                        Industries We Cater
                    </h5>

                    {/* Industries Display */}
                    <div className='flex justify-center gap-[5vw] mt-[1.2vw]'>
                        {industries[currentSlide].map((industry, index) => (
                            <p key={index} className='text-white text-[1.667vw] font-semibold leading-relaxed'>
                                {industry}
                            </p>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className='flex justify-center mt-[0.5vw]'>
                        {industries.map((_, index) => (
                            <button
                                key={index}
                                className={`w-[0.667vw] h-[0.667vw] rounded-full mx-[0.3vw] ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
                                onClick={() => handleDotClick(index)}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>


            {/* FOR MOBILE */}

            <div className="sm:hidden bg-[#00111A] py-[60vw] px-[7.059vw] ">
                <div className="pt-[11.529vw] pb-[11.765vw] flex-col justify-center items-center">
                    <h1 className=" text-center text-white text-[7.529vw] font-medium leading-[8.471vw]">
                        Industries We Have Worked With
                    </h1>

                    {/* Cards */}
                    <div className="grid grid-cols-2 gap-[3.529vw] pt-[10.353vw] justify-center items-center">
                        {[
                            'Healthcare', 'Finance', 'Logistics', 'eCommerce', 'Real Estate', 'Manufacturing', 'Education', 'Technology', 'Automotive', 'Retail'
                        ].map((industry, index) => (
                            <div
                                key={index}
                                className="h-[18.353vw] px-[1vw] py-[7vw] bg-[#131d22] grid grid-rows-2 justify-center items-center"
                            >
                                <p className="opacity-70 text-center text-white text-[4vw] font-semibold leading-relaxed">
                                    {industry}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default IndustriesWe;
