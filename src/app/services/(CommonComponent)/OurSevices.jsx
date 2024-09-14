"use client";
import React, { useState } from 'react';
import { GrSettingsOption } from "react-icons/gr";
import { PiTimerBold } from "react-icons/pi";
import { IoMdGitMerge } from "react-icons/io";
import { RiSeoLine } from "react-icons/ri";
import { FaRegFile } from "react-icons/fa";
import { BiCubeAlt } from "react-icons/bi";
import { VscCircuitBoard } from "react-icons/vsc";
import { IoEarthOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { FaIoxhost } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa6";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurSevices = () => {
    // State to track whether content is expanded for each section
    const [isExpandedLine1, setIsExpandedLine1] = useState(false);
    const [isExpandedLine2, setIsExpandedLine2] = useState(false);
    const [isExpandedLine3, setIsExpandedLine3] = useState(false);

    // Toggle the expanded state for each line
    const toggleExpandLine1 = () => {
        setIsExpandedLine1(!isExpandedLine1);
    };

    const toggleExpandLine2 = () => {
        setIsExpandedLine2(!isExpandedLine2);
    };

    const toggleExpandLine3 = () => {
        setIsExpandedLine3(!isExpandedLine3);
    };



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px', // Ensures the first card appears fully centered
        arrows: false, // Disable navigation arrows
    };


    return (
        <div className='bg-[#00111A]'>
            <div className='px-[5.208vw] py-[5.508vw] hidden sm:block'>
                <div>
                    <h6 className='text-white text-[2.5vw] font-medium tracking-wide pb-[1.442vw]'>
                        Our E-commerce Services
                    </h6>
                    <p className='w-[55.729vw] text-justify text-white text-[1.25vw] font-light'>
                        At Possesive Panda, we deliver a unique and personalized eCommerce experience for your business. For eCommerce design, eCommerce development platforms, eCommerce SEO, shopping campaigns, analytics, and hosting, we integrate our experience and expertise to make your business at the forefront.
                    </p>
                </div>
                <div className='h-[0.2vw] w-full bg-[#2a2b3a] mt-[4.167vw]'></div>

                {/* 1st Line Updated grid layout */}
                <div className='grid grid-cols-3 md:grid-cols-3 gap-[3vw] pt-[3.542vw]'>
                    {/* First Box */}
                    <div>
                        <div className='flex gap-[0.573vw]'>
                            <GrSettingsOption className='text-[#04b7df] w-[1.406vw] h-[2.135vw] relative' />
                            <h5 className='text-white text-[1.25vw] font-normal leading-[1.719vw] pt-[0.1vw]'>
                                eCommerce Consulting
                            </h5>
                        </div>
                        <div className={`pt-[1.094vw] w-[23.719vw] transition-all duration-300 ease-in-out ${isExpandedLine1 ? '' : 'line-clamp-2'}`}>
                            <p className='text-[#babcd2] text-[1.25vw] font-normal leading-[1.719vw]'>
                                Possesive Panda delivers the best eCommerce solutions to improve your operational efficiency and user experience via consultancy from industry experts.
                            </p>
                        </div>
                    </div>

                    {/* Second Box */}
                    <div>
                        <div className='flex gap-[0.573vw]'>
                            <PiTimerBold className='text-[#04b7df] w-[1.406vw] h-[2.135vw] relative' />
                            <h5 className='text-white text-[1.25vw] font-normal leading-[1.719vw] pt-[0.1vw]'>
                                eCommerce implementation
                            </h5>
                        </div>
                        <div className={`pt-[1.094vw] w-[23.719vw] transition-all duration-300 ease-in-out ${isExpandedLine1 ? '' : 'line-clamp-2'}`}>
                            <p className='text-[#babcd2] text-[1.25vw] font-normal leading-[1.719vw]'>
                                Get cloud platforms, payment gateways, POS systems, and CRMs implemented to your eCommerce web stores and mobile applications.
                            </p>
                        </div>
                    </div>

                    {/* Third Box */}
                    <div>
                        <div className='flex gap-[0.573vw]'>
                            <IoMdGitMerge className='text-[#04b7df] w-[1.406vw] h-[2.135vw] relative' />
                            <h5 className='text-white text-[1.25vw] font-normal leading-[1.719vw] pt-[0.1vw]'>
                                eCommerce Marketing
                            </h5>
                        </div>
                        <div className={`pt-[1.094vw] w-[23.719vw] transition-all duration-300 ease-in-out ${isExpandedLine1 ? '' : 'line-clamp-2'}`}>
                            <p className='text-[#babcd2] text-[1.25vw] font-normal leading-[1.719vw]'>
                                Be at the forefront of your industry with Possesive Panda’s eCommerce marketing team of experienced professionals dedicated to bespoke SEO, PPC, and social media marketing.
                            </p>
                        </div>
                    </div>
                </div>

                {/* See More/See Less button for Line 1 */}
                <div className='text-left mt-[2vw]'>
                    <button
                        onClick={toggleExpandLine1}
                        className='text-white/75 text-[1.146vw] font-normal border border-[#2a2b3a] rounded-full px-[1.5vw] py-[0.5vw] hover:bg-[#04b7df] hover:text-white transition duration-300 ease-in-out'>
                        {isExpandedLine1 ? 'See Less' : 'See More'}
                    </button>
                </div>
                <div className='h-[0.2vw] w-full bg-[#2a2b3a] mt-[4.167vw]'></div>

                {/* 2nd Line Updated grid layout */}
                <div className='grid grid-cols-3 md:grid-cols-3 gap-[3vw] pt-[3.542vw]'>
                    {/* Fourth Box */}
                    <div>
                        <div className='flex gap-[0.573vw]'>
                            <RiSeoLine className='text-[#04b7df] w-[1.406vw] h-[2.135vw] relative' />
                            <h5 className='text-white text-[1.25vw] font-normal leading-[1.719vw] pt-[0.1vw]'>
                                eCommerce SEO
                            </h5>
                        </div>
                        <div className={`pt-[1.094vw] w-[23.719vw] transition-all duration-300 ease-in-out ${isExpandedLine2 ? '' : 'line-clamp-2'}`}>
                            <p className='text-[#babcd2] text-[1.25vw] font-normal leading-[1.719vw]'>
                                Possesive Panda delivers the best SEO professionals to boost up your sales and traffic to your eCommerce website, providing exceptional on-page, off-page, and local SEO strategies.
                            </p>
                        </div>
                    </div>

                    {/* Fifth Box */}
                    <div>
                        <div className='flex gap-[0.573vw]'>
                            <FaRegFile className='text-[#04b7df] w-[1.406vw] h-[2.135vw] relative' />
                            <h5 className='text-white text-[1.25vw] font-normal leading-[1.719vw] pt-[0.1vw]'>
                                eCommerce Web Design
                            </h5>
                        </div>
                        <div className={`pt-[1.094vw] w-[23.719vw] transition-all duration-300 ease-in-out ${isExpandedLine2 ? '' : 'line-clamp-2'}`}>
                            <p className='text-[#babcd2] text-[1.25vw] font-normal leading-[1.719vw]'>
                                At Possesive Panda, we conduct thorough research and invest time to make sure that you will get a tailored and customized eCommerce website design.
                            </p>
                        </div>
                    </div>

                    {/* Sixth Box */}
                    <div>
                        <div className='flex gap-[0.573vw]'>
                            <BiCubeAlt className='text-[#04b7df] w-[1.406vw] h-[2.135vw] relative' />
                            <h5 className='text-white text-[1.25vw] font-normal leading-[1.719vw] pt-[0.1vw]'>
                                eCommerce Web Development
                            </h5>
                        </div>
                        <div className={`pt-[1.094vw] w-[23.719vw] transition-all duration-300 ease-in-out ${isExpandedLine2 ? '' : 'line-clamp-2'}`}>
                            <p className='text-[#babcd2] text-[1.25vw] font-normal leading-[1.719vw]'>
                                With the use of new technologies and experienced developers, Possesive Panda’s eCommerce website development delivers scalable, secure, and well-performing solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* See More/See Less button for Line 2 */}
                <div className='text-left mt-[2vw]'>
                    <button
                        onClick={toggleExpandLine2}
                        className='text-white/75 text-[1.146vw] font-normal border border-[#2a2b3a] rounded-full px-[1.5vw] py-[0.5vw] hover:bg-[#04b7df] hover:text-white transition duration-300 ease-in-out'>
                        {isExpandedLine2 ? 'See Less' : 'See More'}
                    </button>
                </div>
                <div className='h-[0.2vw] w-full bg-[#2a2b3a] mt-[4.167vw]'></div>

                {/* 3rd Line Updated grid layout */}
                <div className='grid grid-cols-3 md:grid-cols-3 gap-[3vw] pt-[3.542vw]'>
                    {/* Seventh Box */}
                    <div>
                        <div className='flex gap-[0.573vw]'>
                            <VscCircuitBoard className='text-[#04b7df] w-[1.406vw] h-[2.135vw] relative' />
                            <h5 className='text-white text-[1.25vw] font-normal leading-[1.719vw] pt-[0.1vw]'>
                                eCommerce Migration
                            </h5>
                        </div>
                        <div className={`pt-[1.094vw] w-[23.719vw] transition-all duration-300 ease-in-out ${isExpandedLine3 ? '' : 'line-clamp-2'}`}>
                            <p className='text-[#babcd2] text-[1.25vw] font-normal leading-[1.719vw]'>
                                With proactive support, smart updates for business evolution, and continuous performance and security, our team makes sure you have a seamless eCommerce platform.
                            </p>
                        </div>
                    </div>

                    {/* Eighth Box */}
                    <div>
                        <div className='flex gap-[0.573vw]'>
                            <IoEarthOutline className='text-[#04b7df] w-[1.406vw] h-[2.135vw] relative' />
                            <h5 className='text-white text-[1.25vw] font-normal leading-[1.719vw] pt-[0.1vw]'>
                                App Store Optimization (ASO)
                            </h5>
                        </div>
                        <div className={`pt-[1.094vw] w-[23.719vw] transition-all duration-300 ease-in-out ${isExpandedLine3 ? '' : 'line-clamp-2'}`}>
                            <p className='text-[#babcd2] text-[1.25vw] font-normal leading-[1.719vw]'>
                                Use Possesive Panda’s ASO services to encourage app installs on the Apple and Play Stores if you also provide your customers with a mobile app.
                            </p>
                        </div>
                    </div>

                    {/* Ninth Box */}
                    <div>
                        <div className='flex gap-[0.573vw]'>
                            <BsGraphUp className='text-[#04b7df] w-[1.406vw] h-[2.135vw] relative' />
                            <h5 className='text-white text-[1.25vw] font-normal leading-[1.719vw] pt-[0.1vw]'>
                                Conversion Rate Optimization
                            </h5>
                        </div>
                        <div className={`pt-[1.094vw] w-[23.719vw] transition-all duration-300 ease-in-out ${isExpandedLine3 ? '' : 'line-clamp-2'}`}>
                            <p className='text-[#babcd2] text-[1.25vw] font-normal leading-[1.719vw]'>
                                Possesive Panda also provides CRO services to amplify your eCommerce website visitors and maximize your product and service sales.
                            </p>
                        </div>
                    </div>
                </div>

                {/* See More/See Less button for Line 3 */}
                <div className='text-left mt-[2vw]'>
                    <button
                        onClick={toggleExpandLine3}
                        className='text-white/75 text-[1.146vw] font-normal border border-[#2a2b3a] rounded-full px-[1.5vw] py-[0.5vw] hover:bg-[#04b7df] hover:text-white transition duration-300 ease-in-out'>
                        {isExpandedLine3 ? 'See Less' : 'See More'}
                    </button>
                </div>
                <div className='h-[0.2vw] w-full bg-[#2a2b3a] mt-[4.167vw]'></div>

                {/* 4th Line Updated grid layout */}
                <div className='grid grid-cols-3 md:grid-cols-3 gap-[3vw] pt-[3.542vw]'>
                    {/* Tenth Box */}
                    <div>
                        <div className='flex gap-[0.573vw]'>
                            <FaIoxhost className='text-[#04b7df] w-[1.406vw] h-[2.135vw] relative' />
                            <h5 className='text-white text-[1.25vw] font-normal leading-[1.719vw] pt-[0.1vw]'>
                                eCommerce Hosting
                            </h5>
                        </div>
                        <div className='pt-[1.094vw] w-[23.719vw] '>
                            <p className='text-[#babcd2] text-[1.25vw] font-normal leading-[1.719vw]'>
                                Possesive Panda’s experienced professionals have eCommerce hosting mastery that will drive your website's performance and the shopping experience of the users.
                            </p>
                        </div>
                    </div>

                    {/* Eleventh Box */}
                    <div>
                        <div className='flex gap-[0.573vw]'>
                            <SiCoinmarketcap className='text-[#04b7df] w-[1.406vw] h-[2.135vw] relative' />
                            <h5 className='text-white text-[1.25vw] font-normal leading-[1.719vw] pt-[0.1vw]'>
                                Marketplace Integration
                            </h5>
                        </div>
                        <div className='pt-[1.094vw] w-[23.719vw] '>
                            <p className='text-[#babcd2] text-[1.25vw] font-normal leading-[1.719vw]'>
                                Possesive Panda’s, Amazon, eBay, and marketplace integrations provide smooth synchronization, instantaneous data access, and improved user experiences.
                            </p>
                        </div>
                    </div>

                    {/* Twelth Box */}
                    <div>
                        <div className='flex gap-[0.573vw]'>
                            <SiGooglemarketingplatform className='text-[#04b7df] w-[1.406vw] h-[2.135vw] relative' />
                            <h5 className='text-white text-[1.25vw] font-normal leading-[1.719vw] pt-[0.1vw]'>
                                B2B and B2C Portal Development
                            </h5>
                        </div>
                        <div className='pt-[1.094vw] w-[23.719vw] '>
                            <p className='text-[#babcd2] text-[1.25vw] font-normal leading-[1.719vw]'>
                                Our team specializes in creating B2B and B2C portals, catering to your requirements that will improve the user experience, enhance client relationships, and increase customer satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOR MOBILE */}

            <div className='sm:hidden'>
                <div className='px-[30px] py-[16.471vw]'>
                    <h6 className='w-[85.882vw] text-center text-white text-[7.529vw] font-medium'>
                        Our E-commerce Services
                    </h6>
                    <p className='w-[85.882vw] text-center text-white text-[3.765vw] font-normal mt-[3.765vw]'>
                        At Possesive Panda, we deliver a unique and personalized eCommerce experience for your business. For eCommerce design, eCommerce development platforms, eCommerce SEO, shopping campaigns, analytics, and hosting, we integrate our experience and expertise to make your business at the forefront.
                    </p>
                    <div className="w-[43.294vw] h-[8.471vw] ml-[21.471vw] mt-[7.529vw] rounded-[14.118vw] border border-white/60 justify-center items-center gap-[2.824vw] inline-flex">
                        <p className="w-[25.412vw] text-white/70 text-[2.824vw] font-medium">Drag to see more</p>
                        <FaArrowRight className='w-[2.824vw] h-[3.765vw] text-white/70' />
                    </div>

                    {/* 1st Sliding Row of Cards */}
                    <div className='w-[92.941vw] mt-[3.765vw]'>
                        <Slider {...settings}>
                            {/* First Card */}
                            <div className='flex flex-col  '>
                                <div className='flex gap-[3vw]  items-center '>
                                    <GrSettingsOption className='text-[#04b7df] w-[12vw] h-[12vw] relative' />
                                    <h6 className='text-white text-[3.765vw] font-medium'>eCommerce Consulting</h6>
                                </div>
                                <div className='mt-3 '>
                                    <p className='opacity-70 text-white text-[3.765vw] font-normal'>
                                        Possesive Panda delivers the best eCommerce solutions to improve your operational efficiency and user experience via consultancy from industry experts.
                                    </p>
                                </div>
                            </div>

                            {/* Second Card */}
                            <div className='flex flex-col  '>
                                <div className='flex gap-[3vw]  items-center '>
                                    <PiTimerBold className='text-[#04b7df] w-[12vw] h-[12vw] relative' />
                                    <h6 className='text-white text-[3.765vw] font-medium'>eCommerce implementation</h6>
                                </div>
                                <div className='mt-3 '>
                                    <p className='opacity-70 text-white text-[3.765vw] font-normal'>
                                        Get cloud platforms, payment gateways, POS systems, and CRMs implemented to your eCommerce web stores and mobile applications.
                                    </p>
                                </div>
                            </div>

                            {/* Third Card */}
                            <div className='flex flex-col  '>
                                <div className='flex gap-[3vw]  items-center '>
                                    <IoMdGitMerge className='text-[#04b7df] w-[12vw] h-[12vw] relative' />
                                    <h6 className='text-white text-[3.765vw] font-medium'>eCommerce Marketing</h6>
                                </div>
                                <div className='mt-3 '>
                                    <p className='opacity-70 text-white text-[3.765vw] font-normal'>
                                        Be at the forefront of your industry with Possesive Panda’s eCommerce marketing team of experienced professionals dedicated to bespoke SEO, PPC, and social media marketing.
                                    </p>
                                </div>
                            </div>

                        </Slider>
                        <div className='h-[1vw] w-full bg-[#2a2b3a] mt-[4.167vw]'></div>
                    </div>

                    {/* 2nd Sliding Row of Cards */}
                    <div className='w-[92.941vw] mt-[3.765vw]'>
                        <Slider {...settings}>
                            {/* Fourth Card */}
                            <div className='flex flex-col  '>
                                <div className='flex gap-[3vw]  items-center '>
                                    <RiSeoLine className='text-[#04b7df] w-[12vw] h-[12vw] relative' />
                                    <h6 className='text-white text-[3.765vw] font-medium'>eCommerce SEO</h6>
                                </div>
                                <div className='mt-3 '>
                                    <p className='opacity-70 text-white text-[3.765vw] font-normal'>
                                        Possesive Panda delivers the best SEO professionals to boost up your sales and traffic to your eCommerce website, providing exceptional on-page, off-page, and local SEO strategies.
                                    </p>
                                </div>
                            </div>

                            {/* Fifth Card */}
                            <div className='flex flex-col  '>
                                <div className='flex gap-[3vw]  items-center '>
                                    <FaRegFile className='text-[#04b7df] w-[12vw] h-[12vw] relative' />
                                    <h6 className='text-white text-[3.765vw] font-medium'>eCommerce Web Design</h6>
                                </div>
                                <div className='mt-3 '>
                                    <p className='opacity-70 text-white text-[3.765vw] font-normal'>
                                        At Possesive Panda, we conduct thorough research and invest time to make sure that you will get a tailored and customized eCommerce website design.
                                    </p>
                                </div>
                            </div>

                            {/* Sixth Card */}
                            <div className='flex flex-col  '>
                                <div className='flex gap-[3vw]  items-center '>
                                    <BiCubeAlt className='text-[#04b7df] w-[12vw] h-[12vw] relative' />
                                    <h6 className='text-white text-[3.765vw] font-medium'>eCommerce Web Development</h6>
                                </div>
                                <div className='mt-3 '>
                                    <p className='opacity-70 text-white text-[3.765vw] font-normal'>
                                        With the use of new technologies and experienced developers, Possesive Panda’s eCommerce website development delivers scalable, secure, and well-performing solutions.
                                    </p>
                                </div>
                            </div>

                        </Slider>
                        <div className='h-[1vw] w-full bg-[#2a2b3a] mt-[4.167vw]'></div>
                    </div>

                    {/* 3rd Sliding Row of Cards */}
                    <div className='w-[92.941vw] mt-[3.765vw]'>
                        <Slider {...settings}>
                            {/* Seventh Card */}
                            <div className='flex flex-col  '>
                                <div className='flex gap-[3vw]  items-center '>
                                    <VscCircuitBoard className='text-[#04b7df] w-[12vw] h-[12vw] relative' />
                                    <h6 className='text-white text-[3.765vw] font-medium'>eCommerce Migration</h6>
                                </div>
                                <div className='mt-3 '>
                                    <p className='opacity-70 text-white text-[3.765vw] font-normal'>
                                        With proactive support, smart updates for business evolution, and continuous performance and security, our team makes sure you have a seamless eCommerce platform.
                                    </p>
                                </div>
                            </div>

                            {/* Eighth Card */}
                            <div className='flex flex-col  '>
                                <div className='flex gap-[3vw]  items-center '>
                                    <IoEarthOutline className='text-[#04b7df] w-[12vw] h-[12vw] relative' />
                                    <h6 className='text-white text-[3.765vw] font-medium'>App Store Optimization (ASO)</h6>
                                </div>
                                <div className='mt-3 '>
                                    <p className='opacity-70 text-white text-[3.765vw] font-normal'>
                                        Use Possesive Panda’s ASO services to encourage app installs on the Apple and Play Stores if you also provide your customers with a mobile app.
                                    </p>
                                </div>
                            </div>

                            {/* Ninth Card */}
                            <div className='flex flex-col  '>
                                <div className='flex gap-[3vw]  items-center '>
                                    <BsGraphUp className='text-[#04b7df] w-[12vw] h-[12vw] relative' />
                                    <h6 className='text-white text-[3.765vw] font-medium'>Conversion Rate Optimization </h6>
                                </div>
                                <div className='mt-3 '>
                                    <p className='opacity-70 text-white text-[3.765vw] font-normal'>
                                        Possesive Panda also provides CRO services to amplify your eCommerce website visitors and maximize your product and service sales.
                                    </p>
                                </div>
                            </div>

                        </Slider>
                        <div className='h-[1vw] w-full bg-[#2a2b3a] mt-[4.167vw]'></div>
                    </div>

                    {/* 4th Sliding Row of Cards */}
                    <div className='w-[92.941vw] mt-[3.765vw]'>
                        <Slider {...settings}>
                            {/* Tenth Card */}
                            <div className='flex flex-col  '>
                                <div className='flex gap-[3vw]  items-center '>
                                    <FaIoxhost className='text-[#04b7df] w-[12vw] h-[12vw] relative' />
                                    <h6 className='text-white text-[3.765vw] font-medium'>eCommerce Hosting</h6>
                                </div>
                                <div className='mt-3 '>
                                    <p className='opacity-70 text-white text-[3.765vw] font-normal'>
                                        Possesive Panda’s experienced professionals have eCommerce hosting mastery that will drive your website's performance and the shopping experience of the users.
                                    </p>
                                </div>
                            </div>

                            {/* Eleventh Card */}
                            <div className='flex flex-col  '>
                                <div className='flex gap-[3vw]  items-center '>
                                    <SiCoinmarketcap className='text-[#04b7df] w-[12vw] h-[12vw] relative' />
                                    <h6 className='text-white text-[3.765vw] font-medium'>Marketplace Integration</h6>
                                </div>
                                <div className='mt-3 '>
                                    <p className='opacity-70 text-white text-[3.765vw] font-normal'>
                                        Possesive Panda’s, Amazon, eBay, and marketplace integrations provide smooth synchronization, instantaneous data access, and improved user experiences.
                                    </p>
                                </div>
                            </div>

                            {/* Twelth Card */}
                            <div className='flex flex-col  '>
                                <div className='flex gap-[3vw]  items-center '>
                                    <SiGooglemarketingplatform className='text-[#04b7df] w-[12vw] h-[12vw] relative' />
                                    <h6 className='text-white text-[3.765vw] font-medium'>B2B and B2C Portal Development</h6>
                                </div>
                                <div className='mt-3 '>
                                    <p className='opacity-70 text-white text-[3.765vw] font-normal'>
                                        Our team specializes in creating B2B and B2C portals, catering to your requirements that will improve the user experience, enhance client relationships, and increase customer satisfaction.
                                    </p>
                                </div>
                            </div>
                        </Slider>
                        <div className='h-[1vw] w-full bg-[#2a2b3a] mt-[4.167vw]'></div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default OurSevices;
