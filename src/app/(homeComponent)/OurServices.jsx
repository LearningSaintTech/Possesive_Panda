// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import panda from "../../assets/home/services/Panda.png";
// import CircleProgress from "./(CircleAnimation)/CircleProgress";

// const OurServices = () => {
//   const [activeSection, setActiveSection] = useState(1);
//   const [progress, setProgress] = useState(0);
//   const [isComponentVisible, setIsComponentVisible] = useState(false);
//   const [isScrollLocked, setIsScrollLocked] = useState(false);
//   const containerRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsComponentVisible(entry.isIntersecting);
//         if (entry.isIntersecting) {
//           setIsScrollLocked(true);
//         } else {
//           setIsScrollLocked(false);
//         }
//       },
//       {
//         root: null,
//         rootMargin: "0px 0px 0px 0px", // Adjust as needed
//         threshold: 0.6, // Trigger when 50% of the component is visible
//       }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const handleWheelScroll = (event) => {
//       if (!isComponentVisible || !isScrollLocked) return;

//       event.preventDefault(); // Prevent default scroll behavior

//       if (event.deltaY > 0) {
//         // Scroll down, increase progress clockwise
//         if (progress < 100) {
//           setProgress((prev) => {
//             const newProgress = Math.min(prev + 1, 100);
//             updateActiveSection(newProgress);
//             return newProgress;
//           });
//         } else if (progress === 100) {
//           setProgress(0);
//           setIsScrollLocked(false);
//           setActiveSection(1);
//         }
//       } else if (event.deltaY < 0) {
//         // Scroll up, decrease progress counterclockwise
//         if (progress > -100) {
//           setProgress((prev) => {
//             const newProgress = Math.max(prev - 1, -100);
//             updateActiveSection(100 + newProgress);
//             if (newProgress === -100) {
//               setProgress(0);
//               setIsScrollLocked(false);
//             }
//             return newProgress;
//           });
//         }
//       }
//     };

//     window.addEventListener("wheel", handleWheelScroll, { passive: false });

//     return () => {
//       window.removeEventListener("wheel", handleWheelScroll);
//     };
//   }, [progress, isComponentVisible, isScrollLocked]);

//   const updateActiveSection = (progressValue) => {
//     const adjustedProgress = Math.abs(progressValue);

//     if (adjustedProgress >= 75) {
//       if (activeSection !== 4) {
//         setActiveSection(4);
//       }
//     } else if (adjustedProgress >= 50) {
//       if (activeSection !== 3) {
//         setActiveSection(3);
//       }
//     } else if (adjustedProgress >= 25) {
//       if (activeSection !== 2) {
//         setActiveSection(2);
//       }
//     } else {
//       if (activeSection !== 1) {
//         setActiveSection(1);
//       }
//     }
//   };

//   return (
//     <div className="sm:pt-[5vw] sm:pb-[7.813vw] sm:px-[5.208vw] px-[7.692vw] flex flex-col gap-4" ref={containerRef}>
//       <div className="flex justify-between relative bg-[#00111A] ">
//         <div className="flex flex-col justify-between w-full sm:w-[42vw] gap-[1vw] h-fit">
//           <p className="text-white font-medium sm:font-normal tracking-[0.015rem] text-[4.103vw] md:text-[2.5vw] lg:text-[1.25vw] text-center lg:text-left">
//             Client Satisfaction
//           </p>
//           <h1 className="text-white text-[8.205vw] md:text-[5.3vw] lg:text-[3.34vw] font-medium leading-[normal] tracking-[0.082vw] lg:tracking-[0.04rem] text-center sm:text-left ">
//             Our Delivery Framework
//           </h1>
//           <p className="text-white text-[4.103vw] md:text-[2.5vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.038vw] lg:tracking-[0.015rem] text-center lg:text-left lg:mb-0 mb-[10vw]">
//             "We believe in delivering success with every step we take. Possesive Panda excels at providing IT services like E-Commerce, Mobile App Development, Web Development, Digital Marketing, and Virtual Assistant."
//           </p>
//         </div>
//         <Image
//           src={panda}
//           alt="panda"
//           className="hidden md:block size-[24.865vw] relative -top-[4.4vw] h-fit"
//         />
//       </div>
//       <div>
//         <CircleProgress progress={progress} activeSection={activeSection} />
//       </div>
//     </div>
//   );
// };

// export default OurServices;

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import panda from "../../assets/home/services/Panda.png";
import CircleProgress from "./(CircleAnimation)/CircleProgress";

