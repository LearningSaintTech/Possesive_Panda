import React from "react";
import { AiOutlineAreaChart } from "react-icons/ai";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import { CgInsights } from "react-icons/cg";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { MdPriceChange } from "react-icons/md";

const leftColumnData = [
    {
        icon: <AiOutlineAreaChart className="w-[5.833vw] h-[5.833vw]" />,
        title: 'Expanded Reach',
        description: 'With no limitation of geography, businesses can target worldwide clients to maximize their growth.'
    },
    {
        icon: <HiMiniArrowTrendingDown className="w-[5.833vw] h-[5.833vw]" />,
        title: 'Cost-Effectiveness',
        description: 'Online shopping leads to lower expenses by eliminating the need for physical shops and improving margins.'
    },
    {
        icon: <CgInsights className="w-[5.833vw] h-[5.833vw]" />,
        title: 'Improved Customer Insights',
        description: 'Offers insightful information on consumer behavior leading to customized marketing campaigns.'
    }
];

const rightColumnData = [
    {
        icon: <FaHandHoldingDollar className="w-[5.833vw] h-[5.833vw] text-white" />,
        title: 'Enhanced Sales and Revenue',
        description: 'Increasing sales possibilities and revenue growth are the results of streamlining procedures.'
    },
    {
        icon: <BiSolidShoppingBagAlt className="w-[5.833vw] h-[5.833vw]" />,
        title: 'Convenient Shopping',
        description: 'The ability for customers to purchase whenever and wherever they choose enhances their level of happiness.'
    },
    {
        icon: <MdPriceChange className="w-[5.833vw] h-[5.833vw]" />,
        title: 'Product and Price Comparison',
        description: 'With the plethora of product options available, you can compare and choose the product of your liking.'
    }
];


