"use client";
import React, { useState, useEffect } from "react";
import Blogs from "./Blogs";
import Options from "./Options";
import Banner from "../(Components)/Banner";
import banner from "../../assets/banners/blog.png";

const MainPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://crm.learningsaint.com/api/getBlogs/2?api_token=zxUcPukvuXHaCM6E7eqfLwGUncdJD6lF1qGcjEAifQjy1iAUvVw0Qu2hJLQj"
        );
        const data = await response.json();
        setBlogs(data.blogs);
        console.log(data);
        setCategories(() => [...new Set(data.blogs.map((blog) => blog.title))]);
        setTags(() => [
          ...new Set(data.blogs.flatMap((blog) => blog.tags.split(" "))),
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Banner
        title={"Blogs"}
        desciption={"Professional IT Solution Insights and Updates"}
        page={"Blogs"}
        image={banner}
      />
      <div className="px-[5.2vw] mt-[9vw] flex gap-[3.2vw] mb-[5.2vw]">
        <div className="grid grid-cols-2 gap-x-[3.125vw] gap-y-[2vw]">
          {blogs.map((blog, key) => (
            <Blogs blog={blog} key={key} />
          ))}
        </div>

        <Options
          categories={categories}
          tags={tags}
          blogs={blogs}
          setBlogs={setBlogs}
        />
      </div>
    </div>
  );
};

export default MainPage;
