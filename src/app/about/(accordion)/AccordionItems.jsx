import React, { useRef, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Image from "next/image";

const AccordionItems = ({ question, answer, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentHeight = useRef();

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`question-container ${isOpen ? "active" : ""}`}>
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
      </div>

      <div
        ref={contentHeight}
        className="answer-container"
        style={{
          height: isOpen ? contentHeight.current?.scrollHeight : "0px",
          transition: "height 0.7s ease-in-out",
        }}
      >
        <p className=" ">{answer}</p>
        <Image
        src={image}
        alt="shadow"
        className='accordion-image'
      />      
      </div>
    </div>
  );
};

export default AccordionItems;
