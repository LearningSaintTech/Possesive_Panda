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
    <div className="wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`question-container ${isOpen ? 'active' : ''}`}>
        <p className='question-content'>{question}</p>
        <div className={`arrow ${isOpen ? 'active' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48" fill="none">
<path d="M35.2716 9.02309L37.4054 6.8892L34.3877 6.8892L4.46537 6.8892L4.51285 1.52375L46.5716 1.52374L46.5716 43.5825L41.2061 43.63L41.2061 13.7077L41.2061 10.6899L39.0723 12.8238L6.0581 45.8379L2.2574 42.0372L35.2716 9.02309Z" fill="black" stroke="white" stroke-width="2.5"/>
</svg>
        </div>
      </div>

      <div
        ref={contentHeight}
        className="answer-container"
        style={{
          height: isOpen ? contentHeight.current?.scrollHeight : "0px",
          transition: "height 0.7s ease-in-out"
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
