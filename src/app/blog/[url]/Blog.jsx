import Image from "next/image";
import React from "react";
import { FaFilePen, FaBookmark } from "react-icons/fa6";
import { IoCalendarClear } from "react-icons/io5";
import "./blog.css";
import Tags from "./Tags";

const Blog = ({ data }) => {
  const dateStr = data.date;
  const date = new Date(dateStr);
  const formatDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const tags = data.tags.split(" ");
  return (
    <div className="p-[2.6vw] bg-[#FAFAFA] w-fill sm:w-[57.813vw]">
      <Image
        src={`https://crm.learningsaint.com/images/blogs/${data.image}`}
        width={800}
        height={600}
        alt="image"
        className="w-full h-[45vw] sm:w-[52.5vw] sm:h-[31.51vw] rounded-t-[0.521vw] mt-[5vw] sm:mt-[0]"  
      />
      <div className="flex gap-[3.2vw] sm:gap-[1.563vw] items-center w-full sm:w-[52.5vw] mt-[3vw] sm:mt-[2.6vw]">
        <p className="text-[#0b0909] text-[2.5vw] sm:text-[1.042vw] font-medium leading-[normal] tracking-[0.015rem] flex items-center gap-[0.8vw] sm:gap-[0.3vw]">
          <FaFilePen className="size-[3vw] sm:size-[1.25vw] text-[#00AFF1]" />
          {data.author}
        </p>
        <p className="text-[#212121] text-[2.5vw] sm:text-[1.042vw] font-medium leading-[normal] tracking-[0.015rem] flex items-center gap-[0.8vw] sm:gap-[0.3vw]">
          <IoCalendarClear className="size-[3vw] sm:size-[1.25vw] text-[#00AFF1]" />
          {formatDate}
        </p>
        <p className="text-[#212121] text-[2.5vw] sm:text-[1.042vw] font-medium leading-[normal] tracking-[0.015rem] flex items-center gap-[0.8vw] sm:gap-[0.3vw]">
          <FaBookmark className="size-[3vw] sm:size-[1.25vw] text-[#00AFF1]" />
          {data.title}
        </p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
      <div className="border-t-2 border-[#EFF1F4] pt-[2vw] sm:pt-[1vw] flex items-center">
        <h2 className="text-[#212121] text-[3.2vw]  sm:text-[1.25vw] leading-[normal] tracking-[0.015rem]">
          Tags :
        </h2>
        {tags.map((tag, key) => (
          <Tags tag={tag} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
