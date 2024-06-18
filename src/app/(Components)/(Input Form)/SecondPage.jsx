"use client";
import React, { useState } from "react";
import { useFormContext } from "./FormContext";
import "./phoneInput.css";
import PhoneInput from "react-phone-number-input";

const SecondPage = ({ className, onNext }) => {
  const { form, setForm } = useFormContext();
  const [warnings, setWarnings] = useState([]);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleClick = () => {
    const newWarnings = [];
    if (!form.mobile) {
      newWarnings.push("mobile");
    }
    if (form.email) {
      if (!emailPattern.test(form.email)) {
        newWarnings.push("email");
      }
    }

    if (newWarnings.length > 0) {
      setWarnings(newWarnings);
    } else {
      setWarnings([]);
      onNext();
    }
  };
  return (
    <div className={className}>
      <p className="font-medium tracking-[0.0177rem] text-[1.47vw] text-[#212121] text-center mt-[4.688vw]">
        <span className="text-[#00AFF1]">02 </span>/05
      </p>
      <h3 className="text-[#212121] font-medium tracking-[0.035rem] text-[2.8vw] text-center mt-[2.318vw]">
        Nice To Meet You,{" "}
        <span className="text-[#00AFF1]">{form.firstName}</span>
      </h3>
      <h6 className="text-[#212121] tracking-[0.044rem] text-[1.84vw] text-center mt-[0.45vw]">
        Please Provide Your Contact Information ?
      </h6>
      <div className="mt-[2.344vw]">
        <div className="w-[21vw] h-[5vw] mx-auto">
          <PhoneInput
            countryCallingCodeEditable={false}
            defaultCountry="IN"
            international
            value={form.mobile}
            onChange={(value) => {
              setWarnings((prev) =>
                prev.filter((warning) => warning !== "mobile")
              );
              setForm((prevState) => ({
                ...prevState,
                mobile: value,
              }));
            }}
            limitMaxLength={10}
            numberInputProps={{
              required: true,
              className: ` w-[20.3vw] text-opacity-50 text-[1.375vw] border-b border-[#707070] py-[0.5vw] bg-[#F9F9F9] focus:text-opacity-100 after:text-opacity-100 focus:outline-0 focus:rounded-full focus:shadow-md focus:bg-white focus:border-none focus:px-[1vw] focus:duration-700 duration-700 focus:py-[1vw] ${
                warnings.includes("mobile")
                  ? "border-red-600 "
                  : "border-[#707070]"
              }`,
            }}
          />
          {warnings.includes("mobile") && (
            <p className="text-red-600 mt-2">Mobile is required</p>
          )}
        </div>
        <div className="w-[21vw] h-[5vw] mx-auto">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setWarnings((prev) =>
                prev.filter((warning) => warning !== "email")
              );
              setForm((prevState) => ({
                ...prevState,
                email: e.target.value,
              }));
            }}
            className={`w-[22.54vw] text-[1.375vw] border-b border-[#707070] py-[0.5vw] bg-[#F9F9F9] focus:outline-0 focus:rounded-full focus:shadow-md focus:bg-white focus:border-none focus:px-[1vw] focus:duration-700 duration-700 focus:py-[1vw] ${
              warnings.includes("email")
                ? "border-red-600 "
                : "border-[#707070]"
            } `}
          />
          {warnings.includes("email") && (
            <p className="text-red-600 mt-2">Enter a valid email</p>
          )}
        </div>
      </div>
      <div className="flex justify-center">
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

export default SecondPage;
