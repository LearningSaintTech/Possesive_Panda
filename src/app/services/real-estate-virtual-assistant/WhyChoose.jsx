"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const WhyChoose = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    {
      number: "01",
      title: "Superior Knowledge",
      description:
        "The highly qualified virtual assistants at Possesive Panda provide customized support by utilizing a variety of industry skills to improve and efficiently streamline your business processes.",
    },
    {
      number: "02",
      title: "Maximum Adaptability",
      description:
        "Our services provide flexibility for effective operations management and are entirely configurable to match your unique demands. Possesive Panda can work part-time or full-time, according to your changing needs.",
    },
    {
      number: "03",
      title: "Economical Remedies",
      description:
        "Reduce overhead expenses with our affordable prices. Employing virtual assistants from Possesive Panda is less expensive than hiring full-time employees, freeing up funds for important business initiatives.",
    },
    {
      number: "04",
      title: "Dependable Assistance",
      description:
        "Take advantage of our committed team's round-the-clock support to receive unbroken help whenever you need it. No matter the time of day or night, our dependability ensures that your business activities operate without a hitch.",
    },
    {
      number: "05",
      title: "Success Track Record",
      description:
        "Possesive Panda has a track record of success in delivering outcomes for numerous enterprises. Our virtual assistants are dedicated to providing excellent customer service and achieving goals in an efficient manner.",
    },
    {
      number: "06",
      title: "Entire Service Portfolio",
      description:
        "From administrative work to specialized services, Possesive Panda offers full virtual assistant services to make sure all of your business needs are conveniently and reliably addressed.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, []);

  // Handle viewport size change
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425); // Set as mobile view if window width is less than or equal to 768px
    };

    handleResize(); // Run the check once on component mount
    window.addEventListener("resize", handleResize); // Attach resize event listener

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  // Render Mobile or Desktop/Tablet view based on screen width
  return (
    <>
      {isMobile ? (
        <div className="bg-[#00111A] px-[7.059vw] pt-[10.412vw] pb-[7.059vw] relative">
          {/* TOP BOX */}
          <div className="w-[85.882vw] bg-[#131d22] relative py-[8.412vw] px-[5.647vw] rounded-[2.353vw] ">
            <h2 className="text-white text-[5.647vw] font-medium mb-[4.706vw]">
              Why choose Possesive Panda for Hiring Virtual Assistants?
            </h2>
            <p className="text-white text-[3.765vw] font-normal">
              Beside offering 360 Virtual Assistant service, Possesive Panda
              focuses on the most important aspect for providing services and
              solutions, i.e., Client Satisfaction. You can rely on Possesive
              Panda for delegating your tasks, processes, and workload so that
              you can prosper in your business&apos;s sustainability and growth.
            </p>
          </div>

          {/* BOTTOM BOX */}
          <div className="relative bg-gradient-to-b from-[rgba(255,255,255,0.65)] to-[rgba(153,153,153,0.40)] p-[5.647vw] rounded-tl-[7.059vw] rounded-tr-[7.059vw] mt-[-7.059vw] ">
            <div className="flex items-center mb-[3.765vw]">
              <span className="text-[#00aff1] text-[14.118vw] font-semibold">
                {slides[currentSlide].number}
              </span>
              <h3 className="text-white text-[5.647vw] font-medium ml-[3.765vw]">
                {slides[currentSlide].title}
              </h3>
            </div>
            <div className="h-[0.235vw] w-full bg-black mb-[3.765vw]" />
            <p className="text-white text-[3.765vw] font-normal mb-[5.647vw]">
              {slides[currentSlide].description}
            </p>
            <div className="flex justify-between">
              <button
                onClick={prevSlide}
                className="p-[1.882vw] bg-[#212121] text-white rounded-full"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-[1.882vw] bg-[#212121] text-white rounded-full"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#00111A] flex px-[5.208vw] py-[5.508vw] relative">
          {/* Left Side Box */}
          <div className="w-[56.771vw] bg-[#131d22] relative py-[3.385vw] pl-[2.604vw] pr-[11.198vw]">
            <h2 className="text-white text-[2.5vw] font-medium mb-[1.042vw]">
              Why choose Possesive Panda for Hiring Virtual Assistants?
            </h2>
            <p className="text-white text-[1.25vw] font-normal">
              Beside offering 360 Virtual Assistant service, Possesive Panda
              focuses on the most important aspect for providing services and
              solutions, i.e., Client Satisfaction. You can rely on Possesive
              Panda for delegating your tasks, processes, and workload so that
              you can prosper in your business&apos;s sustainability and growth.
            </p>
          </div>

          {/* Right Side Box */}
          <div className="flex flex-col w-[39.583vw] h-[22.083vw] absolute bottom-0 right-[5.208vw] pt-[2.813vw] pb-[4.635vw] pl-[2.604vw] pr-[2.5vw] bg-gradient-to-b from-[rgba(255,255,255,0.65)] to-[rgba(153,153,153,0.40)]">
            <div className="flex gap-[0.729vw] items-center ">
              <span className="text-[#00aff1] text-[7.813vw] leading-none font-semibold">
                {slides[currentSlide].number}
              </span>
              <div className="flex flex-col">
                <h3 className="text-white text-[1.667vw] font-medium">
                  {slides[currentSlide].title}
                </h3>
                <div className="h-[0.052vw] w-[22vw] bg-black mt-[1vw]" />{" "}
                {/* Line */}
              </div>
            </div>

            <p className="text-white text-[1.25vw] font-normal">
              {slides[currentSlide].description}
            </p>
            <div className="absolute bottom-[0.833vw] right-[0.833vw] flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-[0.586vw] bg-[#212121] rounded-full"
              >
                <FaChevronLeft className="text-white w-[1vw] h-[1vw]" />
              </button>
              <button
                onClick={nextSlide}
                className="p-[0.586vw] bg-[#212121] rounded-full"
              >
                <FaChevronRight className="text-white w-[1vw] h-[1vw]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhyChoose;
