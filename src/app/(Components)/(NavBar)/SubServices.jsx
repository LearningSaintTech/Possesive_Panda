import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "@/lib/next-compat";

const SubServices = ({ data }) => {
  const pathname = useLocation().pathname;
  console.log(data);
  const name = data.name.split("Service")[0];
  console.log(name);
  return (
    <Link
      href={`/services/${data.link}`}
      className={`border-l border-opacity-50 border-black rounded-[0.8vw] block ml-2 my-3 py-2 pl-2 opacity-50 bg-[#eee] ${pathname === `/services/${data.link}` ? "text-[#00aff1]" : "text-[#2a2a2a]"
        }`}
    >
      {name}
    </Link>
  );
};

export default SubServices;
