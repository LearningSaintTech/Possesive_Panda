"use client";
import React, { useState, useEffect, useRef } from "react";
import { useFormContext } from "./FormContext";
import services from "./services";

const ThirdPage = ({ className, onNext }) => {
  const { form, setForm } = useFormContext();
  const [filterList, setFilterList] = useState([]);
  const [warning, setWarning] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // useEffect to handle click outside dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    if (!form.service) {
      setWarning(true);
    } else {
      setWarning(false);
      onNext();
    }
  };

  const handleSelectService = (service) => {
    setForm((prevState) => ({
      ...prevState,
      service,
    }));
    setShowDropdown(false);
    setFilterList([]);
    setWarning(false);
  };

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    const filtered = services.filter((service) =>
      service.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterList(filtered);
    setForm((prevState) => ({
      ...prevState,
      service: searchTerm,
    }));
    setShowDropdown(true); // Always show dropdown when input changes
  };

  return (
    <div className={className}>
      <p className="font-medium tracking-[0.0177rem] text-[1.47vw] text-[#212121] text-center mt-[4.688vw]">
        <span className="text-[#00AFF1]">03 </span>/05
      </p>
      <h3 className="text-[#212121] font-medium tracking-[0.035rem] text-[2.8vw] text-center mt-[2.318vw]">
        Superb, <span className="text-[#00AFF1]">{form.firstName}</span>
      </h3>
      <h6 className="text-[#212121] tracking-[0.044rem] text-[1.84vw] text-center mt-[0.45vw]">
        What Can We Help You With
      </h6>

      <div
        ref={dropdownRef}
        className="relative w-[26vw] mx-auto mt-[5.2vw] h-[5vw]"
      >
        <div className="absolute inset-y-[1.4vw] start-0 ps-[3.5vw] pointer-events-none">
          <svg
            className="size-[1vw] text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          name="service"
          value={form.service}
          onClick={() => setShowDropdown(true)}
          onChange={handleInputChange}
          className={`mx-auto block ps-10 w-[20.3vw] text-[1.375vw] border-b border-[#707070] py-[0.5vw] bg-[#F9F9F9] focus:outline-0 focus:rounded-full focus:shadow-md focus:bg-white focus:border-none focus:px-[2vw] focus:duration-700 duration-700 focus:py-[1vw] ${
            warning ? "border-red-600" : "border[#707070]"
          }`}
          placeholder="Select Service"
          required
        />
        {warning && (
          <p className="mt-2 ml-[3.667vw] text-red-600">
            Please Select a Service
          </p>
        )}
        {showDropdown && filterList.length > 0 && (
          <ul className="absolute z-10 w-[20.3vw] ml-[3.143vw] bg-white border border-gray-200 mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto">
            {filterList.map((service, index) => (
              <li
                key={index}
                onClick={() => handleSelectService(service)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {service}
              </li>
            ))}
          </ul>
        )}
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

export default ThirdPage;
