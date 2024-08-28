"use client"
import logo1 from "../../assets/nav/nav-logo1.png";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HandlePage from "./(Input Form)/HandlePage";

const Footer = () => {
  const [open, setOpen] = useState(false);


  return (
    <div className='sm:px-0 px-[7.69vw] flex flex-col min-h-screen bg-[#00111A]'>
      <div className='flex flex-col sm:flex-row sm:ml-[6.667vw] mt-[7.9vh] gap-[2.536vw]'>
        <div className='w-full  md:w-[27.187vw] h-[34vh] bg-[#002E47]'>
          <p className="text-white text-xs ml-[2.077vw] mt-[3.932vw]  font-semibold font-['Poppins']"></p>
          <div className="text-white text-2xl ml-[2.077vw] font-bold font-['Poppins'] ">CREATE <br />NEW <br />PROJECT!</div>
        </div>
        <div className='w-full pl-[2.188vw] pt-[2.188vw] flex flex-col md:w-[27.187vw] h-[34vh] bg-[#FFF]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d="M42.6667 29.3333V21.3333H34.6667V16H42.6667V8H48V16H56V21.3333H48V29.3333H42.6667ZM53.2 56C47.6444 56 42.1449 54.8 36.7013 52.4C31.2578 50 26.3129 46.5778 21.8667 42.1333C17.4204 37.6889 13.9982 32.7556 11.6 27.3333C9.20178 21.9111 8.00178 16.4 8 10.8V8H23.7333L26.2 21.4L18.6 29.0667C19.5778 30.8 20.6667 32.4444 21.8667 34C23.0667 35.5556 24.3556 37 25.7333 38.3333C27.0222 39.6222 28.4338 40.856 29.968 42.0347C31.5022 43.2133 33.1573 44.3129 34.9333 45.3333L42.6667 37.6L56 40.3333V56H53.2Z" fill="#00111A" />
          </svg>
          <div className='flex flex-row mt-[5.585vw] gap-[5.748vw] '>
            <div >
              <p>FOR MORE</p>
              <p className='font-bold'>CONTACT NOW</p>
            </div>
            <button onClick={() => setOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M46.3286 31.1613C46.6453 31.4784 46.8232 31.9083 46.8232 32.3565C46.8232 32.8048 46.6453 33.2347 46.3286 33.5518L32.7974 47.0829C32.6426 47.2491 32.4559 47.3824 32.2484 47.4749C32.0409 47.5673 31.8169 47.617 31.5898 47.621C31.3627 47.625 31.1371 47.5832 30.9265 47.4982C30.7159 47.4131 30.5246 47.2865 30.364 47.1259C30.2034 46.9653 30.0768 46.774 29.9917 46.5633C29.9066 46.3527 29.8648 46.1272 29.8689 45.9C29.8729 45.6729 29.9226 45.449 30.015 45.2415C30.1075 45.034 30.2407 44.8473 30.4069 44.6924L41.0514 34.0479L9.05025 34.0479C8.60166 34.0479 8.17145 33.8697 7.85425 33.5525C7.53706 33.2353 7.35886 32.8051 7.35886 32.3565C7.35886 31.908 7.53706 31.4777 7.85426 31.1605C8.17145 30.8433 8.60166 30.6651 9.05025 30.6651L41.0514 30.6651L30.4069 20.0206C30.2407 19.8658 30.1075 19.6791 30.015 19.4716C29.9226 19.2641 29.8729 19.0401 29.8689 18.813C29.8648 18.5859 29.9066 18.3603 29.9917 18.1497C30.0768 17.9391 30.2034 17.7478 30.364 17.5872C30.5246 17.4266 30.7159 17.3 30.9265 17.2149C31.1371 17.1298 31.3627 17.0881 31.5898 17.0921C31.8169 17.0961 32.0409 17.1458 32.2484 17.2382C32.4559 17.3307 32.6426 17.464 32.7974 17.6301L46.3286 31.1613Z" fill="black" />
              </svg>
            </button>
            {open && <HandlePage setOpen={setOpen} />}
          </div>
        </div>
        <div className='w-full pl-[2.188vw] pt-[2.188vw] flex flex-col md:w-[27.187vw] h-[34vh] bg-[#FFF]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
            <g clip-path="url(#clip0_4769_1420)">
              <path d="M0.496094 20.1104V45.7104C0.496094 47.4077 1.17038 49.0356 2.37061 50.2358C3.57084 51.4361 5.19871 52.1104 6.89609 52.1104H58.0961C59.7935 52.1104 61.4213 51.4361 62.6216 50.2358C63.8218 49.0356 64.4961 47.4077 64.4961 45.7104V20.1104L32.4961 32.9104L0.496094 20.1104Z" fill="#00111A" />
              <path d="M6.89609 0.910156C5.19871 0.910156 3.57084 1.58444 2.37061 2.78467C1.17038 3.9849 0.496094 5.61277 0.496094 7.31015L0.496094 13.7102L32.4961 26.5101L64.4961 13.7102V7.31015C64.4961 5.61277 63.8218 3.9849 62.6216 2.78467C61.4213 1.58444 59.7935 0.910156 58.0961 0.910156H6.89609Z" fill="#00111A" />
            </g>
            <defs>
              <clipPath id="clip0_4769_1420">
                <rect width="64" height="64" fill="white" transform="translate(0.496094 0.510254)" />
              </clipPath>
            </defs>
          </svg>
          <div className='flex flex-row mt-[5.585vw] gap-[5.748vw] '>
            <div >
              <p>TO CONNECT</p>
              <h5 className='font-bold'>GET IN TOUCH</h5>
            </div>
            <Link href="/contact">
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M46.3296 31.571C46.6463 31.8881 46.8242 32.318 46.8242 32.7662C46.8242 33.2144 46.6463 33.6443 46.3296 33.9615L32.7984 47.4926C32.6436 47.6588 32.4568 47.7921 32.2494 47.8845C32.0419 47.977 31.8179 48.0267 31.5908 48.0307C31.3637 48.0347 31.1381 47.9929 30.9275 47.9078C30.7169 47.8228 30.5256 47.6962 30.365 47.5355C30.2044 47.3749 30.0777 47.1836 29.9927 46.973C29.9076 46.7624 29.8658 46.5368 29.8698 46.3097C29.8738 46.0826 29.9235 45.8586 30.016 45.6512C30.1084 45.4437 30.2417 45.257 30.4079 45.1021L41.0524 34.4576L9.05123 34.4576C8.60264 34.4576 8.17243 34.2794 7.85523 33.9622C7.53803 33.645 7.35983 33.2148 7.35983 32.7662C7.35983 32.3176 7.53803 31.8874 7.85523 31.5702C8.17243 31.253 8.60264 31.0748 9.05123 31.0748L41.0524 31.0748L30.4079 20.4303C30.2417 20.2755 30.1084 20.0887 30.016 19.8812C29.9235 19.6738 29.8738 19.4498 29.8698 19.2227C29.8658 18.9956 29.9076 18.77 29.9927 18.5594C30.0777 18.3488 30.2044 18.1575 30.365 17.9969C30.5256 17.8362 30.7169 17.7096 30.9275 17.6246C31.1381 17.5395 31.3637 17.4977 31.5908 17.5017C31.8179 17.5057 32.0419 17.5554 32.2494 17.6479C32.4568 17.7403 32.6436 17.8736 32.7984 18.0398L46.3296 31.571Z" fill="black" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row sm:ml-[6.667vw] mt-[6.458vh] gap-[8.49vw]'>
        <div className='flex flex-col'>
          <Image
            src={logo1}
            alt="logo"
            className="w-[60vw] h-[45vw] sm:w-[20vw] sm:h-[15vw] md:w-[5.521vw] md:h-[4.167vw]"
          />
          <p className='text-white mt-[7.551vh] text-justify  font-normal leading-relaxed w-full md:w-[33.021vw]'>
            Founded in 2024, Possesive Panda thrives on innovation, delivering premier IT
            solutions to clients around the globe. With a sharp focus on digital marketing, web

            and software development, and virtual assistance, we proudly serve over 50 clients.
            Join us as we transform challenges into opportunities and ideas into impact.          </p>
          <div className='flex flex-row mt-[3.3vh] gap-[5vw] md:gap-[13.5vw]'>
            <Link href="https://www.facebook.com/profile.php?id=61559502103126" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M15.1447 14.4211H17.8154L18.8836 10.1481H15.1447V8.0116C15.1447 6.9113 15.1447 5.8751 17.2812 5.8751H18.8836V2.28579C18.5354 2.23985 17.2203 2.13623 15.8316 2.13623C12.9313 2.13623 10.8717 3.90632 10.8717 7.157V10.1481H7.66699V14.4211H10.8717V23.5012H15.1447V14.4211Z" fill="white" />
              </svg>
            </Link>
            <Link href="https://x.com/possesivepanda" target="_blank">

              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                <path d="M24.8204 6.40945C23.9979 6.78334 23.1112 7.02903 22.1925 7.14654C23.1326 6.58037 23.859 5.68304 24.2008 4.60411C23.3142 5.13823 22.3314 5.51212 21.2952 5.72577C20.4513 4.80707 19.2655 4.27295 17.9195 4.27295C15.4092 4.27295 13.3581 6.32399 13.3581 8.85574C13.3581 9.21894 13.4008 9.57147 13.4756 9.90262C9.67266 9.71034 6.28631 7.88363 4.0323 5.11687C3.63705 5.78986 3.41272 6.58037 3.41272 7.4136C3.41272 9.00529 4.2139 10.4154 5.45307 11.2166C4.69461 11.2166 3.98957 11.0029 3.36999 10.6824V10.7145C3.36999 12.9365 4.95099 14.7952 7.04476 15.2118C6.37266 15.3966 5.66676 15.4222 4.98304 15.2866C5.27319 16.1973 5.84142 16.9941 6.60787 17.5651C7.37431 18.1361 8.30043 18.4526 9.25604 18.47C7.63622 19.7524 5.62827 20.4456 3.56227 20.4356C3.19907 20.4356 2.83586 20.4142 2.47266 20.3715C4.50233 21.6747 6.91657 22.4332 9.50174 22.4332C17.9195 22.4332 22.5451 15.4468 22.5451 9.38986C22.5451 9.1869 22.5451 8.99461 22.5344 8.79164C23.4317 8.15069 24.2008 7.33882 24.8204 6.40945Z" fill="white" />
              </svg>
            </Link>
            <Link href="https://www.instagram.com/possesivepanda/" target="_blank">

              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                <path d="M3.66992 11.7506C3.66992 7.72222 3.66992 5.7075 4.92191 4.45658C6.1739 3.20566 8.18755 3.20459 12.2159 3.20459H14.3524C18.3808 3.20459 20.3955 3.20459 21.6464 4.45658C22.8973 5.70857 22.8984 7.72222 22.8984 11.7506V13.8871C22.8984 17.9154 22.8984 19.9302 21.6464 21.1811C20.3944 22.432 18.3808 22.4331 14.3524 22.4331H12.2159C8.18755 22.4331 6.17283 22.4331 4.92191 21.1811C3.67099 19.9291 3.66992 17.9154 3.66992 13.8871V11.7506Z" stroke="white" strokeWidth="2.84866" />
                <path d="M18.0916 9.61442C18.9766 9.61442 19.694 8.89701 19.694 8.01204C19.694 7.12708 18.9766 6.40967 18.0916 6.40967C17.2067 6.40967 16.4893 7.12708 16.4893 8.01204C16.4893 8.89701 17.2067 9.61442 18.0916 9.61442Z" fill="white" />
                <path d="M13.2838 16.0238C15.0538 16.0238 16.4886 14.5889 16.4886 12.819C16.4886 11.0491 15.0538 9.61426 13.2838 9.61426C11.5139 9.61426 10.0791 11.0491 10.0791 12.819C10.0791 14.5889 11.5139 16.0238 13.2838 16.0238Z" stroke="white" strokeWidth="2.84866" />
              </svg>
            </Link>

          </div>
        </div>

        <div className='flex flex-row flex-wrap gap-10 text-white'>
          <div className='flex flex-col'>
            <p className='font-semibold mb-2'>MENU</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="166" height="2" viewBox="0 0 166 2" fill="none">
              <path d="M166 1H0" stroke="#6B6B6B" stroke-width="1.42433" />
            </svg>
            <p>

              <Link href="/about">
                About Us
              </Link>
            </p>
            <p>  <Link href="/services">
              Services
            </Link>
            </p>
            <p>
              <Link href="/portfolio">
                Portfolio
              </Link>
            </p>

            <p>  <Link href="/blog">
              Blog
            </Link>

            </p>

          </div>
          <div className='flex flex-col'>
            <p className='font-semibold mb-2'>SERVICES </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="166" height="2" viewBox="0 0 166 2" fill="none">
              <path d="M166 1H0" stroke="#6B6B6B" stroke-width="1.42433" />
            </svg>
            <p><Link
              href="services/e-commerce"
            >
              E-Commerce
            </Link></p>
            <p> <Link
              href="services/graphic-design"
            >
              Graphic Design
            </Link></p>
            <p >
              <Link href="services/social-media-management" >
                Social Media

              </Link>


            </p>
            <p>
              <Link
                href="services/web-development"
              >
                Web Development
              </Link>
            </p>
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold mb-2'>PREMIUM SERVICES</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="166" height="2" viewBox="0 0 166 2" fill="none">
              <path d="M166 1H0" stroke="#6B6B6B" stroke-width="1.42433" />
            </svg>
            <p><Link
              href="services/mobile-app-development"
            >
              Mobile App Development
            </Link></p>
            <p>Social Media</p>
            <p><Link
              href="services/real-estate"
            >
              Real Estate
            </Link></p>
            <p>
              <Link href="/services/pay-per-click" >
                Pay Per Click
              </Link>
            </p>

          </div>
        </div>

      </div>
      <div className=' ml-[6.667vw] bg-[#DADADA] h-[0.2vh] mt-[4vw] mr-[6.59vw] '></div>

      <div className='flex flex-row mt-[5vh] ml-[6.667vw] mb-5 justify-between '>
        <p className='text-white mb-[1.92vh] text-sm sm:text-base md:text-lg'>
          © 2023 Your Company. All rights reserved.
        </p>
        <div className='flex mt-[2.82vh]  flex-row gap-4 '>
          <p className='text-white'><Link href="/terms-and-conditions">
            Terms & Conditions
          </Link></p>
          <p className='text-white'>
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>            </p>
          <p className='text-white mr-[6.59vw] '>Support</p>

        </div>
      </div>
    </div>
  );
};

export default Footer;
