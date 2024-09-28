"use client";
import React, { useState, useEffect } from "react";

const IndustriesWe = () => {
    const industries = [
        ["Healthcare", "Finance", "Logistics", "eCommerce", "Real Estate"],
        ["Social Networking", "Entertainment", "Education", "Travel", "Finance"],
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [visibleCards, setVisibleCards] = useState([]); // Store visible cards for mobile

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % industries.length);
                setIsAnimating(false);
            }, 500); // Animation duration should match CSS transition
        }
    };

    // Delay effect for mobile view
    useEffect(() => {
        let timeouts = [];
        industries.flat().forEach((_, index) => {
            timeouts.push(
                setTimeout(() => {
                    setVisibleCards((prev) => [...prev, index]);
                }, index * 200) // Delay of 200ms per card
            );
        });

        return () => {
            timeouts.forEach((timeout) => clearTimeout(timeout)); // Cleanup
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // 5000ms = 5 seconds

        return () => clearInterval(interval); // Cleanup the interval when the component unmounts
    }, []);

    return (
        <div className="w-full bg-[#00111A]">
            <div className="px-[5.208vw] ">
                <div className="hidden sm:block w-[89.479vw] py-[3.5vw] bg-[#131d22] rounded-[0.497vw] flex-col justify-center items-center gap-[2vw] pt-[3.958vw]">
                    <h5 className="text-center text-[#6c748f] text-[1.25vw] font-semibold">
                        Industries We Cater To
                    </h5>

                    <div className="relative w-full overflow-hidden h-[5vw]">
                        {/* Slides container */}
                        <div
                            className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? "transform" : ""
                                }`}
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`,
                            }}
                        >
                            {industries.map((slide, index) => (
                                <div key={index} className="min-w-full flex justify-center gap-[5vw] mt-[1.2vw]">
                                    {slide.map((industry, i) => (
                                        <div key={i} className="text-center text-white text-[1.667vw] font-semibold">
                                            {industry}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination buttons */}
                    <div className="flex justify-center mt-[0.5vw]">
                        {industries.map((_, index) => (
                            <button
                                key={index}
                                className={`w-[0.667vw] h-[0.667vw] rounded-full mx-[0.3vw] transition-all duration-500 ${index === currentSlide ? "bg-white scale-125" : "bg-gray-500"
                                    }`}
                                onClick={() => {
                                    if (!isAnimating) {
                                        setIsAnimating(true);
                                        setTimeout(() => {
                                            setCurrentSlide(index);
                                            setIsAnimating(false);
                                        }, 500);
                                    }
                                }}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile view */}
            <div className="sm:hidden bg-[#00111A] px-[7.059vw]">
                <div className=" pb-[11.765vw] flex-col justify-center items-center">
                    <h1 className="text-center text-white text-[7.529vw] font-medium leading-[8.471vw]">
                        Industries We Cater To
                    </h1>

                    {/* Cards with delayed appearance */}
                    <div className="grid grid-cols-2 gap-[3.529vw] pt-[10.353vw] justify-center items-center">
                        {industries.flat().map((industry, index) => (
                            <div
                                key={index}
                                className={`h-[18.353vw] px-[1vw] py-[2vw] bg-[#131d22] flex justify-center items-center transition-opacity duration-500 ease-in-out ${visibleCards.includes(index) ? 'opacity-100' : 'opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 0.1}s` }} // Optional extra delay
                            >
                                <p className="text-center text-white text-[4vw] font-semibold leading-relaxed">
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
