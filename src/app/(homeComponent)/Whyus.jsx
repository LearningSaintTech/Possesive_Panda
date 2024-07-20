/* eslint-disable react/no-unescaped-entities */
import "./why.css";
import Image from "next/image";
import React from "react";
import card_1 from "../../assets/home/whyus/card-1.png";
import card_2 from "../../assets/home/whyus/card-2.png";
import card_3 from "../../assets/home/whyus/card-3.png";
import panda from "../../assets/home/whyus/mountain-panda.png";

const WhyUs = () => {
  return (
    <div className="flex flex-col lg:flex-row px-[9.375vw] lg:pl-[6.771vw] lg:pr-[6.771vw] pb-[58px] bg-black rounded-t-[2.083vw] h-fit relative">
      <div className="lg:w-[38.75vw] mt-[15.385vw] sm:mt-[10vw]">
        <h6 className="text-[#fff] text-[5.128vw] lg:text-[1.667vw] font-normal tracking-[0.051vw] lg:tracking-[0.015rem] mb-[5.128vw] sm:mb-[1.042vw] text-center lg:text-left">
          Why Us
        </h6>
        <h2 className="text-[#fff] font-medium text-[6.154vw] lg:text-[3.333vw] leading-[125%] tracking-[0.062vw] lg:tracking-[0.04rem] mb-[5.128vw] sm:mb-[1.042vw] text-center lg:text-left">
          Why collaborate with us?
        </h2>
        <p className="font-normal text-[#fff] text-[3.846vw] lg:text-[1.25vw] leading-[150%] tracking-[0.038vw] lg:tracking-[0.015rem] text-center lg:text-left">
          Your one-stop IT service provider is here. Collaborate with us to get
          the best IT services and solutions according to your requirements and
          state-of-the-art technology. Give your business wings to soar high
          with the top-notch technologies.
        </p>
      </div>
      <div className="lg:ml-[7.552vw]">
        <div className="group card-container w-full lg:w-[20.833vw] min-h-[45vh] lg:min-h-[21.85vw] relative mt-[58px] mb-[60.69px] lg:mb-0">
          <div className="card-inner w-full lg:w-[20.833vw] min-h-[45vh] lg:min-h-[21.85vw] bg-[#FAFAFA] relative">
            <Image
              src={card_1}
              alt="card-1"
              className="card-image absolute right-[7.051vw] lg:right-[3.563vw] lg:top-[1.458vw] top-[6.587vw] transition duration-500"
            />
            <h6 className="card-title w-[56.667vw] md:w-fit text-[5.128vw] md:text-[5vw] lg:text-[1.25vw] font-semibold leading-[125%] tracking-[0.013vw] absolute bottom-[8.782vw] lg:bottom-[1.946vw] left-[9.403vw] lg:left-[2.083vw] transition duration-500">
              Proven Track Record
            </h6>
            <p className="card-text absolute bottom-[25vw] lg:bottom-[5vw] left-[2.083vw] right-[2.083vw] text-[3.333vw] lg:text-[1.042vw] text-black opacity-0 transition duration-500 lg:px-0 px-[4vw] ">
              Proven Track Record Review our track record, which showcases our dedication and expertise in providing exceptional services to trusted clients. Our achievements are clearly demonstrated by our numbers.
            </p>
          </div>
        </div>
        <div className="group w-full lg:w-[20.833vw] min-h-[45vh] lg:min-h-[21.85vw] bg-[#FAFAFA] relative lg:ml-[20.833vw] mb-[60.69px] lg:mb-0">
          <Image
            src={card_2}
            alt="card-2"
            className="card-image absolute right-[7.051vw] lg:right-[3.563vw] lg:top-[1.458vw] top-[6.587vw] transition duration-500"
          />
          <h6 className="card-title w-[56.667vw] md:w-fit text-[5.128vw] md:text-[5vw] lg:text-[1.25vw] font-semibold leading-[125%] tracking-[0.013vw] absolute bottom-[8.782vw] lg:bottom-[1.946vw] left-[9.403vw] lg:left-[2.083vw] transition duration-500">
            Industry Expertise
          </h6>
          <p className="card-text absolute bottom-[25vw] lg:bottom-[5vw] left-[2.083vw] right-[2.083vw] text-[3.333vw] lg:text-[1.042vw] text-black opacity-0 transition duration-500 lg:px-0 px-[4vw] ">
            We have years of various industry expertise, which makes our
            experienced team of highly skilled members. With this expertise, we
            are proud to develop a different tech world.
          </p>
        </div>
        <div className="group w-full lg:w-[20.833vw] min-h-[45vh] lg:min-h-[21.85vw] bg-[#FAFAFA] relative">
          <Image
            src={card_3}
            alt="card-3"
            className="card-image absolute right-[7.051vw] lg:right-[3.563vw] lg:top-[1.458vw] top-[6.587vw] transition duration-500"
          />
          <h6 className="card-title w-[56.667vw] md:w-fit text-[5.128vw] md:text-[5vw] lg:text-[1.25vw] font-semibold leading-[125%] tracking-[0.013vw] absolute bottom-[8.782vw] lg:bottom-[1.946vw] left-[9.403vw] lg:left-[2.083vw] transition duration-500">
            Client-centric approach
          </h6>
          <p className="card-text absolute bottom-[30vw] lg:bottom-[5vw] left-[2.083vw] right-[2.083vw] text-[3.333vw] lg:text-[1.042vw] text-black opacity-0 transition duration-500 lg:px-0 px-[4vw] ">
            We understand clients’ requirements, goals, and challenges to
            deliver them with the best possible services. High client
            satisfaction is our priority, making this a reason to trust us.
          </p>
        </div>
      </div>
      <Image
        src={panda}
        alt="panda"
        className="hidden lg:block absolute bottom-0 left-0 lg:h-[25vw] lg:w-[35.9vw] xl:h-[30.667vw]"
      />
    </div>
  );
};

export default WhyUs;
