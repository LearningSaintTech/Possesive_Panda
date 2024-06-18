import React from "react";
import downButton from "../../assets/footer/downButton.png";
import panda from "../../assets/footer/panda.png";
import grey from "../../assets/footer/grey-background.png";
import Image from "next/image";

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
              <Image
                src={downButton}
                alt="down-arrow"
                className="size-auto h-fit mt-4"
              />
            </button>
          </div>

          <h5 className="text-zinc-900 text-[6vw] lg:text-[1.25vw] font-medium leading-[125%] tracking-[0.075rem] mt-[30px] lg:mt-0 lg:mb-[1vw] text-center lg:text-start">
            Get In Touch With Us
          </h5>
          <div className="flex bg-[#FAFAFA] border rounded-[1.5vw] lg:rounded-[0.26vw] w-8/12 lg:w-fit px-[1vw] lg:px-[1vw] items-center lg:mb-[2.5vw] mx-auto lg:mx-0 my-[30px] lg:my-0">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-[#FAFAFA] py-[0.677vw] text-[5vw] lg:text-[1.042vw] pl-[1.042vw] w-9/12 lg:w-[13.333vw] text-[#2A2A2A]"
            />
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-[10vw] lg:size-[2vw] ml-auto lg:ml-0"
            >
              <g id="iconamoon:arrow-up-2">
                <path
                  id="Vector"
                  d="M13.3333 22.6663L20 15.9997L13.3333 9.33301"
                  stroke="#2A2A2A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
          <div className="ml-7 lg:ml-0">
            <div className="flex mb-[1.2vw]">
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
              <p className="text-[5vw] lg:text-[1.25vw] font-medium tracking-[0.015rem] leading-[125%] text-[#2A2A2A] ml-[1.042vw]">
                hello@possesivepanda.com
              </p>
            </div>
            <div className="flex items-center">
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
              <p className="text-[5vw] lg:text-[1.25vw] font-medium tracking-[0.015rem] leading-[125%] text-[#2A2A2A] ml-[1.042vw]">
                +91 8080555520
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-fit">
          <h6 className="text-[9vw] lg:text-[1.667vw] font-medium text-[#2A2A2A] leading-[125%] tracking-[0.1rem] my-[20px] underline text-center lg:text-start">
            Services:
          </h6>
          <div className="flex lg:gap-[72px] flex-col lg:flex-row items-center">
            <div className="">
              <h4 className="text-[#2A2A2A] text-[5vw] lg:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[30px] lg:mb-[20px]">
                Startup Bundle Services
              </h4>
              <h4 className="text-[#2A2A2A] text-[5vw] lg:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[30px] lg:mb-[20px]">
                Startup Bundle Services
              </h4>
              <h4 className="text-[#2A2A2A] text-[5vw] lg:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[30px] lg:mb-[50px]">
                Virtual Assistant Services
              </h4>
            </div>
            <div className="">
              <h4 className="text-[#2A2A2A] text-[5vw] lg:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[30px] lg:mb-[20px]">
                Virtual Assistant Services
              </h4>
              <h4 className="text-[#2A2A2A] text-[5vw] lg:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[30px] lg:mb-[20px]">
                Startup Bundle Services
              </h4>
              <h4 className="text-[#2A2A2A] text-[5vw] lg:text-[1.25vw] font-normal tracking-[0.015rem] leading-[125%] mb-[35px] lg:mb-[50px]">
                Startup Bundle Services
              </h4>
            </div>
          </div>
          <div className="flex mt-[15px] lg:mt-[33px] w-[45vw]  ml-9 lg:ml-0 gap-[2vw]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              className="size-[5vw] lg:size-auto"
            >
              <path
                d="M17.8531 12.7029L29.0207 0H26.3738L16.6797 11.0293L8.93317 0H0L11.7124 16.68L0 30H2.64686L12.8858 18.3514L21.0668 30H30L17.8531 12.7029ZM14.2291 16.8257L13.0424 15.165L3.59974 1.95H7.66488L15.2834 12.615L16.4701 14.2757L26.376 28.14H22.3109L14.2291 16.8257Z"
                fill="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              className="size-[5vw] lg:size-auto"
            >
              <path
                d="M6.22874 8.99637C7.73924 8.99637 8.96374 7.77187 8.96374 6.26137C8.96374 4.75087 7.73924 3.52637 6.22874 3.52637C4.71824 3.52637 3.49374 4.75087 3.49374 6.26137C3.49374 7.77187 4.71824 8.99637 6.22874 8.99637Z"
                fill="#2A2A2A"
              />
              <path
                d="M11.5462 11.0688V26.2426H16.2575V18.7388C16.2575 16.7588 16.63 14.8413 19.085 14.8413C21.5062 14.8413 21.5362 17.1051 21.5362 18.8638V26.2438H26.25V17.9226C26.25 13.8351 25.37 10.6938 20.5925 10.6938C18.2987 10.6938 16.7612 11.9526 16.1325 13.1438H16.0687V11.0688H11.5462ZM3.86874 11.0688H8.58749V26.2426H3.86874V11.0688Z"
                fill="#2A2A2A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              className="size-[5vw] lg:size-auto"
            >
              <g clipPath="url(#clip0_1408_5152)">
                <path
                  d="M15 0C10.9294 0 10.4175 0.01875 8.81812 0.09C7.21875 0.165 6.12937 0.41625 5.175 0.7875C4.17346 1.16311 3.26651 1.75387 2.51813 2.51813C1.75387 3.26651 1.16311 4.17346 0.7875 5.175C0.41625 6.1275 0.163125 7.21875 0.09 8.8125C0.01875 10.4156 0 10.9256 0 15.0019C0 19.0744 0.01875 19.5844 0.09 21.1838C0.165 22.7812 0.41625 23.8706 0.7875 24.825C1.17188 25.8112 1.68375 26.6475 2.51813 27.4819C3.35063 28.3162 4.18687 28.83 5.17313 29.2125C6.12937 29.5837 7.21688 29.8369 8.81437 29.91C10.4156 29.9812 10.9256 30 15 30C19.0744 30 19.5825 29.9812 21.1838 29.91C22.7794 29.835 23.8725 29.5837 24.8269 29.2125C25.8277 28.8366 26.734 28.2459 27.4819 27.4819C28.3162 26.6475 28.8281 25.8112 29.2125 24.825C29.5819 23.8706 29.835 22.7812 29.91 21.1838C29.9812 19.5844 30 19.0744 30 15C30 10.9256 29.9812 10.4156 29.91 8.81437C29.835 7.21875 29.5819 6.1275 29.2125 5.175C28.8369 4.17346 28.2461 3.26651 27.4819 2.51813C26.7335 1.75387 25.8265 1.16311 24.825 0.7875C23.8687 0.41625 22.7775 0.163125 21.1819 0.09C19.5806 0.01875 19.0725 0 14.9963 0H15ZM13.6556 2.70375H15.0019C19.0069 2.70375 19.4812 2.71688 21.0619 2.79C22.5244 2.85563 23.3194 3.10125 23.8481 3.30562C24.5475 3.5775 25.0481 3.90375 25.5731 4.42875C26.0981 4.95375 26.4225 5.4525 26.6944 6.15375C26.9006 6.68062 27.1444 7.47563 27.21 8.93813C27.2831 10.5188 27.2981 10.9931 27.2981 14.9963C27.2981 18.9994 27.2831 19.4756 27.21 21.0562C27.1444 22.5187 26.8988 23.3119 26.6944 23.8406C26.4522 24.4911 26.0686 25.0796 25.5712 25.5637C25.0462 26.0887 24.5475 26.4131 23.8463 26.685C23.3213 26.8913 22.5262 27.135 21.0619 27.2025C19.4812 27.2738 19.0069 27.2906 15.0019 27.2906C10.9969 27.2906 10.5206 27.2738 8.94 27.2025C7.4775 27.135 6.68437 26.8913 6.15562 26.685C5.50469 26.4436 4.9155 26.0606 4.43062 25.5637C3.93239 25.0793 3.54812 24.49 3.30562 23.8387C3.10125 23.3119 2.85563 22.5169 2.79 21.0544C2.71875 19.4738 2.70375 18.9994 2.70375 14.9925C2.70375 10.9856 2.71875 10.515 2.79 8.93437C2.8575 7.47187 3.10125 6.67688 3.3075 6.14813C3.57938 5.44875 3.90562 4.94812 4.43062 4.42312C4.95563 3.89812 5.45437 3.57375 6.15562 3.30188C6.68437 3.09563 7.4775 2.85188 8.94 2.78437C10.3238 2.72062 10.86 2.70188 13.6556 2.7V2.70375ZM23.0081 5.19375C22.7717 5.19375 22.5377 5.24031 22.3193 5.33077C22.1009 5.42123 21.9025 5.55381 21.7353 5.72096C21.5682 5.8881 21.4356 6.08653 21.3451 6.30492C21.2547 6.52331 21.2081 6.75737 21.2081 6.99375C21.2081 7.23013 21.2547 7.46419 21.3451 7.68258C21.4356 7.90097 21.5682 8.0994 21.7353 8.26654C21.9025 8.43369 22.1009 8.56627 22.3193 8.65673C22.5377 8.74719 22.7717 8.79375 23.0081 8.79375C23.4855 8.79375 23.9434 8.60411 24.2809 8.26654C24.6185 7.92898 24.8081 7.47114 24.8081 6.99375C24.8081 6.51636 24.6185 6.05852 24.2809 5.72096C23.9434 5.38339 23.4855 5.19375 23.0081 5.19375ZM15.0019 7.2975C13.9801 7.28156 12.9654 7.46904 12.0168 7.84901C11.0682 8.22899 10.2047 8.79388 9.47653 9.51079C8.74835 10.2277 8.17006 11.0823 7.77533 12.0249C7.3806 12.9674 7.17731 13.9791 7.17731 15.0009C7.17731 16.0228 7.3806 17.0345 7.77533 17.977C8.17006 18.9196 8.74835 19.7742 9.47653 20.4911C10.2047 21.208 11.0682 21.7729 12.0168 22.1529C12.9654 22.5328 13.9801 22.7203 15.0019 22.7044C17.0241 22.6728 18.9529 21.8473 20.3718 20.4061C21.7908 18.9649 22.5861 17.0234 22.5861 15.0009C22.5861 12.9784 21.7908 11.037 20.3718 9.59578C18.9529 8.15454 17.0241 7.32905 15.0019 7.2975ZM15.0019 9.99938C15.6586 9.99938 16.3088 10.1287 16.9155 10.38C17.5222 10.6313 18.0735 10.9997 18.5379 11.464C19.0022 11.9284 19.3705 12.4796 19.6219 13.0863C19.8732 13.693 20.0025 14.3433 20.0025 15C20.0025 15.6567 19.8732 16.307 19.6219 16.9137C19.3705 17.5204 19.0022 18.0716 18.5379 18.536C18.0735 19.0003 17.5222 19.3687 16.9155 19.62C16.3088 19.8713 15.6586 20.0006 15.0019 20.0006C13.6756 20.0006 12.4037 19.4738 11.4659 18.536C10.5281 17.5982 10.0013 16.3262 10.0013 15C10.0013 13.6738 10.5281 12.4018 11.4659 11.464C12.4037 10.5262 13.6756 9.99938 15.0019 9.99938Z"
                  fill="#2A2A2A"
                />
              </g>
              <defs>
                <clipPath id="clip0_1408_5152">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              className="size-[5vw] lg:size-auto"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.375 7.5H18.75V3.75H16.375C15.0158 3.75 13.7122 4.28995 12.7511 5.25108C11.79 6.2122 11.25 7.51577 11.25 8.875V11.25H8.75V15H11.25V27.5H15V15H17.5L18.25 11.25H15V8.25C15 8.05109 15.079 7.86032 15.2197 7.71967C15.3603 7.57902 15.5511 7.5 15.75 7.5H16.375Z"
                fill="#2A2A2A"
              />
            </svg>
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
