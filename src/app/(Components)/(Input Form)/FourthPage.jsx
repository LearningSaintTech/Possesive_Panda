import React, { useState } from "react";
import { useFormContext } from "./FormContext";

const FourthPage = ({ className, onNext }) => {
  const { form, setForm } = useFormContext();

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(1);

  const handleRangeChange = (e) => {
    const budgetValue = parseInt(e.target.value);
    setStart(budgetValue);
    setEnd(budgetValue + 1);
    setForm((prevState) => ({
      ...prevState,
      budget: budgetValue,
    }));
  };
  // form.budget --> 0
  return (
    <div className={className}>
      <p className="font-medium tracking-[0.0177rem] text-[1.47vw] text-[#212121] text-center mt-[4.688vw]">
        <span className="text-[#00AFF1]">04 </span>/05
      </p>
      <h6 className="text-[#212121] tracking-[0.044rem] text-[1.84vw] text-center capitalize mt-[9.037vw]">
        What’s your budget range for this project ?
      </h6>
      <div className="flex flex-col justify-center items-center">
        <input
          type="range"
          name="budget"
          minLength={0}
          maxLength={50}
          step={1}
          onChange={handleRangeChange}
          value={form.budget}
          className="mt-[4.7vw] w-[30.124vw]"
        />
        <p className="text-[#707070] tracking-[0.013rem] text-[1.1vw] mt-[1.441vw]">
          Approximate Budget
        </p>
        <h6 className="text-[#212121] font-medium tracking-[0.022rem] text-[1.84vw] mt-[0.5vw]">
          {start}k-{end}k $
        </h6>
      </div>
      <div className="flex justify-center">
        <button
          onClick={onNext}
          className="text-[1.47vw] text-[#707070] tracking-[0.018rem] py-[0.625vw] px-[4.688vw] mt-[2.5vw] rounded-[2.76vw] border border-black w-fit hover:bg-[#212121] hover:border-gray-300 hover:shadow-md hover:text-[#e7e6e6] hover:duration-500 duration-500"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FourthPage;
