"use client";
import React, { useEffect, useState } from "react";
import data from "./data";
import Card from "./Card";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";

const Technologies = () => {
  const fast_duration = 15;
  const slow_duration = 50;
  const [duration, setDuration] = useState(fast_duration);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender, mustFinish]);

  return (
    <div className=" my-[131px] overflow-hidden">
      <div className="flex justify-between items-center not-italic mx-[5.208vw]">
        <h1 className="text-zinc-900 w-[36.25vw] text-[3.25vw] font-medium leading-[normal] tracking-[0.033vw]">
          Technologies We Use to Offer :
        </h1>
        <button className="inline-flex py-[20px] px-[1.563vw] w-[17.344vw] bg-[#797777] rounded-[5px] h-[70px] text-white text-[1.114vw] leading-[125%] tracking-[0.063vw] font-medium">
          Partners with us Today
        </button>
      </div>

      <motion.div
        className="mt-[90px] flex"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setDuration(slow_duration);
          setMustFinish(true);
        }}
        onHoverEnd={() => {
          setDuration(fast_duration);
          setMustFinish(true);
        }}
      >
        {[...data, ...data].map((item, idx) => (
          <Card image={item.image} name={item.name} key={idx} />
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
