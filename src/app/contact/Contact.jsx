"use client";
import React, { useState } from "react";

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
  };
  return (
    <div className="mx-[5.2vw] flex flex-col lg:flex-row justify-between mt-10">
      <div className="w-full lg:w-[34.688vw] min-h-[75vh] md:min-h-[90vh] lg:min-h-[85vh] flex flex-col justify-between">
        <h2 className="text-[8.2vw] lg:text-[3.333vw] font-bold leading-[normal]">
          Get in <span className="text-[#00AFF1]">Touch</span>
        </h2>
        <p className="text-[4vw] lg:text-[1.042vw] font-medium leading-[146.642%] tracking-[0.013rem]">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
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
          className="w-full py-[2vw] md:py-[1.3vw] lg:py-[0.8vw] bg-[#00AFF1] text-white font-bold text-[4vw] md:text-[2.5vw] lg:text-[1.042vw] leading-[normal]"
        >
          SEND
        </button>
        <div className="flex flex-col lg:flex-row gap-[2vw] lg:gap-0 justify-between mt-[40px]">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className="size-[7.5vw] lg:size-[2vw]"
            >
              <path
                d="M19.5807 0.817871V3.17446C21.9115 3.17446 24.0952 3.7636 26.1316 4.9419C28.0699 6.09564 29.6156 7.64215 30.7688 9.58142C31.9465 11.6189 32.5353 13.8036 32.5353 16.1357H34.8907C34.8907 13.3618 34.1915 10.7843 32.7929 8.40313C31.4435 6.09564 29.6156 4.26683 27.3093 2.9167C24.9294 1.51748 22.3532 0.817871 19.5807 0.817871ZM7.39891 4.35275C6.73646 4.35275 6.15988 4.56141 5.66917 4.97872L1.87847 8.84499L1.98888 8.77135C1.37549 9.28685 0.970662 9.92509 0.77438 10.6861C0.602633 11.4471 0.651704 12.1835 0.921592 12.8954C1.60858 14.8101 2.52865 16.7739 3.68181 18.7868C5.30114 21.5607 7.22716 24.0523 9.45987 26.2616C13.042 29.8701 17.4952 32.7177 22.8193 34.8042H22.8561C23.5677 35.0497 24.2792 35.0988 24.9907 34.9515C25.7268 34.8042 26.377 34.4851 26.9413 33.9942L30.6584 30.2752C31.1491 29.7842 31.3944 29.1828 31.3944 28.4709C31.3944 27.7345 31.1491 27.1208 30.6584 26.6298L25.8372 21.7694C25.3465 21.2784 24.7331 21.033 23.997 21.033C23.261 21.033 22.6476 21.2784 22.1569 21.7694L19.8383 24.126C17.9736 23.2423 16.3543 22.1499 14.9803 20.8488C13.6063 19.5233 12.5145 17.9154 11.7049 16.0252L14.0602 13.6686C14.5755 13.1286 14.8331 12.4903 14.8331 11.7539C14.8331 10.9929 14.5387 10.3792 13.9498 9.91282L14.0602 10.0233L9.12865 4.97872C8.63794 4.56141 8.06136 4.35275 7.39891 4.35275ZM19.5807 5.53104V7.88763C21.0773 7.88763 22.4513 8.25584 23.7026 8.99228C24.9784 9.72871 25.9844 10.7352 26.7205 12.0117C27.4565 13.2636 27.8245 14.6383 27.8245 16.1357H30.1799C30.1799 14.221 29.7015 12.4412 28.7446 10.7965C27.7877 9.20093 26.5119 7.92445 24.9171 6.96709C23.2732 6.00972 21.4944 5.53104 19.5807 5.53104ZM7.39891 6.70933C7.47252 6.70933 7.55839 6.74616 7.65653 6.8198L12.4777 11.7539C12.5023 11.8521 12.4777 11.938 12.4041 12.0117L8.90783 15.4729L9.16545 16.2093L9.64389 17.2403C10.0365 18.0749 10.4904 18.885 11.0056 19.6706C11.7171 20.7752 12.5023 21.7203 13.361 22.5058C14.5141 23.635 15.9004 24.666 17.5197 25.5988C18.3294 26.0652 19.0164 26.4089 19.5807 26.6298L20.3167 26.9612L23.8866 23.3895C23.9357 23.3404 23.9725 23.3159 23.997 23.3159C24.0216 23.3159 24.0584 23.3404 24.1074 23.3895L29.0758 28.3605C29.1249 28.4096 29.1494 28.4464 29.1494 28.4709C29.1494 28.4709 29.1249 28.4955 29.0758 28.5446L25.3955 32.1899C24.8558 32.6563 24.2669 32.7791 23.629 32.5581C18.6238 30.6189 14.4528 27.9677 11.116 24.6047C9.05504 22.5426 7.2517 20.1983 5.70597 17.5717C4.60189 15.6815 3.74315 13.8527 3.12977 12.0853V12.0485C3.03163 11.8275 3.01936 11.5698 3.09297 11.2752C3.16657 10.9561 3.30152 10.7106 3.4978 10.5388L7.14129 6.8198C7.21489 6.74616 7.30077 6.70933 7.39891 6.70933ZM19.5807 10.2442V12.6008C20.5621 12.6008 21.3963 12.9445 22.0833 13.6318C22.7703 14.3191 23.1138 15.1538 23.1138 16.1357H25.4692C25.4692 15.0801 25.1993 14.0982 24.6595 13.1899C24.1442 12.2817 23.4327 11.5698 22.5249 11.0543C21.6171 10.5142 20.6357 10.2442 19.5807 10.2442Z"
                fill="black"
              />
            </svg>
            <div>
              <p className="text-[3vw] lg:text-[0.833vw] leading-[153.846%] tracking-[0.02rem]">
                PHONE
              </p>
              <p className="text-[#00AFF1] text-[3vw] lg:text-[0.833vw] leading-[153.846%] tracking-[0.02rem]">
                03 5432 1234
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              className="size-[7.5vw] lg:size-[2vw]"
            >
              <path
                d="M12.9445 2.30469V8.31931H10.5387V5.91346H3.32111V27.5661H5.72695V28.769C5.72695 29.7464 6.07781 30.5859 6.77951 31.2876C7.50628 32.0144 8.35835 32.3778 9.33573 32.3778C10.3131 32.3778 11.1526 32.0144 11.8544 31.2876C12.5811 30.5859 12.9445 29.7464 12.9445 28.769V27.5661H32.1913V8.31931H27.3796V2.30469H12.9445ZM15.3503 4.71054H24.9737V10.7252H15.3503V4.71054ZM5.72695 8.31931H8.1328V25.1602H5.72695V8.31931ZM10.5387 10.7252H12.9445V13.131H27.3796V10.7252H29.7854V25.1602H10.5387V10.7252ZM14.1474 15.5369V17.9427H16.5533V15.5369H14.1474ZM18.9591 15.5369V17.9427H21.365V15.5369H18.9591ZM23.7708 15.5369V17.9427H26.1767V15.5369H23.7708ZM14.1474 20.3486V22.7544H16.5533V20.3486H14.1474ZM18.9591 20.3486V22.7544H21.365V20.3486H18.9591ZM23.7708 20.3486V22.7544H26.1767V20.3486H23.7708ZM8.1328 27.5661H10.5387V28.769C10.5387 29.0948 10.4133 29.383 10.1627 29.6336C9.93719 29.8592 9.66152 29.9719 9.33573 29.9719C9.00994 29.9719 8.72174 29.8592 8.47113 29.6336C8.24558 29.383 8.1328 29.0948 8.1328 28.769V27.5661Z"
                fill="black"
              />
            </svg>
            <div>
              <p className="text-[3vw] lg:text-[0.833vw] leading-[153.846%] tracking-[0.02rem]">
                FAX
              </p>
              <p className="text-[#00AFF1] text-[3vw] lg:text-[0.833vw] leading-[153.846%] tracking-[0.02rem]">
                03 5432 1234
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              className="size-[7.5vw] lg:size-[2vw]"
            >
              <path
                d="M10.016 3.50781V5.9167L2.4339 10.8529V31.3087H32.7622V10.8529L25.1801 5.9167V3.50781H10.016ZM12.5433 6.03517H22.6527V15.7497L17.598 19.0274L12.5433 15.7497V6.03517ZM13.807 8.56252V11.0899H21.3891V8.56252H13.807ZM10.016 8.91793V14.0911L6.02748 11.5243L10.016 8.91793ZM25.1801 8.91793L29.1686 11.5243L25.1801 14.0911V8.91793ZM13.807 12.3536V14.8809H21.3891V12.3536H13.807ZM4.96126 13.8542L17.598 22.0286L30.2348 13.8542V28.7814H4.96126V13.8542Z"
                fill="black"
              />
            </svg>
            <div>
              <p className="text-[3vw] lg:text-[0.833vw] leading-[153.846%] tracking-[0.02rem]">
                EMAIL
              </p>
              <p className="text-[#00AFF1] text-[3vw] lg:text-[0.833vw] leading-[153.846%] tracking-[0.02rem]">
                hello@possesivepanda.com
              </p>
            </div>
          </div>
        </div>
      </div>
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
