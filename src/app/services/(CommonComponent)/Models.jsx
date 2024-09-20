import React from 'react';
import { FaChevronRight } from "react-icons/fa6";

const modeldata = [
    {
        title: 'Project Based',
        paragraph: 'Have a one-time project, such as a social media account audit, ad budget recommendation, social media account reporting, creative design, or just posting on social media? We guarantee nothing but perfection to help you accomplish your ROI goals.',
    },
    {
        title: 'Recurring Projects',
        paragraph: 'Looking for a partner to assist you in reaching your social media objectives? Our social media marketing service can handle everything from publishing to managing and reporting. We also handle your paid marketing, from ad production to budgeting, optimization, and month-to-month reporting.',
    },
    {
        title: 'Dedicated Resources and Teams',
        paragraph: 'Want a trained resource to serve as an extension of your in-house social media marketing team? We have skilled, experienced social media experts who will work just for you, with the goal of establishing your brand on the digital platform.',
    },
];

const Models = () => {
    return (
        <div className='flex flex-col gap-[4.167vw] px-[5.208vw]'>
            <h2 className='text-white text-[2.5vw] leading-[84%] font-semibold text-center'>
                Our Engagement Models
            </h2>
            <div className='flex flex-col gap-[1.667vw]'>
                {modeldata.map((model, index) => (
                    <div
                        key={index}
                        className='group pt-[2.344vw] pb-[1.5vw] pl-[4.115vw] pr-[1.25vw]  bg-[#131D22] rounded-[1.042vw] transition-all duration-300 hover:bg-[#D6D6D6]'
                    >
                        <div className='flex flex-col gap-[0.5vw]'>
                            <h2 className='text-white text-[2.5vw] font-medium leading-[84%] transition-all duration-300 group-hover:text-[#131D22]'>
                                {model.title}
                            </h2>
                            <div className='flex justify-between'>
                                <p className='text-white text-[1.25vw] font-normal w-[64.063vw] transition-all duration-300 group-hover:text-[#131D22]'>
                                    {model.paragraph}
                                </p>
                                <button
                                    className='w-[3.802vw] h-[4.01vw] flex items-center justify-center bg-[#2B3439] text-white rounded-[0.8vw] mt-6 transition-all duration-300 group-hover:bg-[#C0C2C3] group-hover:text-black'
                                >
                                    <FaChevronRight className='size-5 cursor-pointer' />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Models;
