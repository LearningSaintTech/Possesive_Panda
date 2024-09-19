"use client";
import React, { useState } from "react";
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Icon mapping to dynamically assign the icons
const iconMapping = {
    GrSettingsOption: <GrSettingsOption />,
    PiTimerBold: <PiTimerBold />,
    IoMdGitMerge: <IoMdGitMerge />,
    RiSeoLine: <RiSeoLine />,
    FaRegFile: <FaRegFile />,
    BiCubeAlt: <BiCubeAlt />,
    VscCircuitBoard: <VscCircuitBoard />,
    IoEarthOutline: <IoEarthOutline />,
    BsGraphUp: <BsGraphUp />,
    FaIoxhost: <FaIoxhost />,
    SiCoinmarketcap: <SiCoinmarketcap />,
    SiGooglemarketingplatform: <SiGooglemarketingplatform />,
};

const servicesData = [
    {
        line: 1,
        services: [
            {
                icon: "GrSettingsOption",
                title: "eCommerce Consulting",
                description:
                    "Possesive Panda delivers the best eCommerce solutions to improve your operational efficiency and user experience via consultancy from industry experts.",
            },
            {
                icon: "PiTimerBold",
                title: "eCommerce Implementation",
                description:
                    "Get cloud platforms, payment gateways, POS systems, and CRMs implemented to your eCommerce web stores and mobile applications.",
            },
            {
                icon: "IoMdGitMerge",
                title: "eCommerce Marketing",
                description:
                    "Be at the forefront of your industry with Possesive Panda’s eCommerce marketing team of experienced professionals dedicated to bespoke SEO, PPC, and social media marketing.",
            },
        ],
    },
    {
        line: 2,
        services: [
            {
                icon: "RiSeoLine",
                title: "eCommerce SEO",
                description:
                    "Possesive Panda delivers the best SEO professionals to boost up your sales and traffic to your eCommerce website, providing exceptional on-page, off-page, and local SEO strategies.",
            },
            {
                icon: "FaRegFile",
                title: "eCommerce Web Design",
                description:
                    "At Possesive Panda, we conduct thorough research and invest time to make sure that you will get a tailored and customized eCommerce website design.",
            },
            {
                icon: "BiCubeAlt",
                title: "eCommerce Web Development",
                description:
                    "With the use of new technologies and experienced developers, Possesive Panda’s eCommerce website development delivers scalable, secure, and well-performing solutions.",
            },
        ],
    },
    {
        line: 3,
        services: [
            {
                icon: "VscCircuitBoard",
                title: "eCommerce Migration",
                description:
                    "With proactive support, smart updates for business evolution, and continuous performance and security, our team makes sure you have a seamless eCommerce platform.",
            },
            {
                icon: "IoEarthOutline",
                title: "App Store Optimization (ASO)",
                description:
                    "Use Possesive Panda’s ASO services to encourage app installs on the Apple and Play Stores if you also provide your customers with a mobile app.",
            },
            {
                icon: "BsGraphUp",
                title: "Conversion Rate Optimization",
                description:
                    "Possesive Panda also provides CRO services to amplify your eCommerce website visitors and maximize your product and service sales.",
            },
        ],
    },
    {
        line: 4,
        services: [
            {
                icon: "FaIoxhost",
                title: "eCommerce Hosting",
                description:
                    "Possesive Panda’s experienced professionals have eCommerce hosting mastery that will drive your website's performance and the shopping experience of the users.",
            },
            {
                icon: "SiCoinmarketcap",
                title: "Marketplace Integration",
                description:
                    "Possesive Panda’s, Amazon, eBay, and marketplace integrations provide smooth synchronization, instantaneous data access, and improved user experiences.",
            },
            {
                icon: "SiGooglemarketingplatform",
                title: "B2B and B2C Portal Development",
                description:
                    "Our team specializes in creating B2B and B2C portals, catering to your requirements that will improve the user experience, enhance client relationships, and increase customer satisfaction.",
            },
        ],
    },
];

