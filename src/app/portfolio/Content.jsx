"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import banner from "../../assets/portfolio/Banner.png";
// import client_1 from "../../assets/portfolio/client-1.png";
// import client_2 from "../../assets/portfolio/client-2.png";
// import client_3 from "../../assets/portfolio/client-3.png";
// import client_4 from "../../assets/portfolio/client-4.png";
// import client_5 from "../../assets/portfolio/client-5.png";

const Content = () => {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);
  const [headingHeight, setHeadingHeight] = useState(0);
  useEffect(() => {
    if (imageRef.current) setImageHeight(imageRef.current.offsetHeight);
    if (headingRef.current) setHeadingHeight(headingRef.current.offsetHeight);
  }, [imageRef, headingRef]);
  const height = imageHeight - headingHeight;
  return (
    <div className="mt-[20px] lg:mt-[50px] 2xl:mt-[100px] mx-[5.2vw] relative">
      <Image ref={imageRef} src={banner} alt="banner" className="w-full" />
      <div className="flex flex-col gap-[2.5vw] md:gap-[1.2vw] lg:gap-[0.5vw] lg:w-[56%] mt-[20px] lg:mt-[56px]">
        <h6 className="text-sky-500 text-[4vw] md:text-[3vw] lg:text-[1.25vw] font-medium leading-[normal] tracking-[0.015rem]">
          Our Portfolio
        </h6>
        <h2 className="text-[7vw] md:text-[5.5vw] lg:text-[2.083vw] text-neutral-800 font-semibold leading-[normal] tracking-[0.025rem]">
          We Would love to share a similar experience
        </h2>
        <p className="text-[4vw] md:text-[2.8vw] lg:text-[1.25vw] text-neutral-800 font-normal leading-[normal] tracking-[0.015rem]">
          Design brings ideas, messages, and emotions to life. Design helps us
          communicate and connect in purpose-filled ways. Design influences what
          we think and feel. Design informs the decisions we make. At our core,
          we all seek purpose. Many of us want our daily decisions to help make
          the world a better place.
        </p>
        <p className="text-[4vw] md:text-[2.8vw]  lg:text-[1.25vw] text-neutral-800 font-medium leading-[normal] tracking-[0.015rem]">
          Design brings ideas, messages, and emotions to life. Design helps us
          communicate and connect in purpose-filled ways. Design influences what
          we think and feel
        </p>

        <div className="relative border-[0.2px] lg:border-[0.5px] xl:border border-zinc-400 -bottom-[5vw]"></div>
      </div>
      <div
        style={{
          top: `${height}px`,
        }}
        className={`lg:absolute right-0 w-[90%] lg:w-auto bg-neutral-50 rounded-[0.65rem] shadow-lg border 2xl:border-2 border-black border-opacity-50 mt-[40px] md:mt-[80px] lg:mt-0 mx-auto`}
      >
        <div
          ref={headingRef}
          className="border-b  border-black border-opacity-50"
        >
          <h2 className="text-neutral-800 text-[6vw] md:text-[4vw] lg:text-[1.5vw] font-medium leading-[normal] tracking-[0.0225rem] pt-[2vw] pb-[1.5vw] lg:pl-[2.865vw] lg:pr-[7.031vw] text-center">
            Project Information
          </h2>
        </div>
        <div
          // ref={ref}
          className="pl-[7.5vw] lg:pl-[2.865vw] pr-[7.031vw] flex flex-col gap-[4vw] lg:gap-[1.56vw] py-[4vw] lg:py-[1.56vw]"
        >
          <div className="flex items-center">
            <Image
              src={client_1}
              alt="client-1"
              className="mr-[3vw] lg:mr-[1.5vw] w-[12vw] lg:w-[4vw]"
            />
            <div>
              <h5 className="font-normal text-neutral-800 text-[4vw] md:text-[3vw] lg:text-[1.302vw] leading-[normal] tracking-[0.015rem] opacity-[0.6]">
                Clients:
              </h5>
              <h5 className="text-neutral-800 text-[4vw] md:text-[3vw]  lg:text-[1.302vw] font-medium leading-[normal] tracking-[0.015rem]">
                Damien Wilson
              </h5>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={client_2}
              alt="client-2"
              className="mr-[3vw] lg:mr-[1.5vw] w-[12vw] lg:w-[4vw]"
            />
            <div>
              <h5 className="font-normal text-neutral-800 text-[4vw] md:text-[3vw] lg:text-[1.302vw] leading-[normal] tracking-[0.015rem] opacity-[0.6]">
                Clients:
              </h5>
              <h5 className="text-neutral-800 text-[4vw] md:text-[3vw] lg:text-[1.302vw] font-medium leading-[normal] tracking-[0.015rem]">
                Damien Wilson
              </h5>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={client_3}
              alt="client-3"
              className="mr-[3vw] lg:mr-[1.5vw] w-[12vw] lg:w-[4vw]"
            />
            <div>
              <h5 className="font-normal text-neutral-800 text-[4vw] md:text-[3vw] lg:text-[1.302vw] leading-[normal] tracking-[0.015rem] opacity-[0.6]">
                Clients:
              </h5>
              <h5 className="text-neutral-800 text-[4vw] md:text-[3vw] lg:text-[1.302vw] font-medium leading-[normal] tracking-[0.015rem]">
                Damien Wilson
              </h5>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={client_4}
              alt="client-4"
              className="mr-[3vw] lg:mr-[1.5vw] w-[12vw] lg:w-[4vw]"
            />
            <div>
              <h5 className="font-normal text-neutral-800 text-[4vw] md:text-[3vw] lg:text-[1.302vw] leading-[normal] tracking-[0.015rem] opacity-[0.6]">
                Clients:
              </h5>
              <h5 className="text-neutral-800 text-[4vw] md:text-[3vw] lg:text-[1.302vw] font-medium leading-[normal] tracking-[0.015rem]">
                Damien Wilson
              </h5>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={client_5}
              alt="client-5"
              className="mr-[3vw] lg:mr-[1.5vw] w-[12vw] lg:w-[4vw]"
            />
            <div>
              <h5 className="font-normal text-neutral-800 text-[4vw] md:text-[3vw] lg:text-[1.302vw] leading-[normal] tracking-[0.015rem] opacity-[0.6]">
                Clients:
              </h5>
              <h5 className="text-neutral-800 text-[4vw] md:text-[3vw] lg:text-[1.302vw] font-medium leading-[normal] tracking-[0.015rem]">
                Damien Wilson
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
