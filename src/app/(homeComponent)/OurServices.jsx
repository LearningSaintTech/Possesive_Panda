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
    <div className="sm:pt-[5vw] sm:pb-[7.813vw] sm:px-[5.208vw] w-full h-full flex flex-col gap-4" ref={containerRef}>
      <div className="flex justify-between relative bg-[#00111A] ">
        <div className="flex flex-col justify-between w-full sm:w-[40.677vw] gap-[1vw] h-fit">
          <p className="text-white font-normal tracking-[0.015rem] text-[5.128vw] md:text-[2.5vw] lg:text-[1.25vw] text-center lg:text-left">
            Our Services
          </p>
          <h1 className="text-white text-[8.205vw] md:text-[5.3vw] lg:text-[3.34vw] font-medium leading-[normal] tracking-[0.082vw] lg:tracking-[0.04rem] lg:w-[40vw]">
            Our Top IT Services
          </h1>
          <p className="text-white text-[3.846vw] md:text-[2.5vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.038vw] lg:tracking-[0.015rem] text-center lg:text-left lg:mb-0 mb-[10vw]">
            "Discover the extensive world of highly demanding IT Services that
            involve cutting-edge technologies and creativity to meet your IT
            needs."
          </p>
        </div>
        <Image
          src={panda}
          alt="panda"
          className="hidden md:block size-[23.865vw] relative -top-[4.4vw] h-fit"
        />
      </div>
      <div className="">
        <div id="progress" ref={progressRef} className="sticky top-0 z-10  ">
          {/* Sticky and z-index styles */}
          <CircleProgress progress={progress} activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
