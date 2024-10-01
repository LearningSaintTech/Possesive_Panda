"use client";
import React, { useState } from "react";
import { useFormContext } from "./FormContext";

const FirstPage = ({ className, onNext }) => {
  const { form, setForm } = useFormContext();
  const [warning, setWarning] = useState(false);
  const handleClick = () => {
    if (!form.firstName) {
      setWarning(true);
    } else onNext();
  };
  return (
    <div className={`${className}`}>
      <p className="font-medium tracking-[0.0177rem] text-[1.47vw] text-[#212121] text-center mt-[4.688vw]">
        <span className="text-[#00AFF1]">01 </span>/05
      </p>
      <h3 className="text-[#212121] font-medium tracking-[0.035rem] text-[2.8vw] text-center mt-[2.318vw]">
        Hi <span className="text-[#00AFF1]">There!</span>
      </h3>
      <h6 className="text-[#212121] tracking-[0.044rem] text-[1.84vw] text-center mt-[0.45vw]">
        What Is Your Name ?
      </h6>

      <div className="flex gap-[6.25vw] justify-center items-center mt-[5.2vw]">
        <div className="w-[23vw] h-[5vw]">
          <input
            type="text"
            placeholder="First Name*"
            required
            onChange={(e) => {
              setWarning(false);
              setForm((prevState) => ({
                ...prevState,
                firstName: e.target.value,
              }));
            }}
            className={`w-[22.54vw] text-[1.375vw] border-b border-[#707070] py-[0.5vw] bg-[#F9F9F9] focus:outline-0 focus:rounded-full focus:shadow-md focus:bg-white focus:border-none focus:px-[1vw] focus:duration-700 duration-700 focus:py-[1vw] ${
              warning ? "border-red-600 " : "border-[#707070]"
            } `}
          />
          {warning && <p className="text-red-600 mt-2">Name is required</p>}
        </div>
        <div className="w-[23vw] h-[5vw]">
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) =>
              setForm((prevState) => ({
                ...prevState,
                lastName: e.target.value,
              }))
            }
            className="w-[22.54vw] text-[1.375vw] border-b border-[#707070] py-[0.5vw] bg-[#F9F9F9] focus:outline-0 focus:rounded-full focus:shadow-md focus:bg-white focus:border-none focus:px-[1vw] focus:duration-700 duration-700 focus:py-[1vw]"
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          onClick={handleClick}
          className="text-[1.47vw] text-[#707070] tracking-[0.018rem] py-[0.625vw] px-[4.688vw] mt-[2.5vw] rounded-[2.76vw] border border-black w-fit hover:bg-[#212121] hover:border-gray-300 hover:shadow-md hover:text-[#e7e6e6] hover:duration-500 duration-500"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FirstPage;
