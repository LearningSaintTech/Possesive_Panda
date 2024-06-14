"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import blog_1 from "../../assets/home/blogs/Blogs-1.png";
import blog_2 from "../../assets/home/blogs/Blogs-2.png";
import blog_3 from "../../assets/home/blogs/Blogs-3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      disable: "mobile",
      once: true,
      mirror: true,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div className="mt-[60px]">
      <div
        className="lg:w-[31.719vw] h-fit  mx-[5.2vw]"
        data-aos="fade-up-right"
      >
        <p className="text-zinc-900 text-[3.42vw] md:text-[2.5vw] lg:text-[1.25vw] font-normal tracking-[0.013vw] mb-[17px]">
          Our Blogs
        </p>
        <h1 className="text-zinc-900 text-[10vw] md:w-[90%] lg:w-full md:text-[7.5vw] lg:text-[3.333vw] font-medium leading-[normal] tracking-[0.033vw] mb-[17px]">
          Dive Into Our Creative Musings
        </h1>
        <p className="text-zinc-900 text-[3.42vw] md:text-[3vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.013vw] mb-[50px]">
          A curated collection of thoughts, ideas, and inspirations. Join us in
          this exploration, where every word is crafted with passion.
        </p>
        <button className="w-full lg:w-fit text-[4vw] md:text-[3vw] lg:text-[1.25vw] flex justify-center items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-zinc-900 tracking-[0.013vw] px-[3vw] py-[2.5vw] md:py-[1vw]">
          ALL BLOG
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-[110px] mx-[5.2vw]">
        <div
          className="mx-auto lg:w-[27.969vw] mb-[40px] lg:mb-0"
          data-aos="zoom-in-down"
        >
          <Image
            src={blog_1}
            alt="blog-1"
            className="rounded-3xl w-fit md:w-full md:h-[40vh] lg:w-[28vw] h-[35vh] lg:h-[50vh]"
          />
          <p className="text-zinc-900 text-[5.035vw] md:text-[3.5vw] lg:text-[1.25vw] font-normal leading-[177.086%] tracking-[0.015rem] my-[1.795vw] lg:mt-[2.083vw] lg:mb-[1.042vw]">
            Loreum text Loreum Text Loreum text Ipsum Ipsum loreum
          </p>
          <small className="text-zinc-900 text-[4vw] md:text-[3vw] lg:text-[1.25vw] font-normal leading-[194.8%] tracking-[0.013vw]">
            Branding . 19 June 2023
          </small>
        </div>
        <div
          className="lg:w-[27.969vw] justify-self-center mb-[40px] lg:mb-0"
          data-aos="zoom-in-down"
        >
          <Image
            src={blog_2}
            alt="blog-2"
            className="rounded-3xl w-fit md:w-full md:h-[40vh] lg:w-[28vw] h-[35vh] lg:h-[50vh]"
          />
          <p className="text-zinc-900 text-[5.035vw] md:text-[3.5vw] lg:text-[1.25vw] font-normal leading-[177.086%] tracking-[0.015rem] my-[1.795vw] lg:mt-[2.083vw] lg:mb-[1.042vw]">
            Loreum text Loreum Text Loreum text Ipsum Ipsum loreum
          </p>
          <small className="text-zinc-900 text-[4vw] md:text-[3vw] lg:text-[1.25vw] font-normal leading-[194.8%] tracking-[0.013vw]">
            Branding . 19 June 2023
          </small>
        </div>

        <div
          className="lg:w-[27.969vw] justify-self-end"
          data-aos="zoom-in-down"
        >
          <Image
            src={blog_3}
            alt="blog-3"
            className="rounded-3xl w-fit md:w-full md:h-[40vh] lg:w-[28vw] h-[35vh] lg:h-[50vh]"
          />
          <p className="text-zinc-900 text-[5.035vw] md:text-[3.5vw] lg:text-[1.25vw] font-normal leading-[177.086%] tracking-[0.015rem] my-[1.795vw] lg:mt-[2.083vw] lg:mb-[1.042vw]">
            Loreum text Loreum Text Loreum text Ipsum Ipsum loreum
          </p>
          <small className="text-zinc-900 text-[4vw] md:text-[3vw] lg:text-[1.25vw] font-normal leading-[194.8%] tracking-[0.013vw]">
            Branding . 19 June 2023
          </small>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
