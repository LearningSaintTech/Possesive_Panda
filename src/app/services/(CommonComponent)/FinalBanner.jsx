"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Banner from "../../../../public/assets/services/herosecbeck.svg";
import Lefttop from "../../../../public/assets/banner/whitetop.svg";
import Leftbottom from "../../../../public/assets/banner/whitebottom.svg";
import Righttop from "../../../../public/assets/banner/bluebottom.svg";
import Rightbottom from "../../../../public/assets/banner/bluetop.svg";
import Link from 'next/link';
import HandlePage from "../../(Components)/(Input Form)/HandlePage";


const FinalBanner = ({ title, desciption, pointone, pointtwo, pointthree, pointfour }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleGetQuote = () => {
    setOpen(true);
  };

  return (
    <div className="relative h-[155.059vw] sm:h-[34.323vw] pt-[20vw] sm:pt-0 sm:w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={Banner}
        alt="bannerbg"
        className="absolute inset-0 object-cover object-center backdrop-blur-xl"
        layout="fill"
      />

      <div className={`relative z-10 h-full mt-[2.9vw] flex flex-col items-center justify-center text-white px-[0.833vw] transition-opacity duration-[1500ms] ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className={`px-[7.059vw] text-center text-white sm:text-[3.333vw] text-[7.529vw] font-normal mb-[0.938vw] transform transition-transform duration-[1500ms] ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-[3.333vw]'}`}>
          {title}
        </p>

        <p className={`sm:w-[32.135vw] w-[76.941vw] text-center text-white sm:text-[1.042vw] text-[3.765vw] font-light mb-[3.385vw] transform transition-transform duration-[1500ms] ease-in-out delay-200 ${isVisible ? 'translate-y-0' : 'translate-y-[3.333vw]'}`}>
          {desciption}
        </p>

        <div
          className={`flex flex-col sm:flex-row space-x-0 sm:space-x-[0.833vw] transform transition-transform duration-[1500ms] ease-in-out delay-300 ${isVisible ? 'translate-y-0' : 'translate-y-[3.333vw]'}`}>
          <Link href="/contact" passHref
            className="bg-transparent hover:bg-[#00aff1] text-white sm:text-[0.833vw] text-[3.765vw] font-normal capitalize sm:py-[0.417vw] sm:px-[0.833vw] px-[8.235vw] py-[2.118vw] sm:rounded-[0.417vw] rounded-[1.882vw] border border-white hover:border-[#00aff1] transition duration-300">
            Talk To Expert
          </Link>
          <button onClick={handleGetQuote}
            className="bg-transparent hover:bg-[#00aff1] text-white sm:text-[0.833vw] text-[3.765vw] font-normal capitalize sm:py-[0.417vw] sm:px-[0.833vw] px-[8.235vw] py-[2.118vw] sm:rounded-[0.417vw] rounded-[1.882vw] mt-[1.882vw] sm:mt-0 border border-white hover:border-[#00aff1] transition duration-300">
            Get A Quote
          </button>
        </div>
      </div>

      {/* SVG pointers */}
      <div className={`absolute sm:left-[11.979vw] sm:top-[8.917vw] left-[5vw] top-[48vw] transition-all duration-[1500ms] ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[3.333vw]'}`}>
        <div className="relative">
          <Image
            src={Leftbottom}
            alt="Intuitive"
            className="sm:w-[7.594vw] w-[20vw] h-auto mb-[0.833vw]"
          />
          <p className="absolute inset-0 flex items-center justify-center sm:pb-[1.8vw] sm:pr-[0.938vw] pb-[4vw] text-[2.824vw] text-[#00111a] sm:text-[0.833vw] font-semibold capitalize">{pointone}</p>
        </div>
      </div>
      <div className={`absolute sm:left-[15.365vw] sm:bottom-[11.354vw] left-[5vw] bottom-[20vw] transition-all duration-[1500ms] ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[3.333vw]'}`}>
        <div className="relative">
          <Image
            src={Lefttop}
            alt="Secure"
            className="sm:w-[7.594vw] w-[20vw] h-auto"
          />
          <p className="absolute inset-0 flex sm:pt-[2.2vw] pt-[5vw] sm:pl-[1.5vw] pl-[3vw] text-[#00111a] sm:text-[0.833vw] text-[2.824vw] font-semibold capitalize">{pointtwo}</p>
        </div>
      </div>
      <div className={`absolute sm:right-[14.01vw] sm:top-[9.021vw] right-[5vw] top-[43vw] transition-all duration-[1500ms] ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[3.333vw]'}`}>
        <div className="relative">
          <Image
            src={Righttop}
            alt="Scalable"
            className="sm:w-[7.594vw] w-[20vw] h-auto mb-[0.833vw]"
          />
          <p className="absolute inset-0 flex origin-top-left sm:pl-[2.5vw] pl-[3.5vw] sm:pt-[0.6vw] pt-[1vw] text-white sm:text-[0.833vw] text-[2.824vw] font-semibold capitalize">{pointthree}</p>
        </div>
      </div>
      <div className={`absolute sm:right-[23.698vw] right-[5vw] bottom-[10vw] sm:bottom-[11.354vw] transition-all duration-[1500ms] ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[3.333vw]'}`}>
        <div className="relative">
          <Image
            src={Rightbottom}
            alt="Tailored"
            className="sm:w-[7.594vw] w-[20vw] h-auto"
          />
          <p className="absolute inset-0 flex origin-top-left sm:pt-[2.2vw] pt-[5vw] sm:pl-[3vw] pl-[5vw] text-white sm:text-[0.833vw] text-[2.824vw] font-semibold capitalize">{pointfour}</p>
        </div>
      </div>
      {open && <HandlePage setOpen={setOpen} />}
    </div>
  );
};

export default FinalBanner;