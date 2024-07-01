import React from "react";
import Blog from "./Blog";
import Recent from "./Recent";
import CommentForm from "./CommentForm";

const BlogPage = ({ data }) => {
  return (
    <div className="px-[5.2vw] pt-[12vw] flex gap-[5.2vw] mb-[5.2vw]">
      <div>
        <Blog data={data} />
        <CommentForm />
      </div>
      <Recent />
    </div>
  );
};
export default BlogPage;
