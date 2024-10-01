import React from "react";

const Filter = () => {
  return (
    <div className="w-full md:w-[32vw]">
      <div className="rounded-[0.63725rem] w-[50vw] md:w-auto mx-auto md:mx-0 bg-gray-50 border border-black border-opacity-50 h-[16vw] md:h-[11.458vw] pl-[2.083vw] shadow-[0px_4.078px_4.078px_0px_rgba(0,0,0,0.25)]">
        <h2 className="text-neutral-800 text-[4vw] md:text-[1.25vw] font-semibold leading-[91.5%] tracking-[0.02rem] mt-[2.604vw] mb-[1.563vw]">
          Search Here
        </h2>
        <div className="flex items-center">
          <input
            type="text"
            name="search"
            placeholder="Enter Keyword"
            className="text-neutral-800 text-[2vw] md:text-[1vw] w-9/12 font-normal leading-[normal] tracking-[0.015rem] py-[0.6vw] pl-[1.25vw] 2xl:pr-[1.042vw] border opacity-90 rounded-[0.3125rem] border-[rgba(0,0,0,0.50)]"
          />
          <button className="bg-sky-500 px-[0.833vw] rounded-[0.3125rem] h-full py-[1vw] md:py-[0.65vw]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="33"
              viewBox="0 0 30 33"
              fill="none"
              className="size-[2.5vw] md:size-[1.563vw]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8839 22.293C16.5623 24.2898 13.6187 25.2539 10.6574 24.9873C7.69612 24.7207 4.94209 23.2436 2.96092 20.8594C0.979761 18.4752 -0.0781393 15.365 0.00450134 12.1674C0.087142 8.96976 1.30405 5.9276 3.40529 3.66568C5.50653 1.40377 8.33259 0.0938055 11.303 0.00484554C14.2735 -0.0841145 17.1629 1.05468 19.3777 3.18734C21.5925 5.32 22.9646 8.28462 23.2123 11.4723C23.46 14.66 22.5644 17.8288 20.7094 20.3279L29.5889 29.8845C29.7158 30.0118 29.8176 30.1653 29.8882 30.3359C29.9588 30.5064 29.9967 30.6906 29.9998 30.8772C30.0029 31.0639 29.971 31.2494 29.906 31.4225C29.841 31.5956 29.7443 31.7529 29.6217 31.8849C29.499 32.017 29.3529 32.121 29.1921 32.191C29.0313 32.2609 28.859 32.2952 28.6856 32.292C28.5122 32.2887 28.3411 32.2478 28.1827 32.1718C28.0242 32.0958 27.8817 31.9862 27.7634 31.8496L18.8839 22.293ZM5.23569 19.3973C3.97169 18.0365 3.11079 16.3028 2.76181 14.4155C2.41283 12.5282 2.59142 10.5718 3.27502 8.79373C3.95861 7.01562 5.11653 5.49557 6.60243 4.42566C8.08832 3.35576 9.83551 2.78403 11.6232 2.78274C13.4108 2.78144 15.1587 3.35064 16.646 4.41839C18.1332 5.48614 19.293 7.00451 19.9788 8.78163C20.6646 10.5587 20.8457 12.5148 20.4991 14.4027C20.1524 16.2905 19.2937 18.0254 18.0314 19.388L18.0228 19.3973L18.0142 19.4047C16.318 21.2263 14.0195 22.2487 11.6235 22.2473C9.22754 22.246 6.93004 21.2209 5.23569 19.3973Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="hidden md:block mt-[2.3vw] rounded-[0.63725rem] bg-neutral-50 border-[rgba(0,0,0,0.50)] border shadow-[0px_4.078px_4.078px_0px_rgba(0,0,0,0.25)] pl-[2.083vw] ">
        <h2 className="text-neutral-800 text-[1.25vw] font-semibold leading-[91.6%] tracking-[0.02rem] mt-[2.5vw] mb-[1.5vw]">
          Categories
        </h2>
        <div className="flex flex-col gap-[0.677vw] items-start">
          <button className="bg-[#F8F9FA] text-neutral-800 text-[1vw] font-normal leading-[normal] tracking-[0.015rem] w-11/12 border border-opacity-50 rounded-[0.3125rem] py-[0.8vw] text-start pl-[1.458vw]">
            Business Consulting
          </button>
          <button className="bg-[#F8F9FA] text-neutral-800 text-[1vw] font-normal leading-[normal] tracking-[0.015rem] w-11/12 border border-opacity-50 rounded-[0.3125rem] py-[0.8vw] text-start pl-[1.458vw]">
            Strategy Growth
          </button>
          <button className="bg-[#F8F9FA] text-neutral-800 text-[1vw] font-normal leading-[normal] tracking-[0.015rem] w-11/12 border border-opacity-50 rounded-[0.3125rem]  py-[0.8vw] text-start pl-[1.458vw]">
            Finance Solutions
          </button>
          <button className="bg-[#F8F9FA] text-neutral-800 text-[1vw] font-normal leading-[normal] tracking-[0.015rem] w-11/12 border border-opacity-50 rounded-[0.3125rem]  py-[0.8vw] text-start pl-[1.458vw]">
            Text Management
          </button>
          <button className="bg-[#F8F9FA] text-neutral-800 text-[1vw] font-normal leading-[normal] tracking-[0.015rem] w-11/12 border border-opacity-50 rounded-[0.3125rem]  py-[0.8vw] text-start pl-[1.458vw] mb-[2.5vw]">
            Investment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
