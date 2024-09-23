"use client"
import React, { useEffect, useState } from "react";

const Card = ({ data, index, hoveredIndex, setHoveredIndex }) => {
    const [barLength, setBarLength] = useState(35); // Default value for larger screens

    useEffect(() => {
        // This will run on the client-side after the component mounts
        const updateBarLength = () => {
            setBarLength(window.innerWidth <= 640 ? 70 : 35); 
        };

        updateBarLength();
        window.addEventListener("resize", updateBarLength); 


        return () => window.removeEventListener("resize", updateBarLength);
    }, []);

    const isHovered = hoveredIndex === index;
    const isFilled = index <= hoveredIndex; // Progress bar should be filled for previous steps

    return (
        <div
            className={`relative sm:w-[25.996vw] h-[60vw] sm:h-[23.958vw] border-b-[0.208vw] pr-[1.667vw] duration-500 ease-in-out ${isHovered ? "border-b-[#60E2FF]" : "border-b-transparent"
                }`}
            onMouseEnter={() => setHoveredIndex(index)}
        >
            {/* Left side vertical lines */}
            <div className="sm:w-[24.323vw] sm:h-[23.958vw] absolute left-0 top-0">
                <div className="w-[0.156vw] h-[60vw] sm:h-[23.958vw] absolute left-0 top-0 bg-white"></div>
            </div>

            {/* Main Content */}
            <div className="w-[50vw] sm:w-[23.229vw] sm:h-[16.979vw] absolute  left-[1.25vw] sm:top-0">
                {/* Step Number */}
                <div
                    className={`left-2 sm:mt-0 mt-1 w-[10vw] h-[5vw] sm:w-[4.479vw] sm:h-[1.771vw] rounded-[1.759vw] shadow-inner flex items-center justify-center absolute sm:left-0 sm:top-0 transition-all duration-500 ease-in-out ${isHovered ? "bg-[#00aff1]" : "bg-[#2f2f31]"
                        }`}
                >
                    <div className="text-white text-[1.882vw] sm:text-[0.833vw] font-semibold">{data.step}</div>
                </div>

                {/* Title */}
                <h5
                    className={`sm:pl-0 pl-2 absolute left-0 top-10 sm:top-[3.073vw] transition-colors duration-500 ease-in-out ${isHovered ? "text-[#00aff1]" : "opacity-70 text-white"
                        } text-[2.824vw] sm:text-[1.25vw] font-semibold sm:leading-[1.759vw]`}
                >
                    {data.title}
                </h5>

                {/* Description */}
                <p
                    className={`sm:pl-0 pl-2 absolute left-0 top-16 sm:top-[5.729vw] transition-colors duration-500 ease-in-out ${isHovered ? "text-white" : "opacity-70 text-white"
                        } text-[2.824vw] sm:text-[1.25vw] font-normal`}
                >
                    {data.description}
                </p>
            </div>

            {/* Bottom Line (Progress Bar Effect) */}
            {Array.from({ length: barLength }).map((_, i) => (
                <div
                    key={i}
                    className={`w-[0.25vw] h-[10vw] sm:w-[0.156vw] sm:h-[4.201vw] absolute transition-all duration-300 ease-linear`}
                    style={{
                        left: `${0.729 + i * 0.729}vw`,
                        top: window.innerWidth <= 640 ? "50vw" : "19.757vw",
                        backgroundColor: isFilled ? "#00aff1" : "rgba(255, 255, 255, 0.2)",
                        opacity: isFilled ? 1 : 0.7,
                        transitionDelay: isHovered ? `${i * 0.01}s` : "0s",
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Card;
