// "use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { CiClock2 } from "react-icons/ci";

const Card = ({ blog }) => {
  const dateStr = blog.date;
  const date = new Date(dateStr);
  const formatDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const router = useRouter();

  const handleClick = () => {
    const newUrl = blog.url;
    router.replace(newUrl);
    router.refresh();
    // router.push(newUrl);
  };
  console.log(blog.url);
  return (
    <div
      className="rounded-[0.26vw] border border-black border-opacity-50 opacity-90 bg-[#F8F9FA] py-[0.781vw] pl-[0.521vw] pr-[0.5vw] flex gap-[1.042vw] mb-[1.042vw] cursor-pointer hover:opacity-40 hover:duration-300 duration-300"
      onClick={handleClick}
    >
      <Image
        src={`https://crm.learningsaint.com/images/blogs/${blog.image}`}
        width={100}
        height={100}
        alt="main-image"
        className="min-w-[4.688vw] h-[5vw] rounded-[0.26vw]"
      />
      <div className="">
        <p className="text-[#212121] text-[1vw] leading-[150%] tracking-[0.013rem] font-normal">
          {blog.meta_title}
        </p>
        <p className="text-[#212121] text-[0.833vw] leading-[187.5%] tracking-[0.01rem] font-normal flex items-center gap-[0.5vw] opacity-50">
          <CiClock2 /> {formatDate}
        </p>
      </div>
    </div>
  );
};

export default Card;
