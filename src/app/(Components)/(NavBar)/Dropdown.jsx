"use client";
import React, { useEffect, useRef } from "react";
import { services } from "./data";
import background from "../../../assets/nav/Gradient.png";
import Image from "next/image";
import Link from "next/link";
import panda from "../../../assets/footer/panda.png";
import { usePathname } from "next/navigation";

const Dropdown = ({ showDropdown, setShowDropdown }) => {
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowDropdown]);
  return (
    <div
      ref={dropdownRef}
      className={`absolute flex gap-[2.344vw] top-[4.3vw] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[1vw] w-[90vw] h-[21.25vw] ${
        showDropdown ? "block" : "hidden"
      }`}
    >
      {/* <div className="">
        <h1 className="text-zinc-800 text-[1.667vw] font-medium leading-[normal] tracking-[0.02rem] underline mb-[1.563vw]">
          Browse Our Services
        </h1>
        <div className="w-[22.5vw]">
          <ListItem
            name={"Services"}
            clickFunction={() => setSelectedService("Services")}
            selected={selectedService}
          />
          <ListItem
            name={"Premium Services"}
            clickFunction={togglePremiumServicesDropdown}
            selected={selectedService}
          />
          <div className="text-[1.042vw] ml-[2.3vw]">
            {isPremiumServicesOpen &&
              premiumServicesData.map((item, key) => (
                <ListItem
                  name={item}
                  key={key}
                  clickFunction={() => setSelectedService(item)}
                  selected={selectedService}
                />
              ))}
          </div>
        </div>
      </div> */}

      {/* <svg
        viewBox="0 0 4 397"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="my-auto w-[2vw] h-[20.833vw]"
      >
        <line
          opacity="0.5"
          x1="2"
          y1="397"
          x2="1.99998"
          y2="-6.76711e-06"
          stroke="url(#paint0_linear_2132_4246)"
          strokeWidth="4"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2132_4246"
            x1="4.49998"
            y1="-5.06412e-05"
            x2="4.49717"
            y2="396.999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A39C9C" stopOpacity="0" />
            <stop offset="0.455" stopColor="#A39C9C" />
            <stop offset="1" stopColor="#A39C9C" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="grid grid-cols-3 gap-[1.6vw] overflow-auto pt-[1.8vw] pb-[2vw] scroll scroll-smooth snap-end">
        {serviceContent[selectedService].map((item, index) => (
          <ServiceItem key={index} name={item} />
        ))}
      </div> */}
      <div className="relative w-full h-full">
        <Image
          src={background}
          alt="background"
          className="absolute inset-0 min-h-full min-w-full object-cover opacity-80"
        />
        <div className="relative z-10">
          <div className="grid grid-cols-3 gap-y-[2.7vw] gap-x-[2.76vw] mt-[4.17vw] ml-[5.3vw] mr-auto w-fit">
            {services.map((service, key) => (
              <Link
                href={service.link}
                key={key}
                className={`text-[1.25vw] font-medium capitalize tracking-[0.015rem] border-b pb-[0.5vw] w-fit hover:border-[#00AFF1] hover:text-[#00AFF1] ${
                  service.link == pathname
                    ? "text-[#00AFF1] border-[#00AFF1]"
                    : "text-[#2a2a2a] border-black"
                }`}
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
        <Image
          src={panda}
          alt="panda"
          className="absolute bottom-[-1.3vw] right-0 w-[16.4vw] h-[18.23vw] opacity-80"
        />
      </div>
    </div>
  );
};

export default Dropdown;