const OurServices = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(true);
  const containerRef = useRef();
  const progressRef = useRef();
  const lastScrollTimeRef = useRef(0); // Ref to keep track of the last scroll event time

  const SCROLL_DELAY = 100; // Delay between scrolls in ms (throttling)

  // Function to disable scrolling
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  // Function to enable scrolling
  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  // Smoothly scrolls the progress element into view if not fully visible
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
          setIsComponentVisible(true); // Update component visibility state
          resetProgress(); // Reset progress when component becomes visible
          setIsScrollLocked(true); // Lock scroll again when the component is visible
          disableScroll(); // Disable scrolling
          scrollIntoViewIfNeeded(); // Scroll to make the progress element fully visible
        } else {
          setIsComponentVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0, // Trigger when the component is fully visible
      }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current); // Observe the progress element
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
      enableScroll(); // Ensure scroll is enabled on unmount
    };
  }, []);

  // Custom wheel scroll handler
  useEffect(() => {
    const handleWheelScroll = (event) => {
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTimeRef.current;

      if (timeSinceLastScroll < SCROLL_DELAY) return; // Throttle the scroll event

      lastScrollTimeRef.current = now;

      if (!isComponentVisible || !isScrollLocked) return; // Only run when the progress element is visible and scroll is locked

      event.preventDefault(); // Prevent default scroll behavior

      if (event.deltaY > 0) {
        // Scroll down, increase progress clockwise
        if (progress < 100) {
          setProgress((prev) => {
            const newProgress = Math.min(prev + 1, 100);
            updateActiveSection(newProgress);
            if (newProgress === 100) {
              setIsScrollLocked(false); // Unlock scroll when progress completes
              enableScroll(); // Enable scrolling
            }
            return newProgress;
          });
        }
      } else if (event.deltaY < 0) {
        // Scroll up, decrease progress counterclockwise
        if (progress > -100) {
          setProgress((prev) => {
            const newProgress = Math.max(prev - 1, -100);
            updateActiveSection(100 + newProgress);
            if (newProgress === -100) {
              setIsScrollLocked(false); // Unlock scroll when progress completes
              enableScroll(); // Enable scrolling
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
    setProgress(0); // Reset progress
    setActiveSection(1); // Reset to the first section
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
    <div className="sm:pt-[5vw] sm:pb-[7.813vw] sm:px-[5.208vw] px-[7.692vw] sm:py-0 py-[15.385vw] flex flex-col gap-4" ref={containerRef}>
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


      <div className="sm:hidden w-full ">
        <div className="">
          <div className="flex gap-[5.128vw] text-center justify-center items-center  " >
            <div className="relative w-[14vw] h-[14vw] bg-[#00AFF1] rounded-full py-[3.205vw] px-[3.846vw] "> <p className="text-white text-[5.484vw] font-medium " >01</p> </div>
            <p className="text-[6.154vw] text-white font-medium ">Planning</p>
          </div>
          <p className="text-[4.103vw] text-white text-center font-normal mt-[5.128vw] leading-[normal] tracking-[0.038vw]">After onboarding, the next step is to plan the product's implementation, which involves gathering customer requirements, developing a project charter, and ensuring stakeholder alignment to ensure a successful implementation process and a collaborative environment.</p>
        </div>

        <div className="mt-[7.692vw]">
          <div className="flex gap-[5.128vw] text-center justify-center items-center  " >
            <div className="relative w-[14vw] h-[14vw] bg-[#00AFF1] rounded-full py-[3.205vw] px-[3.846vw] "> <p className="text-white text-[5.484vw] font-medium " >02</p> </div>
            <p className="text-[6.154vw] text-white font-medium ">Support</p>
          </div>
          <p className="text-[4.103vw] text-white text-center font-normal mt-[5.128vw] leading-[normal] tracking-[0.038vw]">To ensure long-term success, it's crucial to gather customer feedback post-delivery through channels like surveys and support tickets. This feedback can be used for iterative updates, aligning with the Agile principle of continuous improvement. A customer success manager maintains customer relationships.</p>
        </div>

        <div className="mt-[7.692vw]">
          <div className="flex gap-[5.128vw] text-center justify-center items-center " >
            <div className="relative w-[14vw] h-[14vw] bg-[#00AFF1] rounded-full py-[3.205vw] px-[3.846vw] "> <p className="text-white text-[5.484vw] font-medium " >03</p> </div>
            <p className="text-[6.154vw] text-white font-medium ">Onboarding</p>
          </div>
          <p className="text-[4.103vw] text-white text-center font-normal mt-[5.128vw] leading-[normal] tracking-[0.038vw]">The client onboarding process is vital for fostering engagement and begins with initial communication and a comprehensive product walkthrough. At Possesive Panda, we start by delving into your project needs and gaining insight into your vision.</p>
        </div>

        <div className="mt-[7.692vw]">
          <div className="flex gap-[5.128vw] text-center justify-center items-center  " >
            <div className="relative w-[14vw] h-[14vw] bg-[#00AFF1] rounded-full py-[3.205vw] px-[3.846vw] "> <p className="text-white text-[5.484vw] font-medium " >04</p> </div>
            <p className="text-[6.154vw] text-white font-medium ">Product Delivery</p>
          </div>
          <p className="text-[4.103vw] text-white text-center font-normal mt-[5.128vw] leading-[normal] tracking-[0.038vw]">At this stage, the focus shifts to executing the implementation plan. Key activities include using Agile methodology for iterative delivery, allowing continuous feedback and improvement based on customer input. Ensuring quality assurance via user acceptance testing (UAT).</p>
        </div>
      </div>


      <div className="hidden sm:block">
        <div id="progress" ref={progressRef} className="sticky top-0 z-10  ">
          {/* Sticky and z-index styles */}
          <CircleProgress progress={progress} activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
