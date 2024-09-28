"use client";
import Image from "next/image";
import btnImage from '../../../../public/assets/btn.svg';

// Define the component to accept props
const Scrollbar2 = ({ servicesData2, dynamicContent2 }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">

      {/* Dynamic heading for larger screens */}
      <h2 className=" sm:w-[57.552vw] sm:px-0 px-[7.059vw] text-[7.529vw] sm:text-[2.5vw] text-white">
        {dynamicContent2[0].headingLarge}
      </h2>


      {/* Content Section */}
      <div className="flex sm:flex-row flex-col bg-[#00111A] text-white gap-[7.813vw] px-[7.059vw] sm:px-[5.208vw] py-[5.208vw]">

        {/* Left Section */}
        <div className="flex sm:w-[40.417vw] w-[85.882vw] gap-[1.042vw] opacity-[0.8] font-light sm:text-[1.25vw] text-[3.765vw] sm:items-start sm:text-start sm:justify-start items-center justify-center text-center flex-col">

          {/* Dynamic paragraphs */}
          {dynamicContent2[0].paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className="sm:flex hidden flex-row items-center ml-[15.729vw] justify-center gap-[1.563vw]">
            <p className="text-[1.25vw]">Scroll To See More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="130"
              viewBox="0 0 130 130"
              fill="none"
              className="w-[6.771vw] h-[6.771vw]"
            >
              <circle cx="65" cy="65" r="64" stroke="white" strokeWidth="2" />
              <path
                d="M65 83.75L49.375 68.125L51.5781 65.9219L63.4375 77.7656V46.25H66.5625V77.7656L78.4219 65.9219L80.625 68.125L65 83.75Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* Right Section (scrollable services) */}
        <div className="bg-[#0001A] overflow-y-auto sm:max-h-[30vw] max-h-[100vw] scrollbar-custom2">
          <div className="ml-[4.235vw] flex flex-col gap-[1vw]">
            {servicesData2.map((service, index) => (
              <div key={index} className="flex items-start gap-[1.188vw]">
                <div className="mr-[2.083vw] rounded-[0.573vw] flex sm:flex-row flex-col items-start gap-[1.667vw] px-[2.552vw] py-[2.24vw] text-start justify-start bg-[#334148]">
                  <Image
                    src={btnImage}
                    alt="icon"
                    className="h-[9.882vw] w-[9.882vw] sm:h-[4.479vw] sm:w-[4.479vw]"
                  />
                  <div className="flex flex-col items-start text-start gap-[1.146vw] justify-start">
                    <h3 className="sm:text-[2.024vw] text-[3.765vw] font-normal">
                      {service.title}
                    </h3>
                    {service.description.map((desc, i) => (
                      <p key={i} className="sm:w-[26.667vw] w-[74.588vw] sm:text-[1.042vw] text-[3.765vw] font-medium opacity-[0.7]">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrollbar2;
