/* eslint-disable react/no-unescaped-entities */
import React from "react";
import normalServices from "../../assets/home/services/Banners1.png";
import normalServices2 from "../../assets/home/services/Banner2.png";
import Image from "next/image";

const OurServices = () => {
  return (
    <div className="mx-[5.208vw] mt-[100px]">
      <div className="flex justify-between relative">
        <div className="flex-1 max-w-[40.665vw]">
          <p className="text-zinc-900  font-normal tracking-[0.05vw] text-[1.326vw]">
            Our Services
          </p>
          <h1 className="text-zinc-900 text-[4.86vw] font-normal capitalize tracking-wide w-[29.219vw]">
            Check Our Top Services
          </h1>
          <p className="text-zinc-900 text-[1.326vw] font-normal leading-[2.1vw] tracking-wide mt-7">
            "Empowering businesses with cutting-edge IT solutions: software
            development, cloud services, cybersecurity, IT consulting, and
            managed services for optimal performance."
          </p>
        </div>

        <div className="absolute -bottom-[200px] w-fit right-0">
          <p className="text-zinc-900 text-[1.658vw]  font-normal leading-[2.321vw] tracking-[0.033vw] w-[30.665vw]">
            "Comprehensive IT Solutions: Software Development, Cybersecurity,
            Cloud Services, Data Analytics, IT Consulting, Network Management,
            and Technical Support for Your Business."
          </p>
        </div>
      </div>
      <div className="flex mt-[300.97px]">
        <div>
          <Image
            src={normalServices}
            alt="Normal Services"
            className="mr-[3.362vw] w-[43.097vw]"
          />
        </div>
        <div className="mt-[150px]">
          <Image
            src={normalServices2}
            alt="Premium Services"
            className="w-[43.097vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
