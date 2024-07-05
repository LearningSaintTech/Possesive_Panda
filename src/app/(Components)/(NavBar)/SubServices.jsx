import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const SubServices = ({ data }) => {
  const name = data.name.split("Service")[0];
  const pathname = usePathname();
  console.log(name);
  return (
    <Link
      href={data.link}
      className={`border-l border-opacity-50 border-black rounded-[0.8vw] block ml-2 my-3 py-2 pl-2 bg-[#eee] ${
        data.link == pathname ? "text-[#00aff1]" : "text-[#2a2a2a]"
      }`}
    >
      {name}
    </Link>
  );
};

export default SubServices;
