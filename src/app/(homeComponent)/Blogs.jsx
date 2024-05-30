import React from "react";
import Image from "next/image";
import blog_1 from "../../assets/home/blogs/Blogs-1.png";
import blog_2 from "../../assets/home/blogs/Blogs-2.png";
import blog_3 from "../../assets/home/blogs/Blogs-3.png";

const Blogs = () => {
  return (
    <div className="my-[100px]">
      <div className="w-[40vw] h-fit  mx-[5.2vw]">
        <p className="text-zinc-900 text-[1.25vw] font-normal tracking-wide mb-[37px]">
          Our Blogs
        </p>
        <h1 className="text-zinc-900 text-[5vw] font-normal leading-[90px] w-[100%]">
          Dive Into Our
        </h1>
        <h1 className="text-zinc-900 text-[5vw] font-normal leading-[90px] mb-[65px] w-[100%]">
          Creative Musings
        </h1>
        <p className="text-zinc-900 text-[1.146vw] font-normal leading-9 tracking-wide mb-[65px] w-[32.448vw]">
          A curated collection of thoughts, ideas, and inspirations. Join us in
          this exploration, where every word is crafted with passion.
        </p>
        <button className="text-[1.25vw] flex w-[16.25rem] h-[5rem] justify-center items-center rounded-[65.50px] border border-neutral-600 text-zinc-900 tracking-tight">
          ALL BLOGS
          <svg
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-5"
          >
            <rect width="19" height="14" fill="#A19F9F" />
            <g id="Mainb" clipPath="url(#clip0_1_2)">
              <rect
                width="1920"
                height="13752"
                transform="translate(-306 -11429)"
                fill="white"
              />
              <g id="main text">
                <g id="button">
                  <path
                    id="Rectangle 49"
                    d="M-193 7C-193 -15.0914 -175.091 -33 -153 -33H27C49.0914 -33 67 -15.0914 67 7V7C67 29.0914 49.0914 47 27 47H-153C-175.091 47 -193 29.0914 -193 7V7Z"
                    stroke="#4D4D4D"
                    strokeWidth="2"
                  />
                  <path
                    id="Vector"
                    d="M0 6.02357C0.078006 6.02697 0.156012 6.03378 0.234018 6.03378C5.44482 6.03378 9.77189 6.03378 14.9827 6.03378C15.0568 6.03378 15.1309 6.03378 15.244 6.03378C13.3719 4.40027 11.5309 2.79398 9.70169 1.20131C10.1775 0.782724 10.6339 0.384556 11.0785 0C13.7151 2.30053 16.3634 4.61126 19 6.90839C16.3673 9.20551 13.7151 11.5162 11.0785 13.8202C10.6378 13.4356 10.1853 13.0409 9.72119 12.6359C11.5465 11.0432 13.3914 9.43352 15.2362 7.82724C15.2284 7.81362 15.2167 7.79661 15.2089 7.783C15.1426 7.783 15.0724 7.783 15.0061 7.783C9.7836 7.783 5.44092 7.783 0.218417 7.783C0.148211 7.783 0.0780059 7.7898 0.00780058 7.79321C-1.81066e-08 7.20106 0 6.61231 0 6.02357Z"
                    fill="#1A1A1A"
                  />
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_2">
                <rect
                  width="1920"
                  height="13752"
                  fill="white"
                  transform="translate(-306 -11429)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-[138px] lg:mx-[5.2vw]">
        <div className="w-screen lg:w-[27.969vw]">
          <Image
            src={blog_1}
            alt="blog-1"
            className="rounded-3xl w-[90vw] lg:w-[28vw] h-[35vh] lg:h-[50vh]"
          />
          <p className="text-zinc-900 text-[6.035vw] lg:text-[1.69vw] font-medium tracking-tight w-[90%] mt-[2rem] mb-[1.2rem]">
            Loreum text Loreum Text Loreum text Ipsum Ipsum
          </p>
          <small className="text-zinc-900 text-[4.844vw] lg:text-[1.328vw] font-normal leading-[46.75px] tracking-tight">
            Branding . 19 June 2023
          </small>
        </div>
        <div className="w-screen lg:w-[27.969vw] justify-self-center">
          <Image
            src={blog_2}
            alt="blog-2"
            className="rounded-3xl w-[90vw] lg:w-[28vw] h-[35vh] lg:h-[50vh]"
          />
          <p className="text-zinc-900 text-[6.035vw] lg:text-[1.69vw] font-medium tracking-tight w-[90%] mt-[2rem] mb-[1.2rem]">
            Loreum text Loreum Text Loreum text Ipsum Ipsum
          </p>
          <small className="text-zinc-900 text-[4.844vw] lg:text-[1.328vw] font-normal leading-[46.75px] tracking-tight">
            Branding . 19 June 2023
          </small>
        </div>

        <div className="w-screen lg:w-[27.969vw] justify-self-end">
          <Image
            src={blog_3}
            alt="blog-3"
            className="rounded-3xl w-[90vw] lg:w-[28vw] h-[35vh] lg:h-[50vh]"
          />
          <p className="text-zinc-900 text-[6.035vw] lg:text-[1.69vw] font-medium tracking-tight w-[90%] mt-[2rem] mb-[1.2rem]">
            Loreum text Loreum Text Loreum text Ipsum Ipsum
          </p>
          <small className="text-zinc-900 text-[4.844vw] lg:text-[1.328vw] font-normal leading-[46.75px] tracking-tight">
            Branding . 19 June 2023
          </small>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
