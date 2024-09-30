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
      <div className="relative flex justify-between items-center rounded-[0.3vw] border-l border-white border-opacity-30 pl-[0.8vw] pr-[4.7vw] h-[5vw] cursor-pointer">
        <h5
          className="text-white hover:text-[#60e2ff] hover:font-bold text-[1.042vw] my-[1.823vw] font-medium leading-[normal] tracking-[0.013rem]  w-[12vw]"
        >
          {firstPart}
          <br />
          {secondPart}
        </h5>

        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M24 18L36 30L24 42" stroke="white" stroke-width="3" stroke-linecap="round" />
        </svg>
      </div>
    </Link>
  );
};

export default ServiceItem;
