"use client"
import React, { useState } from 'react';

const OurWeb = () => {
    const [isRevealed, setIsRevealed] = useState(false);

    const handleMouseEnter = () => {
        setIsRevealed(true);
    };

    return (
        <div className='px-[5.208vw] bg-[#00111a]'>
            <div className='flex flex-col items-center justify-center gap-[1.25vw]'>
                <h2 className='sm:font-medium font-medium sm:text-[2.5vw] text-[7.529vw] sm:w-[44.271vw] w-[85.882vw] text-center text-white'>
                    Our Web Application Services and Solutions Methodologies
                </h2>
                <p className='sm:font-light font-light sm:text-[1.25vw] text-center sm:w-[52.292vw] text-white'>
                    Possesive Panda offers custom web app development with refined methodologies, allowing for unprecedented tech possibilities and elevating visions.
                </p>
            </div>
            {!isMobile ? (

            {/* FOR WEB */}
            <div
                className='relative h-[30vw] hidden lg:block md:block'
                onMouseEnter={handleMouseEnter}
            >
                <div className={`relative w-[85vw] mt-[2.5vw] ${isRevealed ? 'group' : ''}`}>
                    {/* Cards */}
                    <div className='absolute shadow-2xl w-[21.458vw] h-[26.313vw] bg-[#131d22] py-[3.498vw] px-[3.047vw] flex flex-col gap-[1vw] rounded-[0.625vw] transition-transform duration-500 transform z-[4] group-hover:translate-x-0 group-hover:translate-y-0'>
                        <h3 className='text-[1.875vw] font-normal text-white text-center'>
                            Agile Approach
                        </h3>
                        <p className='w-[15.365vw] text-center text-white text-[1.25vw] font-normal'>
                            Our team of developers employs a collaborative approach for agile development processes, seeking client feedback at every stage of the development cycle.
                        </p>
                    </div>

                    <div className='absolute shadow-2xl w-[21.458vw] h-[26.313vw] bg-[#131d22] py-[3.498vw] px-[3.047vw] flex flex-col gap-[1vw] rounded-[0.625vw] transition-transform duration-500 transform translate-x-[1vw] translate-y-[1vw] group-hover:translate-x-[22.708vw] group-hover:translate-y-0 z-[3]'>
                        <h3 className='text-[1.875vw] font-normal text-white text-center'>
                            Scrum
                        </h3>
                        <p className='w-[15.365vw] text-center text-white text-[1.25vw] font-normal'>
                            Scrum is a collaborative framework that allows for efficient planning, review, and adaptation of changes through sprints, ensuring continuous value generation in development.
                        </p>
                    </div>

                    <div className='absolute shadow-2xl w-[21.458vw] h-[26.313vw] bg-[#131d22] py-[3.498vw] px-[3.047vw] flex flex-col gap-[1vw] rounded-[0.625vw] transition-transform duration-500 transform translate-x-[2vw] translate-y-[2vw] group-hover:translate-x-[45.417vw] group-hover:translate-y-0 z-[2]'>
                        <h3 className='text-[1.875vw] font-normal text-white text-center'>
                    <div className={`absolute shadow-2xl w-[21.458vw] h-[26.313vw] bg-[#131d22] py-[3.498vw] px-[3.047vw] flex flex-col gap-[1vw] rounded-[0.625vw] transition-all duration-500 ${isRevealed ? 'translate-x-[45.417vw] translate-y-0' : 'translate-x-[2vw] translate-y-[2vw]'}`} style={{ zIndex: 2 }}>
                        <h5 className='text-[1.875vw] font-normal text-white text-center'>
                            DevOps
                        </h3>
                        <p className='w-[15.365vw] text-center text-white text-[1.25vw] font-normal'>
                            DevOps is a new age practice involving development and operation at the same time by collaborations ensuring swift change response, enhanced quality and minimize costs.
                        </p>
                    </div>

                    <div className={`absolute shadow-2xl w-[21.458vw] h-[26.313vw] bg-[#131d22] py-[3.498vw] px-[3.047vw] flex flex-col gap-[1vw] rounded-[0.625vw] transition-all duration-500 ${isRevealed ? 'translate-x-[68.125vw] translate-y-0' : 'translate-x-[3vw] translate-y-[3vw]'}`} style={{ zIndex: 1 }}>
                        <h3 className='text-[1.875vw] font-normal text-white text-center'>
                            Lean
                        </h3>
                        <p className='w-[15.365vw] text-center text-white text-[1.25vw] font-normal'>
                            We use the Lean model for enhanced development processes by integrating seamless workflows and combining agile and lean development cycles, ensuring positive outcomes.
                        </p>
                    </div>
                </div>
            </div>

            ):(
            <div className='md:hidden'>

                <div className='flex flex-col gap-[3.765vw] w-full mt-[10.588vw]'>
                    {/* Cards */}
                    <div className='w-[85.882vw] h-[52.706vw] bg-[#131d22] py-[3.498vw] px-[3.047vw] flex flex-col gap-[6.353vw] rounded-[0.625vw]'>
                        <h3 className='text-[7.529vw] font-normal text-white text-center'>
                            Agile Approach
                        </h3>
                        <p className='w-[74.588vw] text-center text-white text-[3.765vw] font-light opacity-70'>
                            Our team utilizes collaborative and customer feedback-driven agile development processes to adapt to evolving project requirements through iterative cycles.
                        </p>
                    </div>

                    <div className='w-[85.882vw] h-[52.706vw] bg-[#131d22] py-[3.498vw] px-[3.047vw] flex flex-col gap-[6.353vw] rounded-[0.625vw]'>
                        <h3 className='text-[7.529vw] font-normal text-white text-center'>
                            Scrum
                        </h3>
                        <p className='w-[74.588vw] text-center text-white text-[3.765vw] font-light opacity-70'>
                            Scrum is a collaborative framework that allows for efficient planning, review, and adaptation of changes through sprints, ensuring continuous value generation in development.
                        </p>
                    </div>

                    <div className='w-[85.882vw] h-[52.706vw] bg-[#131d22] py-[3.498vw] px-[3.047vw] flex flex-col gap-[6.353vw] rounded-[0.625vw]'>
                        <h3 className='text-[7.529vw] font-normal text-white text-center'>
                            DevOps
                        </h3>
                        <p className='w-[74.588vw] text-center text-white text-[3.765vw] font-light opacity-70'>
                            The integration of development and operations teams can improve collaboration, automate processes, ensure swift change responses, enhance quality, and reduce costs.
                        </p>
                    </div>

                    <div className='w-[85.882vw] h-[52.706vw] bg-[#131d22] py-[3.498vw] px-[3.047vw] flex flex-col gap-[6.353vw] rounded-[0.625vw]'>
                        <h3 className='text-[7.529vw] font-normal text-white text-center'>
                            Lean
                        </h3>
                        <p className='w-[74.588vw] text-center text-white text-[3.765vw] font-light opacity-70'>
                            Our Lean Model enhances your development process by streamlining workflows and promoting a lean and agile development cycle, ensuring maximum impact.
                        </p>
                    </div>
                </div>


            </div>
            )}
        </div>
    );
}

export default OurWeb;