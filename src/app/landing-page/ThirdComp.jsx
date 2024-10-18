import React from 'react';
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const learningPoints = [
    "Unearthing and Managing Leads",
    "Finding the Best Virtual Assistants",
    "Tasks and Services You Can Outsource",
    "Managing Real Estate Virtual Assistants",
    "Leveraging Technology to Convert Leads",
    "Be at the Forefront of the Real Estate Domain"
];

const ThirdComp = () => {
    return (
        <div>
            <div className=' sm:block hidden'>
                <div className="flex bg-[#e1e5e5] h-full mt-[10.25vw] ">
                    <div className="w-[100vw] py-[5.573vw] pl-[7.396vw]">
                        <ul className="space-y-[1.667vw]">
                            {learningPoints.map((point, index) => (
                                <li key={index} className="flex items-center">
                                    <IoCheckmarkDoneCircle className="w-[2.5vw] h-[2.5vw] text-[#068500] mr-4 flex-shrink-0" />
                                    <span className="text-[#372e32] text-[1.875vw] font-normal ml-[1vw]">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-[70.896vw] h-[27.813vw] flex flex-col mr-[4.323vw] justify-between relative">
                        <div className="w-[40.073vw] h-[27.073vw] bg-white absolute -top-[10vw] right-0 rounded-lg" />
                        <div className="w-[40.073vw] h-[27.073vw] bg-black rounded-lg overflow-hidden absolute bottom-[8vw] right-0 z-10">
                            <iframe
                                className="w-full h-full rounded-lg shadow-md"
                                src="https://www.youtube.com/embed/EqyVBzZGPKY"
                                title="Real Estate Learning Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h2 className="text-center text-[#372e32] text-[3.333vw] absolute -bottom-[2vw] right-0 w-[40.073vw] font-bold">
                            What Will You Learn?
                        </h2>
                    </div>
                </div>
            </div>
            <div className='block sm:hidden'>
                <div className="bg-[#e1e5e5] px-[7.059vw] py-[6.588vw] mt-[14.118vw]">
                    <h2 className="text-[#372e32] text-[7.529vw] justify-center items-center font-bold mb-[3.529vw]">What Will You Learn?</h2>

                    <div className="bg-black rounded-lg overflow-hidden mb-4 aspect-video">
                        <div className="relative w-full h-0 pb-[56.25%]">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <iframe
                                    className="w-full h-full rounded-lg shadow-md"
                                    src="https://www.youtube.com/embed/EqyVBzZGPKY"
                                    title="Real Estate Learning Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <ul className="space-y-3  mt-[7.059vw]">
                        {learningPoints.map((point, index) => (
                            <li key={index} className="flex items-center">
                                <IoCheckmarkDoneCircle className="w-[7.529vw] h-[7.529vw] text-green-600 mr-[1.882vw] flex-shrink-0" />
                                <span className="text-[#372e32] text-[3.765vw] font-normal">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ThirdComp;