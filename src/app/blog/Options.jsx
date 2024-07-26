import React from "react";
import Tag from "./Tag";
import Recent from "./Recent";
import SeachBar from "./SeachBar";
import Category from "./Category";
import Link from "next/link";
const Options = ({ categories, tags, blogs, setBlogs }) => {
  return (
    <div className="w-fit hidden sm:block">
      <div className="rounded-[0.5vw] w-full mx-auto md:mx-0 bg-gray-50 border border-black border-opacity-50 pl-[2.083vw] shadow-[0px_4.078px_4.078px_0px_rgba(0,0,0,0.25)]">
        <h2 className="text-neutral-800 text-[4vw] md:text-[1.25vw] font-semibold leading-[91.5%] tracking-[0.02rem] mt-[2.604vw] mb-[1.563vw]">
          Search Here
        </h2>
        <SeachBar blogs={blogs} setBlogs={setBlogs} />
      </div>
      <div className="md:block mt-[2.3vw] rounded-[0.521vw] bg-neutral-50 border-opacity-50 border shadow-[0px_4.078px_4.078px_0px_rgba(0,0,0,0.25)] pl-[2.083vw] pb-[2.604vw]">
        <h2 className="text-neutral-800 text-[1.25vw] font-semibold leading-[91.6%] tracking-[0.02rem] mt-[2.5vw] mb-[1.5vw]">
          Categories
        </h2>
        <div className="flex flex-col gap-[0.677vw] items-start">
          {blogs.map((blogs, key) => (
            <Link href = {`/blog/${blogs.url}`}>
             <Category category={blogs.title}  blogs = {blogs} key={key} />
            </Link>
          ))}
        </div>
      </div>

      <div className="px-[1.823vw] rounded-[0.521vw] bg-neutral-50 border-opacity-50 border shadow-[0px_4.078px_4.078px_0px_rgba(0,0,0,0.25)] pl-[2.083vw] pb-[2.604vw] mt-[2.3vw]">
        <h4 className="text-neutral-800 text-[1.25vw] font-semibold leading-[91.6%] tracking-[0.02rem] mt-[2.5vw] mb-[1.5vw]">
          Tags
        </h4>
        <div className="grid grid-cols-2 gap-x-[1.042vw] gap-y-[1.3vw]">
          {tags.map((tag, key) => (
            <Tag name={tag} setBlogs={setBlogs} key={key} />
          ))}
        </div>
      </div>
      <div className="px-[1.823vw] rounded-[0.521vw] bg-neutral-50 border-opacity-50 border shadow-[0px_4.078px_4.078px_0px_rgba(0,0,0,0.25)] pl-[2.083vw] pb-[2.604vw] mt-[2.3vw]">
        <h4 className="text-neutral-800 text-[1.25vw] font-semibold leading-[91.6%] tracking-[0.02rem] mt-[2.5vw] mb-[1.5vw]">
          Recent Post
        </h4>

        <div className="">
          {blogs.slice(-4).map((blog, key) => (
            <Link href={`/blog/${blog.url}`}> 
            <Recent blog={blog} key={key} />
            </Link>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Options;
