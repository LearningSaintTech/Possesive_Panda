"use client"
import React, { useState } from 'react';
import HandlePage from "../(Components)/(Input Form)/HandlePage";

const ThankYou = () => {
    const [open, setOpen] = useState(false);

    const handleGetQuote = () => {
        setOpen(true);
    };

    return (
        <div className='sm:px-[5.208vw] px-[7.059vw]'>
            <div className="sm:w-[89.583vw] w-[85.882vw] relative bg-white/10 rounded-[1.563vw] flex justify-center items-center flex-col sm:py-[4.531vw] py-[7.529vw]">
                <h6 className="sm:w-[42.656vw] w-[74.588vw] text-center text-white sm:text-[2.5vw] text-[7.529vw] font-semibold sm:mb-[0.833vw] mb-[1.882vw]">Thank you for your Interest in Possesive panda</h6>
                <p className="sm:w-[48.698vw] w-[73.647vw] text-center text-[#e6e6e6] sm:text-[1.25vw] text-[3.765vw] font-normal sm:mb-[1.25vw] mb-[5.647vw]">
                    We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.
                </p>
                <button
                    onClick={handleGetQuote}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-normal py-2 px-4 rounded transition duration-300"
                >
                    Start Project
                </button>
            </div>
            {open && <HandlePage setOpen={setOpen} />}
        </div>
    );
};

export default ThankYou;