


"use client";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// const testimonials = [
//     {
//         name: "Brian Clark",
//         role: "VP of Marketing",
//         text: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.",
//     },
//     {
//         name: "Sarah Miller",
//         role: "CEO of Startup",
//         text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent ultricies scelerisque auctor.",
//     },
//     {
//         name: "John Doe",
//         role: "Product Manager",
//         text: "We have seen a remarkable improvement in our performance since we started working with Possessive Panda.",
//     },
// ];

const Clients = ({ testimonialsData, headingdata }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
                setIsAnimating(false);
            }, 500); // Animation duration should match CSS transition
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide(
                    (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
                );
                setIsAnimating(false);
            }, 500);
        }
    };
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3500); // 2000ms = 2 seconds

        return () => clearInterval(interval); // Cleanup the interval when the component unmounts
    }, []);
    return (
        <div className="relative flex sm:px-[21.25vw] px-[7.059vw] flex-col bg-[#00111A] items-center justify-center ">
            <h4 className="text-white sm:text-[3.333vw] text-[7.529vw] items-center justify-center text-center sm:w-[47.188vw]  w-[85.882vw] ">
                {headingdata.heading}            </h4>
            <p className="text-white sm:text-[1.25vw] text-[3.765vw] items-center justify-center text-center sm:w-[38.906vw] w-[85.882vw] mb-[3.2vw]">
                {headingdata.description}
            </p>
            <button
                onClick={prevSlide}
                className="absolute sm:block hidden sm:left-[12.529vw] left-[5vw] sm:top-[62%] top-[90%] bg-white sm:rounded-[0.521vw] rounded-[4vw]  text-[#6D758F] sm:p-[0.8vw] p-[4vw] hover:bg-[#00AFF1]"
            >
                <FaArrowLeft />
            </button>
            <div className="relative flex items-center justify-center w-full overflow-hidden">
                {/* Arrow Buttons */}


                <div className="  overflow-hidden relative">
                    <div
                        className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? "transform" : ""
                            }`}
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <div
                                key={index}
                                className="min-w-full flex flex-col items-center justify-center bg-[#131D22] sm:pt-[1.3vw] pt-[8vw] sm:pb-[0.7vw] pb-[10vw] rounded-lg text-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="39" viewBox="0 0 45 39" fill="none"

                                    className="sm:w-[2.344vw] sm:h-[2.031vw] w-[10.585vw] h-[8.797vw]"
                                >
                                    <path d="M35.2415 19.7181C38.0109 19.9312 40.2477 20.8365 41.9519 22.4343C43.6562 24.032 44.5083 26.1623 44.5083 28.8252C44.5083 31.8076 43.6029 34.0977 41.7922 35.6955C39.9814 37.2932 37.7446 38.0921 35.0817 38.0921C31.4601 37.879 28.8505 36.5476 27.2528 34.0977C25.655 31.6479 24.8562 28.8785 24.8562 25.7895C24.8562 22.8071 25.2822 20.0377 26.1344 17.4813C27.093 14.9249 28.3179 12.5283 29.8092 10.2915C31.3004 8.05466 33.0046 6.08412 34.9219 4.37987C36.9457 2.67562 39.0228 1.45069 41.1531 0.705078L44.9876 5.97761C42.8573 7.46883 40.8335 9.49263 38.9162 12.049C37.1055 14.6054 35.8805 17.1617 35.2415 19.7181ZM10.3853 19.7181C13.1547 19.9312 15.3915 20.8365 17.0958 22.4343C18.8 24.032 19.6521 26.1623 19.6521 28.8252C19.6521 31.8076 18.6935 34.0977 16.7762 35.6955C14.9654 37.2932 12.8351 38.0921 10.3853 38.0921C6.65722 37.9855 3.99433 36.7074 2.3966 34.2575C0.798867 31.7011 0 28.8785 0 25.7895C0 22.8071 0.426062 20.0377 1.27819 17.4813C2.23683 14.9249 3.46176 12.5283 4.95297 10.2915C6.44419 8.05466 8.14844 6.08412 10.0657 4.37987C12.0895 2.67562 14.1666 1.45069 16.2969 0.705078L20.1314 5.97761C18.0011 7.46883 15.9773 9.49263 14.0601 12.049C12.2493 14.6054 11.0244 17.1617 10.3853 19.7181Z" fill="#B4B9C9" />
                                </svg>
                                <p className="text-white sm:text-[1.392vw] text-[3.765vw] sm:mt-[1.3vw] mt-[10.261vw] sm:w-[36.56vw] w-[85.882vw] ">
                                    {testimonial.text}
                                </p>
                                <div className="flex sm:mb-[1vw] mb-[0vw] flex-row sm:gap-[0.818vw] gap-[2vw] justify-center items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none"
                                        className=" rounded-full sm:mt-[1.5vw] mt-[8vw] sm:w-[2.813vw] sm:h-[2.813vw] w-[12.567vw] h-[12.567vw]  "
                                    >
                                        <rect width="53.41" height="53.41" transform="translate(0.296875 0.294922)" fill="#F1F3F7" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0049 18.4547C25.1413 18.4547 23.6305 19.9655 23.6305 21.8291C23.6305 23.6928 25.1413 25.2035 27.0049 25.2035C28.8686 25.2035 30.3794 23.6928 30.3794 21.8291C30.3794 19.9655 28.8686 18.4547 27.0049 18.4547ZM21.9766 21.8291C21.9766 19.052 24.2278 16.8008 27.0049 16.8008C29.782 16.8008 32.0333 19.052 32.0333 21.8291C32.0333 24.6062 29.782 26.8575 27.0049 26.8575C24.2278 26.8575 21.9766 24.6062 21.9766 21.8291Z" fill="#6D758F" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6932 30.2608C22.2044 29.3587 24.2491 28.7578 27.0012 28.7578C29.7534 28.7578 31.798 29.3587 33.3093 30.2608C34.8211 31.1633 35.7508 32.3384 36.3173 33.4108L36.3173 33.4109C36.8242 34.3707 36.6583 35.3665 36.083 36.089C35.5296 36.7838 34.6289 37.1986 33.6621 37.1986H20.3404C19.3735 37.1986 18.4728 36.7838 17.9194 36.089C17.3441 35.3665 17.1783 34.3706 17.6852 33.4108C18.2516 32.3384 19.1813 31.1633 20.6932 30.2608ZM21.5409 31.6809C20.3286 32.4046 19.5954 33.3356 19.1477 34.1832L19.1477 34.1832C18.9653 34.5287 19.0233 34.8201 19.2132 35.0586C19.4251 35.3247 19.8311 35.5447 20.3404 35.5447H33.6621C34.1713 35.5447 34.5773 35.3247 34.7892 35.0586C34.9791 34.8201 35.0372 34.5287 34.8548 34.1832C34.4071 33.3356 33.6738 32.4046 32.4615 31.6809C31.2486 30.9569 29.5079 30.4117 27.0012 30.4117C24.4945 30.4117 22.7538 30.9569 21.5409 31.6809Z" fill="#6D758F" />
                                    </svg>
                                    <div className="text-start">
                                        <h5 className="text-[#00AFF1] sm:mt-[1.396vw] mt-[8.706vw] sm:text-[1.25vw] text-[3.765vw] ">{testimonial.name}</h5>
                                        <p className="text-gray-400 mt-[0.005vw] sm:text-[0.833vw] text-[3.765vw]">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
            <button
                onClick={prevSlide}
                className="absolute sm:left-[12.529vw] left-[35%] sm:top-[62%] top-[95%] bg-white sm:rounded-[0.521vw] rounded-[3vw]  text-[#6D758F] sm:p-[0.8vw] p-[3.5vw] hover:bg-[#00AFF1]"
            >
                <FaArrowLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute sm:right-[12.529vw] right-[35%] sm:top-[62%] top-[95%] bg-white sm:rounded-[0.521vw] rounded-[3vw]  text-[#6D758F] sm:p-[0.8vw] p-[3.5vw] hover:bg-[#00AFF1] "
            >
                <FaArrowRight className="" />
            </button>
        </div>
    );
};

export default Clients;
