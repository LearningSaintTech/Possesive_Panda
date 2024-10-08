import React from "react";
import { FcGoogle } from "react-icons/fc";
import { HiMiniStar } from "react-icons/hi2";
import Image from "next/image";
import { TiStarHalf } from "react-icons/ti";

import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <div className="bg-[#00111A]">
      <div className=" flex  sm:flex-row flex-col bg-[#00111A] px-[7.692vw] sm:px-[5.208vw] gap-[5.173vw] mb-[5.071vw] ">
        <div className=" flex flex-col  mt-[9.583vw] gap-[1.042vw] ">
          <p className="sm:text-white text-[#00AFF1] sm:text-[2.5vw] text-[5.647vw] text-center sm:text-left font-semibold leading-[normal] sm:w-[33.125vw] ">
            Battle-tested Service You Can Count On....
          </p>
          <p className="text-white sm:text-[1.25vw] text-[3.765vw] text-center sm:text-left font-normal leading-[normal]  sm:w-[34.74vw] sm:mb-[10.052vw] ">
            possesive Panda has been top ranked as an IT service provider by
            many of the B2B review platforms.
          </p>
        </div>

        <div className="grid grid-cols-2  mt-[8.333vw] mb-[3.5vw] gap-x-[2vw] gap-y-[2vw]  sm:gap-x-[1.39vw] sm:gap-y-[1.39vw]  ">
          <div className=" flex flex-row bg-white  rounded-[0.417vw] gap-[2.292vw] border-[0.139vw]  ">
            <div className="flex  flex-col gap-[0.417vw]  mt-[1.667vw] ">
              <FcGoogle className="sm:w-[3.5vw] sm:h-[3.5vw] w-[8.68vw] h-[8.928vw]  ml-[2.708vw] " />
              <p className="text-[#93919F] sm:text-[1.042vw] text-[2.042vw]  font-semibold leading-[normal]  ml-[2.293vw]">
                Google
              </p>
            </div>

            <div className="flex flex-col gap-[0.833vw] py-[1vw]">
              <p className="  text-[#3A4254] sm:text-[1.806vw] text-[3.668vw]  font-semibold leading-[normal] ">
                4.8
              </p>
              <p className="text-[#5C6371] sm:text-[0.938vw] text-[1.901vw] font-semibold leading-[normal]">
                54 Reviews
              </p>
              <p className="flex flex-row gap-[0.417vw]  mr-[4.167vw] ">
                <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400  "></HiMiniStar>
                <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400  "></HiMiniStar>
                <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400  "></HiMiniStar>
                <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400  "></HiMiniStar>
                <TiStarHalf className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400" />
              </p>
            </div>
          </div>
          <div className=" flex flex-row bg-white  rounded-[0.417vw] gap-[2.292vw] border-[0.139vw]  ">
            <div className="flex  flex-col gap-[0.417vw]  mt-[1.667vw] ">
              <Image
                src="/Clutch.svg"
                width={56.0205}
                height={63.35}
                alt="Picture of the author"
                className="ml-[2.708vw] sm:w-[2.918vw] sm:h-[3.299vw] w-[8.68vw] h-[8.928vw] "
              />
              <p className="text-[#93919F] sm:text-[1.042vw] text-[2.042vw]  font-semibold leading-[normal]  ml-[2.293vw]">
                Clutch
              </p>
            </div>

            <div className="flex  flex-col gap-[0.833vw] py-[1vw]">
              <p className="  text-[#3A4254] sm:text-[1.806vw] text-[3.67vw] font-semibold leading-[normal] ">
                4.8
              </p>
              <p className="text-[#5C6371] sm:text-[0.938vw] text-[1.901vw] font-semibold leading-[normal]">
                18 Reviews
              </p>
              <p className="flex flex-row gap-[0.417vw]  mr-[4.167vw] ">
                <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400  "></HiMiniStar>
                <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400"></HiMiniStar>
                <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400"></HiMiniStar>
                <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400"></HiMiniStar>
                <TiStarHalf className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400" />
              </p>
            </div>
          </div>
          <div className=" flex flex-row bg-white  rounded-[0.417vw] gap-[2.292vw] border-[0.139vw]  ">
            <div className="flex  flex-col gap-[0.417vw]  mt-[1.667vw] ">
              <Image
                src="/Goodfirms.svg"
                width={56.0205}
                height={63.35}
                alt="Picture of the author"
                className="ml-[2.708vw] sm:w-[3.5vw] sm:h-[3.5vw] w-[8.68vw] h-[8.928vw]"
              />
              <p className="text-[#93919F] sm:text-[1.042vw] text-[2.042vw]  font-semibold leading-[normal]  ml-[2.293vw]">
                Goodfirms
              </p>
            </div>

            <div className="flex bg flex-col gap-[0.833vw] py-[1vw]">
              <p className="  text-[#3A4254] sm:text-[1.806vw] text-[3.668vw] font-semibold leading-[normal] ">
                4.8
              </p>
              <p className="text-[#5C6371] sm:text-[0.938vw] text-[1.901vw] font-semibold leading-[normal]">
                18 Reviews
              </p>
              <p className="flex flex-row gap-[0.417vw] mr-[4.167vw] ">
                <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400  "></HiMiniStar>
                <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400"></HiMiniStar>
                <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400"></HiMiniStar>
                <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400"></HiMiniStar>
                <TiStarHalf className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400" />
              </p>
            </div>
          </div>
          <div className=" flex flex-row bg-white  rounded-[0.417vw] gap-[2.292vw] border-[0.139vw]  ">
            <div className="flex  flex-col gap-[0.417vw]  mt-[1.667vw] ">
              <Image
                src="/Capterra.svg"
                width={56.0205}
                height={63.35}
                alt="Picture of the author"
                className="ml-[2.708vw] sm:w-[3.5vw] sm:h-[3.5vw] w-[8.68vw] h-[8.928vw]"
              />
              <p className="text-[#93919F] sm:text-[1.042vw] text-[2.042vw]  font-semibold leading-[normal]  ml-[2.293vw]">
                Capterra
              </p>
            </div>

            <div className="flex  flex-col gap-[0.833vw] py-[1vw]">
              <p className="  text-[#3A4254] sm:text-[1.806vw] text-[3.668vw] font-semibold leading-[normal] ">
                4.7
              </p>
              <p className="text-[#5C6371] sm:text-[0.938vw] text-[1.901vw] font-semibold leading-[normal]">
                27 Reviews
              </p>
              <p className="flex flex-row gap-[0.417vw]  mr-[4.167vw] ">
                <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400 "></HiMiniStar>
                <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400"></HiMiniStar>
                <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400"></HiMiniStar>
                <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400"></HiMiniStar>
                <TiStarHalf className="sm:h-[1.354vw] sm:w-[1.354vw] h-[3.472vw] w-[3.224vw] text-orange-400" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="  bg-[#00111A]">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Review;
