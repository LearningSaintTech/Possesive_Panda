import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const NewContact = () => {
    // Common gradient border style for both sections
    const gradientBorderStyle = {
        padding: '0.104vw',
        borderRadius: '0.521vw',
        background: 'linear-gradient(to right, #d7d7d7, rgba(217, 217, 217, 0))',
        overflow: 'hidden',
        flex: 1,
        minHeight: '100%',
    };

    return (
        <div className='bg-[#00111A] flex flex-col-reverse sm:flex-row  gap-[4.323vw] px-[5.208vw] min-h-full'>
            {/* Left Section with consistent gradient border */}
            <div className="flex-1" style={gradientBorderStyle}>
                <div
                    className='bg-[#131D22] p-[2vw] flex flex-col sm:gap-[1.667vw] gap-[4vw] rounded-[0.521vw] overflow-hidden shadow border border-transparent min-h-full'
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 sm:gap-y-[1vw]  gap-y-[4vw] gap-x-[2.222vw]'>
                        {/* Form Inputs */}
                        <div className='flex flex-col gap-[0.533vw]'>
                            <p className='text-white sm:font-semibold font-normal text-[4.706vw] sm:text-[1.042vw]'>Name</p>
                            <input
                                className='text-white sm:pl-[1.25vw] pl-[3vw] pr-[7vw] py-[0.9vw] border rounded-lg border-solid border-[rgba(216,216,216,0.60)] bg-[#131D22] lg:placeholder:text-[0.833vw] md:placeholder:text-[1.6vw] sm:placeholder:text-[3.765vw]  placeholder:opacity-[0.5]'
                                placeholder='Full Name'
                                type="text"
                            />
                        </div>
                        <div className='flex flex-col gap-[0.533vw]'>
                            <p className='text-white sm:font-semibold font-normal text-[4.706vw] sm:text-[1.042vw]'>Email</p>
                            <input
                                className='text-white sm:pl-[1.25vw] pl-[3vw] pr-[7vw] py-[0.9vw]  border rounded-lg border-solid border-[rgba(216,216,216,0.60)] bg-[#131D22] lg:placeholder:text-[0.833vw] md:placeholder:text-[1.6vw] sm:placeholder:text-[3.765vw] placeholder:opacity-[0.5]'
                                placeholder='YourEmail'
                                type="text"
                            />
                        </div>
                        <div className='flex flex-col gap-[0.533vw]'>
                            <p className='text-white sm:font-semibold font-normal text-[4.706vw] sm:text-[1.042vw]'>Phone</p>
                            <input
                                className='text-white sm:pl-[1.25vw] pl-[3vw] pr-[7vw] py-[0.9vw]  border rounded-lg border-solid border-[rgba(216,216,216,0.60)] bg-[#131D22] lg:placeholder:text-[0.833vw] md:placeholder:text-[1.6vw] sm:placeholder:text-[3.765vw] placeholder:opacity-[0.5]'
                                placeholder='+91'
                                type="text"
                            />
                        </div>
                        <div className='flex flex-col gap-[0.533vw]'>
                            <p className='text-white sm:font-semibold font-normal text-[4.706vw] sm:text-[1.042vw]'>Company</p>
                            <input
                                className='text-white sm:pl-[1.25vw] pl-[3vw] pr-[7vw] py-[0.9vw]  border rounded-lg border-solid border-[rgba(216,216,216,0.60)] bg-[#131D22] lg:placeholder:text-[0.833vw] md:placeholder:text-[1.6vw] sm:placeholder:text-[3.765vw] placeholder:opacity-[0.5]'
                                placeholder='Pvt. Ltd.'
                                type="text"
                            />
                        </div>
                    </div>

                    {/* Message Input */}
                    <div className='flex flex-col gap-[0.833vw]'>
                        <p className='text-white sm:font-semibold font-normal text-[4.706vw] sm:text-[1.042vw]'>Message</p>
                        <textarea
                            className='text-white px-[1.25vw] sm:pt-[1.25vw] sm:pb-[0vw] sm:pl-[1vw] pl-[3vw] pt-[2.5vw] pb-[2.5vw] border rounded-lg border-solid border-[rgba(216,216,216,0.60)] bg-[#131D22] lg:placeholder:text-[0.833vw] md:placeholder:text-[1.6vw] sm:placeholder:text-[3.765vw] placeholder:opacity-[0.5] resize-none'
                            placeholder='Type your message here...'
                            rows={5} // This controls the height of the textarea, adjust as needed
                        />
                    </div>
                    {/* Submit Button */}
                    <div className='bg-[#05B7DF] w-[85.882vw] sm:w-[14.167vw] sm:pl-[1.094vw] pl-[20.706vw] sm:py-[0.729vw] py-[4vw] sm:mb-[0vw] mb-[2vw] rounded-[3.125vw] flex  gap-[0.617vw]  font-semibold'>
                        <button className='text-white flex flex-row  font-semibold sm:text-[1.042vw] text-[3.765vw] gap-[0.617vw] justify-center text-center items-center'><span>Consult With Expert</span>


                            <FaArrowRight className='sm:block hidden text-white' />
                        </button>

                    </div>
                </div>
            </div>

            {/* Right Section with consistent gradient border */}
            <div className="flex-1" style={{ ...gradientBorderStyle, background: 'linear-gradient(to left, #d7d7d7, rgba(217, 217, 217, 0))' }}>
                <div className="flex text-white bg-[#00111A] flex-col py-[1.527vw] rounded-[0.521vw] overflow-hidden shadow border border-transparent min-h-full">
                    <p className="sm:text-[2.5vw] text-[7.529vw]  w-[85.882vw] sm:w-[33.402vw]">Get a free Quotation Today!</p>
                    <p className='sm:text-[1.25vw] text-[3.765vw] w-[85.882vw] sm:w-[30.833vw] sm:mt-[0.5vw] mt-[2.529vw] mr-[10.156vw]'>Fill out this form and Possesive Panda’s team will contact you within 24 hours.</p>

                    {/* Contact Information */}
                    <div className='my-[1.042vw] mb-[1.24vw] flex sm:mt-[1vw] mt-[4.529vw] gap-[1.111vw]'>
                        <MdOutlineEmail className='sm:h-[3.333vw] sm:w-[3.333vw] w-[11.294vw] h-[11.294vw]' />
                        <div className='flex flex-col'>
                            <p className='text-[3.765vw] sm:text-[3.765vw] md:text-[1.5vw] lg:text-[1.042vw]'>Business:</p>
                            <Link href="mailto:hello@possesivepanda.com">
                                <div className='flex  opacity-[0.7] items-center  sm:gap-[1vw] gap-[4vw]sm:text-[3.765vw] md:text-[1.5vw] lg:text-[1.042vw]'>
                                    <p>hello@possesivepanda.com</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"
                                        className='lg:h-[1.042vw] lg:w-[1.094vw]  md:h-[2vw] md:w-[2vw]'
                                    >
                                        <path d="M10.1406 3.13477L17.3329 10.0001L10.1406 16.8655" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.3319 10L3.33203 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='bg-[#D8D8D899] w-[85.882vw] sm:mt-[0vw] mt-[3vw] sm:w-[23.611vw] h-[0.1vw]'></div>

                    <div className='flex   sm:mt-[1.24vw] mt-[3vw] gap-[1.111vw]'>
                        <FaHandshake className='sm:h-[3.333vw] sm:w-[3.333vw] w-[11.294vw] h-[11.294vw] ' />
                        <div className='flex flex-col'>
                            <p className='sm:text-[3.765vw] md:text-[1.5vw] lg:text-[1.042vw] '>Contact:</p>
                            <Link href="tel:+14158003326">
                                <div className='flex  opacity-[0.7] items-center sm:text-[3.765vw] md:text-[1.5vw] lg:text-[1.042vw] sm:gap-[1vw] gap-[4vw]  '>
                                    <p className=''>+1 (415) 800 - 3326</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"
                                        className='lg:h-[1.042vw] lg:w-[1.094vw]  md:h-[2vw] md:w-[2vw]'
                                    >
                                        <path d="M10.1406 3.13477L17.3329 10.0001L10.1406 16.8655" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.3319 10L3.33203 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='bg-[#D8D8D899] w-[85.882vw] sm:mt-[1.24vw] mt-[3vw] sm:w-[23.611vw] h-[0.1vw]'></div>
                    <div className='flex sm:mt-[1.24vw] mt-[3vw] gap-[1.111vw]'>
                        <CiHeadphones className='sm:h-[3.333vw] sm:w-[3.333vw] w-[11.294vw] h-[11.294vw]' />
                        <div className='flex flex-col'>
                            <p className='sm:text-[3.765vw] md:text-[1.5vw] lg:text-[1.042vw]'>Support</p>
                            <Link href="mailto:support@possesivepanda.com">
                                <div className='flex opacity-[0.7] items-center sm:text-[3.765vw] md:text-[1.5vw] lg:text-[1.042vw] sm:gap-[1vw] gap-[4vw] '>
                                    <p>support@possesivepanda.com</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"
                                        className='lg:h-[1.042vw] lg:w-[1.094vw]  md:h-[2vw] md:w-[2vw]   '
                                    >
                                        <path d="M10.1406 3.13477L17.3329 10.0001L10.1406 16.8655" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.3319 10L3.33203 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewContact;
