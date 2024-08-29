"use client"
import logo1 from "../../assets/nav/nav-logo1.png";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HandlePage from "./(Input Form)/HandlePage";

const Footer = () => {
  const [open, setOpen] = useState(false);


  return (
    <div className='sm:px-[5.208vw] px-[7.69vw] flex flex-col min-h-screen bg-[#00111A]'>
      <div className='flex flex-col sm:flex-row mt-[7.5vh] gap-[2.5vw]'>
        <div className='w-full sm:w-[27.187vw] h-[35.5vh] bg-[#002E47]'>
          <p className="text-white text-[1.042vw] ml-[2.077vw] mt-[3.906vw] mb-[1.146vw] font-semibold ">Partner With Us</p>
          <div className="flex gap-[4.748vw]">
            <div className="text-white text-[2.5vw] ml-[2.077vw] font-semibold leading-[3vw] mb-[1.719vw]">Hire <br />Possesive <br />Panda!</div>
            <svg className="mt-[6vw]" xmlns="http://www.w3.org/2000/svg" width="2.813vw" height="2.813vw" viewBox="0 0 55 55" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M46.3286 31.1613C46.6453 31.4784 46.8232 31.9083 46.8232 32.3565C46.8232 32.8048 46.6453 33.2347 46.3286 33.5518L32.7974 47.0829C32.6426 47.2491 32.4559 47.3824 32.2484 47.4749C32.0409 47.5673 31.8169 47.617 31.5898 47.621C31.3627 47.625 31.1371 47.5832 30.9265 47.4982C30.7159 47.4131 30.5246 47.2865 30.364 47.1259C30.2034 46.9653 30.0768 46.774 29.9917 46.5633C29.9066 46.3527 29.8648 46.1272 29.8689 45.9C29.8729 45.6729 29.9226 45.449 30.015 45.2415C30.1075 45.034 30.2407 44.8473 30.4069 44.6924L41.0514 34.0479L9.05025 34.0479C8.60166 34.0479 8.17145 33.8697 7.85425 33.5525C7.53706 33.2353 7.35886 32.8051 7.35886 32.3565C7.35886 31.908 7.53706 31.4777 7.85426 31.1605C8.17145 30.8433 8.60166 30.6651 9.05025 30.6651L41.0514 30.6651L30.4069 20.0206C30.2407 19.8658 30.1075 19.6791 30.015 19.4716C29.9226 19.2641 29.8729 19.0401 29.8689 18.813C29.8648 18.5859 29.9066 18.3603 29.9917 18.1497C30.0768 17.9391 30.2034 17.7478 30.364 17.5872C30.5246 17.4266 30.7159 17.3 30.9265 17.2149C31.1371 17.1298 31.3627 17.0881 31.5898 17.0921C31.8169 17.0961 32.0409 17.1458 32.2484 17.2382C32.4559 17.3307 32.6426 17.464 32.7974 17.6301L46.3286 31.1613Z" fill="white" />
            </svg>

          </div>
        </div>
        <div className='w-full pl-[2.188vw] pt-[2.188vw] flex flex-col md:w-[27.187vw] h-[35.5vh] bg-[#131D22]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 64 64" fill="none">
            <path d="M42.6667 29.3333V21.3333H34.6667V16H42.6667V8H48V16H56V21.3333H48V29.3333H42.6667ZM53.2 56C47.6444 56 42.1449 54.8 36.7013 52.4C31.2578 50 26.3129 46.5778 21.8667 42.1333C17.4204 37.6889 13.9982 32.7556 11.6 27.3333C9.20178 21.9111 8.00178 16.4 8 10.8V8H23.7333L26.2 21.4L18.6 29.0667C19.5778 30.8 20.6667 32.4444 21.8667 34C23.0667 35.5556 24.3556 37 25.7333 38.3333C27.0222 39.6222 28.4338 40.856 29.968 42.0347C31.5022 43.2133 33.1573 44.3129 34.9333 45.3333L42.6667 37.6L56 40.3333V56H53.2Z" fill="white" />
          </svg>

          <div className='flex flex-row mt-[5.585vw] gap-[5.748vw] text-white'>
            <div>
              <p className="text-[1.25vw] text-white font-medium">For Best IT Services</p>
              <p className='text-[1.667vw] font-bold mt-[0.521vw] mb-[1.719vw]'>CONTACT NOW</p>
            </div>
            <button onClick={() => setOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.813vw" height="2.813vw" viewBox="0 0 55 55" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M46.3286 31.1613C46.6453 31.4784 46.8232 31.9083 46.8232 32.3565C46.8232 32.8048 46.6453 33.2347 46.3286 33.5518L32.7974 47.0829C32.6426 47.2491 32.4559 47.3824 32.2484 47.4749C32.0409 47.5673 31.8169 47.617 31.5898 47.621C31.3627 47.625 31.1371 47.5832 30.9265 47.4982C30.7159 47.4131 30.5246 47.2865 30.364 47.1259C30.2034 46.9653 30.0768 46.774 29.9917 46.5633C29.9066 46.3527 29.8648 46.1272 29.8689 45.9C29.8729 45.6729 29.9226 45.449 30.015 45.2415C30.1075 45.034 30.2407 44.8473 30.4069 44.6924L41.0514 34.0479L9.05025 34.0479C8.60166 34.0479 8.17145 33.8697 7.85425 33.5525C7.53706 33.2353 7.35886 32.8051 7.35886 32.3565C7.35886 31.908 7.53706 31.4777 7.85426 31.1605C8.17145 30.8433 8.60166 30.6651 9.05025 30.6651L41.0514 30.6651L30.4069 20.0206C30.2407 19.8658 30.1075 19.6791 30.015 19.4716C29.9226 19.2641 29.8729 19.0401 29.8689 18.813C29.8648 18.5859 29.9066 18.3603 29.9917 18.1497C30.0768 17.9391 30.2034 17.7478 30.364 17.5872C30.5246 17.4266 30.7159 17.3 30.9265 17.2149C31.1371 17.1298 31.3627 17.0881 31.5898 17.0921C31.8169 17.0961 32.0409 17.1458 32.2484 17.2382C32.4559 17.3307 32.6426 17.464 32.7974 17.6301L46.3286 31.1613Z" fill="white" />
              </svg>

            </button>
            {open && <HandlePage setOpen={setOpen} />}
          </div>
        </div>
        <div className='w-full pl-[2.188vw] pt-[2.188vw] flex flex-col md:w-[27.187vw] h-[35.5vh] bg-[#131D22]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
            <g clip-path="url(#clip0_4769_1420)">
              <path d="M0.496094 20.1104V45.7104C0.496094 47.4077 1.17038 49.0356 2.37061 50.2358C3.57084 51.4361 5.19871 52.1104 6.89609 52.1104H58.0961C59.7935 52.1104 61.4213 51.4361 62.6216 50.2358C63.8218 49.0356 64.4961 47.4077 64.4961 45.7104V20.1104L32.4961 32.9104L0.496094 20.1104Z" fill="white" />
              <path d="M6.89609 0.910156C5.19871 0.910156 3.57084 1.58444 2.37061 2.78467C1.17038 3.9849 0.496094 5.61277 0.496094 7.31015L0.496094 13.7102L32.4961 26.5101L64.4961 13.7102V7.31015C64.4961 5.61277 63.8218 3.9849 62.6216 2.78467C61.4213 1.58444 59.7935 0.910156 58.0961 0.910156H6.89609Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_4769_1420">
                <rect width="64" height="64" fill="white" transform="translate(0.496094 0.510254)" />
              </clipPath>
            </defs>
          </svg>

          <div className='flex flex-row mt-[5.585vw] gap-[5.748vw] text-white'>
            <div>
              <p className="text-[1.25vw] text-white font-medium">Connect With Us</p>
              <p className='text-[1.667vw] font-bold mt-[0.521vw] mb-[1.719vw]'>Ask Your Doubt</p>
            </div>
            <Link href="mailto:hello@possesivepanda.com">
              <svg className="mt-[2vw]" xmlns="http://www.w3.org/2000/svg" width="2.813vw" height="2.813vw" viewBox="0 0 55 55" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M46.3286 31.1613C46.6453 31.4784 46.8232 31.9083 46.8232 32.3565C46.8232 32.8048 46.6453 33.2347 46.3286 33.5518L32.7974 47.0829C32.6426 47.2491 32.4559 47.3824 32.2484 47.4749C32.0409 47.5673 31.8169 47.617 31.5898 47.621C31.3627 47.625 31.1371 47.5832 30.9265 47.4982C30.7159 47.4131 30.5246 47.2865 30.364 47.1259C30.2034 46.9653 30.0768 46.774 29.9917 46.5633C29.9066 46.3527 29.8648 46.1272 29.8689 45.9C29.8729 45.6729 29.9226 45.449 30.015 45.2415C30.1075 45.034 30.2407 44.8473 30.4069 44.6924L41.0514 34.0479L9.05025 34.0479C8.60166 34.0479 8.17145 33.8697 7.85425 33.5525C7.53706 33.2353 7.35886 32.8051 7.35886 32.3565C7.35886 31.908 7.53706 31.4777 7.85426 31.1605C8.17145 30.8433 8.60166 30.6651 9.05025 30.6651L41.0514 30.6651L30.4069 20.0206C30.2407 19.8658 30.1075 19.6791 30.015 19.4716C29.9226 19.2641 29.8729 19.0401 29.8689 18.813C29.8648 18.5859 29.9066 18.3603 29.9917 18.1497C30.0768 17.9391 30.2034 17.7478 30.364 17.5872C30.5246 17.4266 30.7159 17.3 30.9265 17.2149C31.1371 17.1298 31.3627 17.0881 31.5898 17.0921C31.8169 17.0961 32.0409 17.1458 32.2484 17.2382C32.4559 17.3307 32.6426 17.464 32.7974 17.6301L46.3286 31.1613Z" fill="white" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row mt-[3.333vw] gap-[6.563vw]'>
        <div className='flex flex-col'>
          <Image
            src={logo1}
            alt="logo"
            className="w-[60vw] h-[45vw] sm:w-[10.156vw] sm:h-[7.682vw]"
          />
          <p className='text-white text-[1.042vw] mt-[1.954vw] text-justify font-normal w-full sm:w-[30.104vw]'>
            Founded in 2024, Possesive Panda thrives on innovation, delivering premier IT solutions to clients around the globe. With a sharp focus on digital marketing, web and software development, and virtual assistance, we proudly serve over 50 clients. Join us as we transform challenges into opportunities and ideas into impact.
          </p>
          <div className='flex flex-row mt-[1.719vw] justify-center sm:gap-[5vw]'>
            <Link href="https://in.linkedin.com/company/possesive-panda" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.335vw" height="1.335vw" viewBox="0 0 27 26" fill="none">
                <path d="M7.75 5.00002C7.74974 5.53046 7.53877 6.03906 7.16351 6.41394C6.78825 6.78883 6.27943 6.99929 5.749 6.99902C5.21857 6.99876 4.70996 6.78779 4.33508 6.41253C3.96019 6.03727 3.74974 5.52846 3.75 4.99802C3.75027 4.46759 3.96123 3.95899 4.33649 3.5841C4.71175 3.20922 5.22057 2.99876 5.751 2.99902C6.28143 2.99929 6.79004 3.21026 7.16492 3.58552C7.53981 3.96078 7.75027 4.46959 7.75 5.00002ZM7.81 8.48002H3.81V21H7.81V8.48002ZM14.13 8.48002H10.15V21H14.09V14.43C14.09 10.77 18.86 10.43 18.86 14.43V21H22.81V13.07C22.81 6.90002 15.75 7.13002 14.09 10.16L14.13 8.48002Z" fill="white" />
              </svg>
            </Link>
            <Link href="https://x.com/possesivepanda " target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.335vw" height="1.335vw" viewBox="0 0 27 26" fill="none">
                <path d="M1 2H3.5L18.5 22H16L1 2ZM5.5 2H8L23 22H20.5L5.5 2ZM3 2H8V4H3V2ZM16 20H21V22H16V20ZM18.5 2H22L5 22H1.5L18.5 2Z" fill="white" />
              </svg>
            </Link>
            <Link href="https://www.instagram.com/possesivepanda/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.335vw" height="1.335vw" viewBox="0 0 27 26" fill="none">
                <path d="M3.48047 11.7506C3.48047 7.72222 3.48047 5.7075 4.73246 4.45658C5.98444 3.20566 7.99809 3.20459 12.0265 3.20459H14.163C18.1913 3.20459 20.206 3.20459 21.457 4.45658C22.7079 5.70857 22.709 7.72222 22.709 11.7506V13.8871C22.709 17.9154 22.709 19.9302 21.457 21.1811C20.205 22.432 18.1913 22.4331 14.163 22.4331H12.0265C7.99809 22.4331 5.98338 22.4331 4.73246 21.1811C3.48154 19.9291 3.48047 17.9154 3.48047 13.8871V11.7506Z" stroke="white" stroke-width="2.84866" />
                <path d="M17.9022 9.61442C18.7871 9.61442 19.5046 8.89701 19.5046 8.01204C19.5046 7.12708 18.7871 6.40967 17.9022 6.40967C17.0172 6.40967 16.2998 7.12708 16.2998 8.01204C16.2998 8.89701 17.0172 9.61442 17.9022 9.61442Z" fill="white" />
                <path d="M13.0949 16.0238C14.8648 16.0238 16.2996 14.5889 16.2996 12.819C16.2996 11.0491 14.8648 9.61426 13.0949 9.61426C11.325 9.61426 9.89014 11.0491 9.89014 12.819C9.89014 14.5889 11.325 16.0238 13.0949 16.0238Z" stroke="white" stroke-width="2.84866" />
              </svg>
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61559502103126" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.335vw" height="1.335vw" viewBox="0 0 26 26" fill="none">
                <path d="M15.1447 14.4211H17.8154L18.8836 10.1481H15.1447V8.0116C15.1447 6.9113 15.1447 5.8751 17.2812 5.8751H18.8836V2.28579C18.5354 2.23985 17.2203 2.13623 15.8316 2.13623C12.9313 2.13623 10.8717 3.90632 10.8717 7.157V10.1481H7.66699V14.4211H10.8717V23.5012H15.1447V14.4211Z" fill="white" />
              </svg>
            </Link>
            {/* <Link href="https://www.instagram.com/possesivepanda/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.335vw" height="1.335vw" viewBox="0 0 27 26" fill="none">
                <path d="M12.8269 0C6.20587 0 0.838867 5.367 0.838867 11.987C0.838867 17.066 3.99687 21.404 8.45687 23.149C8.35187 22.2 8.25787 20.746 8.49787 19.71C8.71687 18.773 9.90387 13.753 9.90387 13.753C9.90387 13.753 9.54487 13.033 9.54487 11.972C9.54487 10.309 10.5119 9.061 11.7129 9.061C12.7369 9.061 13.2309 9.83 13.2309 10.749C13.2309 11.778 12.5779 13.316 12.2389 14.741C11.9539 15.934 12.8389 16.906 14.0139 16.906C16.1419 16.906 17.7819 14.661 17.7819 11.419C17.7819 8.558 15.7189 6.55 12.7739 6.55C9.36387 6.55 7.36487 9.112 7.36487 11.749C7.36487 12.782 7.75887 13.892 8.25387 14.49C8.35287 14.61 8.36587 14.715 8.33887 14.835C8.24887 15.21 8.04587 16.034 8.00487 16.198C7.95187 16.423 7.83287 16.469 7.60387 16.363C6.10887 15.673 5.17087 13.485 5.17087 11.717C5.17087 7.941 7.91887 4.465 13.0909 4.465C17.2489 4.465 20.4829 7.432 20.4829 11.388C20.4829 15.523 17.8759 18.85 14.2499 18.85C13.0359 18.85 11.8959 18.221 11.4919 17.471L10.7429 20.319C10.4739 21.364 9.73887 22.671 9.24487 23.465C10.3679 23.81 11.5509 24 12.7949 24C19.4019 24 24.7799 18.635 24.7799 12.013C24.7799 5.39 19.4019 0.026 12.7949 0.026L12.8269 0Z" fill="white" />
              </svg>
            </Link> */}
          </div>
        </div>

        <div className='flex flex-row flex-wrap gap-[2vw] text-white sm:mt-[2.573vw]'>
          <div className='flex flex-col'>
            <p className='text-[1.25vw] font-medium mb-[1.094vw]'>MENU</p>
            <svg className="mb-[1.094vw]" xmlns="http://www.w3.org/2000/svg" width="130" height="2" viewBox="0 0 166 2" fill="none">
              <path d="M166 1H0" stroke="#6B6B6B" stroke-width="1.42433" />
            </svg>
            <div className="flex flex-col gap-[0.625vw]">
              <p className="text-[1.25vw] font-normal capitalize">
                <Link href="/about">
                  About Us
                </Link>
              </p>
              <p className="text-[1.25vw] font-normal capitalize">  <Link href="/services">
                Services
              </Link>
              </p>
              <p className="text-[1.25vw] font-normal capitalize">
                <Link href="/portfolio">
                  Portfolio
                </Link>
              </p>
              <p className="text-[1.25vw] font-normal capitalize">
                <Link href="/Insights">
                  Insights
                </Link>
              </p>
              <p className="text-[1.25vw] font-normal capitalize">  <Link href="/blog">
                Blog
              </Link>
              </p>
            </div>
          </div>

          <div className='flex flex-col'>
            <p className='text-[1.25vw] font-medium mb-[1.094vw]'>SERVICES </p>
            <svg className="mb-[1.094vw]" xmlns="http://www.w3.org/2000/svg" width="166" height="2" viewBox="0 0 166 2" fill="none">
              <path d="M166 1H0" stroke="#6B6B6B" stroke-width="1.42433" />
            </svg>
            <div className="flex flex-col gap-[0.625vw]">
              <p className="text-[1.25vw] font-normal capitalize">
                <Link
                  href="services/e-commerce"
                >
                  E-Commerce
                </Link></p>
              <p className="text-[1.25vw] font-normal capitalize"> <Link
                href="services/graphic-design"
              >
                Graphic Design
              </Link></p>
              <p className="text-[1.25vw] font-normal capitalize">
                <Link
                  href="services/mobile-app-development"
                >
                  App Development
                </Link>
              </p>
              <p className="text-[1.25vw] font-normal capitalize">
                <Link
                  href="services/web-development"
                >
                  Web Development
                </Link>
              </p>
            </div>
          </div>

          <div className='flex flex-col'>
            <p className='text-[1.25vw] font-medium mb-[1.094vw]'>PREMIUM SERVICES</p>
            <svg className="mb-[1.094vw]" xmlns="http://www.w3.org/2000/svg" width="166" height="2" viewBox="0 0 166 2" fill="none">
              <path d="M166 1H0" stroke="#6B6B6B" stroke-width="1.42433" />
            </svg>
            <div className="flex flex-col gap-[0.625vw]">


              <p className="text-[1.25vw] font-normal capitalize">
                <Link href="services/search-engine-optimization" >
                  SEO
                </Link>
              </p>
              <p className="text-[1.25vw] font-normal capitalize">
                <Link href="services/social-media-management" >
                  Social Media
                </Link>
              </p>
              <p className="text-[1.25vw] font-normal capitalize">
                <Link href="/services/pay-per-click" >
                  Pay Per Click
                </Link>
              </p>
              <p className="text-[1.25vw] font-normal capitalize">
                <Link href="/services/digital-marketing" >
                  DIgital Marketing
                </Link>
              </p>
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='text-[1.25vw] font-medium mb-[1.094vw]'>VIRTUAL SERVICES</p>
            <svg className="mb-[1.094vw]" xmlns="http://www.w3.org/2000/svg" width="166" height="2" viewBox="0 0 166 2" fill="none">
              <path d="M166 1H0" stroke="#6B6B6B" stroke-width="1.42433" />
            </svg>
            <div className="flex flex-col gap-[0.625vw]">

              <p className="text-[1.25vw] font-normal capitalize"><Link
                href="services/real-estate"
              >
                Real Estate
              </Link>
              </p>

              <p className="text-[1.25vw] font-normal capitalize">
                <Link href="/services/virtual-assistant" >
                  Virtual Assistant
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#6B6B6B] h-[0.1vh] mt-[4vw]'></div>

      <div className='flex mt-[1.927vw] mb-[1.395vw] justify-between px-[2vw]'>
        <p className='text-white text-[1.042vw] font-normal'>
          Copyright © 2024 | Alrights reserved by Possessive Panda
        </p>
        <div className='flex gap-[1.296vw]'>
          <p className='text-white text-[1.042vw] font-normal'><Link href="/terms-and-conditions">
            Terms & Conditions
          </Link></p>
          <p className='text-white text-[1.042vw] font-normal'>
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>
          </p>
          <p className='text-white text-[1.042vw] font-normal'>Support</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
