"use client";
import React, { useState } from "react";
import data from "./Data";
import AccordionItems from "./AccordionItems";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='bg-[#FAFAFA] flex flex-col mt-10 lg:mt-32 w-full py-14'>
      {data?.map((item, index) => (
        <AccordionItems
          key={index}
          question={item.question}
          answer={item.answer}
          image={item.image}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
