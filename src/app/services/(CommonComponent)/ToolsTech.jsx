"use client";
import { useRef, useState, useEffect } from 'react';
import { FaAngular } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaPhp } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaSwift } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { SiIonic } from "react-icons/si";
import { SiXamarin } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { FaJenkins } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { AiOutlineKubernetes } from "react-icons/ai";
import { SiSelenium } from "react-icons/si";
import { SiGradle } from "react-icons/si";
import { SiWoocommerce } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import { SiKentico } from "react-icons/si";
import { FaSymfony } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { SiPrestashop } from "react-icons/si";
import { SiBigcommerce } from "react-icons/si";
import { SiDynamics365 } from "react-icons/si";
import { FaSalesforce } from "react-icons/fa";
import { FaHubspot } from "react-icons/fa";
import { SiZoho } from "react-icons/si";
import { FaDrupal } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaJoomla } from "react-icons/fa";
import { SiMicrosoftsharepoint } from "react-icons/si";
import { FaUmbraco } from "react-icons/fa";
import { SiCraftcms } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaMagento } from "react-icons/fa";



const data = {
    frontend: [
        { name: "Angular JS", icon: <FaAngular /> },
        { name: "React JS", icon: <FaReact /> },
        { name: "Vue JS", icon: <FaVuejs /> },
        { name: "JavaScript", icon: <IoLogoJavascript /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "Tailwind", icon: <RiTailwindCssFill /> },
    ],
    backend: [
        { name: "Dot Net", icon: <AiOutlineDotNet /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "Ruby", icon: <DiRuby /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Node JS", icon: <FaNode /> },
        { name: "C Sharp", icon: <TbBrandCSharp /> },
    ],
    mobile: [
        { name: "Android", icon: <IoLogoAndroid /> },
        { name: "iOS", icon: <FaApple /> },
        { name: "Swift", icon: <FaSwift /> },
        { name: "Flutter", icon: <RiFlutterFill /> },
        { name: "Ionic", icon: <SiIonic /> },
        { name: "React Native", icon: <FaReact /> },
        { name: "Xamarin", icon: <SiXamarin /> },
        { name: "Kotlin", icon: <SiKotlin /> }
    ],
    database: [
        { name: "SQL Server", icon: <SiMicrosoftsqlserver /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <DiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "Firebase", icon: <IoLogoFirebase /> }
    ],
    cloud: [
        { name: "Amazon Web Services", icon: <FaAws /> },
        { name: "Google Cloud Platform", icon: <SiGooglecloud /> },
        { name: "Microsoft Azure", icon: <SiMicrosoftazure /> }
    ],
    devops: [
        { name: "Jenkins", icon: <FaJenkins /> },
        { name: "Azure DevOps", icon: <SiAzuredevops /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Kubernetes", icon: <AiOutlineKubernetes /> },
        { name: "Selenium", icon: <SiSelenium /> },
        { name: "Gradle", icon: <SiGradle /> }
    ],
    ecommerce: [
        { name: "WooCommerce", icon: <SiWoocommerce /> },
        { name: "Shopify", icon: <FaShopify /> },
        { name: "Kentico", icon: <SiKentico /> },
        { name: "Symfony", icon: <FaSymfony /> },
        { name: "Opencart", icon: <FaOpencart /> },
        { name: "PrestaShop", icon: <SiPrestashop /> },
        { name: "BigCommerce", icon: <SiBigcommerce /> },
        { name: "Magento 2", icon: <FaMagento /> }
    ],
    CRM: [
        { name: "Microsoft Dynamics 365", icon: <SiDynamics365 /> },
        { name: "Salesforce", icon: <FaSalesforce /> },
        { name: "HubSpot", icon: <FaHubspot /> },
        { name: "Zoho", icon: <SiZoho /> }
    ],
    CMS: [
        { name: "Drupal", icon: <FaDrupal /> },
        { name: "WordPress", icon: <FaWordpress /> },
        { name: "Joomla", icon: <FaJoomla /> },
        { name: "SharePoint", icon: <SiMicrosoftsharepoint /> },
        { name: "Umbraco", icon: <FaUmbraco /> },
        { name: "Craft", icon: <SiCraftcms /> }
    ],
};

function TechComponent() {
    const scrollerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeCategory, setActiveCategory] = useState(Object.keys(data)[0]); // Set default category

    // Handle the scrolling event to update the progress bar
    const handleScroll = () => {
        const scrollLeft = scrollerRef.current.scrollLeft;
        const maxScrollLeft = scrollerRef.current.scrollWidth - scrollerRef.current.clientWidth;
        setScrollProgress((scrollLeft / maxScrollLeft) * 100);
    };

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (scroller) {
            scroller.addEventListener('scroll', handleScroll);
            return () => scroller.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className="px-[5.208vw] bg-[#00111a]">
            <div className="flex flex-col items-center justify-center ">
                <h3 className="sm:w-[46.51vw] w-[85.882vw] text-center text-[#fbfbfc] sm:text-[3.104vw] text-[7.529vw] sm:font-medium font-medium  sm:mb-[2.135vw]">
                    Tools and Technologies We Work With
                </h3>
                <p className="text-center text-[#b9babf] sm:text-[1.25vw] text-[3.765vw] sm:font-normal font-normal ">
                    Customized, cutting-edge tools and technologies for resolving your queries and developing intuitive and updated solutions.
                </p>

                <div>
                    {/* Scroller Container */}
                    <div
                        ref={scrollerRef}
                        className="rounded-[0.26vw] inline-flex sm:hidden sm:mt-[3.646vw] mt-[7.059vw] gap-[2.824vw] overflow-x-auto scrollbar-hide"
                        style={{ width: '100vw' }} // Ensures it spans the width of the viewport
                    >
                        {/* Buttons inside the scroller */}
                        {Object.keys(data).map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`shrink-0 w-[33.3333vw] sm:px-[1.563vw] sm:py-[0.55vw] px-[9.412vw] py-[4vw] rounded-[1.476vw] sm:text-[1.25vw] text-[3.765vw] font-medium sm:font-semibold ${activeCategory === category
                                    ? 'bg-[#00aff1] text-white'
                                    : 'bg-[#131d22] text-white'
                                    } hover:bg-[#00aff1] hover:text-white`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-[1vw] h-[0.4vw] bg-gray-200 rounded-[full]">
                        <div
                            className="h-full bg-[#00aff1] rounded-full"
                            style={{ width: `${scrollProgress}%` }}
                        />
                    </div>
                </div>



                {/* Button Card For Web */}

                <div className="hidden sm:flex rounded-[0.26vw] sm:gap-[2.188vw] sm:mt-[3.646vw] gap-[2.824vw]">
                    {Object.keys(data).map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`sm:px-[1.563vw] sm:py-[0.55vw] px-[9.412vw] py-[4.706vw] rounded-[0.417vw] sm:text-[1.25vw] text-[3.765vw] font-medium sm:font-semibold ${activeCategory === category
                                ? 'bg-[#00aff1] text-white'
                                : 'bg-[#131d22] text-white'
                                } hover:bg-[#00aff1] hover:text-white`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
                {/* Technologies CARD */}
                <div className="grid sm:grid-flow-col grid-cols-2 gap-[7.529vw]  sm:gap-[1.45vw] sm:mt-[3.646vw] mt-[7.294vw] justify-center">
                    {data[activeCategory].map(tech => (
                        <div
                            key={tech.name}
                            className="flex sm:px-[1vw] sm:py-[0.533vw] px-[3.765vw] py-[1.882vw] bg-white sm:rounded-[0.26vw] rounded-[1.176vw] shadow justify-center items-center sm:gap-[0.521vw] gap-[1.882vw]"
                        >
                            <div className="sm:text-[1.875vw] text-[7vw] relative ">
                                {tech.icon}
                            </div>
                            <p className="text-[#212121] sm:text-[1vw] text-[3.765vw] font-semibold sm:font-semibold">
                                {tech.name}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default TechComponent;
