import React from "react";
import Link from "next/link";

const ServiceItem = ({ name = "", link = "" }) => {
  console.log(name);
  const words = name.split(" ");
  let firstPart, secondPart;

  if (words.length >= 3) {
    firstPart = words.slice(0, 2).join(" ");
    secondPart = words.slice(2).join(" ");
  } else {
    firstPart = words[0];
    secondPart = words.slice(1).join(" ");
  }

  // Handle special cases for certain service names
  if (name === "Social Media Setup & Management") {
    firstPart = "Social Media Setup";
    secondPart = "& Management";
  } else if (name === "Technical Support & Troubleshooting") {
    firstPart = "Technical Support &";
    secondPart = "Troubleshooting";
  } else if (name === "Operations & Supply Management") {
    firstPart = "Operations & Supply";
    secondPart = "Management";
  } else if (name === "Finance & Accounting Outsourcing") {
    firstPart = "Finance & Accounting";
    secondPart = "Outsourcing";
  }

  return (
    <Link href={link}>
      <div className="relative rounded-[0.3vw] border-l border-black border-opacity-20 pl-[1.563vw] pr-[4.7vw] h-[6.771vw] cursor-pointer">
        <h5 className="text-neutral-800 hover:text-cyan-300 hover:font-bold text-[1.042vw] my-[1.823vw] font-medium leading-[normal] tracking-[0.013rem] h-fit w-[12vw]">
          {firstPart}
          <br />
          {secondPart}
        </h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="25"
          viewBox="0 0 39 25"
          fill="none"
          className="w-[1.6vw] h-[1.901vw] absolute bottom-[0.8vw] right-[3vw]"
        >
          <path
            opacity="0.5"
            d="M26.2829 23.4766L37.5238 12.2385M37.5238 12.2385L26.2829 1.00037M37.5238 12.2385L1 12.2385"
            stroke="black"
            strokeWidth="1.81"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
};

export default ServiceItem;
