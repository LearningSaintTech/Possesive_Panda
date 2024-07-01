"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SeachBar = ({ blogs, setBlogs }) => {
  const [search, setSearch] = useState("");

  const handleClick = () => {
    setBlogs(() =>
      blogs.filter((blog) =>
        blog.meta_title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
  return (
    <div className="flex items-start mr-[4.5vw]">
      <input
        type="text"
        name="search"
        placeholder="Enter Keyword"
        className="text-neutral-800 text-[1.042vw] font-normal leading-[normal] tracking-[0.015rem] pr-[1vw] py-[1vw] pl-[1.25vw] border opacity-90 rounded-[0.26vw] border-opacity-50 focus:outline-0 mb-[2.6vw]"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-sky-500 px-[1.2vw] rounded-[0.3125rem] h-full py-[1vw] md:py-[1vw] hover:opacity-50"
        onClick={handleClick}
      >
        <IoSearchOutline className="size-[2.5vw] md:size-[1.563vw] text-white" />
      </button>
    </div>
  );
};

export default SeachBar;
