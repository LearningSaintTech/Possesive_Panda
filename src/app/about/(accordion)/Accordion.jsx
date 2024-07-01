"use client";
import React, { useState } from "react";
import { accordian } from "../data";
import AccordionItems from "./AccordionItems";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#FAFAFA] flex flex-col mt-10 lg:mt-32 w-full py-14">
      {accordian?.map((item, index) => (
        <AccordionItems
          key={index}
          question={item.question}
          answer={item.answer}
          image={item.image}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
};

export default Accordion;
