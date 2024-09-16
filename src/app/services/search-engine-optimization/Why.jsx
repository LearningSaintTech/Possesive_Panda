import React from 'react'
import Image from 'next/image'
import thumbnail from '../../../../public/assets/services/e-commerce/thumbnail.png'


const titleData = [
    { title: "A Committed Team of SEO Experts" },
    { title: "Outstanding white-hat connections" },
    { title: "Quality Control and Data security" },
    { title: "24/7 Assistance" },
    { title: "Frequent Updates on the Project" },
    { title: "Dynamic Pricing" },
    { title: "A Complimentary Store Evaluation" },
    { title: "Prompt completion of the project" },
];

const Why = () => {
    return (
        <div className='relative flex flex-col bg-[#00111A] gap-[3.646vw] sm:px-[5.208vw] sm:py-[6.25vw] px-[7.059vw] py-[14.118vw] '>
            <h2 className='text-white sm:text-[2.5vw] text-[7.529vw] font-medium tracking-[0.025vw] sm:w-[40.885vw] leading-normal text-center sm:text-left '>Why Choose Possesive Panda as Your SEO Service Partner?</h2>
            <div className='flex  '>
                <div className='flex flex-col gap-[2.824vw] sm:gap-[1.042vw]  '>
                    <p className='text-white text-[3.765vw] sm:text-[1.25vw] font-normal text-center sm:text-justify'>Possesive Panda is not your average SEO Services and Solution Provider.</p>
                    <p className='text-white text-[3.765vw] sm:text-[1.25vw] font-light w-[55.729vw] '>At Possesive Panda, we're dedicated to creating enduring partnerships with our clients by using our extensive network of SEO specialists and industry expertise. We collaborate closely with you to create a tailored plan that will yield results over time since we understand that SEO is a marathon, not a sprint.</p>
                </div>
                <Image
                    src={thumbnail}
                    alt="thumbnail"
                    className="absolute w-[22vw] top-20 right-[10.417vw]  hidden sm:block "
                />
            </div>
            <div className='flex flex-col gap-[7.529vw] sm:gap-[3.646vw] bg-[#00111A] '>
                <h2 className='text-white text-[1.667vw] font-normal w-[57.396vw] text-left '>
                    When you work with us to increase the growth and organic rankings of your website, we make sure you receive:
                </h2>
                <div className='grid sm:grid-cols-2 sm:gap-x-[4.479vw] gap-y-[2.353vw] sm:gap-y-[1.042vw]  '>
                    {titleData.map((item, index) => (
                        <div
                            key={index}
                            className='flex px-[3vw] sm:px-[1.667vw] py-[3vw] sm:py-[1.146vw] rounded-[1.176vw] sm:rounded-[0.625vw] border-[0.104vw] border-white sm:border sm:cursor-pointer hover:bg-[rgba(217,217,217,0.2)] text-center items-center justify-center '
                        >
                            <p className='text-white text-[2.824vw] sm:text-[1.25vw] font-normal capitalize'>{item.title}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>)
}

export default Why