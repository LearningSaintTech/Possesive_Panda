"use client";
import { Link } from "@/lib/next-compat";
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
      className="z-[999] h-screen absolute w-[90vw] py-3 left-[22vw] pr-1 top-0 overflow-auto"
      ref={sidebarRef}
      style={{
        background: "linear-gradient(85deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%)",
        backdropFilter: "blur(25px)",
      }}
    >
      <IoClose
        className="text-white mt-[5vw] ml-[3vw] size-[10vw]"
        onClick={() => setShowSidebar(false)}
      />

      <div className="mt-20">
        <Link
          href="/"
          className={`font-normal text-[5vw] p-4 block border-b border-gray-200 ${activeLabel === "Home" ? "text-[#00AFF1] font-medium" : "text-white font-normal"}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`font-normal text-[5vw] p-4 block border-b border-gray-200 ${activeLabel === "About Us" ? "text-[#00AFF1] font-medium" : "text-white font-normal"}`}
        >
          About Us
        </Link>
        <button
          className="font-normal text-[5vw] p-4 border-b border-gray-200 flex items-center pr-8 w-[75vw] justify-between"
          onClick={() => setShowServices(!showServices)}
        >
          <p className="text-white">Services</p>
          <FaCaretDown className="size-[5vw] text-white sm:size-[3.5vw] opacity-50" />
        </button>
        {showServices && (
          <div>
            {services1.map((service, key) => (
              <SubServices data={service} key={key} />
            ))}
          </div>
        )}
        <Link
          href="/portfolio"
          className={`font-normal text-[5vw] p-4 block border-b border-gray-200 ${activeLabel === "Portfolio" ? "text-[#00AFF1] font-medium" : "text-white font-normal"}`}
        >
          Portfolio
        </Link>
        <Link
          href="/blog"
          className={`font-normal text-[5vw] p-4 block border-b border-gray-200 ${activeLabel === "Blogs" ? "text-[#00AFF1] font-medium" : "text-white font-normal"}`}
        >
          Blogs
        </Link>
        <Link
          href="/contact"
          className={`font-normal text-[5vw] p-4 block border-b border-gray-200 ${activeLabel === "Contact" ? "text-[#00AFF1] font-medium" : "text-white font-normal"}`}
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default PhoneNav;
