"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SeachBar = ({ originalBlogs, setElasticSearchData, setNotFound }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value === "") {
      setElasticSearchData(originalBlogs);
      setNotFound(false);
    } else {
      const filteredBlogs = originalBlogs.filter((blog) =>
        blog.meta_title.toLowerCase().includes(value.toLowerCase())
      );
      setElasticSearchData(filteredBlogs);
      setNotFound(filteredBlogs.length === 0);
    }
  };


 

  return (
    <div>
    <div className="flex items-start mr-[4.5vw]">
     <input
        type="text"
        name="search"
        placeholder="Enter Keyword"
        className="text-neutral-800 text-[1.042vw] font-normal leading-[normal] tracking-[0.015rem] pr-[1vw] py-[1vw] pl-[1.25vw] border opacity-90 rounded-[0.26vw] border-opacity-50 focus:outline-0 mb-[2.6vw]"
        onChange={handleChange}
        value={search}
      />
      <button className="bg-sky-500 px-[1.2vw] rounded-[0.3125rem] h-full py-[1vw] md:py-[1vw] hover:opacity-50">
        <IoSearchOutline className="size-[2.5vw] md:size-[1.563vw] text-white" />
      </button>
      <br/>
{search &&
  !originalBlogs.some((blog) =>
    blog.meta_title.toLowerCase().includes(search.toLowerCase())
  ) && (
    
    <div className="flex justify-between">
      
    <p className="text-red-500 text-[1vw] mt-[0.5vw] ml-4">No blogs found.</p>
    {setElasticSearchData(originalBlogs)}
    </div>
     
    
  )}
     </div>
   </div>
     
   );
 };

export default SeachBar;


