import Link from "next/link";
import React from "react";

const SubServices = ({ name }) => {
  return (
    <button className="border-l border-opacity-50 border-black rounded-[0.8vw] block ml-12 my-3 py-2 pl-2">
      {name}
    </button>
  );
};

export default SubServices;
