import React from "react";
import downButton from "../../assets/footer/downButton.png";
import panda from "../../assets/footer/panda.png";
import grey from "../../assets/footer/grey-background.png";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX, BsArrowUpRightCircle } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram, IoChevronForwardOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="lg:ml-[6.771vw] mt-[50px] lg:mt-[6vw] relative">
      <div className=" w-fit flex flex-col lg:flex-row mx-auto lg:mx-0">
        <div className="w-full lg:w-[29vw] mx-auto lg:mx-0">
          <h1 className="text-zinc-800 text-[9vw] font-medium leading-[125%] tracking-[0.2rem] lg:hidden text-center">
            Possessive Panda
          </h1>
          <h1 className="text-zinc-800 text-[3.333vw] font-medium leading-[125%] tracking-[0.2rem] hidden lg:block">
            Possessive
          </h1>
          <div className="flex">
            <h1 className="text-zinc-800 text-[3.333vw] font-medium leading-[125%] tracking-[0.2rem] lg:mr-[0.417vw] lg:mb-[2.5vw] hidden lg:block">
              Panda
            </h1>
            <button className="h-fit hidden lg:block">
              <BsArrowUpRightCircle className="size-[2vw] h-fit mt-4 hover:text-[#00AFF1]" />
            </button>
          </div>

          <h5 className="text-zinc-900 text-[6vw] lg:text-[1.25vw] font-medium leading-[125%] tracking-[0.075rem] mt-[30px] lg:mt-0 lg:mb-[1vw] text-center lg:text-start">
            Get In Touch With Us
          </h5>
          <div className="flex bg-[#FAFAFA] border rounded-[1.5vw] lg:rounded-[0.26vw] w-8/12 lg:w-fit px-[1vw] lg:px-[1vw] items-center lg:mb-[2.5vw] mx-auto lg:mx-0 my-[30px] lg:my-0">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-[#FAFAFA] py-[0.677vw] text-[5vw] lg:text-[1.042vw] pl-[1.042vw] w-9/12 lg:w-[13.333vw] text-[#2A2A2A] focus:outline-0"
            />
            <IoChevronForwardOutline className="size-[7vw] lg:size-[2vw] ml-auto lg:ml-0 hover:text-[#00AFF1] cursor-pointer" />
          </div>
          <div className="ml-7 lg:ml-0">
            <Link href="mailto:hello@possesivepanda.com">
              <div className="flex mb-[1.2vw] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  className="size-[9vw] mr-[1.5vw] lg:mr-0 lg:size-auto"
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
                <p className="text-[5vw] lg:text-[1.25vw] font-medium tracking-[0.015rem] leading-[125%] hover:text-[#00AFF1] text-[#2A2A2A] ml-[1.042vw]">
                  hello@possesivepanda.com
                </p>
              </div>
            </Link>
            <Link href="tel:+918080555520">
              <div className="flex items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  className="size-[9vw] mr-[1.5vw] lg:mr-0 lg:size-auto"
                >
                  <path
                    d="M24.4375 25.625H22.125C13.875 25.5 4.4375 14.9375 4.375 7.875V5.5625C4.375 4.9375 4.875 4.375 5.5625 4.375L10.25 4.4375C10.875 4.4375 11.4375 5 11.4375 5.625L11.5625 10.75L8.625 13.25C8.625 14.875 15.1875 21.4375 16.875 21.5L19.5625 18.5625L24.5 18.6875C25.125 18.6875 25.6875 19.25 25.6875 19.875L25.625 24.4375C25.625 25.125 25.125 25.625 24.4375 25.625Z"
                    fill="#009688"
                  />
                </svg>
                <p className="text-[5vw] lg:text-[1.25vw] font-medium tracking-[0.015rem] leading-[125%] hover:text-[#00AFF1] text-[#2A2A2A] ml-[1.042vw]">
                  +91 8080555520
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-fit">
          <h6 className="text-[9vw] lg:text-[1.667vw] font-medium text-[#2A2A2A] leading-[125%] tracking-[0.1rem] my-[20px] underline text-center lg:text-start">
            Services:
          </h6>
          <div className="flex lg:gap-[72px] flex-col lg:flex-row items-center">
            <div className="">
              <h4 className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5vw] lg:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[30px] lg:mb-[20px] cursor-pointer">
                Startup Bundle Service
              </h4>
              <h4 className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5vw] lg:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[30px] lg:mb-[20px] cursor-pointer">
                Virtual Assistant Service
              </h4>
              <h4 className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5vw] lg:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[30px] lg:mb-[50px] cursor-pointer">
                IT Recruitment Service
              </h4>
            </div>
            <div className="">
              <h4 className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5vw] lg:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[30px] lg:mb-[20px] cursor-pointer">
                Non IT Recruitment Service
              </h4>
              <h4 className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5vw] lg:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[30px] lg:mb-[20px] cursor-pointer">
                BPO & Call Center Service
              </h4>
              <h4 className="text-[#2A2A2A] hover:text-[#00AFF1] text-[5vw] lg:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[35px] lg:mb-[50px] cursor-pointer">
                Revenue Cycle Management
              </h4>
            </div>
          </div>
          <div className="flex mt-[15px] lg:mt-[33px] w-[45vw]  ml-9 lg:ml-0 gap-[2vw]">
            <Link href="www.twiter.com" className="cursor-pointer ">
              <BsTwitterX className="size-[5vw] lg:size-[1.4vw] hover:text-[#00AFF1] " />
            </Link>
            <Link href="www.twiter.com">
              <FaLinkedinIn className="size-[5vw] lg:size-[1.4vw] hover:text-[#00AFF1]" />
            </Link>
            <Link href="www.twiter.com">
              <IoLogoInstagram className="size-[5vw] lg:size-[1.4vw] hover:text-[#00AFF1]" />
            </Link>
            <Link href="www.twiter.com">
              <FaFacebookF className="size-[5vw] lg:size-[1.4vw] hover:text-[#00AFF1]" />
            </Link>
          </div>
        </div>
      </div>

      <h1 className="mt-[30px] text-[4vw] lg:text-[1.25vw] leading-[183%] text-[#2A2A2A] tracking-[0.03rem] pb-[30px] ml-3 lg:ml-[20.833vw] w-[60vw] lg:w-fit">
        © 2024 | Alrights reserved by Possessive Panda
      </h1>

      <Image
        src={panda}
        alt="panda"
        className="absolute bottom-2 lg:bottom-0 right-0 lg:right-[1.5vw] opacity-[0.67] z-10 lg:opacity-100 w-[44.615vw] h-[49.744vw] lg:w-[21vw] lg:h-[25vw]"
      />
      <Image
        src={grey}
        alt="grey"
        className="absolute bottom-0 right-0 z-[-1] hidden lg:block h-[22vw] w-[37vw]"
      />
    </footer>
  );
};

export default Footer;
