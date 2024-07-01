import React from "react";
import BlogPage from "./BlogPage";

const getData = async (url) => {
  const res = await fetch(
    `https://crm.learningsaint.com/api/getBlog/${url}/2?api_token=zxUcPukvuXHaCM6E7eqfLwGUncdJD6lF1qGcjEAifQjy1iAUvVw0Qu2hJLQj`
  );

  if (!res.ok) {
    throw new Error("Failed to get ticket!");
  }
  return res.json();
};

const BlogDetails = async ({ params }) => {
  const data = await getData(params.url);
  const blogData = data.blog[0];
  return <BlogPage data={blogData} />;
};

export default BlogDetails;
