import React from 'react';

const CircleProgress = ({ progress, activeSection }) => {
  const getCircleStyle = () => ({
    background:
      progress >= 0
        ? `conic-gradient(#00aff1 ${progress}%, transparent ${progress}%)`
        : `conic-gradient(transparent ${100 + progress}%, #00aff1 ${100 + progress}%)`,
    WebkitMaskImage: "radial-gradient(closest-side, transparent 98%, white 80%)",
    maskImage: "radial-gradient(closest-side, transparent 98%, white 80%)",
    border: "2px solid gray",
    borderRadius: "50%",
    boxSizing: "border-box",
  });

  const getSectionHeading = () => {
    switch (activeSection) {
      case 1:
        return "Onboarding";
      case 2:
        return "Planning";
      case 3:
        return "Product Delivery";
      case 4:
        return "Support";
      default:
        return "";
    }
  };

  const getSectionText = () => {
    switch (activeSection) {
      case 1:
        return "The client onboarding process is vital for fostering engagement and begins with initial communication and a comprehensive product walkthrough. At Possesive Panda, we start by delving into your project needs and gaining insight into your vision.";
      case 2:
        return "After onboarding, the next step is to plan the product's implementation, which involves gathering customer requirements, developing a project charter, and ensuring stakeholder alignment to ensure a successful implementation process and a collaborative environment.";
      case 3:
        return "At this stage, the focus shifts to executing the implementation plan. Key activities include using Agile methodology for iterative delivery, allowing continuous feedback and improvement based on customer input. Ensuring quality assurance via user acceptance testing (UAT).";
      case 4:
        return "To ensure long-term success, it's crucial to gather customer feedback post-delivery through channels like surveys and support tickets. This feedback can be used for iterative updates, aligning with the Agile principle of continuous improvement. A customer success manager maintains customer relationships.";
      default:
        return "";
    }
  };

  return (
    <div className="relative w-full h-[40vw] flex justify-center items-center my-8"> {/* Use margin here */}
      <div className="Circlecontainer w-[33vw] h-[33vw] absolute rounded-full" style={getCircleStyle()}></div>
      <div className="absolute w-[25vw] flex justify-center items-center text-center flex-col">
        <div className="text-white text-[2.5vw] font-normal mb-[1.5vw] mt-[1.2vw]">
          {getSectionHeading()}
        </div>
        <span className="text-white text-[1.25vw] font-normal">
          {getSectionText()}
        </span>
      </div>
      <div className="absolute w-full h-full">
        {/* Sections */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 -top-[0.8vw] flex flex-col-reverse items-center ${activeSection === 1 ? "text-[#00aff1]" : "text-white"
            }`}
        >
          <div
            className={`w-[4vw] h-[4vw] ${activeSection === 1 ? "bg-[#00aff1]" : "bg-white"
              } rounded-full flex justify-center items-center`}
          >
            <span
              className={`${activeSection === 1 ? "text-white" : "text-black"
                } text-[1.875vw] font-semibold`}
            >
              01
            </span>
          </div>
          <span className="text-[1.5vw] font-medium">Onboarding</span>
        </div>

        <div
          className={`absolute top-1/2 transform -translate-y-1/2 right-[19vw] flex gap-[0.5vw] items-center ${activeSection === 2 ? "text-[#00aff1]" : "text-white"
            }`}
        >
          <div
            className={`w-[4vw] h-[4vw] ${activeSection === 2 ? "bg-[#00aff1]" : "bg-white"
              } rounded-full flex justify-center items-center`}
          >
            <span
              className={`${activeSection === 2 ? "text-white" : "text-black"
                } text-[1.875vw] font-semibold`}
            >
              02
            </span>
          </div>
          <span className="text-[1.5vw] font-medium">Planning</span>
        </div>

        <div
          className={`absolute left-1/2 transform -translate-x-1/2 -bottom-[0.8vw] flex flex-col  items-center ${activeSection === 3 ? "text-[#00aff1]" : "text-white"
            }`}
        >
          <div
            className={`w-[4vw] h-[4vw] ${activeSection === 3 ? "bg-[#00aff1]" : "bg-white"
              } rounded-full flex justify-center items-center`}
          >
            <span
              className={`${activeSection === 3 ? "text-white" : "text-black"
                } text-[1.875vw] font-semibold`}
            >
              03
            </span>
          </div>
          <span className="text-[1.5vw] font-medium">Product Delivery </span>
        </div>

        <div
          className={`absolute top-1/2 transform -translate-y-1/2 left-[19.5vw] flex flex-row-reverse gap-[0.5vw] items-center ${activeSection === 4 ? "text-[#00aff1]" : "text-white"
            }`}
        >
          <div
            className={`w-[4vw] h-[4vw] ${activeSection === 4 ? "bg-[#00aff1]" : "bg-white"
              } rounded-full flex justify-center items-center`}
          >
            <span
              className={`${activeSection === 4 ? "text-white" : "text-black"
                } text-[1.875vw] font-semibold`}
            >
              04
            </span>
          </div>
          <span className="text-[1.5vw] font-medium">Support</span>
        </div>
      </div>
    </div>
  );
};

export default CircleProgress;
