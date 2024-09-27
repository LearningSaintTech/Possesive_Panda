import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Banner from "../../../../public/assets/banner/finalbanner.png";
import Intuitive from "../../../../public/assets/banner/intuituve.svg";
import Secure from "../../../../public/assets/banner/secure.svg";
import SCALABLE from "../../../../public/assets/banner/scalable.svg";
import Tailored from "../../../../public/assets/banner/tailored.svg";

const FinalBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[34.323vw] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={Banner}
        alt="bannerbg"
        className="absolute inset-0 object-cover object-center"
        layout="fill"
      />

      <div className={`relative z-10 h-full mt-[2.9vw] flex flex-col items-center justify-center text-white px-[0.833vw] transition-opacity duration-[1500ms] ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className={`text-center text-white text-[3.333vw] font-normal mb-[0.938vw] transform transition-transform duration-[1500ms] ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-[3.333vw]'}`}>
          Our eCommerce Services and Solutions
        </h1>

        <p className={`w-[32.135vw] text-center text-white text-[1.042vw] font-light mb-[3.385vw] transform transition-transform duration-[1500ms] ease-in-out delay-200 ${isVisible ? 'translate-y-0' : 'translate-y-[3.333vw]'}`}>
          We Create, Enhance, and Oversee - Allowing You to Focus on What's More Important: Growing Your Business
        </p>

        <div className={`flex space-x-[0.833vw] transform transition-transform duration-[1500ms] ease-in-out delay-300 ${isVisible ? 'translate-y-0' : 'translate-y-[3.333vw]'}`}>
          <button className="bg-[#00aff1] hover:bg-transparent text-white text-[0.833vw] font-normal capitalize py-[0.417vw] px-[0.833vw] rounded-[0.417vw] border border-[#00aff1] hover:border-white transition duration-300">
            Talk To Expert
          </button>
          <button className="bg-transparent hover:bg-[#00aff1] text-white text-[0.833vw] font-normal capitalize py-[0.417vw] px-[0.833vw] rounded-[0.417vw] border border-white hover:border-[#00aff1] transition duration-300">
            Get A Quote
          </button>
        </div>
      </div>

      {/* SVG pointers */}
      <div className={`absolute left-[11.979vw] top-[8.917vw] transition-all duration-[1500ms] ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[3.333vw]'}`}>
        <Image
          src={Intuitive}
          alt="Intuitive"
          className="w-[7.594vw] h-auto mb-[0.833vw]"
        />
      </div>
      <div className={`absolute left-[15.365vw] bottom-[11.354vw] transition-all duration-[1500ms] ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[3.333vw]'}`}>
        <Image
          src={Secure}
          alt="Secure"
          className="w-[7.594vw] h-auto"
        />
      </div>

      <div className={`absolute right-[14.01vw] top-[9.021vw] transition-all duration-[1500ms] ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[3.333vw]'}`}>
        <Image
          src={SCALABLE}
          alt="Scalable"
          className="w-[7.594vw] h-auto mb-[0.833vw]"
        />
      </div>
      <div className={`absolute right-[23.698vw] bottom-[11.354vw] transition-all duration-[1500ms] ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[3.333vw]'}`}>
        <Image
          src={Tailored}
          alt="Tailored"
          className="w-[7.594vw] h-auto"
        />
      </div>
    </div>
  );
};

export default FinalBanner;
