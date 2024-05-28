import React from "react";
import downButton from "../../assets/footer/downButton.png";
import gmail from "../../assets/footer/gmail.svg";
import phone from "../../assets/footer/phone.svg";
import twitter from "../../assets/footer/twitter.svg";
import linkedin from "../../assets/footer/linkedin.svg";
import instagram from "../../assets/footer/instagram.svg";
import facebook from "../../assets/footer/facebook.svg";
import panda from "../../assets/footer/panda.png";
import grey from "../../assets/footer/grey-background.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="ml-[5.2vw] mt-[200px] relative">
      <div className=" w-fit flex">
        <div className="w-[39.07vw]">
          <h1 className="text-zinc-800 text-[3.333vw] font-medium leading-[4.167vw] tracking-[0.167vw]">
            Possessive
          </h1>
          <div className="flex">
            <h1 className="text-zinc-800 text-[3.333vw] font-medium leading-[4.167vw] tracking-[0.167vw] mr-[0.417vw] mb-[84px]">
              Panda
            </h1>
            <button className="h-fit">
              <Image src={downButton} alt="down-arrow" className="h-fit mt-4" />
            </button>
          </div>

          <h5 className="text-zinc-900 text-[1.25vw] font-medium leading-[1.563vw] tracking-wide mb-[20px]">
            Get In Touch With Us
          </h5>
          <div className="flex bg-[#D9D9D9] border rounded-[5px] w-[16.094vw] items-center">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-[#D9D9D9] py-[0.677vw] text-[1.042vw] pl-[1.042vw] w-[13.333vw]"
            />
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="iconamoon:arrow-up-2">
                <path
                  id="Vector"
                  d="M13.3333 22.6663L20 15.9997L13.3333 9.33301"
                  stroke="#2A2A2A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="w-[21.833vw]">
          <h6 className="text-[1.667vw] font-medium text-[#2A2A2A] leading-[2.083vw] tracking-[0.083vw] mb-[21px]">
            Ways to Reach Us
          </h6>
          <div className="flex">
            <Image src={gmail} alt="gmail" />
            <p className="text-[1.25vw] font-medium tracking-[0.083vw] leading-[1.563vw] text-[#2A2A2A] ml-[1.042vw] mb-[15px]">
              possesivepanda@gmail.com
            </p>
          </div>
          <div className="flex">
            <Image src={phone} alt="phone" />
            <p className="text-[1.25vw] font-medium tracking-[0.083vw] leading-[1.563vw] text-[#2A2A2A] ml-[1.042vw]">
              +91 8080555520
            </p>
          </div>

          <div className="flex mt-[33px] w-[13.021vw] justify-between">
            <Image src={twitter} alt="twitter" />
            <Image src={linkedin} alt="linkedin" />
            <Image src={instagram} alt="instagram" />
            <Image src={facebook} alt="facebook" />
          </div>
        </div>
      </div>

      <h1 className="mt-[80px] text-[1.25vw] leading-[2.292vw] text-[#2A2A2A] tracking-[0.025vw] pb-[40px]">
        © 2024 | Alrights reserved by Possessive Panda
      </h1>

      <Image
        src={panda}
        alt="panda"
        className="absolute bottom-[6px] right-[2.083vw]"
      />
      <Image
        src={grey}
        alt="grey"
        className="absolute bottom-0 right-0 z-[-1]"
      />
    </footer>
  );
};

export default Footer;
