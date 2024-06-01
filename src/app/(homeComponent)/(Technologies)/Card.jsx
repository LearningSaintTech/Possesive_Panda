"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const Card = ({ name, image }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <motion.div
      className="relative overflow-hidden h-[100px] sm:h-[150px] xl:h-[212px] min-w-[100px] sm:min-w-[150px] md:min-w-[222px] xl:min-w-[300px] border border-solid border-[#D9D9D9] flex items-center justify-center"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute pointer-events-none h-full w-full">
              <motion.h1
                className="w-2/3 mx-auto font-medium text-[1.25vw] z-[-1] px-3 py-2 flex justify-center items-center uppercase"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
              >
                {name}
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        src={image}
        alt="Image"
        style={{ objectFit: "fill" }}
        className="size-[15vw] sm:size-[12vw] md:size-[9vw] lg:size-[7vw] xl:size-max"
      />
    </motion.div>
  );
};

export default Card;
