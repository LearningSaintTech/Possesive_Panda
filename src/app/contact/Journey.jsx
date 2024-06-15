import React from "react";

const Journey = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-[2vh] md:p-[0.5vh] bg-white space-y-[2vh] md:space-y-0 mt-[2vh] mx-[5.2vh]">
      <div className="w-full md:w-1/2">
        <h2 className="text-sky-500 text-[2.5vh] md:text-[2.5vh] font-medium tracking-tight mt-[4vh] md:mt-[5vh] ml-[2vh] md:ml-[6vh]">
          I’m Looking For
        </h2>
        <h1 className="text-neutral-800 text-[5vh] md:text-[4vh] lg:text-[5vh] font-medium leading-[130%]  tracking-wide mt-[0.5vh] md:mt-[1vh] ml-[2vh] md:ml-[6vh]">
          Possessive Panda journey was inspired by a passion for Panda possessiveness to work
        </h1>
      </div>
      <div className="w-full md:w-1/2">
        <p className="opacity-90 text-zinc-800 lg:text-[3vh] md:text-[2vh] font-normal leading-[1.5] md:leading-[5vh] tracking-normal text-justify lg:mt-[10vh] md:mt-[10vh] ml-[2vh] md:ml-[3vh] mr-[2vh] md:mr-[3vh]">
          Thank you for your interest in Wipro’s services. Please provide the following information about your business needs to help us serve you better. This information will enable us to route your request to the appropriate person. You should receive a response within 48 hours.
        </p>
        <button className="text-[1.5vh] md:text-[2vh] flex w-[20vw] md:w-[25vw] h-[5vh] md:h-[6vh] justify-center items-center rounded-full border border-neutral-600 text-zinc-900 tracking-tight mt-[2vh] md:mt-[4vh] ml-[3vh]">
          Read More
          <svg
            width="2vw"
            height="2vh"
            viewBox="0 0 19 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-[2vh]"
          >
            <path d="M0 6.02357C0.078006 6.02697 0.156012 6.03378 0.234018 6.03378C5.44482 6.03378 9.77189 6.03378 14.9827 6.03378C15.0568 6.03378 15.1309 6.03378 15.244 6.03378C13.3719 4.40027 11.5309 2.79398 9.70169 1.20131C10.1775 0.782724 10.6339 0.384556 11.0785 0C13.7151 2.30053 16.3634 4.61126 19 6.90839C16.3673 9.20551 13.7151 11.5162 11.0785 13.8202C10.6378 13.4356 10.1853 13.0409 9.72119 12.6359C11.5465 11.0432 13.3914 9.43352 15.2362 7.82724C15.2284 7.81362 15.2167 7.79661 15.2089 7.783C15.1426 7.783 15.0724 7.783 15.0061 7.783C9.7836 7.783 5.44092 7.783 0.218417 7.783C0.148211 7.783 0.0780059 7.7898 0.00780058 7.79321C-1.81066e-08 7.20106 0 6.61231 0 6.02357Z" fill="#1A1A1A"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Journey;
