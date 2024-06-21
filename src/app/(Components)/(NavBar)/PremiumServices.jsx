"use client";
import React, { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { serviceContent } from "./data";
import SubServices from "./SubServices";

const PremiumServices = ({ name }) => {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceClick = (serviceName) => {
    if (selectedService === serviceName) {
      setSelectedService("");
    } else {
      setSelectedService(serviceName);
    }
  };

  return (
    <>
      <button
        className="border-l border-opacity-50 border-black rounded-[0.8vw] ml-8 my-3 py-2 pl-2 flex pr-2 justify-between w-[66vw]"
        onClick={() => handleServiceClick(name)}
      >
        <p>{name}</p>
        <MdArrowRightAlt className="size-[5vw] opacity-50" />
      </button>
      {selectedService === name &&
        serviceContent[selectedService].map((service, key) => (
          <SubServices name={service} key={key} />
        ))}
    </>
  );
};

export default PremiumServices;
