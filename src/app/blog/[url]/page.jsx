"use client"
import React, { useState, useEffect } from "react";
import BlogPage from "./BlogPage";
import Loader from "../../(Components)/Loader";

const getData = async (url) => {
  const res = await fetch(
    `https://crm.learningsaint.com/api/getBlog/${url}/2?api_token=zxUcPukvuXHaCM6E7eqfLwGUncdJD6lF1qGcjEAifQjy1iAUvVw0Qu2hJLQj`
  );

  if (!res.ok) {
    throw new Error("Failed to get blog!");
  }
  return res.json();
};

const BlogDetails = ({ params }) => {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const data = await getData(params.url);
        setBlogData(data.blog[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      }
    };
    fetchBlogData();
  }, [params.url]);

  if (loading) {
    return <Loader />;
  }

  return <BlogPage data={blogData} />;
};

export default BlogDetails;
