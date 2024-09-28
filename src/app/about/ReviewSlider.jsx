"use client"
import React, { useState, useEffect } from "react";
import { HiMiniStar } from "react-icons/hi2";
import Image from "next/image";
import { FaArrowRight, FaArrowLeftLong, FaArrowLeft } from "react-icons/fa6";

const reviewsData = [
  {
    id: 1,
    rating: 4.8,
    review:
      "We had a fantastic experience with Possesive Panda. Their virtual assistant services are effective and have resulted in a significant growth in our company's performance. Also, they have provided global professionals with industry expertise for our seamless administrative operations.  ",
    reviewer: "Catherine Whitaker, Google",
    image: "/Google.svg",
  },
  {
    id: 2,
    rating: 4.8,
    review:
      "Our need for exceptional web application development has been fulfilled by Possesive Panda’s renowned developers. The best thing we’ve experienced is the feedback meetings and actions that've been taken by them to resolve our queries. We willingly recommend Possesive Panda’s web and app development services. ",
    reviewer: "Solomon Williams, Clutch",
    image: "/Clutch.svg",
  },
  {
    id: 3,
    rating: 4.8,
    review:
      "Possesive Panda’s IT solution turned out to be a game changer for us and our business. We have learned a lot about how to boost our business capabilities and align our work processes.",
    reviewer: "Soumen Bhowmik, Goodfirms",
    image: "/Goodfirms.svg",
  },
  {
    id: 4,
    rating: 4.7,
    review:
      "Possesive Panda delivered top-class digital marketing services. Our website traffic has increased by 129%, and we are now getting a sufficient number of leads. We are great to have their services and happy to endorse Possesive Panda’s Digital Marketing services for your businesses. ",
    reviewer: "Daniel Brownsly , Capterra",
    image: "/Capterra.svg",
  },
];

const ReviewSlider = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatically switch reviews every 10 seconds (but pause for 20s after interaction)
  useEffect(() => {
    if (isPaused) return; // If paused, don't auto-slide

    const interval = setInterval(() => {
      setCurrentReview((prevReview) =>
        prevReview === reviewsData.length - 1 ? 0 : prevReview + 1
      );
    }, 2000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [isPaused]);

  // Resume auto-slide after 20 seconds if paused
  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
      }, 20000); // 20 seconds pause

      return () => clearTimeout(pauseTimeout);
    }
  }, [isPaused]);

  const handleNextReview = () => {
    setCurrentReview((prevReview) =>
      prevReview === reviewsData.length - 1 ? 0 : prevReview + 1
    );
    setIsPaused(true); // Pause for 20 seconds
  };

  const handlePrevReview = () => {
    setCurrentReview((prevReview) =>
      prevReview === 0 ? reviewsData.length - 1 : prevReview - 1
    );
    setIsPaused(true); // Pause for 20 seconds
  };

  return (
    <div className="flex sm:flex-row flex-col  px-[6.771vw]">
      {/* Left Arrow */}
      <div
        className="relative hidden  w-[2.987vw] h-[2.987vw] px-[1.5vw] py-[1.5vw] border mt-[5vw] rounded-full text-justify bg-white sm:flex items-center justify-center cursor-pointer"
        onClick={handlePrevReview}
      >
        <FaArrowLeftLong className="absolute text-[1vw] text-black" />
      </div>

      {/* Review Section */}
      <div className="flex sm:flex-row flex-col ">
        <div className="flex flex-row gap-[10vw] sm:gap-[5.33vw]">
          <div>
            <Image
              src={reviewsData[currentReview].image}
              width={84.031}
              height={86.698}
              alt="Review source logo"
              className="ml-[4.765vw] sm:ml-[7.846vw] mt-[8vw] sm:mt-[4vw] sm:w-[4.427vw] w-[19.773vw] sm:h-[4.427vw] h-[20vw]  sm:mr-[2.241vw] "
            />
          </div>
          <div className="flex flex-col sm:gap-[0.833vw] mt-[4vw] sm:mr-[8.626vw] mb-[5.988vw]">
            <p className="sm:text-[#3A4254] sm:text-[1.806vw] text-[#FFF] text-[8.471vw] font-semibold leading-[normal] ">
              {reviewsData[currentReview].rating}
            </p>

            <p className="flex flex-row  mr-[4.167vw]">
              <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] w-[11.926vw] h-[10.357vw] text-orange-400" />
              <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] w-[11.926vw] h-[10.357vw] text-orange-400" />
              <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] w-[11.926vw] h-[10.357vw] text-orange-400" />
              <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] w-[11.926vw] h-[10.357vw] text-orange-400" />
              <HiMiniStar className="sm:h-[1.354vw] sm:w-[1.354vw] w-[11.926vw] h-[10.357vw] text-orange-400" />
            </p>
          </div>
        </div>

        <div className="hidden sm:block sm:w-[0.139vw]  sm:h-[13.755vw] bg-white mx-6 sm:mr-[4vw]"></div>
        <div className="sm:hidden w-full h-[0.5vw] bg-white px-[11.294vw] "></div>

        <div className="text-white mt-[1.6vw]">
          <h2 className="  sm:mr-[7.708vw] text-[3.294vw]  sm:text-[1.042vw] mt:[7.529vw] font-semibold sm:px-0 px-[5vw] ">
            {reviewsData[currentReview].review}
          </h2>
          <p className="sm:mt-[1.542vw] mt-[2.6vw] text-[3.294vw] sm:text-[0.868vw] text-center sm:text-left ">
            - {reviewsData[currentReview].reviewer}
          </p>
        </div>

        {/* phone responsive arrow made */}

        <div className="mb-[12vw] sm:hidden flex justify-center text-center items-center mt-[3vw] gap-3 ">
          <div className=" bg-white h-[12vw] w-[12vw] rounded-full px-[3vw] py-[4vw] " onClick={handlePrevReview}>
            <FaArrowLeftLong className="absolute text-[5vw] text-black" />
          </div>
          <div className="relative bg-white h-[12vw] w-[12vw] rounded-full px-[3vw] py-[4vw] " onClick={handleNextReview}>
            <FaArrowRight className="absolute text-[5vw] text-black" />
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <div
        className="relative hidden w-[2.987vw] h-[2.987vw] px-[1.5vw] py-[1.5vw] border mt-[5vw] rounded-full text-justify bg-white sm:flex items-center justify-center cursor-pointer"
        onClick={handleNextReview}
      >
        <FaArrowRight className="absolute text-[1vw] text-black" />
      </div>
    </div>
  );
};

export default ReviewSlider;
