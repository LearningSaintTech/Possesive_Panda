"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../assets/nav/nav-logo.png";
import panda from "../../assets/footer/panda.png"

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState("false");
  const [showBPODropdown, setShowBPODropdown] = useState(false);
  const [showREVENUEDropdown, setShowREVENUEDropdown] = useState(false);
  const [showITDropdown, setshowITDropdown] = useState(false);
  const [showBundleDropdown, setShowBundleDropdown] = useState(false);
  const [showVirtualDropdown, setShowVirtualDropdown] = useState(false);

  const handleMouseOver = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleBPODropdown = () => {
    setShowBPODropdown(!showBPODropdown);
  };
  const toggleREVENUEDropdown = () => {
    setShowREVENUEDropdown(!showREVENUEDropdown);
  };

  const toggleITDropdown = () => {
    setshowITDropdown(!showITDropdown);
  };

  const handleBundleClick = () => {
    setShowDropdown(false);
    setShowBundleDropdown(true);
  };

  const handleVirtualClick = () => {
    setShowDropdown(false);
    setShowVirtualDropdown(true);
  };

  const handlePremiumServicesClick = () => {
    setShowBundleDropdown(false);
    setShowDropdown(true);
  };
  

  return (
    <nav className="w-full h-fit bg-[#FAFAFA] pl-[4.635vw] pr-[5.208vw] py-[1.1vw] shadow-lg fixed top-0 z-30">
      <div className="flex justify-between items-center">
        <Image src={logo} alt="logo" className="w-[5.521vw] h-[4.167vw]" />
        <div className="text-[1.25vw] font-normal flex gap-[3.49vw] py-auto items-center">
          <Link href="">Portfolio</Link>
          <Link href="">Services</Link>
          <div
            onMouseOver={handleMouseOver}
            onClick={handleMouseLeave}
            className=""
          >
            <Link className="" href="">
              Premium Services
            </Link>
            {showDropdown && (
              <div className="absolute top-[100px] left-10 bg-white shadow-md py-10 w-[95vw] rounded-2xl border-solid">
                <div className="relative">

                  <h5 className="px-4 py-2 border-gray-200 text-[48px] capitalize font-medium mb-4 pl-10">
                    Premium Services
                  </h5>
                  <div className="flex flex-wrap px-4 py-2 ">
                    <div className="grid grid-cols-3 gap-20 pl-5">
                      <ul className="text-xl font-medium capitalize mb-5">
                        <li className="mb-10">
                          <Link href="#" className="underline-offset" onClick={handleBundleClick}>
                            Startup Bundle Service
                          </Link>
                        </li>
                        <li className="mb-10 relative">
                          <div onMouseEnter={toggleBPODropdown} className="flex items-center cursor-pointer">
                            <Link href="#" className="underline-offset">
                              BPO & Call Center Services
                            </Link>
                            <span className="ml-2 " >▼</span>
                          </div>
                          {showBPODropdown && (
                            <ul className="absolute mt-2 bg-white -lg z-10">
                              <li className="px-4 py-2 hover:">
                                <Link href="/dashboard" className="">
                                  InBound Call Center Service
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                      <ul className="text-xl font-medium capitalize ">
                        <li className="mb-10">
                          <Link href="" className="underline-offset" onClick={handleVirtualClick}>
                            Virtual Assistant Service
                          </Link>
                        </li>
                        <li className="mb-10 relative">
                          <div onMouseEnter={toggleITDropdown} className="flex items-center cursor-pointer">
                            <Link href="#" className="underline-offset">
                              IT & Non IT Recruitment
                            </Link>
                            <span className="ml-2">▼</span>
                          </div>
                          {showITDropdown && (
                            <ul className="absolute mt-2 bg-white -lg z-10 ">
                              <li className="px-4 py-2 hover:">
                                <Link href="/dashboard" className="">
                                  IT Recruitment Services
                                  Non-IT Recruitment Services
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                      <ul className="text-xl font-medium capitalize ">
                        <li className="mb-10 relative">
                          <div onMouseEnter={toggleREVENUEDropdown} className="flex items-center cursor-pointer">
                            <Link href="#" className="underline-offset">
                              Revenue Cycle Management
                            </Link>
                            <span className="ml-2">▼</span>
                          </div>
                          {showREVENUEDropdown && (
                            <ul className="absolute mt-2 bg-white -lg z-10">
                              <li className="px-4 py-2 hover:">
                                <Link href="/dashboard" className="">
                                  Key Components of RCM Services
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Image src={panda} alt="panda" className="absolute right-0 -bottom-8 overflow-hidden size-[18vw] opacity-40" />
                </div>

              </div>
            )}
            {showBundleDropdown && (
              <div className="absolute top-[110px] left-10 bg-white shadow-md py-10 w-[95vw] rounded-2xl border-solid">
                <h5 className="px-4 py-2 border-gray-200 text-4xl capitalize font-medium mb-4 pl-10">
                  <Link href="#" onClick={handlePremiumServicesClick} >
                    Premium Services
                  </Link>
                  {" "}
                  / Startup Bundle Service
                </h5>
                <div className="relative">
                  <div className="grid grid-cols-3 gap-4 pl-10 underline-offset">
                    <ul className="text-lg font-medium capitalize">
                      <li className="mb-10">
                        <Link href="#" className="">
                          Business Consultation
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="">
                          Content Creation
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="">
                          Search Engine Optimization
                        </Link>
                      </li>
                    </ul>
                    <ul className="text-lg font-medium capitalize">
                      <li className="mb-10">
                        <Link href="#" className="">
                          Brand Development
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="">
                          Digital Marketing strategy
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="">
                          Startup support
                        </Link>
                      </li>
                    </ul>
                    <ul className="text-lg font-medium capitalize">
                      <li className="mb-10">
                        <Link href="#" className="">
                          Website Development
                        </Link>
                      </li>

                      <li className="mb-10">
                        <Link href="#" className="">
                          Social Media Setup & Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Image src={panda} alt="panda" className="absolute right-0 -bottom-10 overflow-hidden w-[12.6vw] h-[15vw] opacity-40" />
                </div>
              </div>
            )}
            {showVirtualDropdown && (
              <div className="absolute top-[120px] left-10 bg-white shadow-md py-10 w-[95vw] rounded-2xl border-solid">
                <div className="relative">
                  <h5 className="px-4 py-2 border-gray-200 text-4xl capitalize font-medium mb-5 pl-10">
                    Virtual Assistant Service
                  </h5>
                  <div className="grid grid-cols-3 pl-10 ">
                    <ul className="text-lg font-medium capitalize underline-offset">
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Email Management
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Document Management
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Personal Virtual Assistant
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Task Coordination
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Event Planning & Coordination
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Content Creation & Editing
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          DataBase Cleanup & Data Entry
                        </Link>
                      </li>
                    </ul>
                    <ul className="text-lg font-medium capitalize underline-offset ">
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Calender Management
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Data Entry & DataBase Management
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Social Media Management
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Email Marketing Support
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Travel Planning & Coordination
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Transcription Services
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Technical Support & Troubleshooting
                        </Link>
                      </li>
                    </ul>
                    <ul className="text-lg font-medium capitalize underline-offset">
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Real Estate Virtual Assistant
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Customer Support
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Research & Analysis
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Bookkeeping& Accounting Assistance
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Language Translation Services
                        </Link>
                      </li>
                      <li className="mb-10">
                        <Link href="#" className="underline">
                          Project Management Support
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Image src={panda} alt="panda" className="absolute right-0 -bottom-10 overflow-hidden w-[12.6vw] h-[15vw] opacity-40" />
                </div>
              </div>
            )}
          </div>
          <Link href="">Vision</Link>
          <Link href="">Pricing</Link>
          <Link href="">Blogs</Link>
          <button className="py-[0.729vw] px-[1.823] bg-[#60E2FF] text-white rounded-[5px] w-[10.417vw]">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;