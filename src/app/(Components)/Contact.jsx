"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { LiaFaxSolid } from "react-icons/lia";
import { SlEnvolopeLetter } from "react-icons/sl";

const Contact = () => {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    find: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleKeyPress = (e) => {
    const allowedKeys = /[0-9\b]/;
    if (!allowedKeys.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm(initialForm);
  };
  return (
    <div className="mx-[6.771vw] flex flex-col lg:flex-row justify-between mb-[5.5vw]">
      <div className="w-full lg:w-[34.688vw] gap-[2vw]">
        <h2 className="text-[8.2vw] lg:text-[3.333vw] font-semibold leading-[normal]">
          Get in <span className="text-[#00AFF1]">Touch</span>
        </h2>
        <div className="flex flex-col lg:gap-[1.302vw] gap-[2vw]">
          <p className="text-[4vw] lg:text-[1.042vw] font-medium leading-[146.642%] tracking-[0.013rem]">
            Ready to learn more about our IT Service Solutions? Fill in the
            required details to obtain all the essential information.
          </p>
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            onChange={handleChange}
            maxLength={25}
            className="border border-gray-300 text-gray-900 text-[4vw] md:text-[2.5vw] lg:text-[1.042vw] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className="border border-gray-300 text-gray-900 text-[4vw] md:text-[2.5vw] lg:text-[1.042vw] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <input
            type="text"
            required
            placeholder="Phone number"
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            maxLength={10}
            name="phone"
            className="border border-gray-300 text-gray-900 text-[4vw] md:text-[2.5vw] lg:text-[1.042vw] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <select
            name="find"
            onChange={handleChange}
            className="border border-gray-300 text-gray-900 text-[4vw] md:text-[2.5vw] lg:text-[1.042vw] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 md:py-[1vw] lg:p-2.5"
          >
            <option hidden value="find">
              How did you find us?
            </option>
            <option value="Instagram">Instagram</option>
            <option value="Youtube">Youtube</option>
            <option value="Advertisment">Advertisment</option>
            <option value="Other">Other</option>
          </select>
          <button
            onClick={handleSubmit}
            className="w-full py-2.5 md:py-[1.3vw] lg:py-[0.8vw] bg-[#00AFF1] text-white font-bold text-[4vw] md:text-[2.5vw] lg:text-[1.042vw] leading-[normal]"
          >
            SEND
          </button>
          <div className="flex flex-col lg:flex-row gap-[2vw] lg:gap-0 justify-between mt-[40px]">
            <Link className="flex items-center hover:opacity-60" href="">
              <BiPhoneCall className="size-[7.5vw] lg:size-[2vw] mr-[0.521vw]" />

              <div>
                <p className="text-[4vw] lg:text-[0.833vw] leading-[153.846%] tracking-[0.02rem]">
                  PHONE
                </p>
                <p className="text-[#00AFF1] text-[4vw] lg:text-[0.833vw] leading-[153.846%] tracking-[0.02rem]">
                  03 5432 1234
                </p>
              </div>
            </Link>
            <Link className="flex items-center hover:opacity-60" href="">
              <LiaFaxSolid className="size-[7.5vw] lg:size-[2vw] mr-[0.521vw]" />

              <div>
                <p className="text-[4vw] lg:text-[0.833vw] leading-[153.846%] tracking-[0.02rem]">
                  FAX
                </p>
                <p className="text-[#00AFF1] text-[4vw] lg:text-[0.833vw] leading-[153.846%] tracking-[0.02rem]">
                  03 5432 1234
                </p>
              </div>
            </Link>
            <Link className="flex items-center hover:opacity-60" href="">
              <SlEnvolopeLetter className="size-[7.5vw] lg:size-[2vw] mr-[0.521vw]" />

              <div>
                <p className="text-[4vw] lg:text-[0.833vw] leading-[153.846%] tracking-[0.02rem]">
                  EMAIL
                </p>
                <p className="text-[#00AFF1] text-[4vw] lg:text-[0.833vw] leading-[153.846%] tracking-[0.02rem]">
                  hello@possesivepanda.com
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 4 397"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="my-auto w-[0.2vw] h-[28.23vw] hidden md:block"
      >
        <line
          opacity="0.5"
          x1="2"
          y1="397"
          x2="1.99998"
          y2="-6.76711e-06"
          stroke="url(#paint0_linear_2132_4246)"
          strokeWidth="4"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2132_4246"
            x1="4.49998"
            y1="-5.06412e-05"
            x2="4.49717"
            y2="396.999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A39C9C" stopOpacity="0" />
            <stop offset="0.455" stopColor="#A39C9C" />
            <stop offset="1" stopColor="#A39C9C" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mt-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.6454755034493!2d77.3838346!3d28.6123171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefa443812e1b%3A0x89693f7dd82b09fd!2sLearning%20Saint%20Private%20Limited!5e0!3m2!1sen!2sin!4v1717428098307!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="size-fit md:w-full md:h-[40vh] lg:w-[40vw] lg:h-[70vh] mt-[30px] lg:mt-0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
