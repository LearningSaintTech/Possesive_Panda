"use client";
import Image from "next/image";
import React, { useState } from "react";
import circle from "../../../assets/home/circle.png";
import icon from "../../../assets/home/icon.png";
import HandlePage from "./HandlePage";

const Icon = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="fixed bottom-7 right-5 z-40 hover:opacity-80">
        <button className="relative size-[7.5vw]" onClick={() => setOpen(true)}>
          <Image
            src={circle}
            alt="circle"
            className="animate-spin-slow size-[7vw]"
          />
          <Image
            src={icon}
            alt="icon"
            className="absolute left-1/2 top-1/2 w-11 -translate-x-1/2 -translate-y-1/2 transform"
          />
        </button>
      </div>
      {open && <HandlePage setOpen={setOpen} />}
    </div>
  );
};

export default Icon;
