import React from "react";
import Image from "next/image";
import blog_1 from "../../assets/home/blogs/Blogs-1.png";
import blog_2 from "../../assets/home/blogs/Blogs-2.png";
import blog_3 from "../../assets/home/blogs/Blogs-3.png";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="">
      <div className="lg:w-[31.719vw] h-fit  mx-[6.771vw] flex flex-col gap-[3vw] lg:gap-[1.042vw]">
        <p className="text-zinc-900 text-[5.128vw] md:text-[2.5vw] lg:text-[1.667vw] font-normal tracking-[0.051vw] md:tracking-[0.015rem] text-center lg:text-left lg:mt-0 mt-[5vw]">
          Our Blogs
        </p>
        <h1 className="text-zinc-900 text-[6.154vw] md:w-[90%] lg:w-full md:text-[7.5vw] lg:text-[3.334vw] font-medium leading-[normal] tracking-[0.04rem] text-center lg:text-left">
          Our Knowledge Hub
        </h1>
        <p className="text-zinc-900 text-[3.846vw] md:text-[3vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] text-center lg:text-left">
          Get access to our collection of the latest information from our blogs.
          Explore the latest technological updates and services here!
        </p>
        <Link
          href="blog"
          className="w-full lg:w-fit text-[3.846vw] md:text-[3vw] lg:text-[1.25vw] flex justify-center items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-zinc-900 tracking-[0.015rem] px-[3vw] py-[2.5vw] md:py-[1vw] hover:text-white hover:bg-[#60E2FF] hover:border-none duration-500 hover:duration-500 hover:shadow-md mt-[1.042vw] lg:mb-0 mb-[8vw]"
        >
          ALL BLOG
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-[6.771vw] mt-[5.2vw]">
        <div className="mx-auto lg:mx-0 lg:w-[27vw] mb-[3vw] lg:mb-0 ">
          <Image
            src={blog_1}
            alt="blog-1"
            className="rounded-3xl w-fit md:w-full md:h-[40vh] lg:w-[27vw] h-[35vh] lg:h-[18vw]"
          />
          <p className="text-zinc-900 text-[3.846vw] md:text-[3.5vw] lg:text-[1.25vw] font-normal leading-[177.086%] tracking-[0.015rem] my-[2vw] md:my-0 lg:mt-[1.5vw]">
            What is a Freelance Digital Marketer and How to Become a One?
          </p>
          <small className="text-zinc-600 text-[3.5vw] md:text-[3vw] lg:text-[1.25vw] font-normal leading-[194.8%] tracking-[0.013vw]">
            Branding . 13 June 2024
          </small>
        </div>
        <div className="lg:w-[27vw] justify-self-center mb-[3vw] lg:mb-0 ">
          <Image
            src={blog_2}
            alt="blog-2"
            className="rounded-3xl w-fit md:w-full md:h-[40vh] lg:w-[27vw] h-[35vh] lg:h-[18vw]"
          />
          <p className="text-zinc-900 text-[3.846vw] md:text-[3.5vw] lg:text-[1.25vw] font-normal leading-[177.086%] tracking-[0.015rem] my-[1.795vw] md:my-0 lg:mt-[1.5vw]">
            What is E-Commerece Website and How to Make One?
          </p>
          <small className="text-zinc-600 text-[3.5vw] md:text-[3vw] lg:text-[1.25vw] font-normal leading-[194.8%] tracking-[0.013vw]">
            Branding . 19 June 2024
          </small>
        </div>

        <div className="lg:w-[27vw] justify-self-end ">
          <Image
            src={blog_3}
            alt="blog-3"
            className="rounded-3xl w-fit md:w-full md:h-[40vh] lg:w-[27vw] h-[35vh] lg:h-[18vw]"
          />
          <p className="text-zinc-900 text-[3.846vw] md:text-[3.5vw] lg:text-[1.25vw] font-normal leading-[177.086%] tracking-[0.015rem] my-[1.795vw] md:my-0 lg:mt-[1.5vw]">
            What is AWS and How to Deploy a Website on AWS
          </p>
          <small className="text-zinc-600 text-[3.5vw] md:text-[3vw] lg:text-[1.25vw] font-normal leading-[194.8%] tracking-[0.013vw]">
            Branding . 124 June 2024
          </small>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
