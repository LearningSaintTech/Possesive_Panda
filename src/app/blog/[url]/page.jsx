import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogPage from "./BlogPage";
import Loader from "../../(Components)/Loader";
import Footer from "../../(Components)/Footer";


const getData = async (url) => {
  const res = await fetch(
    `https://crm.learningsaint.com/api/getBlog/${url}/2?api_token=zxUcPukvuXHaCM6E7eqfLwGUncdJD6lF1qGcjEAifQjy1iAUvVw0Qu2hJLQj`
  );

  if (!res.ok) {
    throw new Error("Failed to get blog!");
  }
  return res.json();
};

const BlogDetails = () => {
  const { url } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const data = await getData(url);
        setBlogData(data.blog[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      }
    };
    if (url) fetchBlogData();
  }, [url]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <BlogPage data={blogData} />
      <Footer />
    </>
  );
};

export default BlogDetails;
