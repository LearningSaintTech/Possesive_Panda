// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import logo from "../../../assets/nav/nav-logo.png";
// import logo1 from "../../../assets/nav/nav-logo1.png";
// import Dropdown from "./Dropdown";
// import { usePathname } from "next/navigation";
// import PhoneNav from "./PhoneNav";
// import { FaChevronDown } from "react-icons/fa6";

// const Nav = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const pathname = usePathname();
//   const [showSidebar, setShowSidebar] = useState(false);

//   useEffect(() => {
//     if (showSidebar) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [showSidebar]);

//   useEffect(() => {
//     setShowSidebar(false);
//     setShowDropdown(false);
//   }, [pathname]);

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About Us" },
//     { href: "/services", label: "Services" },
//     { href: "/portfolio", label: "Portfolio" },
//     { href: "/insights", label: "Insights" },
//     { href: "/blog", label: "Blogs" },
//   ];

//   const activeLink = links.find((link) => {
//     if (link.href === "/") {
//       return pathname === "/";
//     }
//     return pathname.startsWith(link.href);
//   });

//   const activeLabel = activeLink ? activeLink.label : "";

//   const hoverClass = "hover:text-[#00AFF1]";
//   const activeClass = "text-[#00AFF1]";

//   const toggleDropdown = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   return (
//     <nav className="w-full h-[18vw] sm:h-[5.58vw] bg-transparent pl-[4.635vw] pr-[5.208vw] py-[1.15vw] shadow-sm fixed top-0 z-30">
//       <div className="flex justify-between items-center relative">
//         <Link href="/">
//           <Image
//             src={logo1}
//             alt="logo"
//             className="w-[20vw] h-[15vw] sm:w-[5.521vw] sm:h-[4.167vw]"
//           />
//         </Link>
//         <div className="sm:hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="31"
//             height="29"
//             viewBox="0 0 31 29"
//             fill="none"
//             className="size-[11.5vw]"
//             onClick={() => setShowSidebar(true)}
//           >
//             <path
//               d="M5.8125 7.76562H25.1875M5.8125 14.337H25.1875M5.8125 20.9083H25.1875"
//               stroke="#2A2A2A"
//               strokeWidth="0.894231"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           {showSidebar && <PhoneNav setShowSidebar={setShowSidebar} activeLabel={activeLabel} />}
//         </div>
//         <div className="text-[1.25vw] text-white font-normal sm:flex gap-[3.49vw] py-auto items-center hidden">
//           <Link href="/" className={`${activeLabel === "Home" ? activeClass : hoverClass}`}>
//             Home
//           </Link>
//           <Link href="/about" className={`${activeLabel === "About Us" ? activeClass : hoverClass}`}>
//             About Us
//           </Link>
//           <button
//             className={`${activeLabel === "Services" ? activeClass : hoverClass} flex gap-[0.2vw] items-center`}
//             onClick={toggleDropdown}
//           >
//             Services <FaChevronDown className="size-[1vw]" />
//           </button>
//           <Link href="/portfolio" className={`${activeLabel === "Portfolio" ? activeClass : hoverClass}`}>
//             Portfolio
//           </Link>
//           <Link href="/blog" className={`${activeLabel === "Blogs" ? activeClass : hoverClass}`}>
//             Blogs
//           </Link>
//           <Link href="/contact" className="py-[0.729vw] px-[1.823vw] bg-[#60E2FF] text-white rounded-[3.906vw] hover:bg-[#00AFF1]">
//             Get In Touch
//           </Link>
//         </div>
//         {showDropdown && <Dropdown showDropdown={showDropdown} setShowDropdown={setShowDropdown} />}
//       </div>
//     </nav>
//   );
// };

// export default Nav;

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo1 from "../../../assets/nav/nav-logo1.png";
import Dropdown from "./Dropdown";
import { usePathname } from "next/navigation";
import PhoneNav from "./PhoneNav";
import { FaChevronDown } from "react-icons/fa6";

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);

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

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/insights", label: "Insights" },
    { href: "/blog", label: "Blogs" },
  ];

  const isHomePage = pathname === "/";
  const activeLink = links.find((link) => {
    if (link.href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(link.href);
  });

  const activeLabel = activeLink ? activeLink.label : "";

  // Hover and active class logic
  const hoverClass = "hover:text-[#00AFF1]";
  const activeClass = "text-[#00AFF1] font-semibold";
  const inactiveClass = "font-normal";

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <nav
      className={`w-full h-[18vw] sm:h-[5.58vw] ${
        isHomePage ? "bg-transparent" : "bg-white"
      } pl-[4.635vw] pr-[5.208vw] py-[1.15vw] shadow-sm fixed top-0 z-30`}
    >
      <div className="flex justify-between items-center relative">
        <Link href="/">
          <Image
            src={logo1}
            alt="logo"
            className="w-[20vw] h-[15vw] sm:w-[5.521vw] sm:h-[4.167vw]"
          />
        </Link>
        <div className="sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="29"
            viewBox="0 0 31 29"
            fill="none"
            className="size-[11.5vw]"
            onClick={() => setShowSidebar(true)}
          >
            <path
              d="M5.8125 7.76562H25.1875M5.8125 14.337H25.1875M5.8125 20.9083H25.1875"
              stroke={isHomePage ? "#2A2A2A" : "#000000"}
              strokeWidth="0.894231"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {showSidebar && <PhoneNav setShowSidebar={setShowSidebar} activeLabel={activeLabel} />}
        </div>
        <div className={`text-[1.25vw] ${isHomePage ? "text-white" : "text-black"} font-normal sm:flex gap-[3.49vw] py-auto items-center hidden`}>
          <Link
            href="/"
            className={`${activeLabel === "Home" ? activeClass : inactiveClass} ${hoverClass}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              activeLabel === "About Us" ? activeClass : inactiveClass
            } ${hoverClass}`}
          >
            About Us
          </Link>
          <button
            className={`${
              activeLabel === "Services" ? activeClass : inactiveClass
            } flex gap-[0.2vw] items-center ${hoverClass}`}
            onClick={toggleDropdown}
          >
            Services <FaChevronDown className="size-[1vw]" />
          </button>
          <Link
            href="/portfolio"
            className={`${
              activeLabel === "Portfolio" ? activeClass : inactiveClass
            } ${hoverClass}`}
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className={`${
              activeLabel === "Blogs" ? activeClass : inactiveClass
            } ${hoverClass}`}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="py-[0.729vw] px-[1.823vw] bg-[#05B7DF] text-white rounded-[3.906vw] hover:bg-[#109AD6]"
          >
            Get In Touch
          </Link>
        </div>
        {showDropdown && <Dropdown showDropdown={showDropdown} setShowDropdown={setShowDropdown} />}
      </div>
    </nav>
  );
};

export default Nav;




