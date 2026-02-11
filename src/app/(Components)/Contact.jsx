"use client";
import { Link } from "@/lib/next-compat";
import { useState, useEffect } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

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
  const handleConversion = () => {
    if (typeof window !== "undefined" && window.uetq) {
      window.uetq.push("set", {
        pid: {
          em: form.email || "",
          ph: form.phone || "",
        },
      });
      window.uetq.push("event", "contact", {});
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
      handleConversion(); 
      navigate("/thank-you");
    } else {
      setMessage("Failed to submit the form.");
    }

    setForm(initialForm);
  };

  return (
    <div className="sm:py-0 sm:px-[5.208vw] px-[7.692vw] flex flex-col sm:flex-row justify-between bg-[#00111A]">
  
  <head>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function(w,d,t,r,u) {
          var f,n,i;
          w[u]=w[u]||[],f=function() {
            var o={ti:"187153115",enableAutoSpaTracking:true};
            o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
          },
          n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function() {
            var s=this.readyState;
            s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
          },
          i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
        })(window,document,"script","//bat.bing.com/bat.js","uetq");
      `,
    }}
  />
</head>
      <div className="w-full sm:w-[34.688vw] gap-[1.042vw]">
        <h4 className="text-center sm:text-left text-[8.205vw] sm:text-[3.333vw] font-semibold leading-[normal] sm:mb-[1.25vw] mb-[2vw] text-white">
          Get in <span className="text-[#00AFF1]">Touch</span>
        </h4>
        <div className="flex flex-col sm:gap-[1.042vw] gap-[5.128vw]">
          <p className="text-[4.103vw] sm:text-[1.042vw] font-normal sm:leading-[146.642%] tracking-[0.08rem] text-white sm:mb-[2vw] text-center sm:text-left">
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
            className={`border ${errors.fname ? 'border-red-500' : 'border-gray-300'} text-white text-[3.846vw] sm:text-[1.042vw] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#00111A] `}
          />
          {errors.fname && <p className="text-red-500 text-[3.846vw] sm:text-[1.25vw]">{errors.fname}</p>}

          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-white text-[3.846vw] sm:text-[1.042vw] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#00111A]`}
          />
          {errors.email && <p className="text-red-500 text-[3.846vw] sm:text-[1.25vw]">{errors.email}</p>}

          <input
            type="text"
            required
            placeholder="Phone number"
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            maxLength={10}
            name="phone"
            className={`border ${errors.phone ? 'border-red-500' : 'border-gray-300'} text-white text-[3.846vw] sm:text-[1.042vw] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#00111A]`}
          />
          {errors.phone && <p className="text-red-500 text-[3.846vw] sm:text-[1.25vw]">{errors.phone}</p>}

          <select
            name="course"
            onChange={handleChange}
            className={`border ${errors.course ? 'border-red-500' : 'border-gray-300'} text-white text-[3.846vw] sm:h-auto h-[12vw] sm:text-[1.042vw] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 md:py-[1vw] lg:p-2.5  bg-[#00111A]`}
          >
            <option hidden value="">
              How did you find us?
            </option>
            <option value="Instagram">Instagram</option>
            <option value="Youtube">Youtube</option>
            <option value="Advertisment">Advertisment</option>
            <option value="Other">Other</option>
          </select>

          {/* <textarea
            required
            placeholder="Message"
            name="message"
            onChange={handleChange}
            className={`border ${errors.message ? 'border-red-500' : 'border-gray-300'} text-white text-[3.846vw] md:text-[2.5vw] lg:text-[1.042vw] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#00111A] resize-none`} // Added resize-none to prevent resizing
          ></textarea>
          {errors.message && <p className="text-red-500 text-[3.846vw] md:text-[2.5vw] lg:text-[1.25vw]">{errors.message}</p>}

          {errors.course && <p className="text-red-500 text-[3.846vw] md:text-[2.5vw] lg:text-[1.25vw]">{errors.course}</p>} */}

          <input
            type="hidden"
            value={form.ip}
            name="ip"
            className="border border-gray-300 text-white text-[3.846vw] sm:text-[1.042vw] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <button
            onClick={handleSubmit}
            className="w-full py-2.5 md:py-[1.3vw] lg:py-[0.8vw] bg-[#05B7DF] sm:hover:bg-[#109AD6] text-white font-bold text-[3.846vw] sm:text-[1.25vw] leading-[normal] "
          >
            SEND
          </button>
          {message && (
            <p className="text-green-500 text-[4vw] sm:text-[1.042vw] mt-2">
              {message}
            </p>
          )}
          <div className="flex flex-row sm:flex-row gap-[2vw] sm:gap-0 justify-between ">
            <Link
              className="flex flex-row items-center hover:opacity-60"
              href="tel:+14158003326"
            >
              <BiPhoneCall className="size-[7vw] sm:size-[2vw] mr-[1v0.9] sm:mr-[0.521vw] text-white" />

              <div className="flex flex-col">
                <p className="text-[3vw] sm:text-[0.833vw] leading-[153.846%] tracking-[0.02rem] text-white">
                  PHONE
                </p>
                <p className="text-[#00AFF1] text-[2.8vw] sm:text-[0.833vw] leading-[153.846%] tracking-[0.02rem]">
                  +1 (415) 800-3326
                </p>
              </div>
            </Link>

            <Link className="flex items-center hover:opacity-60" href="mailto:hello@possesivepanda.com">
              <SlEnvolopeLetter className="size-[7vw] sm:size-[2vw] mr-[0.521vw] text-white" />
              <div>
                <p className="text-[3vw] sm:text-[0.833vw] leading-[153.846%] tracking-[0.02rem] text-white">
                  EMAIL
                </p>
                <p className="text-[#00AFF1] text-[2.8vw] sm:text-[0.833vw] leading-[153.846%] tracking-[0.02rem]">
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
      <div className="sm:mt-[3vw] mt-[13.256vw] filter  invert contrast-125">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0589796457366!2d77.37415457528887!3d28.627994375667253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce563c110213b%3A0x1874a657b756e9d9!2sPossesive%20Panda%20%7C%20Virtual%20Assistant%2C%20Mobile%20App%20%26%20Web%20Development%20Company%20Noida%20Delhi%20NCR!5e0!3m2!1sen!2sin!4v1724840334521!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full md:w-full h-[70vw] md:h-[46vh] lg:w-[35vw] lg:h-[32vw]"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
