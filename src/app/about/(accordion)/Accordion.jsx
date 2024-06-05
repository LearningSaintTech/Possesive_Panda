"use client";
import React, { useState } from "react";
import data from "./Data";
import AccordionItems from "./AccordionItems";
import "./I.css";
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='container w-auto'>
      {data.map((item, index) => (
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
