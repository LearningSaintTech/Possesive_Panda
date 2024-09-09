import React, { useEffect, useState, useRef } from 'react';
import { FaGlobe, FaUsers, FaHandshake, FaProjectDiagram } from "react-icons/fa";

const Success = () => {
  const [globalCentre, setGlobalCentre] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [projectsDelivered, setProjectsDelivered] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // To ensure the animation runs only once
  const sectionRef = useRef(null); // Ref to the section to observe

  // Function to animate counting
  const animateValue = (setValue, finalValue, duration) => {
    let start = 0;
    const range = finalValue - start;
    const increment = finalValue > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
      start += increment;
      setValue(start);
      if (start === finalValue) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateValue(setGlobalCentre, 1, 1000);        // Count to 1
          animateValue(setTeamCount, 200, 2000);         // Count to 200+
          animateValue(setHappyClients, 50, 1500);       // Count to 50+
          animateValue(setProjectsDelivered, 100, 2000); // Count to 100+
          setHasAnimated(true); // Ensure animation runs only once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div ref={sectionRef} className="bg-[#00111a] px-[7.692vw] sm:px-[5.208vw] sm:py-[6.813vw] py-[8vw]">
      <div className="text-white flex flex-col items-center lg:flex-row lg:gap-[7vw]">
        <h2 className="w-full lg:w-[35.729vw] text-white text-[6vw] lg:text-[3.333vw] font-medium tracking-wide text-center lg:text-left mx-auto lg:mx-0">
          Numbers That Show Our Success
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-[2.604vw] mt-8 lg:mt-0">
          <div className="flex items-center bg-[#131D22] pl-[4vw] py-[3vw] rounded-[4vw] lg:pl-[1.782vw] lg:py-[1.25vw] lg:rounded-[0.81vw]">
            <FaGlobe className="text-[#00AFF1] w-[10vw] h-[10vw] lg:w-[3.888vw] lg:h-[3.888vw]" />
            <div className='ml-[4vw] lg:ml-[0.81vw]'>
              <p className="text-[5vw] lg:text-[1.944vw] font-semibold">{globalCentre}</p>
              <p className='text-[3vw] lg:text-[1.25vw] font-semibold'>Global Centre</p>
            </div>
          </div>

          <div className="flex items-center bg-[#131D22] pl-[4vw] py-[3vw] rounded-[4vw] lg:pl-[1.782vw] lg:py-[1.25vw] lg:rounded-[0.81vw]">
            <FaUsers className="text-[#00AFF1] w-[10vw] h-[10vw] lg:w-[3.75vw] lg:h-[3.75vw]" />
            <div className='ml-[4vw] lg:ml-[0.81vw]'>
              <p className="text-[5vw] lg:text-[1.944vw] font-semibold">{teamCount}+</p>
              <p className="text-[3vw] lg:text-[1.25vw] font-semibold">Our Team</p>
            </div>
          </div>

          <div className="flex items-center bg-[#131D22] px-[4vw] py-[3vw] rounded-[4vw] lg:px-[2vw] lg:py-[1vw] lg:rounded-[0.81vw]">
            <FaHandshake className="text-[#00AFF1] w-[10vw] h-[10vw] lg:w-[3.828vw] lg:h-[3.062vw]" />
            <div className='ml-[4vw] lg:ml-[0.81vw]'>
              <p className="text-[5vw] lg:text-[1.944vw] font-semibold">{happyClients}+</p>
              <p className="text-[3vw] lg:text-[1.25vw] font-semibold">Happy Clients</p>
            </div>
          </div>

          <div className="flex items-center bg-[#131D22] px-[4vw] py-[3vw] rounded-[4vw] lg:px-[2vw] lg:py-[1vw] lg:rounded-[0.81vw]">
            <FaProjectDiagram className="text-[#00AFF1] w-[10vw] h-[10vw] lg:w-[3.828vw] lg:h-[3.062vw]" />
            <div className='ml-[4vw] lg:ml-[0.81vw]'>
              <p className="text-[5vw] lg:text-[1.944vw] font-semibold">{projectsDelivered}+</p>
              <p className="text-[3vw] lg:text-[1.25vw] font-semibold">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
