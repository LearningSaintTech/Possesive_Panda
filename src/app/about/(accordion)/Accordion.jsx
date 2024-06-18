import React from "react";
import data from "./Data";
import AccordionItems from "./AccordionItems";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Initially open the first item

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null); // Optionally close all items on mouse leave, or keep the hovered one open
  };

  return (
    <div className="bg-[#FAFAFA] flex flex-col mt-10 lg:mt-32 w-full py-14">
      {data?.map((item, index) => (
        <AccordionItems
          key={index}
          question={item.question}
          answer={item.answer}
          image={item.image}
          index={index}
          isOpen={activeIndex === index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default Accordion;
