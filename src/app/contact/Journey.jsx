import React from "react";

const Journey = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-4 md:p-1 bg-white space-y-8 md:space-y-0 mt-4">
      <div className="w-full md:w-1/2">
        <h2 className="text-sky-500 text-xl md:text-xl font-medium tracking-tight mt-8 md:mt-10 ml-4 md:ml-24">
          I’m Looking For
        </h2>
        <h1 className="text-neutral-800 text-2xl md:text-2xl lg:text-3xl  font-medium leading-[1.5] md:leading-[62.40px] tracking-normal mt-1 md:mt-2 ml-4 md:ml-24">
          Possessive Panda journey was inspired by a passion for Panda possessiveness to work
        </h1>
      </div>
      <div className="w-full md:w-1/2">
  <p className="opacity-90 text-zinc-800 lg:text-xl md:text-l font-normal leading-[1.5] md:leading-[38.40px] tracking-normal text-justify lg:mt-20 md:mt-20 ml-4 md:ml-10 mr-4 md:mr-10">
    Thank you for your interest in Wipro’s services. Please provide the following information about your business needs to help us serve you better. This information will enable us to route your request to the appropriate person. You should receive a response within 48 hours.
  </p>
        <button className="text-sm md:text-base flex w-[160px] md:w-[200px] h-[40px] md:h-[50px] justify-center items-center rounded-full border border-neutral-600 text-zinc-900 tracking-tight mt-4 md:mt-8 ml-10">
          Read More
          <svg
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <path d="M0 6.02357C0.078006 6.02697 0.156012 6.03378 0.234018 6.03378C5.44482 6.03378 9.77189 6.03378 14.9827 6.03378C15.0568 6.03378 15.1309 6.03378 15.244 6.03378C13.3719 4.40027 11.5309 2.79398 9.70169 1.20131C10.1775 0.782724 10.6339 0.384556 11.0785 0C13.7151 2.30053 16.3634 4.61126 19 6.90839C16.3673 9.20551 13.7151 11.5162 11.0785 13.8202C10.6378 13.4356 10.1853 13.0409 9.72119 12.6359C11.5465 11.0432 13.3914 9.43352 15.2362 7.82724C15.2284 7.81362 15.2167 7.79661 15.2089 7.783C15.1426 7.783 15.0724 7.783 15.0061 7.783C9.7836 7.783 5.44092 7.783 0.218417 7.783C0.148211 7.783 0.0780059 7.7898 0.00780058 7.79321C-1.81066e-08 7.20106 0 6.61231 0 6.02357Z" fill="#1A1A1A"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Journey;
