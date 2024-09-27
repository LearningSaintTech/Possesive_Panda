import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import panda from "../../assets/home/services/panda.png";

const OurServices = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(true);
  const containerRef = useRef();
  const progressRef = useRef();
  const lastScrollTimeRef = useRef(0);

  const SCROLL_DELAY = 100; // 


  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };


  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };


  const scrollIntoViewIfNeeded = () => {
    if (progressRef.current) {
      progressRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Intersection Observer to detect visibility of the progress component
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsComponentVisible(true);
          resetProgress();
          setIsScrollLocked(true);
          disableScroll();
          scrollIntoViewIfNeeded();
        } else {
          setIsComponentVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
      enableScroll();
    };
  }, []);


  useEffect(() => {
    const handleWheelScroll = (event) => {
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTimeRef.current;

      if (timeSinceLastScroll < SCROLL_DELAY) return;

      lastScrollTimeRef.current = now;

      if (!isComponentVisible || !isScrollLocked) return;

      event.preventDefault();

      if (event.deltaY > 0) {

        if (progress < 100) {
          setProgress((prev) => {
            const newProgress = Math.min(prev + 1, 100);
            updateActiveSection(newProgress);
            if (newProgress === 100) {
              setIsScrollLocked(false);
              enableScroll();
            }
            return newProgress;
          });
        }
      } else if (event.deltaY < 0) {

        if (progress > -100) {
          setProgress((prev) => {
            const newProgress = Math.max(prev - 1, -100);
            updateActiveSection(100 + newProgress);
            if (newProgress === -100) {
              setIsScrollLocked(false);
              enableScroll();
            }
            return newProgress;
          });
        }
      }
    };

    if (isScrollLocked) {
      window.addEventListener("wheel", handleWheelScroll, { passive: false });
    } else {
      window.removeEventListener("wheel", handleWheelScroll);
    }

    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
    };
  }, [progress, isComponentVisible, isScrollLocked]);

  const resetProgress = () => {
    setProgress(0);
    setActiveSection(1);
  };

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
    <div className=" sm:px-[5.208vw] px-[7.692vw]  flex flex-col gap-4" ref={containerRef}  >
      <div className="flex justify-between relative bg-[#00111A] ">
        <div className="flex flex-col justify-between w-full sm:w-[42vw] gap-[1vw] h-fit">
          <p className="text-white font-medium sm:font-normal tracking-[0.015rem] text-[4.103vw]  md:text-[2vw] lg:text-[1.25vw] text-center sm:text-left">
            Client Satisfaction
          </p>
          <h1 className="text-white text-[8.205vw] sm:text-[3.34vw] font-medium leading-[normal] tracking-[0.082vw] lg:tracking-[0.04rem] text-center sm:text-left ">
            Our Delivery Framework
          </h1>
          <p className="text-white text-[4.103vw] md:text-[1.5vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.038vw] sm:tracking-[0.015rem] text-center sm:text-left sm:mb-0 mb-[10vw]">
            &quot;We believe in delivering success with every step we take. Possesive Panda excels at providing IT services like E-Commerce, Mobile App Development, Web Development, Digital Marketing, and Virtual Assistant.&quot;
          </p>
        </div>
        <Image
          src={panda}
          alt="panda"
          className="hidden md:block size-[24.865vw] relative -top-[4.4vw] h-fit"
        />
        
      </div>


      <div className="lg:hidden w-full ">
        <div className="">
          <div className="flex md:gap-[2.5vw] gap-[5.128vw] text-center justify-center items-center  " >
            <div className=" relative md:w-[4vw] md:h-[4vw] w-[14vw] h-[14vw] bg-[#00AFF1] rounded-full flex justify-center items-center "> <p className="text-white md:text-[2vw] text-[5.484vw] font-medium " >01</p> </div>
            <p className="md:text-[2vw] text-[6.154vw] text-white font-medium ">Planning</p>
          </div>
          <p className="md:text-[1.8vw] text-[4.103vw] text-white text-center font-normal md:mt-3 mt-[5.128vw] leading-[normal] tracking-[0.038vw]">After onboarding, the next step is to plan the product&apos;s implementation, which involves gathering customer requirements, developing a project charter, and ensuring stakeholder alignment to ensure a successful implementation process and a collaborative environment.</p>
        </div>

        <div className="md:mt-4 mt-[7.692vw]">
          <div className="flex md:gap-[2.5vw] gap-[5.128vw] text-center justify-center items-center  " >
            <div className=" relative md:w-[4vw] md:h-[4vw] w-[14vw] h-[14vw] bg-[#00AFF1] rounded-full flex justify-center items-center "> <p className="text-white md:text-[2vw] text-[5.484vw] font-medium " >02</p> </div>
            <p className="md:text-[2vw] text-[6.154vw] text-white font-medium ">Support</p>
          </div>
          <p className="md:text-[1.8vw] text-[4.103vw] text-white text-center font-normal md:mt-3 mt-[5.128vw] leading-[normal] tracking-[0.038vw]">To ensure long-term success, it&apos;s crucial to gather customer feedback post-delivery through channels like surveys and support tickets. This feedback can be used for iterative updates, aligning with the Agile principle of continuous improvement. A customer success manager maintains customer relationships.</p>
        </div>

        <div className="md:mt-4 mt-[7.692vw]">
          <div className="flex md:gap-[2.5vw] gap-[5.128vw] text-center justify-center items-center  " >
            <div className=" relative md:w-[4vw] md:h-[4vw] w-[14vw] h-[14vw] bg-[#00AFF1] rounded-full flex justify-center items-center "> <p className="text-white md:text-[2vw] text-[5.484vw] font-medium " >03</p> </div>
            <p className="md:text-[2vw] text-[6.154vw] text-white font-medium ">Onboarding</p>
          </div>
          <p className="md:text-[1.8vw] text-[4.103vw] text-white text-center font-normal md:mt-3 mt-[5.128vw] leading-[normal] tracking-[0.038vw]">The client onboarding process is vital for fostering engagement and begins with initial communication and a comprehensive product walkthrough. At Possesive Panda, we start by delving into your project needs and gaining insight into your vision.</p>
        </div>

        <div className="md:mt-4 mt-[7.692vw]">
          <div className="flex md:gap-[2.5vw] gap-[5.128vw] text-center justify-center items-center  " >
            <div className=" relative md:w-[4vw] md:h-[4vw] w-[14vw] h-[14vw] bg-[#00AFF1] rounded-full flex justify-center items-center "> <p className="text-white md:text-[2vw] text-[5.484vw] font-medium " >03</p> </div>
            <p className="md:text-[2vw] text-[6.154vw] text-white font-medium ">Prodcut Delivery</p>
          </div>
          <p className="md:text-[1.8vw] text-[4.103vw] text-white text-center font-normal md:mt-3 mt-[5.128vw] leading-[normal] tracking-[0.038vw]">At this stage, the focus shifts to executing the implementation plan. Key activities include using Agile methodology for iterative delivery, allowing continuous feedback and improvement based on customer input. Ensuring quality assurance via user acceptance testing (UAT).</p>
        </div>
      </div>
      
    </div>
  );
};

export default OurServices;
