"use client";
import { Image } from "@/lib/next-compat";
import React from "react";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaFilePen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const Blogs = ({ blog }) => {
  const dateStr = blog.date;
  const date = new Date(dateStr);
  const formatDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blog/${blog.url}`);
  };
  return (
    <div
      className="rounded-[0.5vw] border h-fit border-black border-opacity-30 shadow-lg bg-[#131D22] hover:opacity-90 cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={`https://crm.learningsaint.com/images/blogs/${blog.image}`}
        width={800}
        height={600}
        alt="image"
        className="w-fill h-[55vw] sm:w-[28.464vw] sm:h-[17.63vw] rounded-t-[0.521vw]"
      />

      <p className="text-[#00AFF1] sm:text-[0.833vw] text-[3vw] font-medium leading-[150%] tracking-[0.013rem] pt-[1.5vw] pl-[2.042vw] sm:pt-[1vw] sm:pl-[1.042vw]">
        {blog.title}
      </p>
      <h2 className="text-[#FFFFFF] text-[4vw] sm:text-[1.25vw] font-semibold leading-[normal] tracking-[0.015rem] sm:pt-[1vw] sm:pl-[1.042vw] pt-[2vw] pl-[2.042vw]">
        {blog.meta_title}
      </h2>
      <h3 className="text-[#FFFFFF] text-[3.042vw] sm:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] sm:pt-[1vw] sm:pl-[1.042vw] pt-[2vw] pl-[2.042vw]">
        {blog.meta_description}
      </h3>
      <div className="flex justify-between items-center sm:mt-[1.5vw] mt-[3.5vw] border-t rounded-b-[0.5vw] border-opacity-50 border-black px-[2.042vw] py-[3vw] sm:px-[1.042vw] sm:py-[1.458vw]">
        <p className="text-[#FFFFFF] text-[3.5vw] sm:text-[1.042vw] leading-[normal] tracking-[0.01rem] flex items-center gap-[0.5vw]">
          <FaFilePen className="size-[4.25vw] sm:size-[1.25vw] text-[#00AFF1]" /> {blog.author}
        </p>
        <div className="flex items-center gap-[1.3vw] sm:gap-[0.5vw]">
          <IoCalendarClearOutline className="size-[4.25vw] sm:size-[1.25vw] text-[#00AFF1]" />
          <p className="text-[#00AFF1] text-[3.5vw] sm:text-[1.042vw]  leading-normal tracking-[0.13rem]">
            {formatDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
