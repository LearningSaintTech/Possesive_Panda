import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import panda from "../../assets/home/services/Panda.png";
import CircleProgress from "./(CircleAnimation)/CircleProgress";

const OurServices = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsComponentVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsScrollLocked(true);
        } else {
          setIsScrollLocked(false);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px 0px 0px", // Adjust as needed
        threshold: 0.6, // Trigger when 50% of the component is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleWheelScroll = (event) => {
      if (!isComponentVisible || !isScrollLocked) return;

      event.preventDefault(); // Prevent default scroll behavior

      if (event.deltaY > 0) {
        // Scroll down, increase progress clockwise
        if (progress < 100) {
          setProgress((prev) => {
            const newProgress = Math.min(prev + 1, 100);
            updateActiveSection(newProgress);
            return newProgress;
          });
        } else if (progress === 100) {
          setProgress(0);
          setIsScrollLocked(false);
          setActiveSection(1);
        }
      } else if (event.deltaY < 0) {
        // Scroll up, decrease progress counterclockwise
        if (progress > -100) {
          setProgress((prev) => {
            const newProgress = Math.max(prev - 1, -100);
            updateActiveSection(100 + newProgress);
            if (newProgress === -100) {
              setProgress(0);
              setIsScrollLocked(false);
            }
            return newProgress;
          });
        }
      }
    };

    window.addEventListener("wheel", handleWheelScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
    };
  }, [progress, isComponentVisible, isScrollLocked]);

  const updateActiveSection = (progressValue) => {
    const adjustedProgress = Math.abs(progressValue);

    if (adjustedProgress >= 75) {
      if (activeSection !== 4) {
        setActiveSection(4);
      }
    } else if (adjustedProgress >= 50) {
      if (activeSection !== 3) {
        setActiveSection(3);
      }
    } else if (adjustedProgress >= 25) {
      if (activeSection !== 2) {
        setActiveSection(2);
      }
    } else {
      if (activeSection !== 1) {
        setActiveSection(1);
      }
    }
  };

  return (
    <div className="sm:pt-[5vw] sm:pb-[7.813vw] sm:px-[5.208vw] px-[7.692vw] flex flex-col gap-4" ref={containerRef}>
      <div className="flex justify-between relative bg-[#00111A] ">
        <div className="flex flex-col justify-between w-full sm:w-[42vw] gap-[1vw] h-fit">
          <p className="text-white font-medium sm:font-normal tracking-[0.015rem] text-[4.103vw] md:text-[2.5vw] lg:text-[1.25vw] text-center lg:text-left">
            Client Satisfaction
          </p>
          <h1 className="text-white text-[8.205vw] md:text-[5.3vw] lg:text-[3.34vw] font-medium leading-[normal] tracking-[0.082vw] lg:tracking-[0.04rem] text-center sm:text-left ">
            Our Delivery Framework
          </h1>
          <p className="text-white text-[4.103vw] md:text-[2.5vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.038vw] lg:tracking-[0.015rem] text-center lg:text-left lg:mb-0 mb-[10vw]">
            "We believe in delivering success with every step we take. Possesive Panda excels at providing IT services like E-Commerce, Mobile App Development, Web Development, Digital Marketing, and Virtual Assistant."
          </p>
        </div>
        <Image
          src={panda}
          alt="panda"
          className="hidden md:block size-[24.865vw] relative -top-[4.4vw] h-fit"
        />
      </div>
      <div>
        <CircleProgress progress={progress} activeSection={activeSection} />
      </div>
    </div>
  );
};

export default OurServices;
