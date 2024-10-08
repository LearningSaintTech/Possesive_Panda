"use client"
import React, { useEffect, useRef } from "react";

const Values = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.dataset.index;
                        entry.target.style.animationDelay = `${(3 - index) * 0.3}s`; // Staggering effect
                        entry.target.classList.add("visible");
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            if (cardRefs.current) {
                cardRefs.current.forEach((card) => {
                    if (card) observer.unobserve(card);
                });
            }
        };
    }, []);

    return (
        <div className="bg-[#00111a] text-white sm:px-[5.208vw]  px-[4vw]">
            <div className="container mx-auto">
                <div className="text-center">
                    <h2 className="text-[8vw] md:text-[4vw] lg:text-[2.5vw] font-semibold mb-[1vw] text-[#00aff1]">
                        Our Values
                    </h2>
                    <p className="mb-[3vw] max-w-[90vw] md:max-w-[70vw] lg:max-w-[46.967vw] text-center text-[5vw] md:text-[2vw] lg:text-[1.25vw] font-normal mx-auto">
                        possesive Panda as a top-notch IT service and solution provider, doesn’t just aim for excellence - we count on delivering the best at what we deliver.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[8vw] lg:gap-[8vw] justify-items-center">
                    {['Genuinity', 'Accountability', 'Advancement', 'Collaboration'].map((title, index) => (
                        <div
                            key={title}
                            ref={(el) => (cardRefs.current[index] = el)}
                            data-index={index}
                            className="card bg-[#131d22] p-[8vw] md:p-[2vw] lg:p-[2vw] relative w-[85vw] md:w-full lg:w-[21vw]"
                            style={{
                                opacity: 0,
                                transform: 'translateY(70px)',
                                transition: 'opacity 1.2s ease-out, transform 1.2s ease-out',
                            }}
                        >
                            <h3 className="text-center text-white text-[5.5vw] md:text-[2.5vw] lg:text-[1.5vw] md:font-medium lg:font-semibold">{title}</h3>
                            <p className="text-center text-white text-[4.5vw] md:text-[2vw] lg:text-[1.25vw] font-normal mt-[2vw]">
                                {title === 'Genuinity' ? (
                                    "We maintain the greatest levels of integrity and transparency, so our clients can rely on us to behave morally in all of our dealings."
                                ) : title === 'Accountability' ? (
                                    "We assume complete accountability for our job, keeping our word and holding ownership of the results."
                                ) : title === 'Advancement' ? (
                                    "We are driven by innovation and creative problem-solving, always pushing the limits of technology to produce outstanding outcomes."
                                ) : (
                                    "We collaborate closely with our clients and partners to accomplish common objectives and promote mutual success because we believe in the power of cooperation."
                                )}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(70px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .card.visible {
                    animation: fadeInUp 1.2s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default Values;
