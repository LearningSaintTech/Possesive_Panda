"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Recent = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://crm.learningsaint.com/api/getBlogs/2?api_token=zxUcPukvuXHaCM6E7eqfLwGUncdJD6lF1qGcjEAifQjy1iAUvVw0Qu2hJLQj"
        );
        const data = await response.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="hidden sm:block px-[1.823vw] rounded-[0.521vw] bg-neutral-50 border-opacity-50 border shadow-[0px_4.078px_4.078px_0px_rgba(0,0,0,0.25)] pl-[2.083vw] pb-[2.604vw] h-fit sticky top-[6.5vw]">
      <h4 className="text-neutral-800 text-[1.25vw] font-semibold leading-[91.6%] tracking-[0.02rem] mt-[2.5vw] mb-[1.5vw]">
        Recent Post
      </h4>

      <div className="">
        {blogs.slice(-4).map((blog, key) => (
          <Card blog={blog} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Recent;
