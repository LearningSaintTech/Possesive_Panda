import React from "react";
import panda from "../../assets/footer/panda00.png";
import nav_panda from "../../assets/nav/nav-logo.png";
import grey from "../../assets/footer/grey-background.png";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX, BsArrowUpRightCircle } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram, IoChevronForwardOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FcPhone } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="sm:ml-[6.771vw] mt-[px] sm:mt-[6vw] relative">
      <div className=" w-fit flex flex-col sm:flex-row mx-auto sm:mx-0">
        <div className="w-full sm:w-[29vw] mx-auto sm:mx-0">
          <Image
            src={nav_panda}
            alt="panda"
            className="mx-auto sm:hidden w-[54.45vw] h-[44.5vw]"
          />
          <h1 className="text-zinc-800 text-[3.333vw] font-medium leading-[125%] tracking-[0.2rem] hidden sm:block">
            Possesive
          </h1>
          <div className="flex mb-[2.708vw]">
            <h1 className="text-zinc-800 text-[3.333vw] font-medium leading-[125%] tracking-[0.2rem] sm:mr-[0.417vw] sm:mb-[0.5vw] hidden sm:block">
              Panda
            </h1>
            <Link href="/">
              <button className="h-fit hidden sm:block">
                <BsArrowUpRightCircle className="size-[2vw] h-fit mt-4 hover:text-[#00AFF1]" />
              </button>
            </Link>

          </div>

          <h5 className="hidden sm:block text-zinc-900 text-[1.25vw] font-medium leading-[125%] tracking-[0.075rem] mb-[1vw] text-start">
            Get In Touch With Us
          </h5>
          <div className="flex bg-[#FAFAFA] border border-black rounded-[3vw] sm:rounded-[0.26vw] w-full sm:w-fit px-[5.385vw] sm:px-[1vw] items-center sm:mb-[1vw] mx-auto sm:mx-0 my-[30px] sm:my-0">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-[#FAFAFA] py-[3.59vw] sm:py-[0.677vw] text-[5.128vw] sm:text-[1.042vw] pl-[1.042vw] w-full sm:w-[13.333vw] text-[#030303] focus:outline-0"
            />
            <IoChevronForwardOutline className="size-[9vw] sm:size-[2vw] ml-auto sm:ml-0 hover:text-[#00AFF1] cursor-pointer" />
          </div>
          <div className="">
            <Link href="mailto:hello@possesivepanda.com">
              <div className="flex mb-[5vw] sm:mb-[1.2vw] cursor-pointer">
                <MdOutlineEmail className="size-[6vw] sm:size-[1.6vw] " />
                <p className="text-[5.128vw] sm:text-[1.25vw] font-medium tracking-[0.015rem] leading-[125%] hover:text-[#00AFF1] text-[#2A2A2A] ml-[1.042vw]">
                  hello@possesivepanda.com
                </p>
              </div>
            </Link>
            <Link href="tel:+14158003326">
              <div className="flex items-center cursor-pointer ml-[12.5vw] lg:ml-0">
                <FcPhone className="size-[6vw] sm:mr-0 sm:size-[1.563vw] -rotate-90 " />
                <p className="text-[5vw] sm:text-[1.25vw] font-medium tracking-[0.015rem] leading-[125%] hover:text-[#00AFF1] text-[#2A2A2A] ml-[1.042vw] ">
                  +1 (415) 800-3326
                </p>
              </div>
            </Link>
          </div>
          <div className="flex justify-center sm:justify-start mt-[6vw] sm:mt-[1.7vw] w-full sm:w-[45vw] gap-[7.7vw]  sm:gap-[3vw]">
            <a href="https://x.com/possesivepanda" className="cursor-pointer ">
              <BsTwitterX className="size-[5.5vw] sm:size-[1.4vw] hover:text-[#00AFF1] " />
            </a>
            <a href="https://www.linkedin.com/company/102720317/admin/dashboard/">
              <FaLinkedinIn className="size-[5.5vw] sm:size-[1.4vw] hover:text-[#00AFF1]" />
            </a>
            <a href="https://www.instagram.com/possesivepanda/">
              <IoLogoInstagram className="size-[5.5vw] sm:size-[1.4vw] hover:text-[#00AFF1]" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61559502103126">
              <FaFacebookF className="size-[5.5vw] sm:size-[1.4vw] hover:text-[#00AFF1]" />
            </a>
          </div>
        </div>
        <div className="w-full sm:w-fit lg:mt-0 mt-[3vw]">
          <h6 className="text-[6.154vw] sm:text-[1.667vw] font-medium text-[#2A2A2A] leading-[125%] tracking-[0.1rem] my-[7.5vw] sm:my-[1.042vw] underline text-center sm:text-start">
            Our Services
          </h6>
          <div className="flex sm:gap-[3.75vw] flex-col sm:flex-row">
            <div className="flex flex-col items-center sm:items-start">
              <Link
                href="services/e-commerce"
                className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5.128vw] sm:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[5.128vw] sm:mb-[1.042vw] cursor-pointer"
              >
                E-Commerce Service
              </Link>
              <Link
                href="services/social-media"
                className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5.128vw] sm:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[5.128vw] sm:mb-[1.042vw] cursor-pointer"
              >
                Social Media Service
              </Link>
              <Link
                href="services/graphic-design"
                className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5.128vw] sm:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[5.128vw] sm:mb-[1.042vw] cursor-pointer"
              >
                Graphic Design Service
              </Link>
              <Link
                href="services/start-up-bundle"
                className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5.128vw] sm:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[5.128vw] sm:mb-[50px] cursor-pointer"
              >
                Premium Services
              </Link>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <Link
                href="services/digital-marketing"
                className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5.128vw] sm:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[5.128vw] sm:mb-[1.042vw] cursor-pointer"
              >
                Digital Marketing Service
              </Link>
              <Link
                href="services/mobile-app-development"
                className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5.128vw] sm:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[5.128vw] sm:mb-[1.042vw] cursor-pointer"
              >
                MobileApp Development Service
              </Link>
              <Link
                href="services/web-development"
                className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5.128vw] sm:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[35px] sm:mb-[50px] cursor-pointer"
              >
                Web Development Service
              </Link>
            </div>
          </div>
          <ul className="sm:list-disc mt-[2vw] flex sm:flex-col gap-[7.692vw] sm:gap-[2vw] justify-center items-center sm:block lg:mb-0 mb-[3vw]">
            <li className="text-black] hover:text-[#00AFF1] cursor-pointer text-[3.846vw] sm:text-[1.25vw] leading-[125%] tracking[0.015rem] sm:mb-[1.3vw]">
              <Link href="/terms-and-conditions" className="no-underline">
                Terms & Conditions
              </Link>
            </li>
            <li className="text-black hover:text-[#00AFF1] cursor-pointer text-[3.846vw] sm:text-[1.25vw] leading-[125%] tracking[0.015rem]">
              <Link href="/privacy-policy" className="no-underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <h1 className="mt-[1.3vw] text-[3.5vw] sm:text-[1.25vw] leading-[183%] text-black tracking-[0.03rem] pb-[4vw] sm:pb-[1vw] mx-auto sm:mr-0 sm:ml-[20.833vw] w-fit">
        © 2024 | All rights reserved by Possesive Panda
      </h1>

      <Image
        src={panda}
        alt="panda"
        className="hidden sm:block absolute bottom-[-1vw] right-[1.5vw] w-[21vw] h-[25vw]"
      />
      <Image
        src={grey}
        alt="grey"
        className="absolute bottom-[-1vw] right-0 z-[-1] hidden sm:block h-[22vw] w-[37vw]"
      />
    </footer>
  );
};

export default Footer;
