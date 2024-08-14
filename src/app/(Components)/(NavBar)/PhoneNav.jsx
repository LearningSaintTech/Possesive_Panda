"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { services1 } from "./data";
import SubServices from "./SubServices";

const PhoneNav = ({ setShowSidebar, activeLabel }) => {
  const sidebarRef = useRef(null);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowSidebar]);
  return (
    <div
      className="z-[999] h-screen absolute w-[90vw] py-3 bg-white left-[22vw] pr-1 top-0 overflow-auto"
      ref={sidebarRef}
    >
      <IoClose
        className="mt-[5vw] ml-[3vw] size-[10vw]"
        onClick={() => setShowSidebar(false)}
      />

      <div className="mt-20 ">
        <Link
          href="/"
          className={`font-normal p-4 block border-b border-gray-200 ${
            activeLabel === "Home" ? "text-[#00AFF1]" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`font-normal p-4 block border-b border-gray-200 ${
            activeLabel === "About Us" ? "text-[#00AFF1]" : ""
          }`}
        >
          About Us
        </Link>
        <button
          className="font-normal p-4 border-b border-gray-200 flex items-center pr-8 w-[75vw] justify-between"
          onClick={() => setShowServices(!showServices)}
        >
          <p>Services</p>
          <FaCaretDown className="size-[5vw] sm:size-[3.5vw] opacity-50" />
        </button>
        {showServices && (
          <div className="">
            {services1.map((service, key) => (
              <SubServices data={service} key={key} />
            ))}
          </div>
        )}
        <Link
          href="/portfolio"
          className={`font-normal p-4 block border-b border-gray-200 ${
            activeLabel === "Portfolio" ? "text-[#00AFF1]" : ""
          }`}
        >
          Portfolio
        </Link>
        <Link
          href="/blog"
          className={`font-normal p-4 block border-b border-gray-200 ${
            activeLabel === "Blogs" ? "text-[#00AFF1]" : ""
          }`}
        >
          Blogs
        </Link>
        <Link
          href="/contact"
          className={`font-normal p-4 block border-b border-gray-200 ${
            activeLabel === "Contact" ? "text-[#00AFF1]" : ""
          }`}
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default PhoneNav;
