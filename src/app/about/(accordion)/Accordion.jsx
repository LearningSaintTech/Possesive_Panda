import React from "react";
import data from "./Data";
import AccordionItems from "./AccordionItems";

const Accordion = () => {
  const activeIndex = 1;

  return (
    <div className="bg-[#FAFAFA] flex flex-col mt-10 lg:mt-32 w-full py-14">
      {data?.map((item, index) => (
        <AccordionItems
          key={index}
          question={item.question}
          answer={item.answer}
          image={item.image}
          open={activeIndex}
        />
      ))}
    </div>
  );
};

export default Accordion;
