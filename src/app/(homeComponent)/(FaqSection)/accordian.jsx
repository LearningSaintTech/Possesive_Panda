import React from "react";

const Accordian = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    } else {
      setActiveIndex(null);
    }
  };

  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className={`flex w-full h-full justify-between p-2 mt-2 border-t border-solid border-black mx-auto cursor-pointer`}
      >
        <p className="text-black text-[1.25vw] font-normal leading-[normal] tracking-[0.063vw] my-auto">
          {title}
        </p>

        <div className="flex items-center justify-center">
          <svg
            width="53"
            height="49"
            viewBox="0 0 53 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="system-uicons:plus">
              <path
                id="Vector"
                d="M14.3828 24.5002H38.7344M26.5586 12.8335V36.1668"
                stroke="black"
                strokeWidth="2.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M14.3818 24.5002H38.7334M26.5576 12.8335V36.1668"
                stroke="black"
                strokeWidth="2.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <div
        className={`h-0 overflow-hidden text-[1.042vw] ${
          activeIndex === index
            ? "animate-accordion-down "
            : "animate-accordion-up"
        }`}
      >
        <div className="p-[0.833vw] mb-[24px]">{children}</div>
      </div>
    </>
  );
};

export default Accordian;
