"use client";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Card = ({ title, content, isMobile }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const displayContent = isMobile && !expanded ? content.slice(0, 2) : content;

    return (
        <div
            className={`bg-[#131d22] text-white p-6 rounded-[0.833vw] transition-colors duration-500 overflow-hidden relative ${isMobile ? "h-auto mb-6" : "h-full"
                } group`}
        >
            {/* Updated hover effect */}
            <div className="absolute inset-0 bg-white rounded-[0.833vw] transform origin-bottom-left scale-0 group-hover:scale-100 transition-transform duration-700 ease-in-out" />
            <div className="relative z-10">
                <h2
                    className={`${isMobile ? "text-[5vw]" : "text-[2.5vw]"
                        } font-medium leading-loose group-hover:text-black transition-colors duration-500`}
                >
                    {title}
                </h2>
                <div className="flex flex-col gap-[0.625vw]">
                    {displayContent.map((paragraph, index) => (
                        <p
                            key={index}
                            className={`${isMobile ? "w-full text-[3.5vw]" : "w-[39.167vw] text-[1.25vw]"
                                } text-white/70 font-normal group-hover:text-black/70 transition-colors duration-500`}
                        >
                            {isMobile ? paragraph.split(".")[0] + "." : paragraph}
                        </p>
                    ))}
                </div>
                {isMobile && (
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={toggleExpand}
                            className="text-blue-400 text-[3vw] group-hover:text-blue-600 transition-colors duration-500"
                        >
                            {expanded ? "See Less" : "See More"}
                        </button>
                        <button className="bg-gray-700 text-white text-[3vw] py-2 px-4 rounded group-hover:bg-gray-900 transition-colors duration-500">
                            Contact Us
                        </button>
                    </div>
                )}
                {!isMobile && (
                    <div className="mt-auto self-end ml-[37.656vw] w-[3.802vw] h-[4.01vw] relative bg-white/10 rounded-[0.729vw] shadow flex justify-center items-center group-hover:bg-black/10 transition-colors duration-500">
                        <FaChevronRight className="w-[1.25vw] h-[1.25vw] group-hover:text-black transition-colors duration-500" />
                    </div>
                )}
            </div>
        </div>
    );
};

const OurEngagement = () => {
    const cards = [
        {
            title: "Pay us by the Hour",
            content: [
                "When you buy bucket hours, you pay for a fixed amount of hours up front.",
                "Your purchased bucket hours are good for six months; during this time, you can use our services until your hours are depleted or the six-month term ends.",
                "For example, if you buy in 40 bucket hours and use 10 of them in the first month, you will have 30 hours left over to spend over the next five months.",
                "As you have chosen bucket hours over dedicated hire, the developer will work on multiple projects at the same time.",
                "It's a simple and effective approach to managing your development needs around your schedule.",
            ],
        },
        {
            title: "Hire Developers",
            content: [
                "Unlike bucket hours, dedicated hire does not have a defined number of hours; instead, you reserve the developer solely for your project.",
                "The developer will only work on your project for a specific period of time.",
                "You can engage the developer for a week or a month, depending on your project requirements.",
                "This implies that our developer will focus solely on addressing the needs of your project, with no interruptions from other commitments.",
                "Whether you need help for a short time or a longer term, our dedicated hiring option ensures that your project gets the attention it needs.",
            ],
        },
    ];

    return (
        <div className="bg-[#00111A]">
            {/* Desktop View */}
            <div className="hidden lg:block md:block px-[5.208vw] py-[5.508vw]">
                <div className="flex justify-center items-center mb-[4.896vw]">
                    <h5 className="text-white text-[2.5vw] font-bold leading-[2.083vw]">
                        Our Engagement Models
                    </h5>
                </div>
                <div className="flex space-x-[2.083vw]">
                    {cards.map((card, index) => (
                        <div key={index} className="w-[44.167vw]">
                            <Card title={card.title} content={card.content} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile View */}
            <div className="sm:hidden px-6 py-8">
                <div className="flex justify-center items-center mb-6">
                    <h5 className="text-white text-[6vw] font-bold leading-tight text-center">
                        Our Engagement Models
                    </h5>
                </div>
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} content={card.content} isMobile={true} />
                ))}
            </div>
        </div>
    );
};

export default OurEngagement;