"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { useRouter } from 'next/navigation';

const Contact = () => {
  const router = useRouter();

  const initialForm = {
    fname: "",
    email: "",
    phone: "",
    course: "",
    ip: "",
    site_id: "3",
  };
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleKeyPress = (e) => {
    const allowedKeys = /[0-9\b]/;
    if (!allowedKeys.test(e.key)) {
      e.preventDefault();
    }
  };

  const getData = async () => {
    const res = await fetch("https://api.ipify.org/?format=json");
    const data = await res.json();
    setForm((prevState) => ({
      ...prevState,
      ip: data.ip,
    }));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!form.fname) formErrors.fname = "Name is required";
    if (!form.email) formErrors.email = "Email is required";
    if (!form.phone) formErrors.phone = "Phone number is required";
    if (!form.course) formErrors.course = "Course selection is required";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setMessage("Please fill in all required fields.");
      return;
    }

    const apiUrl =
      "https://crm.learningsaint.com/api/addLeads?api_token=zxUcPukvuXHaCM6E7eqfLwGUncdJD6lF1qGcjEAifQjy1iAUvVw0Qu2hJLQj";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      router.push("/thank-you"); // Redirect to Thank You page
    } else {
      setMessage("Failed to submit the form.");
    }

    setForm(initialForm);
  };

  return (
    <div className="mx-[6.771vw] flex flex-col lg:flex-row justify-between mb-[5.5vw] lg:mt-0 mt-[15.385vw]">
      <div className="w-full lg:w-[34.688vw] gap-[1.042vw]">
        <h2 className="text-[6.154vw] lg:text-[3.333vw] font-semibold leading-[normal] lg:mb-0 mb-[2vw]">
          Get in <span className="text-[#00AFF1]">Touch</span>
        </h2>
        <div className="flex flex-col lg:gap-[1.042vw] gap-[5.128vw]">
          <p className="text-[3.846vw] lg:text-[1.25vw] font-normal leading-[146.642%] tracking-[0.08rem]">
            Ready to learn more about our IT Service Solutions? Fill in the
            required details to obtain all the essential information.
          </p>
          <input
            type="text"
            required
            placeholder="Name"
            name="fname"
            onChange={handleChange}
            maxLength={25}
            className={`border ${errors.fname ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-[3.846vw] md:text-[2.5vw] lg:text-[1.25vw] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          />
          {errors.fname && <p className="text-red-500 text-[3.846vw] md:text-[2.5vw] lg:text-[1.25vw]">{errors.fname}</p>}
          
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-[3.846vw] md:text-[2.5vw] lg:text-[1.25vw] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          />
          {errors.email && <p className="text-red-500 text-[3.846vw] md:text-[2.5vw] lg:text-[1.25vw]">{errors.email}</p>}
          
          <input
            type="text"
            required
            placeholder="Phone number"
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            maxLength={10}
            name="phone"
            className={`border ${errors.phone ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-[3.846vw] md:text-[2.5vw] lg:text-[1.25vw] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          />
          {errors.phone && <p className="text-red-500 text-[3.846vw] md:text-[2.5vw] lg:text-[1.25vw]">{errors.phone}</p>}
          
          <select
            name="course"
            onChange={handleChange}
            className={`border ${errors.course ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-[3.846vw] md:text-[2.5vw] lg:text-[1.25vw] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 md:py-[1vw] lg:p-2.5`}
          >
            <option hidden value="">
              How did you find us?
            </option>
            <option value="Instagram">Instagram</option>
            <option value="Youtube">Youtube</option>
            <option value="Advertisment">Advertisment</option>
            <option value="Other">Other</option>
          </select>
          {errors.course && <p className="text-red-500 text-[3.846vw] md:text-[2.5vw] lg:text-[1.25vw]">{errors.course}</p>}
          
          <input
            type="hidden"
            value={form.ip}
            name="ip"
            className="border border-gray-300 text-gray-900 text-[3.846vw] md:text-[2.5vw] lg:text-[1.042vw] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <button
            onClick={handleSubmit}
            className="w-full py-2.5 md:py-[1.3vw] lg:py-[0.8vw] bg-[#00AFF1] text-white font-bold text-[3.846vw] md:text-[2.5vw] lg:text-[1.25vw] leading-[normal] rounded-[5.128vw] "
          >
            SEND
          </button>
          {message && (
            <p className="text-green-500 text-[4vw] md:text-[2.5vw] lg:text-[1.042vw] mt-2">
              {message}
            </p>
          )}
          <div className="flex flex-row lg:flex-row gap-[2vw] lg:gap-0 justify-between mt-[15px]">
            <Link
              className="flex flex-row items-center hover:opacity-60"
              href="tel:+14158003326"
            >
              <BiPhoneCall className="size-[7vw] lg:size-[2vw] mr-[1v0.9] lg:mr-[0.521vw]" />

              <div className="flex flex-col">
                <p className="text-[3vw] lg:text-[1.2vw] leading-[153.846%] tracking-[0.02rem]">
                  PHONE
                </p>
                <p className="text-[#00AFF1] text-[2.8vw] lg:text-[1.2vw] leading-[153.846%] tracking-[0.02rem]">
                  +1 (415) 800-3326
                </p>
              </div>
            </Link>

            <Link className="flex items-center hover:opacity-60" href="mailto:hello@possesivepanda.com">
              <SlEnvolopeLetter className="size-[7vw] lg:size-[2vw] mr-[0.521vw]" />
              <div>
                <p className="text-[3vw] lg:text-[1.2vw] leading-[153.846%] tracking-[0.02rem]">
                  EMAIL
                </p>
                <p className="text-[#00AFF1] text-[2.8vw] lg:text-[1.2vw] leading-[153.846%] tracking-[0.02rem]">
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
          className="size-fit w-full md:w-full md:h-[40vh] lg:w-[40vw] lg:h-[70vh] mt-[30px] lg:mt-0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
