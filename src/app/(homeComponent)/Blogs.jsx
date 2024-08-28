import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import './blog.css'; // Import CSS file

const Blogs = () => {
  const [datablogs, setdatablogs] = useState({ blogs: [] });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://crm.learningsaint.com/api/getBlogs/2?api_token=zxUcPukvuXHaCM6E7eqfLwGUncdJD6lF1qGcjEAifQjy1iAUvVw0Qu2hJLQj"
        );
        const data = await response.json();
        setdatablogs(data);
      } catch (error) {
        console.log("Error fetching blogs", error);
      }
    };
    fetchdata();
  }, []);

  const handleNext = () => {
    setTransition(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === datablogs.blogs.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setTransition(false), 500); // Duration matches the animation
  };

  const handlePrev = () => {
    setTransition(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? datablogs.blogs.length - 1 : prevIndex - 1
    );
    setTimeout(() => setTransition(false), 500); // Duration matches the animation
  };

  const progress = ((currentIndex + 1) / datablogs.blogs.length) * 100;

  return (
    <div className="flex flex-col lg:flex-row lg:gap-[7.813vw] px-[7vw] lg:px-0 lg:pb-[6.8vw] lg:pl-[7vw] bg-[#00111A] overflow-hidden ">
      {/* Text Section */}
      <div className="sm:w-[30vw] flex flex-col gap-[3vw] lg:gap-[1.042vw] mt-4 sm:mt-0">
        <p className="text-white text-[5.128vw] md:text-[2.5vw] lg:text-[1.25vw] font-normal tracking-[0.051vw] md:tracking-[0.015rem] text-center lg:text-left lg:mt-[3vw] mt-[5vw]">
          Our Blogs
        </p>
        <h1 className="text-white text-[6.154vw] md:w-[90%] lg:w-full md:text-[7.5vw] lg:text-[3.334vw] font-medium leading-[normal] tracking-[0.04rem] text-center lg:text-left">
          Our Knowledge Hub
        </h1>
        <p className="text-white text-[3.846vw] md:text-[3vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] text-center lg:text-left">
          Get access to our collection of the latest information from our blogs.
          Explore the latest technological updates and services here!
        </p>
        <Link
          href="/blog"
          className="w-full lg:w-fit text-[3.846vw] md:text-[3vw] lg:text-[1.25vw] flex justify-center items-center rounded-[5vw] md:rounded-[3.4vw] border border-neutral-600 text-white tracking-[0.015rem] px-[2.5vw] py-[2.5vw] md:py-[1vw] hover:text-black hover:bg-[#60E2FF] hover:border-none duration-500 hover:duration-500 hover:shadow-md mt-[1.042vw] lg:mb-0 mb-[8vw]"
        >
          ALL BLOGS
        </Link>
      </div>

      {/* Blog Carousel Section */}
      <div className="relative flex flex-col lg:flex-row lg:gap-[3.333vw]">
        {datablogs.blogs.length > 0 && (
          <>
            {/* Large Blog */}
            <div
              className={`transition-transform duration-500 ease-in-out transform w-full lg:w-[40vw] ${transition ? "large-blog-transition-out" : "large-blog-transition-in"
                }`}
            >
              <Link href={`/blog/${datablogs.blogs[currentIndex].url}`}>
                <div className="relative overflow-hidden bg-[#00111A] shadow-lg">
                  <Image
                    src={`https://crm.learningsaint.com/images/blogs/${datablogs.blogs[currentIndex].image}`}
                    width={500}
                    height={300}
                    alt="Blog image"
                    className="w-full sm:h-[24vw] object-cover transition-transform duration-500 mt-4 sm:mb-0 mb-2"
                  />
                  <div className="px-2 lg:px-1 sm:py-3 ">
                    <p className="text-white text-[3.846vw] md:text-[3.5vw] lg:text-[1.25vw] font-normal leading-[177.086%] tracking-[0.015rem]">
                      {datablogs.blogs[currentIndex].title}
                    </p>
                    <small className="text-white text-[3.5vw] md:text-[3vw] lg:text-[1.25vw] font-normal leading-[194.8%] tracking-[0.013vw]">
                      {datablogs.blogs[currentIndex].author}
                      <span className="mx-2">•</span>
                      {new Date(
                        datablogs.blogs[currentIndex].updated_at
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </small>
                  </div>
                </div>
              </Link>
            </div>

            {/* Small Blog (half-hidden) */}
            <div
              className={`hidden sm:block transition-transform duration-500 ease-in-out transform w-[36vw] lg:absolute lg:top-[35%] lg:right-[-85%] lg:overflow-hidden ${transition ? "small-blog-transition-in" : "small-blog-transition-out"
                }`}
            >
              <Link href={`/blog/${datablogs.blogs[(currentIndex + 1) % datablogs.blogs.length].url}`}>
                <div className="relative overflow-hidden bg-[#00111A] shadow-lg">
                  <Image
                    src={`https://crm.learningsaint.com/images/blogs/${datablogs.blogs[(currentIndex + 1) % datablogs.blogs.length].image}`}
                    width={200}
                    height={120}
                    alt="Blog image"
                    className="w-full h-[20vh] lg:h-[15.052vw] object-cover transition-transform duration-500"
                  />
                  <div className="sm:px-1 sm:py-3">
                    <p className="text-white text-[3.846vw] md:text-[3.5vw] lg:text-[1vw] font-normal leading-[177.086%] tracking-[0.015rem]">
                      {datablogs.blogs[(currentIndex + 1) % datablogs.blogs.length].title}
                    </p>
                    <small className="text-white text-[3.5vw] md:text-[3vw] lg:text-[1vw] font-normal leading-[194.8%] tracking-[0.013vw]">
                      {datablogs.blogs[(currentIndex + 1) % datablogs.blogs.length].author}
                      <span className="mx-2">•</span>
                      {new Date(
                        datablogs.blogs[(currentIndex + 1) % datablogs.blogs.length].updated_at
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </small>
                  </div>
                </div>
              </Link>
            </div>
          </>
        )}

        {/* Progress Line */}
        <div className=" relative sm:w-[28.906vw] h-[0.26vw] mt-4 pb-10 lg:absolute lg:-right-6 lg:-bottom-8">
          <div className="flex justify-between">
            <div className="text-white text-[5vw] sm:text-[1.667vw]">0{currentIndex + 1}</div>
            <div className="text-white text-[5vw] sm:text-[1.667vw]">0{datablogs.blogs.length}</div>
          </div>
          <div className="flex items-center">
            <div className="flex-grow bg-gray-300 h-1 relative">
              <div
                className="bg-blue-500 h-1 absolute left-0 top-0 transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Left and Right Navigation Buttons */}
        <div className="flex justify-between gap-2 mt-2 lg:absolute lg:-bottom-[6.8vw] lg:-right-6">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-500 text-gray-500 hover:text-white hover:border-white transition-colors duration-300"
          >
            &#9664;
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-500 text-gray-500 hover:text-white hover:border-white transition-colors duration-300"
          >
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
