import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";
import Tags from "./Tags";
import Head from "next/head";

const Blog = ({ data }) => {
   
  const dateStr = data.date;
  const date = new Date(dateStr);
  const formatDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const tags = data.tags.split();
  const [headings, setHeadings] = useState([]);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const extractHeadings = () => {
      if (!contentRef.current) return;

      const headingElements = Array.from(
        contentRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6")
      );

      const extractedHeadings = headingElements.map((heading, index) => {
        const id = `heading-${index}-${heading.innerText.toLowerCase().replace(/\s+/g, "-")}`;
        heading.id = id;
        return {
          id,
          text: heading.innerText,
          tagName: heading.tagName.toLowerCase(),
        };
      });

      setHeadings(extractedHeadings);
    };
    extractHeadings();

    const observer = new MutationObserver(extractHeadings);
    if (contentRef.current) {
      observer.observe(contentRef.current, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, [data.content]);

  const handleScrollToSection = (id) => {
    console.log(`Attempting to scroll to ID: ${id}`);
    const element = document.getElementById(id);
    if (element) {
      console.log(`Element found: ${element.innerHTML}`);
      const offset = 100; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        element.setAttribute("tabindex", "-1");
        element.focus({ preventScroll: true });
      }, 500);
    } else {
      console.log(`Element NOT found for ID: ${id}`);
    }
  };

  const applyCustomStyles = (htmlContent) =>
    htmlContent
      .replace(
        /<h3>/g,
        `<h3 style="font-size: 4vw; font-weight: 600; margin-bottom: 1.5vw;">`
      )
      .replace(/color: #000000;/g, "color: white;");

  const formattedContent = applyCustomStyles(data.content);

  return (
    <div>
      <head>
        <title>{data.meta_title || "Default Blog Title"}</title>
        <meta
          name="description"
          content={data.meta_description || "Default blog description"}
        />
        {data.canonical && <link rel="canonical" href={data.url} />}
        <meta name="keywords" content={data.meta_keywords} />
        <meta name="author" content={data.author} />
      </head>

      <div className="ml-[10.781vw] mr-[10.781vw]">
        <h1 className="text-white text-[7.529vw] sm:text-[3.333vw] font-normal  text-center">
          {data.title}
        </h1>

        <div className="flex sm:flex-row flex-col mt-4 sm:gap-[27.969vw]">
          <div className="flex flex-row justify-between sm:gap-[3.125vw] ml-[1vw]  mt-[0.521vw]">
            <p className="text-white text-[3.765vw] sm:text-[1.25vw]">
              By {data.author}
            </p>
            <p className="text-white text-[3.765vw] sm:text-[1.25vw]">
              {formatDate}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row text-[1.25vw] text-white text-center justify-center items-center">
            <p className="text-white hidden sm:block sm:text-[1.25vw]">
              Follow Us On:
            </p>
            <div className="ml-[1.615vw] flex flex-row text-[3.765vw] sm:text-[1.25vw] gap-[1.615vw] mt-[4.5vw] sm:mt-[0.321vw]">
            <RiLinkedinBoxFill className="cursor-pointer hover:text-blue-400" />
              <FaXTwitter className="cursor-pointer hover:text-blue-400" />
              <FaInstagram className="cursor-pointer hover:text-blue-400" />
              <FaFacebookF className="cursor-pointer hover:text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      
      {/* Table of Content */}
      <div className="flex flex-col sm:flex-row gap-[4.134vw] mt-[4.167vw]">
        <div className="bg-[#131D22] hidden sm:flex flex-col text-[1vw] sticky top-[6.167vw] h-fit max-h-[40.5vw] w-[26.126vw] overflow-y-auto  ">
          <p className="font-semibold mt-[2.604vw] ml-[2.604vw] text-white">
            Table of Content
          </p>
          <div className="h-[0.2vw] w-[10.729vw] bg-[#00AFF1] ml-[2.604vw] mb-[1.563vw]"></div>
          <ul className="pb-[2.396vw] list-none">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className="text-white cursor-pointer hover:text-blue-400 transition-colors ml-[1.771vw] mr-[1.771vw] text-wrap pb-[1.771vw]"
                onClick={() => handleScrollToSection(heading.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleScrollToSection(heading.id);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                {heading.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full sm:w-[57.813vw] bg-[#131D22] p-[2.604vw]">
        <Image
        src={`https://crm.learningsaint.com/images/blogs/${data.image}`}
        width={800}
        height={600}
        alt={data.alt_tag}
        className="w-full h-[28.646vw] mt-[3.167vw] sm:mt-[0.2vw]"
      />
          <div
            ref={contentRef}
            className="prose prose-invert max-w-none mt-[2vw]"
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          />
          <div className="h-[0.104vw] bg-white mt-[2.031vw]"></div>
          <div className="flex flex-row">
            <p className="text-white text-[1.25vw] font-normal mt-[1.771vw]">
              Tags :{" "}
            </p>
            <div className="border-[#EFF1F4] pt-[2vw] sm:pt-[1.5vw] flex items-center">
              {tags.map((tag, key) => (
                <Tags tag={tag} key={key} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;