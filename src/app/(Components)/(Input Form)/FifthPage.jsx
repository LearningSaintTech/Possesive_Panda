import React, { useState } from "react";
import { useFormContext } from "./FormContext";

const FifthPage = ({ className, onFinish }) => {
  const { form, setForm } = useFormContext();
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setForm((prevState) => ({
      ...prevState,
      file: file,
    }));

    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };
  return (
    <div className={className}>
      <p className="font-medium tracking-[0.0177rem] text-[1.47vw] text-[#212121] text-center mt-[4.688vw]">
        <span className="text-[#00AFF1]">05 </span>/05
      </p>
      <h6 className="text-[#212121] tracking-[0.044rem] text-[1.84vw] text-center mt-[2.318vw]">
        Do You Have Any Details Detailing Your Needs ?
      </h6>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-start mt-[2.881vw]">
          <input
            type="file"
            name="file"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className="flex items-center gap-2 cursor-pointer text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="44"
              viewBox="0 0 43 44"
              fill="none"
              className="size-[2vw]"
            >
              <path
                d="M20.6071 34.8302L33.7224 21.714C35.2129 20.2233 36.0503 18.2015 36.0503 16.0935C36.0503 13.9854 35.2129 11.9637 33.7224 10.4729C32.9843 9.73475 32.108 9.14921 31.1435 8.74972C30.1791 8.35023 29.1454 8.14461 28.1014 8.14461C27.0575 8.14461 26.0238 8.35023 25.0594 8.74972C24.0949 9.14921 23.2186 9.73475 22.4805 10.4729L6.86644 26.0861C6.37425 26.5782 5.98381 27.1624 5.71743 27.8054C5.45105 28.4485 5.31395 29.1377 5.31395 29.8337C5.31395 30.5297 5.45105 31.2189 5.71743 31.8619C5.98381 32.5049 6.37425 33.0892 6.86644 33.5813C7.35856 34.0735 7.9428 34.4639 8.58582 34.7303C9.22884 34.9967 9.91804 35.1338 10.6141 35.1338C11.3101 35.1338 11.9993 34.9967 12.6423 34.7303C13.2853 34.4639 13.8696 34.0735 14.3617 33.5813L29.9748 17.9673C30.2209 17.7212 30.4161 17.4291 30.5493 17.1076C30.6825 16.7861 30.7511 16.4415 30.7511 16.0935C30.7511 15.7454 30.6825 15.4008 30.5493 15.0793C30.4161 14.7578 30.2209 14.4657 29.9748 14.2196C29.4779 13.7229 28.8041 13.4438 28.1014 13.4438C27.3988 13.4438 26.725 13.7229 26.2281 14.2196L13.1119 27.3359"
                stroke="#707070"
                strokeWidth="3.53299"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="underline text-[#707070] tracking-[0.0177rem] text-[1.5vw]">
              Attach file
            </span>
          </label>
          <p className="mt-[0.4vw] text-[#707070] tracking-[0.013rem] text-[1.3vw] ml-[2.1vw]">
            {fileName ? fileName : "No File Chosen"}
          </p>
          <p className="mt-[0.2vw] text-[#707070] tracking-[0.011rem] text-[1vw] ml-[2.1vw]">
            *Only .Pdf, .Ppt & .Doc Is Allowed. Max File Size Is 10 Mb.
          </p>
        </div>
        <div className="w-[23vw] h-[5vw] mt-[4.191vw]">
          <input
            type="text"
            placeholder="Your Message"
            onChange={(e) => {
              setForm((prevState) => ({
                ...prevState,
                message: e.target.value,
              }));
            }}
            required
            className="w-[22.54vw] text-[1.375vw] border-b border-[#707070] py-[0.5vw] bg-[#F9F9F9] focus:outline-0 focus:rounded-full focus:shadow-md focus:bg-white focus:border-none focus:px-[1vw] focus:duration-700 duration-700 focus:py-[1vw]"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={onFinish}
          className="text-[1.47vw] text-[#707070] tracking-[0.018rem] py-[0.625vw] px-[4.688vw] mt-[2.5vw] rounded-[2.76vw] border border-black w-fit hover:bg-[#212121] hover:border-gray-300 hover:shadow-md hover:text-[#e7e6e6] hover:duration-500 duration-500"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default FifthPage;
