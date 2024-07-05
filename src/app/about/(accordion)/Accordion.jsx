"use client";
import React, { useState } from "react";
import {accordian} from "../data";
import AccordionItems from "./AccordionItems";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Initially open the first item
  const [lastActiveIndex, setLastActiveIndex] = useState();

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    setLastActiveIndex(index);
  };

  const handleMouseLeave = (index) => {
   
    if(lastActiveIndex != index){
      setActiveIndex(null); 
    }
  };
console.log(accordian)
  return (
    <div className='bg-[#FAFAFA] flex flex-col mt-10 lg:mt-32 w-full py-14'>
      {accordian?.map((item, index) => (
        <AccordionItems
          key={index}
          question={item.question}
          answer={item.answer}
          image={item.image}
          index={index}
          isOpen={activeIndex === index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={()=>handleMouseLeave(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