const OurServices = () => {
    const [expandedLines, setExpandedLines] = useState({
        1: false,
        2: false,
        3: false,
    });

    const toggleExpandLine = (line) => {
        setExpandedLines((prevState) => ({
            ...prevState,
            [line]: !prevState[line],
        }));
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
        <div className="bg-[#00111A]">
            {/* FOR WEB */}
            <div className="px-[5.208vw] py-[5.508vw] hidden sm:block">
                <div>
                    <h6 className="text-white text-[2.5vw] font-medium tracking-wide pb-[1.442vw]">
                        Our E-commerce Services
                    </h6>
                    <p className="w-[55.729vw] text-justify text-white text-[1.25vw] font-light">
                        At Possesive Panda, we deliver a unique and personalized eCommerce
                        experience for your business. For eCommerce design, eCommerce
                        development platforms, eCommerce SEO, shopping campaigns, analytics,
                        and hosting, we integrate our experience and expertise to make your
                        business at the forefront.
                    </p>
                </div>
                <div className="h-[0.2vw] w-full bg-[#2a2b3a] mt-[4.167vw]"></div>

                {servicesData.map((lineData, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-[3vw] pt-[3.542vw]">
                            {lineData.services.map((service, index) => (
                                <div key={index}>
                                    <div className="flex gap-[0.573vw]">
                                        <div className="text-[#04b7df] w-[1.406vw] h-[3.135vw] relative">
                                            {iconMapping[service.icon]}
                                        </div>
                                        <h5 className="text-white text-[1.25vw] font-normal leading-[1.719vw] pt-[0.1vw]">
                                            {service.title}
                                        </h5>
                                    </div>
                                    <div
                                        className={`pt-[1.094vw] w-[23.719vw] transition-all duration-300 ease-in-out ${expandedLines[lineData.line] || lineData.line === 4
                                            ? ""
                                            : "line-clamp-2"
                                            }`}
                                    >
                                        <p className="text-[#babcd2] text-[1.25vw] font-normal leading-[1.719vw]">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* See More/See Less button */}
                        {lineData.line < 4 && (
                            <div className="text-left mt-[2vw]">
                                <button
                                    onClick={() => toggleExpandLine(lineData.line)}
                                    className="text-white/75 text-[1.146vw] font-normal border border-[#2a2b3a] rounded-full px-[1.5vw] py-[0.5vw] hover:bg-[#04b7df] hover:text-white transition duration-300 ease-in-out"
                                >
                                    {expandedLines[lineData.line] ? "See Less" : "See More"}
                                </button>
                            </div>
                        )}

                        <div className="h-[0.2vw] w-full bg-[#2a2b3a] mt-[4.167vw]"></div>
                    </React.Fragment>
                ))}
            </div>

            {/* FOR MOBILE */}
            <div className="sm:hidden">
                <div className="px-[30px] py-[16.471vw]">
                    <h6 className="w-[85.882vw] text-center text-white text-[7.529vw] font-medium">
                        Our E-commerce Services
                    </h6>
                    <p className="w-[85.882vw] text-center text-white text-[3.765vw] font-normal mt-[3.765vw]">
                        At Possesive Panda, we deliver a unique and personalized eCommerce
                        experience for your business. For eCommerce design, eCommerce
                        development platforms, eCommerce SEO, shopping campaigns, analytics,
                        and hosting, we integrate our experience and expertise to make your
                        business at the forefront.
                    </p>
                    <div className="w-[43.294vw] h-[8.471vw] ml-[21.471vw] mt-[7.529vw] rounded-[14.118vw] border border-white/60 justify-center items-center gap-[2.824vw] inline-flex">
                        <p className="w-[25.412vw] text-white/70 text-[2.824vw] font-medium">
                            Drag to see more
                        </p>
                        <FaArrowRight className="w-[2.824vw] h-[3.765vw] text-white/70" />
                    </div>

                    {servicesData.map((row, index) => (
                        <div key={index} className="w-[92.941vw] mt-[3.765vw]">
                            <Slider {...settings}>
                                {row.services.map((service, serviceIndex) => (
                                    <div key={serviceIndex} className="flex flex-col">
                                        <div className="flex gap-[3vw] items-center text-[#04b7df]">
                                            {iconMapping[service.icon]}
                                            <h6 className="text-white text-[3.765vw] font-medium">
                                                {service.title}
                                            </h6>
                                        </div>
                                        <div className="mt-3">
                                            <p className="opacity-70 text-white text-[3.765vw] font-normal">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <div className="h-[1vw] w-full bg-[#2a2b3a] mt-[4.167vw]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;
