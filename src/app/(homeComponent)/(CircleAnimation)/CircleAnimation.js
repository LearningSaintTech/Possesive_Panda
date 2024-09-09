import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useNavbar } from "../../layout";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const CircleAnimation = React.forwardRef((props, ref) => {
  const { toggleNavbar } = useNavbar();
  const svgRef = useRef(null);
  const [currentText, setCurrentText] = useState({
    title: "Onboarding",
    description:
      "The client onboarding process is vital for fostering engagement and begins with initial communication and a comprehensive product walkthrough. At Possesive Panda, we start by delving into your project needs and gaining insight into your vision.",
  });

  const getSectionText = (activeSection) => {
    switch (activeSection) {
      case 1:
        return {
          title: "Onboarding",
          description:
            "The client onboarding process is vital for fostering engagement and begins with initial communication and a comprehensive product walkthrough. At Possesive Panda, we start by delving into your project needs and gaining insight into your vision.",
        };
      case 2:
        return {
          title: "Planning",
          description:
            "After onboarding, the next step is to plan the product's implementation, which involves gathering customer requirements, developing a project charter, and ensuring stakeholder alignment to ensure a successful implementation process and a collaborative environment.",
        };
      case 3:
        return {
          title: "Product Delivery",
          description:
            "At this stage, the focus shifts to executing the implementation plan. Key activities include using Agile methodology for iterative delivery, allowing continuous feedback and improvement based on customer input. Ensuring quality assurance via user acceptance testing (UAT).",
        };
      case 4:
        return {
          title: "Support",
          description:
            "To ensure long-term success, it's crucial to gather customer feedback post-delivery through channels like surveys and support tickets. This feedback can be used for iterative updates, aligning with the Agile principle of continuous improvement. A customer success manager maintains customer relationships.",
        };
      default:
        return {
          title: "",
          description: "",
        };
    }
  };
  useEffect(() => {
    const animatedCircle = svgRef.current.querySelector(".animated-circle");
    const numberCircles = svgRef.current.querySelectorAll(".number-circle");
    const textElements = svgRef.current.querySelectorAll(".circle-title");
    const totalCircumference = 1256;
    const quarterCircumference = totalCircumference / 6; // 314
  
    let prevSection = -1;
  
    gsap.fromTo(
      animatedCircle,
      { strokeDashoffset: totalCircumference },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress * totalCircumference;
            const currentIndex = Math.floor(progress / quarterCircumference);
  
            // Check if progress is back to the start
            if (progress >= totalCircumference) {
              prevSection = -1; // Reset section tracking
              setCurrentText(getSectionText(1)); // Display "Onboarding" again
              numberCircles.forEach((circle, index) => {
                gsap.to(circle, { fill: "white", duration: 0.2 });
                gsap.to(textElements[index], { fill: "white", duration: 0.2 });
              });
              gsap.to(numberCircles[0], { fill: "#00AFF1", duration: 0.2 });
              gsap.to(textElements[0], { fill: "#00AFF1", duration: 0.2 });
              return;
            }
  
            // Check if the current section is different
            if (currentIndex !== prevSection) {
              prevSection = currentIndex;
  
              // Update section text based on the current index
              setCurrentText(getSectionText(currentIndex + 1));
  
              // Update the styling of the number circles and text elements
              numberCircles.forEach((circle, index) => {
                if (index === currentIndex) {
                  gsap.to(circle, { fill: "#00AFF1", duration: 0.2 });
                  gsap.to(textElements[index], { fill: "#00AFF1", duration: 0.2 });
                } else {
                  gsap.to(circle, { fill: "white", duration: 0.2 });
                  gsap.to(textElements[index], { fill: "white", duration: 0.2 });
                }
              });
            }
          },
          onEnter: () => toggleNavbar(false),
          onLeaveBack: () => toggleNavbar(true),
          onLeave: () => toggleNavbar(true),
        },
      }
    );
  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [toggleNavbar]);
  

  return (
   
<div
      ref={ref}
      className="min-h-screen bg-[#00111A] flex flex-row justify-center items-center "
    >
      <svg ref={svgRef} height="600" width="700">
        {/* Background Grey Circle */}
        <circle
          className="background-circle"
          r="200"
          cx="330"
          cy="300"
          stroke="grey"
          strokeWidth="2"
          fill="none"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        />
        {/* Animated Blue Progress Circle */}
        <circle
          className="animated-circle"
          r="200"
          cx="330"
          cy="300"
          stroke="#00AFF1" // Set the vibrant blue color
          strokeWidth="6" // Increase the stroke width for better visibility
          fill="none"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
            strokeDasharray: 1256,
            strokeDashoffset: 1256,
          }}
        />

        {/* Section circles and titles */}
        <g className="circle-group">
          <text
            className="circle-title"
            x="360"
            y="90"
            textAnchor="middle"
            fill="white"
            fontSize="18"
          >
            Onboarding
          </text>
          <circle className="number-circle" cx="353" cy="120" r="20" fill="white" />
          <text
            className="circle-number"
            x="353"
            y="126"
            textAnchor="middle"
            fill="black"
            fontSize="24"
          >
            1
          </text>
        </g>
        <g className="circle-group">
          <text
            className="circle-title"
            x="617"
            y="313"
            textAnchor="middle"
            fill="white"
            fontSize="18"
          >
            Planning
          </text>
          <circle className="number-circle" cx="550" cy="310" r="20" fill="white" />
          <text
            className="circle-number"
            x="550"
            y="315"
            textAnchor="middle"
            fill="black"
            fontSize="24"
          >
            2
          </text>
        </g>
        <g className="circle-group">
          <text
            className="circle-title"
            x="350"
            y="560"
            textAnchor="middle"
            fill="white"
            fontSize="18"
          >
            Product Delivery
          </text>
          <circle className="number-circle" cx="350" cy="520" r="20" fill="white" />
          <text
            className="circle-number"
            x="350"
            y="527"
            textAnchor="middle"
            fill="black"
            fontSize="24"
          >
            3
          </text>
        </g>
        <g className="circle-group">
          <text
            className="circle-title"
            x="90"
            y="315"
            textAnchor="middle"
            fill="white"
            fontSize="18"
          >
            Support
          </text>
          <circle className="number-circle" cx="153" cy="310" r="20" fill="white" />
          <text
            className="circle-number"
            x="150"
            y="316"
            textAnchor="middle"
            fill="black"
            fontSize="24"
          >
            4
          </text>
        </g>

        {/* Section description */}
        <foreignObject
          x="170"
          y="210"
          width="460"
          height="300"
          style={{
            textAlign: "center",
            overflow: "visible",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              color: "white",
              fontSize: "16px",
              lineHeight: "1.5",
              padding: "10px",
              textAlign: "center",
              wordWrap: "break-word",
              maxWidth: "360px",
              position: "relative",
            }}
          >
            <strong
              style={{
                fontSize: "30px",
                position: "relative",
                top: "-40px",
              }}
            >
              {currentText.title}
            </strong>
            <br />
            <span>{currentText.description}</span>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
});

export default CircleAnimation;
