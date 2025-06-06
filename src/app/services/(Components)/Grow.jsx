import React from "react";

const Grow = ({ data }) => {
  return (
    <div className={`rounded-[1vw] sm:rounded-[0.52vw] border border-[rgba(146, 142, 142, 0.50)] shadow-lg relative px-[3vw] sm:px-[0.78vw] sm:min-w-[21.46vw] hover:-translate-y-6 hover:shadow-2xl transition-all ease-in-out `}>
      <span className="text-[#1E1E1E] text-[10vw] sm:text-[3.33vw] leading-[137.143%] opacity-10 absolute top-[5vw] sm:top-[0.5vw] right-[5vw] sm:right-[2vw]">
        {data.num}
      </span>
      <h3 className="text-[#212121] text-[4vw] sm:text-[1.25vw] font-medium leading-[137.835%] mt-[15vw] sm:mt-[6.78vw] mb-[2vw] sm:mb-[0.521vw] capitalize ">
        {data.title}
      </h3>
      <p className="text-[#1E1E1E] text-[3.636vw] sm:text-[1.25vw] leading-[137.835%] tracking-[0.013rem] opacity-60 mb-[5vw] sm:mb-[2.8vw] w-full ">
        {data.description}
      </p>
    </div>
  );
};

export default Grow;
