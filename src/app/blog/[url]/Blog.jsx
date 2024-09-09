import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";
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
  const [headings, setHeadings] = useState([]);
  const contentRef = useRef(null);

  useEffect(() => {
    // Extract headings from the content inside the contentRef
    const headingElements = Array.from(
      contentRef.current?.querySelectorAll("h1, h2, h3, h4, h5, h6") || []
    );

    const extractedHeadings = headingElements.map((heading, index) => {
      const id = `heading-${index}`;
      heading.id = id; // Set unique ID to each heading for scroll navigation
      return { id, text: heading.innerText, tagName: heading.tagName.toLowerCase() };
    });

    setHeadings(extractedHeadings);
  }, [data.content]);

  // Function to handle scroll when a TOC item is clicked
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Set focus to the element for better accessibility
      element.focus({ preventScroll: true });
    }
  };

  // Apply custom styles to h3 tags in the content
  const applyCustomStyles = (htmlContent) => {
    return htmlContent.replace(
      /<h3>/g,
      `<h3 style="font-size: 4vw; font-weight: 600; margin-bottom: 1.5vw;">`
    );
  };

  const formattedContent = applyCustomStyles(data.content);

  return (
    <div>
      <div className="">
        <p className="text-white text-[7.529vw] sm:text-[3.333vw] font-normal ml-[10.781vw] mr-[10.781vw] text-center ">
          {data.title}
        </p>

        <div className="flex gap-[27.969vw]">
          <div className="flex flex-row  sm:gap-[3.125vw] ml-[15.573vw] mt-[0.521vw]">
            <p className="text-white text-[3.765vw] sm:text-[1.25vw]">By {data.author}</p>
            
            <p className="text-white text-[3.765vw] sm:text-[1.25vw]">{formatDate}</p>
          </div>

          <div className="flex flex-col sm:flex-row text-[1.25vw] text-white">
            <p className="text-white hidden sm:text-[1.25vw]">Follow Us On:</p>
            <div className="ml-[1.615vw] flex flex-row text-[3.765vw]  sm:text-[1.25vw] gap-[1.615vw] mt-[14.824vw] sm:mt-[0.321vw]">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <RiLinkedinBoxFill />
            </div>
          </div>
        </div>
      </div>

      <Image
        src={`https://crm.learningsaint.com/images/blogs/${data.image}`}
        width={800}
        height={600}
        alt="image"
        className="w-full h-[28.646vw] mt-[4.167vw]" 
      />

      <div className="flex flex-col sm:flex-row gap-[4.134vw] mt-[4.167vw]">
        {/* Table of Contents */}
        <div className="bg-[#131D22] hidden sm:flex flex-col text-[1.25vw] sticky top-[4.167vw] h-[55.542vw] w-[26.126vw]">
          <p className="font-semibold mt-[2.604vw] ml-[2.604vw] text-white">
            Table of Content
          </p>
          <div className="h-[0.2vw] w-[10.729vw] bg-[#00AFF1] ml-[2.604vw] mb-[1.563vw]"></div>
          <div className="pb-[2.396vw]">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className="text-white cursor-pointer hover:underline ml-[1.771vw] mr-[1.771vw] text-wrap pb-[1.771vw]"
                onClick={() => handleScrollToSection(heading.id)}
              >
                {heading.text}
              </li>
            ))}
          </div>
        </div>

        {/* Blog Content */}
        <div className="w-full sm:w-[57.813vw] bg-[#131D22] p-[2.604vw]">
          <div
            ref={contentRef}
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          />

          <div className="h-[0.104vw] bg-white mt-[2.031vw]"></div>

          <div className="flex flex-row">
            <p className="text-white text-[1.25vw] font-normal mt-[1.771vw]">Tags : </p>
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
