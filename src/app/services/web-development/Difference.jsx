"use client";
import React, { useState } from "react";

const Difference = () => {
    const [activeTab, setActiveTab] = useState("ios");

    return (
        <div className="px-[5.2vw] pt-[8vw]">
            <h2 className="w-[45vw] text-neutral-800 text-[2.5vw] font-semibold tracking-[0.025rem] capitalize mb-[5.2vw]">
                Difference Between Web Development & Web Design
            </h2>
            <div className="flex justify-center">
                <button
                    className={`w-[44.792vw] h-[4.167vw] rounded-tl-[0.26vw] rounded-bl-[0.26vw] shadow border border-neutral-300 text-zinc-600 text-[1.25vw] font-normal leading-[1.941vw] ${activeTab === "android" ? "bg-gray-200" : "bg-white"
                        }`}
                    onClick={() => setActiveTab("android")}
                >
                    Web Development Service
                </button>
                <button
                    className={`w-[44.792vw] h-[4.167vw] rounded-tl-[0.26vw] rounded-bl-[0.26vw] shadow border border-neutral-300 text-zinc-600 text-[1.25vw] font-normal leading-[1.941vw] ${activeTab === "ios" ? "bg-gray-200" : "bg-white"
                        }`}
                    onClick={() => setActiveTab("ios")}
                >
                    Web Design Service
                </button>
            </div>
            <div className="border border-gray-300 w-[89.583vw] h-[19.792vw] pl-[8.813vw]  pt-[3vw] rounded-b-lg bg-[#f6fcfe]">
                {activeTab === "ios" ? (
                    <ul className="list-disc">
                        <li className="w-[67.198vw] text-black text-[1.25vw] font-normal py-[.5vw] tracking-tight">
                        It is the creation of everything that can be seen on a website or a software, such as visual elements, images, colors, typography, layout etc.
                        </li>
                        <li className="w-[67.198vw] text-black text-[1.25vw] font-normal py-[.5vw] tracking-tight">
                        It deals directly with the client to create a web design or in collaboration with web development to formulate the client’s vision.
                        </li>
                        <li className="w-[67.198vw] text-black text-[1.25vw] font-normal py-[.5vw] tracking-tight">
                        Basic knowledge of common coding languages is required for web design, such as HTML, PHP, CSS and JavaScript.
                        </li>                 
                    </ul>
                ) : (
                    <ul className="list-disc">
                        <li className="w-[67.198vw] text-black text-[1.25vw] font-normal py-[.5vw] tracking-tight">
                        It refers to programming the code that makes a website functional, whether it is on the front end (client side) or the back end (server side).
                        </li>
                        <li className="w-[67.198vw] text-black text-[1.25vw] font-normal py-[.5vw] tracking-tight">
                        It works to create and implement the web design given by the client or by a design team.
                        </li>
                        <li className="w-[67.198vw] text-black text-[1.25vw] font-normal py-[.5vw] tracking-tight">
                        It utilizes various programming languages such as HTML, CSS, PHP, Java, Ruby, C++, Python as well as frameworks and libraries.
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Difference;
