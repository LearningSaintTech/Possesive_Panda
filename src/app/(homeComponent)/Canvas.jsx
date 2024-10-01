import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useNavbar } from "../layout"; 
import CircleAnimation from "./(CircleAnimation)/CircleAnimation";

gsap.registerPlugin(ScrollTrigger);

const Canvas = () => {
  const { toggleNavbar } = useNavbar(); 
  const canvasRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: canvasRef.current,
      start: "top top",
      end: "+=300%", // Extend the scrollable area to allow the animation to finish before moving on
      pin: true, 
      scrub: true, 
    });

    gsap.fromTo(
      circleRef.current,
      { strokeDashoffset: 1256 },
      {
        strokeDashoffset: 0,
        duration: 3,
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top top",
          end: "bottom top", 
          scrub: true,
          onEnter: () => toggleNavbar(false),
          onLeaveBack: () => toggleNavbar(true),
          onLeave: () => toggleNavbar(true),
          onComplete: () => {
            ScrollTrigger.refresh(); // Refresh to ensure the pinning state is maintained after the animation completes
          }
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [toggleNavbar]);

  return (
    <div
      ref={canvasRef}
      className=" bg-[#00111A] flex flex-col justify-center items-center"
    >
      <CircleAnimation ref={circleRef} />
    </div>
  );
};

export default Canvas;
