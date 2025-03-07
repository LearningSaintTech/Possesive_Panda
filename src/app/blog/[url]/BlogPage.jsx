import React from "react";
import Blog from "./Blog";
import Recent from "./Recent";
import CommentForm from "./CommentForm";
import Footer from "../../(Components)/Footer";

const BlogPage = ({ data }) => {
  console.log("data",data)
  return (
    <div>
    <div className="px-[5.2vw] pt-[12vw] flex gap-[5.2vw]  bg-[#00111A] text-white">
      <div>
        <Blog data={data} />
        <CommentForm />
      </div>
     
    </div>
    {/* <Recent /> */}
    <Footer/>
    </div>
  );
};
export default BlogPage;
