import React, { useEffect, useRef, useState } from "react";
import { premiumServicesData, serviceContent } from "./data";
import ListItem from "./ListItem";
import ServiceItem from "./ServiceItem";
import { usePathname } from "next/navigation";

const Dropdown = ({ showDropdown, setShowDropdown }) => {
  const [isPremiumServicesOpen, setIsPremiumServicesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Services");
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Optionally close dropdown when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowDropdown]);

  const togglePremiumServicesDropdown = () => {
    setIsPremiumServicesOpen(!isPremiumServicesOpen);
  };

  return (
    <div
      ref={dropdownRef}
      className={`absolute flex gap-[2.344vw] top-[4.3vw] pl-[3.646vw] py-[2.083vw] pr-[3.6vw] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[0.2vw] w-[90vw] h-[31.5vw] ${
        showDropdown ? "block" : "hidden"
      }`}
      style={{
        background: "linear-gradient(85deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%)",
        backdropFilter: "blur(25px)",
      }}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div className="">
        <h1
          className={`${
            isHomePage ? "text-white" : "text-black"
          } text-[1.667vw] font-medium leading-[normal] tracking-[0.02rem] underline mb-[1.563vw]`}
        >
          Browse Our Services
        </h1>
        <div className="w-[22.5vw]">
          <ListItem
            name={"Services"}
            clickFunction={() => setSelectedService("Services")}
            selected={selectedService}
            textColor={isHomePage ? "text-white" : "text-black"}
          />
          <ListItem
            name={"Premium Services"}
            clickFunction={togglePremiumServicesDropdown}
            selected={selectedService}
            textColor={isHomePage ? "text-white" : "text-black"}
          />
          <div className={`text-[1.042vw] ml-[2.3vw] ${isHomePage ? "text-white" : "text-black"}`}>
            {isPremiumServicesOpen &&
              premiumServicesData.map((item, key) => (
                <ListItem
                  name={item}
                  key={key}
                  clickFunction={() => setSelectedService(item)}
                  selected={selectedService}
                  textColor={isHomePage ? "text-white" : "text-black"}
                />
              ))}
          </div>
        </div>
      </div>

      <svg
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
          <ServiceItem
            key={index}
            name={item.name ? item.name : item}
            link={`/services/${item.link ? item.link : item.toLowerCase().replace(/ /g, '-')}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
