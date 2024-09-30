import React from "react";
import Image from "next/image";
import bannerbg from "../../../public/assets/banner/bannerbg.png";

const NewBanner = ({ title, desciption }) => {
    return (
        <div className="relative h-[100vw] sm:h-[34.23vw] min-h-[34.323vw]">
            <Image
                src={bannerbg}
                alt="bannerbg"
                className="sm:block hidden w-screen relative object-cover "
            />
            <div className="absolute top-[60vw] sm:top-[21vw] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center justify-center">
                <div className="flex flex-col gap-[1.042vw] ">
                    <p className="text-white text-[7.529vw] sm:text-[2.587vw] font-bold sm:font-medium leading-[130%] w-[81.882vw] sm:w-[38.542vw] ">
                        {title}
                    </p>
                    <p className="text-white text-[3.765vw] sm:text-[1.104vw] font-normal leading-[160%] w-[68vw] sm:w-[35vw] mx-auto">
                        {desciption}
                    </p>
                </div>
                <a href="/contact">
                    <button className="py-[2.353vw] sm:py-[0.729vw] px-[28vw] sm:px-[1.354vw] bg-[#05B7DF] rounded-[1.882vw] sm:rounded-[3.906vw] text-white text-[3.765vw] sm:text-[1.25vw] font-semibold mt-[2.24vw]">
                        Get In Touch
                    </button>
                </a>


                <p className="text-white text-[3.765vw] sm:text-[0.835vw] font-normal leading-[160%] mt-[4vw] sm:mt-[1.042vw] ">
                    Feel Free to Connect with Us
                </p>
            </div>
        </div>
    );
};

export default NewBanner;
