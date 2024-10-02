import React from 'react'
import Image from "next/image";
import sidecomponent from "../../../public/assets/aboutus/Side component.png"
import Graphix from "../../../public/assets/aboutus/Graphix.png"


const Intro = () => {
    return (
        <div className='relative bg-[#00111A]  flex sm:gap-[9.375vw] sm:px-0 px-[7.059vw] '>
            <Image
                src={sidecomponent}
                alt="sidecomponent"
                className="hidden sm:block w-[26.719vw] h-[44.688vw] bg-[#00111A] z- "
            />
            <h2 className='sm:flex ml-[14vw] hidden absolute inset-0  justify-center text-white opacity-5 text-[8.5vw] font-bold tracking-widest whitespace-nowrap z-0 '>Possesive Panda</h2>
            <div className='flex flex-col gap-[11.294vw] sm:gap-[1.8vw] ' >
                <div className='flex flex-col gap-[1.583vw] '>
                    <h2 className='text-[5.647vw] sm:text-[2.5vw] text-[#05B7DF] sm:text-white font-medium sm:font-normal text-center sm:text-left '>Who Are We ?</h2>

                    <p className='text-[3.765vw] sm:text-[1.25vw] text-white font-medium sm:font-normal sm:w-[43.021vw] text-center  sm:text-left '>Possesive Panda is a global leader in IT services and solutions, renowned for delivering top-notch services across the globe. We are a team of global talents serving IT solutions across various verticals.</p>

                    <p className='text-[3.765vw] sm:text-[1.25vw] text-white font-medium sm:font-normal sm:w-[34.271vw] text-center sm:text-left '>We solely aim at thriving businesses to reach their target of becoming the No.1 in their respective domain. Partner with us to transform your vision into reality.</p>

                </div>
                <div className='flex flex-col gap-[1.583vw]'>
                    <h2 className='text-[5.647vw] sm:text-[2.5vw] text-[#05B7DF] sm:text-white font-medium sm:font-normal text-center sm:text-left '>What We Do ?</h2>

                    <p className='text-[3.765vw] sm:text-[1.25vw] text-white font-medium sm:font-normal sm:w-[51.823vw] text-center sm:text-left'>Possesive Panda as a global leader, offers IT services across varied domains like Web Development, Mobile App Development, Software Development, Digital Marketing, Search Engine Optimization, Social Media Management, Search Engine Marketing, Performance Marketing, eCommerce, Cloud Services, UI & UX Design, Cybersecurity, PPC, ORM, and Virtual Assistant Services.</p>

                    <p className='text-[3.765vw] sm:text-[1.25vw] text-white font-medium sm:font-normal sm:w-[50.781vw] text-center sm:text-left'>With this wide range of services, we are uplifting budding startups and enterprises of assorted domains.</p>

                </div>
            </div>
            <Image
                src={Graphix}
                alt="logo"
                className="hidden sm:block absolute w-[22.513vw] right-0"
            />
        </div>
    )
}

export default Intro