import React, { useEffect, useState } from "react";

const Card = ({ data, index, hoveredIndex, setHoveredIndex }) => {
    const [barLength, setBarLength] = useState(35);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const updateDimensions = () => {
            setIsSmallScreen(window.innerWidth <= 640);
            setBarLength(window.innerWidth <= 640 ? 70 : 35);
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const isHovered = hoveredIndex === index;
    const isFilled = index <= hoveredIndex;

    return (
        <div
            className={`relative sm:w-[25.996vw] h-[60vw] sm:h-[23.958vw] border-b-[0.208vw] pr-[1.667vw] duration-500 ease-in-out ${isHovered ? "border-b-[#60E2FF]" : "border-b-transparent"
                }`}
            onMouseEnter={() => setHoveredIndex(index)}
        >
            <div className="sm:w-[24.323vw] sm:h-[23.958vw] absolute left-0 top-0">
                <div className="w-[0.156vw] h-[60vw] sm:h-[23.958vw] absolute left-0 top-0 bg-white"></div>
            </div>

            <div className="w-[50vw] sm:w-[23.229vw] sm:h-[16.979vw] absolute left-[1.25vw] sm:top-0">
                <div
                    className={`left-[0.417vw] sm:mt-0 mt-[0.208vw] w-[10vw] h-[5vw] sm:w-[4.479vw] sm:h-[1.771vw] rounded-[1.759vw] shadow-inner flex items-center justify-center absolute sm:left-0 sm:top-0 transition-all duration-500 ease-in-out ${isHovered ? "bg-[#00aff1]" : "bg-[#2f2f31]"
                        }`}
                >
                    <div className="text-white text-[1.882vw] sm:text-[0.833vw] font-semibold">{data.step}</div>
                </div>

                <h5
                    className={`sm:pl-0 pl-2 absolute left-0 top-[7.083vw] sm:top-[3.073vw] transition-colors duration-500 ease-in-out ${isHovered ? "text-[#00aff1]" : "opacity-70 text-white"
                        } text-[2.824vw] sm:text-[1.25vw] font-semibold sm:leading-[1.759vw]`}
                >
                    {data.title}
                </h5>

                <p
                    className={`sm:pl-0 pl-2 absolute left-0 top-[12vw] sm:top-[5.729vw] transition-colors duration-500 ease-in-out ${isHovered ? "text-white" : "opacity-70 text-white"
                        } text-[2.824vw] sm:text-[1.042vw] font-normal mb-4`}
                >
                    {data.description}
                </p>

                {/* Unlisted points */}
                <ul className="hidden sm:flex flex-col mt-[17vw] space-y-[0.5vw] list-none pl-0">
                    <li className={`text-[1.042vw] font-normal ${isHovered ? "text-white" : "opacity-70 text-[#b9babf]"}`}>
                        • {data.point1}
                    </li>
                    <li className={`text-[1.042vw] font-normal ${isHovered ? "text-white" : "opacity-70 text-[#b9babf]"}`}>
                        • {data.point2}
                    </li>
                </ul>

                {/* Mobile view unlisted points */}
                <ul className="sm:hidden list-disc list-inside pl-[0.417vw] mb-0 mt-[47vw]">
                    <li className={`w-[50.588vw] text-white text-[2.353vw] font-normal ${isHovered ? "text-white" : "opacity-70 text-[#b9babf]"}`}>
                        {data.point1}
                    </li>
                    <li className={`w-[50.588vw] text-white text-[2.353vw] font-normal ${isHovered ? "text-white" : "opacity-70 text-[#b9babf]"}`}>
                        {data.point2}
                    </li>
                </ul>
            </div>

            {/* Horizontal line with reduced height */}
            {Array.from({ length: barLength }).map((_, i) => (
                <div
                    key={i}
                    className={`w-[0.25vw] h-[5vw] sm:w-[0.156vw] sm:h-[2.101vw] absolute transition-all duration-300 ease-linear`}
                    style={{
                        left: `${0.729 + i * 0.729}vw`,
                        bottom: "0",
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