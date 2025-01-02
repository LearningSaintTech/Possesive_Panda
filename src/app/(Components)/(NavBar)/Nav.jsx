"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo1 from "../../../../public/pp-trademark-logo.png";
import Dropdown from "./Dropdown";
import { usePathname } from "next/navigation";
import PhoneNav from "./PhoneNav";
import { FaChevronDown } from "react-icons/fa6";

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showSidebar]);

  useEffect(() => {
    setShowSidebar(false);
    setShowDropdown(false);
  }, [pathname]);

  // Scroll event to change navbar background and styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/insights", label: "Insights" },
    { href: "/blog", label: "Blogs" },
  ];

  const activeLink = links.find((link) => {
    if (link.href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(link.href);
  });

  const activeLabel = activeLink ? activeLink.label : "";

  const hoverClass = "hover:text-[#00AFF1]";
  const activeClass = "text-[#00AFF1]";

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <nav
      className={`w-full h-[20vw] sm:h-[5vw] px-[5.208vw] items-center justify-between flex shadow-sm fixed top-0 z-30 transition-all duration-300 ${isScrolled
        ? "bg-[rgba(255,255,255,0.10)] backdrop-blur-[25px]"
        : "bg-transparent"
        }`}
      style={{ backdropFilter: isScrolled ? "none" : "none" }}
    >
      <Link href="/">
        <Image
          src={logo1}
          alt="logo"
          className="w-[20vw] h-full sm:w-[5.509vw] "
        />
      </Link>
      <div className="sm:hidden">
        <div onClick={() => setShowSidebar(!showSidebar)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <g clipPath="url(#clip0_9815_13648)">
              <path d="M4.63245 7.72043C4.63245 6.86761 5.32379 6.17627 6.17661 6.17627H30.8831C31.736 6.17627 32.4273 6.86761 32.4273 7.72043C32.4273 8.57324 31.736 9.26459 30.8831 9.26459H6.17661C5.32379 9.26459 4.63245 8.57324 4.63245 7.72043ZM4.63245 18.5295C4.63245 17.6767 5.32379 16.9854 6.17661 16.9854H30.8831C31.736 16.9854 32.4273 17.6767 32.4273 18.5295C32.4273 19.3824 31.736 20.0737 30.8831 20.0737H6.17661C5.32379 20.0737 4.63245 19.3824 4.63245 18.5295ZM4.63245 29.3386C4.63245 28.4858 5.32379 27.7945 6.17661 27.7945H30.8831C31.736 27.7945 32.4273 28.4858 32.4273 29.3386C32.4273 30.1915 31.736 30.8828 30.8831 30.8828H6.17661C5.32379 30.8828 4.63245 30.1915 4.63245 29.3386Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_9815_13648">
                <rect width="37.0598" height="37.0598" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {showSidebar && (
          <PhoneNav setShowSidebar={setShowSidebar} activeLabel={activeLabel} />
        )}
      </div>

      <div className="text-[1.042vw] text-white font-normal capitalize sm:flex gap-[2.813vw] py-auto justify-center items-center hidden">
        <Link href="/pay" className={`${activeLabel === "Pay Now" ? activeClass : hoverClass}`}>
          Pay Now
        </Link>
        <Link href="/" className={`${activeLabel === "Home" ? activeClass : hoverClass}`}>
          Home
        </Link>
        <Link href="/about" className={`${activeLabel === "About Us" ? activeClass : hoverClass}`}>
          About Us
        </Link>
        <button
          className={`${activeLabel === "Services" ? activeClass : hoverClass} flex gap-[0.2vw] items-center`}
          onClick={toggleDropdown}
        >
          Services <FaChevronDown className="size-[1vw]" />
        </button>
        <Link href="/portfolio" className={`${activeLabel === "Portfolio" ? activeClass : hoverClass}`}>
          Portfolio
        </Link>
        <Link href="/blog" className={`${activeLabel === "Blogs" ? activeClass : hoverClass}`}>
          Blogs
        </Link>
        <Link href="/contact" className="ml-[0.521vw] py-[0.885vw] px-[1.563vw] bg-[#05B7DF] text-white rounded-[3.906vw] hover:bg-[#00AFF1]">
          Get In Touch
        </Link>
      </div>
      {showDropdown && <Dropdown showDropdown={showDropdown} setShowDropdown={setShowDropdown} />}
    </nav>
  );
};

export default Nav;
