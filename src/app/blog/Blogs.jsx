"use client";
import Image from "next/image";
import React from "react";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaFilePen } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Blogs = ({ blog }) => {
  const dateStr = blog.date;
  const date = new Date(dateStr);
  const formatDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const router = useRouter();

  const handleClick = () => {
    const newUrl = `blog/${blog.url}`;
    router.push(newUrl);
  };
  return (
    <div
      className="rounded-[0.5vw] border border-black border-opacity-30 shadow-lg bg-[#FAFAFA] hover:opacity-90 cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={`https://crm.learningsaint.com/images/blogs/${blog.image}`}
        width={800}
        height={600}
        alt="image"
        className="w-[28.464vw] h-[17.63vw] rounded-t-[0.521vw]"
      />

      <h6 className="text-[#00AFF1] text-[0.833vw] font-medium leading-[150%] tracking-[0.013rem] pt-[1vw] pl-[1.042vw]">
        {blog.title}
      </h6>
      <h2 className="text-[#212121] text-[1.25vw] font-semibold leading-[normal] tracking-[0.015rem] pt-[1vw] pl-[1.042vw]">
        {blog.meta_title}
      </h2>
      <p className="text-[#212121] text-[1.042vw] font-normal leading-[normal] tracking-[0.015rem] pt-[1vw] pl-[1.042vw]">
        {blog.meta_description}
      </p>
      <div className="flex justify-between items-center mt-[1.5vw] border-t rounded-b-[0.5vw] border-opacity-50 border-black px-[1.042vw] py-[1.458vw]">
        <p className="text-[#212121] text-[1.042vw] leading-[normal] tracking-[0.01rem] flex items-center gap-[0.5vw]">
          <FaFilePen className="size-[1.25vw] text-[#00AFF1]" /> {blog.author}
        </p>
        <div className="flex items-center gap-[0.5vw]">
          <IoCalendarClearOutline className="size-[1.25vw] text-[#00AFF1]" />
          <p className="text-[#00AFF1] text-[1.042vw] leading-[normal] tracking-[0.13rem]">
            {formatDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
