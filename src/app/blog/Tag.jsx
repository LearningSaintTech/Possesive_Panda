import React from "react";

const Tag = ({ name, setBlogs, originalBlogs }) => {
  const handleClick = () => {
    const filteredBlogs = originalBlogs.filter((blog) => blog.tags.includes(name));
    setBlogs(filteredBlogs);
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-[0.26vw] border border-black border-opacity-50 opacity-90 bg-[#DBDFE4] text-[#212121] font-medium leading-[normal] text-[0.833vw] py-[0.15vw] px-[1.5vw] hover:opacity-50 hover:duration-300 duration-300"
    >
      {name}
    </button>
  );
};

export default Tag;