const Benefits = () => {
    return (
        <div className="px-[5vw] bg-[#00111A] ">

            {/* FOR WEB */}
            <div className="hidden sm:block">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="w-[30.729vw] text-white text-[2.5vw] font-normal leading-[3.229vw]">
                            Benefits of eCommerce Service and Solutions
                        </h1>
                        <p className="w-[43.542vw] text-white text-[1.258vw] font-normal leading-[2.266vw] pt-[0.5vw]">
                            There are many benefits of using eCommerce solutions:
                        </p>
                    </div>
                    <div>
                        <button className="py-[2.353vw] sm:py-[0.729vw] px-[28vw] sm:px-[1.354vw] bg-[#05B7DF] rounded-[1.882vw] sm:rounded-[3.906vw] text-white text-[3.765vw] sm:text-[1.25vw] font-semibold mt-[2.24vw]">
                            Get In Touch
                        </button>
                    </div>
                </div>

                {/* Left and Right Container Division */}
                <div className="flex flex-col sm:flex-row justify-between gap-[2vw] mt-8 w-full">
                    {/* Left Column Container */}
                    <div className="bg-[#131d22] rounded-[0.625vw] shadow-lg px-[3.906vw] py-[4.531vw] w-[50%] text-white space-y-[2.5vw]">
                        {leftColumnData.map((item, index) => (
                            <div key={index} className="flex items-start space-x-[0.833vw]">
                                {item.icon}
                                <div>
                                    <h3 className="text-white  text-[1.667vw] font-semibold">{item.title}</h3>
                                    <p className="text-white opacity-80 text-[1.25vw] font-light w-[28.229vw]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column Container */}
                    <div className="bg-[#131d22] rounded-[0.625vw] shadow-lg px-[3.906vw] py-[4.531vw] w-[50%] text-white space-y-[2.5vw]">
                        {rightColumnData.map((item, index) => (
                            <div key={index} className="flex items-start space-x-[0.833vw]">
                                {item.icon}
                                <div>
                                    <h3 className=" text-white  text-[1.667vw] font-semibold">{item.title}</h3>
                                    <p className="text-white opacity-80 text-[1.25vw] font-light w-[28.229vw]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FOR MOBILE  */}

            <div className="sm:hidden bg-[#00111A]">
                <div className="">
                    <div className="w-[100.235vw] pr-[10.059vw] pt-[11.529vw] pb-[11.765vw] flex-col justify-center items-center gap-[7.529vw] inline-flex">
                        <h1 className="w-[85.882vw] text-center text-white text-[7.529vw] font-medium">Benefits of eCommerce Service and Solutions</h1>
                        <p className="w-[65.882vw] text-center text-white text-[3.765vw] font-normal">There are many benefits of using e-commerce solutions</p>


                        {/* Main box */}

                        <div class="w-[85.882vw] p-[4.235vw] bg-[#131d22] rounded-[3.765vw] flex-col justify-start items-start gap-[5.647vw] inline-flex">

                            {/* First container */}

                            <div class="self-stretch justify-start items-start gap-[3.586vw] inline-flex">
                                <AiOutlineAreaChart className="w-[11.473vw] h-[11.473vw] text-white" />
                                <div class="flex-col justify-start items-start gap-[2.049vw] inline-flex">
                                    <h6 class="w-[62.353vw] text-white text-[2.824vw] font-medium ">Expanded Reach</h6>
                                    <p class="w-[62.353vw] opacity-70 text-white text-[2.353vw] font-normal ">With no limitation of geography, businesses can target worldwide clients to maximize their growth.</p>
                                </div>
                            </div>

                            {/* Second container */}
                            <div class="self-stretch justify-start items-start gap-[3.586vw] inline-flex">
                                <HiMiniArrowTrendingDown className="w-[11.473vw] h-[11.473vw] text-white" />
                                <div class="flex-col justify-start items-start gap-[2.049vw] inline-flex">
                                    <h6 class="w-[62.353vw] text-white text-[2.824vw] font-medium ">Cost-Effectiveness</h6>
                                    <p class="w-[62.353vw] opacity-70 text-white text-[2.353vw] font-normal "> Online shopping leads to lower expenses by eliminating the need for physical shops and manpower. </p>
                                </div>
                            </div>

                            {/* Third container */}

                            <div class="self-stretch justify-start items-start gap-[3.586vw] inline-flex">
                                <CgInsights className="w-[11.473vw] h-[11.473vw] text-white" />
                                <div class="flex-col justify-start items-start gap-[2.049vw] inline-flex">
                                    <h6 class="w-[62.353vw] text-white text-[2.824vw] font-medium ">Improved Customer Insights</h6>
                                    <p class="w-[62.353vw] opacity-70 text-white text-[2.353vw] font-normal ">Offers insightful information on consumer behavior, leadin customized marketing campaigns possible.</p>
                                </div>
                            </div>

                            {/* Fourth container */}

                            <div class="self-stretch justify-start items-start gap-[3.586vw] inline-flex">
                                <FaHandHoldingDollar className="w-[11.473vw] h-[11.473vw] text-white" />
                                <div class="flex-col justify-start items-start gap-[2.049vw] inline-flex">
                                    <h6 class="w-[62.353vw] text-white text-[2.824vw] font-medium ">Enhanced Sales and Revenue</h6>
                                    <p class="w-[62.353vw] opacity-70 text-white text-[2.353vw] font-normal ">Increasing sales possibilities and revenue growth are the results of streamlining procedures.</p>
                                </div>
                            </div>

                            {/* Fifth container */}

                            <div class="self-stretch justify-start items-start gap-[3.586vw] inline-flex">
                                <BiSolidShoppingBagAlt className="w-[11.473vw] h-[11.473vw] text-white" />
                                <div class="flex-col justify-start items-start gap-[2.049vw] inline-flex">
                                    <h6 class="w-[62.353vw] text-white text-[2.824vw] font-medium ">Convenient Shopping</h6>
                                    <p class="w-[62.353vw] opacity-70 text-white text-[2.353vw] font-normal ">The ability for customers to purchase whenever and wherever they choose enhances their level of happiness.</p>
                                </div>
                            </div>

                            {/* Sixth container */}

                            <div class="self-stretch justify-start items-start gap-[3.586vw] inline-flex">
                                <MdPriceChange className="w-[11.473vw] h-[11.473vw] text-white" />
                                <div class="flex-col justify-start items-start gap-[2.049vw] inline-flex">
                                    <h6 class="w-[62.353vw] text-white text-[2.824vw] font-medium ">Product and Price Comparison</h6>
                                    <p class="w-[62.353vw] opacity-70 text-white text-[2.353vw] font-normal ">With the plethora of product options available, you can compare and choose the product of your liking.</p>
                                </div>
                            </div>
                        </div>
                        <button className="py-[3.353vw] w-[85.882vw]  px-[33vw]  bg-[#05B7DF] rounded-[1.882vw]  text-white text-[3vw]  font-semibold mt-[2.24vw]">
                            Get In Touch
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
