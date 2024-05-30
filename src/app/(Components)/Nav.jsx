import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/nav/nav-logo.png";

const Nav = () => {
  return (
    <nav className="w-full h-[140px] bg-[#FAFAFA] pl-[4.635vw] pr-[5.208vw] pt-[20px] shadow-lg fixed z-[10] top-0">
      <div className="flex justify-between items-center">
        <Image src={logo} alt="logo" className="w-[5.521vw] h-[4.167vw]" />
        <div className="text-[1.25vw] font-normal flex gap-[3.49vw] py-auto items-center">
          <Link href="">Portfolio</Link>
          <Link href="">Services</Link>
          <Link href="">Premium Services</Link>
          <Link href="">Vision</Link>
          <Link href="">Pricing</Link>
          <Link href="">Blogs</Link>
          <button className="py-[0.729vw] px-[1.823] bg-[#60E2FF] text-white rounded-[5px] w-[10.417vw]">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
