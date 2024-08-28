import React, { useEffect, useRef } from 'react';
import { GoArrowRight } from "react-icons/go";

const Banner = ({ whyUsRef }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Unmute the video when more than 10% of the banner is visible
          videoElement.muted = false;
          videoElement.play(); // Ensure the video is playing
        } else {
          // Mute the video when only 10% or less of the banner is visible
          videoElement.muted = true;
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when only 10% of the banner is remaining visible
    });

    observer.observe(videoElement.parentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScrollToWhyUs = () => {
    if (whyUsRef.current) {
      whyUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-auto h-auto sm:h-[55.417vw] sm:overflow-hidden ">
      {/* Text Content */}
      <div className="sm:bg-transparent bg-[#00111A] px-[7.69vw] sm:px-0  relative sm:ml-[5.208vw] w-full z-10 lg:w-[43.333vw] mt-[18vw] lg:mt-[13.958vw] flex flex-col gap-[5vw] lg:gap-[1.042vw]">
        <h1 className="sm:w-[46.875vw] text-center lg:text-left text-white text-[6.818vw] lg:text-[3.333vw] mt-[14.545vw] sm:mt-0 font-semibold tracking-wide">
          Boost Your <span className="text-[#60e2ff]">Business</span> With Powerful IT Technology
        </h1>
        <p className="text-white text-[3.5ovw] lg:text-[1.25vw] font-normal leading-[150%] lg:tracking-[0.015rem] tracking-[0.033vw] lg:w-[46.875vw] text-center lg:text-start">
          Elevate your business with our cutting-edge IT services and solutions, designed to meet every need and fuel your tech-driven dreams.
        </p>

        <button
          className="bg-stone-900 text-[4vw] md:text-[2.8vw] lg:text-[1.25vw] flex justify-center font-normal items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white px-[3vw] py-[2.5vw] md:py-[1vw] w-full lg:w-fit mx-auto lg:mx-0 hover:text-[#2a2a2a] hover:bg-[#60E2FF] hover:duration-300 duration-300 border-none"
          onClick={handleScrollToWhyUs}
        >
          Why Us
          <GoArrowRight className="ml-2 md:ml-5 size-[3.5vw] md:size-[2vw] lg:size-[1.5vw]" />
        </button>
      </div>

      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted // Start muted
        className="sm:absolute sm:top-0 sm:left-0 w-full h-full object-cover z-0 sm:mt-0 mt-2"
      >
        <source src="/Home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="sm:absolute sm:top-0 sm:left-0 w-full h-full bg-black/50 z-1"></div>

      {/* Second Div Content Positioned at the Bottom Right */}
      <div className="absolute bottom-4 sm:bottom-[9vw] sm:px-2 px-[7.69vw] z-10 sm:text-left py-2 sm:right-[4vw]">
        <h1 className='sm:w-[15.208vw] text-white text-[2.5vw] text-center sm:text-left sm:text-[1.406vw] font-extralight sm:leading-[2.083vw]'>
          Trust us to keep your technology running smoothly,
          <span className='text-[#60e2ff] font-normal'> so you can focus on what truly matters</span>—growing your business.
        </h1>
        <div className="hidden sm:block w-[14.688vw] overflow-hidden z-10">
          <div className="whitespace-nowrap animate-marquee text-white text-[0.938vw] font-normal  leading-[35px] mt-[20px]">
            <span className="mx-4">Scroll down to discover how it works</span>
            <span className="mx-4">Scroll down to discover how it works</span>
            <span className="mx-4">Scroll down to discover how it works</span>
            <span className="mx-4">Scroll down to discover how it works</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
