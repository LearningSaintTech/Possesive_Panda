import React from "react";
import panda from "../../assets/footer/panda.png";
import nav_panda from "../../assets/nav/nav-logo.png";
import grey from "../../assets/footer/grey-background.png";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX, BsArrowUpRightCircle } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram, IoChevronForwardOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FcPhone } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="sm:ml-[6.771vw] mt-[50px] sm:mt-[6vw] relative">
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
          <div className="flex">
            <h1 className="text-zinc-800 text-[3.333vw] font-medium leading-[125%] tracking-[0.2rem] sm:mr-[0.417vw] sm:mb-[0.5vw] hidden sm:block">
              Panda
            </h1>
            <button className="h-fit hidden sm:block">
              <BsArrowUpRightCircle className="size-[2vw] h-fit mt-4 hover:text-[#00AFF1]" />
            </button>
          </div>

          <h5 className="hidden sm:block text-zinc-900 text-[1.25vw] font-medium leading-[125%] tracking-[0.075rem] mb-[1vw] text-start">
            Get In Touch With Us
          </h5>
          <div className="flex bg-[#FAFAFA] border rounded-[1.5vw] sm:rounded-[0.26vw] w-8/12 sm:w-fit px-[1vw] sm:px-[1vw] items-center sm:mb-[1vw] mx-auto sm:mx-0 my-[30px] sm:my-0">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-[#FAFAFA] py-[2vw] sm:py-[0.677vw] text-[5vw] sm:text-[1.042vw] pl-[1.042vw] w-9/12 sm:w-[13.333vw] text-[#2A2A2A] focus:outline-0"
            />
            <IoChevronForwardOutline className="size-[7vw] sm:size-[2vw] ml-auto sm:ml-0 hover:text-[#00AFF1] cursor-pointer" />
          </div>
          <div className="ml-7 sm:ml-0">
            <Link href="mailto:hello@possesivepanda.com">
              <div className="flex mb-[5vw] sm:mb-[1.2vw] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  className="size-[9vw] mr-[1.5vw] sm:mr-0 sm:size-auto"
                >
                  <g clipPath="url(#clip0_1408_5135)">
                    <path
                      d="M22.9688 0H7.03125C3.148 0 0 3.148 0 7.03125V22.9688C0 26.852 3.148 30 7.03125 30H22.9688C26.852 30 30 26.852 30 22.9688V7.03125C30 3.148 26.852 0 22.9688 0Z"
                      fill="#F4F2ED"
                    />
                    <path
                      d="M4.87922 23.7935H8.60789V14.7381L3.28125 10.7432V22.1955C3.28125 23.0797 3.99773 23.7935 4.87922 23.7935Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M21.392 23.7936H25.1208C26.0049 23.7936 26.7187 23.0771 26.7187 22.1957V10.7432L21.392 14.7382"
                      fill="#34A853"
                    />
                    <path
                      d="M21.392 7.81357V14.7383L26.7187 10.7434V8.61243C26.7187 6.6363 24.4629 5.50966 22.8835 6.69489"
                      fill="#FBBC04"
                    />
                    <path
                      d="M8.60803 14.7383V7.81371L15 12.6075L21.392 7.81348V14.7382L15 19.5323"
                      fill="#EA4335"
                    />
                    <path
                      d="M3.28125 8.61243V10.7431L8.60789 14.7382V7.81357L7.11645 6.69489C5.53441 5.50966 3.28125 6.6363 3.28125 8.61243Z"
                      fill="#C5221F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1408_5135">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-[5vw] sm:text-[1.25vw] font-medium tracking-[0.015rem] leading-[125%] hover:text-[#00AFF1] text-[#2A2A2A] ml-[1.042vw]">
                  hello@possesivepanda.com
                </p>
              </div>
            </Link>
            <Link href="tel:+14158003326">
              <div className="flex items-center cursor-pointer">
                <FcPhone className="size-[9vw] mr-[1.5vw] sm:mr-0 sm:size-[1.563vw] -rotate-90" />
                <p className="text-[5vw] sm:text-[1.25vw] font-medium tracking-[0.015rem] leading-[125%] hover:text-[#00AFF1] text-[#2A2A2A] ml-[1.042vw]">
                  +1 (415) 800-3326
                </p>
              </div>
            </Link>
          </div>
          <div className="flex justify-center sm:justify-start mt-[3.85vw] sm:mt-[1.7vw] w-full sm:w-[45vw] gap-[7.7vw]  sm:gap-[3vw]">
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
        <div className="w-full sm:w-fit">
          <h6 className="text-[9vw] sm:text-[1.667vw] font-medium text-[#2A2A2A] leading-[125%] tracking-[0.1rem] my-[5.5vw] sm:my-[1.042vw] underline text-center sm:text-start">
            Our Services
          </h6>
          <div className="flex sm:gap-[3.75vw] flex-col sm:flex-row">
            <div className="flex flex-col items-center sm:items-start">
              <Link
                href="services/e-commerce"
                className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5vw] sm:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[30px] sm:mb-[1.042vw] cursor-pointer"
              >
                E-Commerce Service
              </Link>
              <Link
                href="services/social-media"
                className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5vw] sm:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[30px] sm:mb-[1.042vw] cursor-pointer"
              >
                Social Media Service
              </Link>
              <Link
                href="services/graphic-design"
                className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5vw] sm:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[30px] sm:mb-[1.042vw] cursor-pointer"
              >
                Graphic Design Service
              </Link>
              <Link
                href="services/start-up-bundle"
                className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5vw] sm:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[30px] sm:mb-[50px] cursor-pointer"
              >
                Premium Services
              </Link>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <Link
                href="services/digital-marketing"
                className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5vw] sm:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[30px] sm:mb-[1.042vw] cursor-pointer"
              >
                Digital Marketing Service
              </Link>
              <Link
                href="services/mobile-app-development"
                className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5vw] sm:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[30px] sm:mb-[1.042vw] cursor-pointer"
              >
                MobileApp Development Service
              </Link>
              <Link
                href="services/web-development"
                className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5vw] sm:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[35px] sm:mb-[50px] cursor-pointer"
              >
                Web Development Service
              </Link>
            </div>
          </div>
          <ul className="sm:list-disc mt-[2vw] flex flex-col gap-[2vw] justify-center items-center sm:block">
            <li className="text-[#2a2a2a] hover:text-[#00AFF1] cursor-pointer text-[4vw] sm:text-[1.25vw] leading-[125%] tracking[0.015rem] mb-[1.3vw]">
              <Link href="/terms-and-conditions" className="no-underline">
                Terms & Conditions
              </Link>
            </li>
            <li className="text-[#2a2a2a] hover:text-[#00AFF1] cursor-pointer text-[4vw] sm:text-[1.25vw] leading-[125%] tracking[0.015rem]">
              <Link href="/privacy-policy" className="no-underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <h1 className="mt-[1.3vw] text-[3vw] sm:text-[1.25vw] leading-[183%] text-[#2A2A2A] tracking-[0.03rem] pb-[1.3vw] mx-auto sm:mr-0 sm:ml-[20.833vw] w-fit">
        © 2024 | All rights reserved by Possesive Panda
      </h1>

      <Image
        src={panda}
        alt="panda"
        className="hidden sm:block absolute bottom-[-2vw] right-[1.5vw] w-[21vw] h-[25vw]"
      />
      <Image
        src={grey}
        alt="grey"
        className="absolute bottom-0 right-0 z-[-1] hidden sm:block h-[22vw] w-[37vw]"
      />
    </footer>
  );
};

export default Footer;
