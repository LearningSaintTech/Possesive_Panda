"use client";
import React, { useRef, useState } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import { FormContext } from "./FormContext";
import Image from "next/image";
import back from "../../../assets/home/back-arrow.png";

const HandlePage = ({ setOpen }) => {
  const pageRef = useRef(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [form, setForm] = useState({
    site_id:"3",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    service: "",
    budget: 0,
    file: Object,
    message: "",
  });
  const [step, setStep] = useState(1);
  const [animationClass, setAnimationClass] = useState(
    "animate-swipeInFromRight"
  );

  const handleNextStep = () => {
    setAnimationClass("animate-swipeInFromRight");
    setStep((step) => step + 1);
  };

  // const handleFinish = () => {
  //   // DO nothing
  //   console.log(form);
  //   setShowSnackbar(true);
  //   const hide = async () => {
  //     await new Promise((res) => setTimeout(res, 1000));
  //     setShowSnackbar(false);
  //     pageRef.current.classList.add("animate-swipeOut");
  //     await new Promise((res) => setTimeout(res, 600));
  //     setOpen(false);
  //   };
  //   hide();
  // };

  const handleFinish = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Replace 'zxUcPukvuXHaCM6E7eqfLwGUncdJD6lF1qGcjEAifQjy1iAUvVw0Qu2hJLQj' with your actual API token
        'Authorization': 'Bearer zxUcPukvuXHaCM6E7eqfLwGUncdJD6lF1qGcjEAifQjy1iAUvVw0Qu2hJLQj'
      },
      body: JSON.stringify(form)
    };
  
    // Perform the POST request
    fetch('https://crm.learningsaint.com/api/addItLeads?api_token=zxUcPukvuXHaCM6E7eqfLwGUncdJD6lF1qGcjEAifQjy1iAUvVw0Qu2hJLQj', options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        // Show success message
        setShowSnackbar(true); // Assuming this controls the UI for showing success
        setResponseMessage('Lead added successfully.'); // Set your success message here
        const hide = async () => {
          await new Promise((res) => setTimeout(res, 1000));
          setShowSnackbar(false);
          pageRef.current.classList.add("animate-swipeOut");
          await new Promise((res) => setTimeout(res, 600));
          setOpen(false);
        };
        hide();
      })
      .catch(error => {
        console.error('Error:', error);
        // Show error message
        setShowSnackbar(true); // Assuming this controls the UI for showing errors
        setResponseMessage('Failed to add lead. Please try again.'); // Set your error message here
        // Handle error scenario, e.g., show error message to user
      });
  };
  

  const handlePreviousStep = () => {
    setAnimationClass("animate-swipeInFromLeft");
    setStep((step) => step - 1);
  };
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-[#f3eeee] bg-opacity-50 ">
      <div
        ref={pageRef}
        className="bg-[#F9F9F9] w-[79.5vw] h-[42.7vw] rounded-[0.91vw] relative animate-swipeIn overflow-x-hidden"
      >
        {step > 1 && (
          <Image
            src={back}
            alt="back"
            className="z-[999] cursor-pointer hover:opacity-40 opacity-70 size-[2.396vw] absolute top-[2vw] left-[2vw]"
            onClick={handlePreviousStep}
          />
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="47"
          viewBox="0 0 46 47"
          fill="none"
          className="z-[999] cursor-pointer hover:opacity-40 opacity-70 size-[2.396vw] absolute top-[2vw] right-[2vw]"
          onClick={async () => {
            pageRef.current.classList.add("animate-swipeOut");
            await new Promise((res) => setTimeout(res, 600));
            setOpen(false);
          }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.4011 8.90295C39.5434 8.7606 39.6563 8.59162 39.7333 8.40564C39.8104 8.21966 39.85 8.02033 39.85 7.81903C39.85 7.61772 39.8104 7.41839 39.7333 7.23241C39.6563 7.04643 39.5434 6.87745 39.4011 6.73511C39.2587 6.59276 39.0897 6.47985 38.9038 6.40282C38.7178 6.32578 38.5184 6.28613 38.3171 6.28613C38.1158 6.28613 37.9165 6.32578 37.7305 6.40282C37.5445 6.47985 37.3756 6.59276 37.2332 6.73511L23.0075 20.9639L8.78185 6.73511C8.63951 6.59276 8.47053 6.47985 8.28455 6.40282C8.09857 6.32578 7.89924 6.28613 7.69793 6.28613C7.49663 6.28613 7.2973 6.32578 7.11132 6.40282C6.92534 6.47985 6.75636 6.59276 6.61401 6.73511C6.47167 6.87745 6.35876 7.04643 6.28172 7.23241C6.20469 7.41839 6.16504 7.61772 6.16504 7.81903C6.16504 8.02033 6.20469 8.21966 6.28172 8.40564C6.35876 8.59162 6.47167 8.7606 6.61401 8.90295L20.8428 23.1286L6.61401 37.3543C6.32654 37.6418 6.16504 38.0317 6.16504 38.4382C6.16504 38.8448 6.32654 39.2347 6.61401 39.5222C6.90149 39.8096 7.29138 39.9711 7.69793 39.9711C8.10448 39.9711 8.49438 39.8096 8.78185 39.5222L23.0075 25.2934L37.2332 39.5222C37.5207 39.8096 37.9106 39.9711 38.3171 39.9711C38.7237 39.9711 39.1136 39.8096 39.4011 39.5222C39.6885 39.2347 39.85 38.8448 39.85 38.4382C39.85 38.0317 39.6885 37.6418 39.4011 37.3543L25.1723 23.1286L39.4011 8.90295Z"
            fill="black"
          />
        </svg>
        <FormContext.Provider value={{ form, setForm }}>
          <FirstPage
            onNext={handleNextStep}
            className={`${step === 1 ? `${animationClass}` : "hidden"}`}
          />
          <SecondPage
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
            className={`${step === 2 ? `${animationClass}` : "hidden"}`}
          />
          <ThirdPage
            onNext={handleNextStep}
            className={`${step === 3 ? `${animationClass}` : "hidden"}`}
          />
          <FourthPage
            onNext={handleNextStep}
            className={`${step === 4 ? `${animationClass}` : "hidden"}`}
          />
          <FifthPage
            onFinish={handleFinish}
            className={`${step === 5 ? `${animationClass}` : "hidden"}`}
          />
        </FormContext.Provider>
        {showSnackbar && (
          <div className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 bg-green-50 fixed  w-full max-w-xs  space-x-4 bg-green divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-10 bottom-5">
            <div className="text-sm font-normal">Thank You for Reaching us</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HandlePage;
