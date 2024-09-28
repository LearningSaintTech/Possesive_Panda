"use client";
import { useState } from "react";
const Scrollbar = ({ servicesData1, sectionContent }) => {
    // const [services] = useState([
    //     { title: "Variety of services", description: "Make sure a digital marketing services provider has a comprehensive service suite before deciding to work with them." },
    //     { title: "Authenticity", description: "After you've narrowed down your list of potential agencies, check their credibility and dependability by reading internet reviews and client endorsements." },
    //     { title: "Authenticity", description: "After you've narrowed down your list of potential agencies, check their credibility and dependability by reading internet reviews and client endorsements." },
    //     { title: "Authenticity", description: "After you've narrowed down your list of potential agencies, check their credibility and dependability by reading internet reviews and client endorsements." },
    //     { title: "Authenticity", description: "After you've narrowed down your list of potential agencies, check their credibility and dependability by reading internet reviews and client endorsements." },
    //     { title: "Authenticity", description: "After you've narrowed down your list of potential agencies, check their credibility and dependability by reading internet reviews and client endorsements." },

    //     // Add more services as needed
    // ]);

    return (
        <div className="flex sm:flex-row flex-col bg-[#00111A] text-white gap-[7.813vw] px-[7.059vw] sm:px-[5.208vw]  ">
            {/* Left Section */}
            <div className="bg-[#00111A]">
                <h1 className="sm:w-[37.604vw] w-[85.882vw] sm:text-[2.5vw] text-[7.529vw] sm:text-start text-center  font-medium">
                    {sectionContent.title}                </h1>
                <p className="sm:text-[1.25vw] text-[3.765vw] sm:text-start text-center w-[85.882vw] sm:w-[37.604vw]">
                    {sectionContent.description}                </p>
            </div>

            {/* Right Section (with scrollable content) */}
            <div className="bg-[#131D22] overflow-y-auto sm:max-h-[25vw] max-h-[100vw] scrollbar-custom relative">
                <div className="sm:ml-[2.5vw] sm:mt-[2.5vw] ml-[4.235vw] mt-[11.294vw] flex flex-col gap-[2.5vw]">
                    {servicesData1.map((service, index) => (
                        <div key={index} className="flex items-start sm:gap-[2.083vw] gap-[5.741vw] relative">
                            <div className="flex flex-col items-center relative">
                                <div className="bg-white sm:w-[3.75vw] sm:h-[3.75vw] w-[9.882vw] h-[9.882vw] p-[0.781vw] rounded-[0.521vw] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" fill="none" className="w-full h-full">
                                        <path d="M20.9988 1.47852L37.9038 11.24V30.7595L20.9988 40.521L4.09375 30.7595V11.24L20.9988 1.47852ZM20.9988 5.52102L7.59375 13.2595V28.74L20.9988 36.4785L34.4038 28.74V13.2595L20.9988 5.52102ZM20.9988 15.7498C19.6064 15.7498 18.271 16.3029 17.2864 17.2875C16.3019 18.272 15.7488 19.6074 15.7488 20.9998C15.7488 22.3922 16.3019 23.7275 17.2864 24.7121C18.271 25.6966 19.6064 26.2498 20.9988 26.2498C22.3911 26.2498 23.7265 25.6966 24.7111 24.7121C25.6956 23.7275 26.2488 22.3922 26.2488 20.9998C26.2488 19.6074 25.6956 18.272 24.7111 17.2875C23.7265 16.3029 22.3911 15.7498 20.9988 15.7498ZM12.2488 20.9998C12.2488 18.6791 13.1706 16.4535 14.8116 14.8126C16.4525 13.1716 18.6781 12.2498 20.9988 12.2498C23.3194 12.2498 25.545 13.1716 27.1859 14.8126C28.8269 16.4535 29.7488 18.6791 29.7488 20.9998C29.7488 23.3204 28.8269 25.546 27.1859 27.187C25.545 28.8279 23.3194 29.7498 20.9988 29.7498C18.6781 29.7498 16.4525 28.8279 14.8116 27.187C13.1706 25.546 12.2488 23.3204 12.2488 20.9998Z" fill="#00111A" />
                                    </svg>
                                </div>

                                {/* Dashed Line */}
                                {index < servicesData1.length - 1 && (
                                    <div
                                        className="absolute sm:h-[11vw] sm:bottom-[-11vw] sm:w-[0.625vw] bottom-[-34vw] h-[33.882vw]  border-dashed sm:border-[#00AFF1] border-white"
                                        style={{
                                            // bottom: '-11vw',
                                            width: '1px', // You can also use Tailwind's `w-px`
                                            borderLeftWidth: '0.313vw',
                                            // height: '11vw',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            borderStyle: 'dashed', // Add this if not using Tailwind
                                        }}
                                    ></div>
                                )}

                            </div>

                            <div className="mr-[2.083vw] mb-[2.656vw]">
                                <h3 className="sm:text-[1.25vw] text-[3.765vw] font-semibold">{service.title}</h3>
                                <p className="sm:w-[33.281vw] w-[61.647vw] sm:text-[1.25vw] text-[3.765vw] font-normal opacity-[0.8]">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Scrollbar;
