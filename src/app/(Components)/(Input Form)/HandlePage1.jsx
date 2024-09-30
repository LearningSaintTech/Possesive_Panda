"use client";
import React from "react";


const HandlePage1 = ({ setOpen }) => {
  return (
    <div class="fixed inset-0 z-50 w-[1282px] h-[522px]  bg-gradient-to-br from-[#00111a] via-[#003b5a] to-[#00111a] rounded-[30px] border-4 border-white backdrop-blur-[15px]">
    <img class="w-[443.74px] h-[490px] left-[838.26px] top-[82px] absolute opacity-10" src="https://via.placeholder.com/444x490" />
    <div class="w-[935px] left-[174px] top-[66px] absolute text-center"><span className="text-white text-[64px] font-semibold font-['Poppins'] leading-[90px]">Deliver great experiences, no </span><span className="text-[#00aff1] text-[64px] font-semibold font-['Poppins'] leading-[90px]">matter what !</span></div>
    <div class="w-[713px] left-[285px] top-[261px] absolute text-center text-white text-2xl font-normal font-['Poppins']">Connecting with customers is more important than ever. Possesive Panda helps you to grow your business online. </div>
    <div class="w-[749px] h-[61px] left-[267px] top-[374px] absolute">
        <div class="w-[749px] h-[61px] pl-[25px] pr-[564px] py-[18px] left-0 top-0 absolute rounded-[60px] border border-[#00aff1] justify-start items-center inline-flex">
            <div class="text-white text-xl font-normal font-['Poppins'] leading-[25px]">Enter Your Email</div>
        </div>
        <div class="w-[193px] h-[53px] pl-[41px] pr-[34px] pt-[9px] pb-2 left-[552px] top-[4px] absolute bg-[#00aff1] rounded-[60px] justify-end items-center inline-flex">
            <div class="w-[118px] self-stretch relative">
                <div class="left-0 top-0 absolute text-center text-white text-2xl font-normal font-['Poppins'] capitalize">Deliver</div>
            </div>
        </div>
    </div>
</div>
  );
};

export default HandlePage1;
