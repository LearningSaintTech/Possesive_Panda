"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import image1 from "../../../assets/blogsDetails/Rectangle_589.png";
import image2 from "../../../assets/blogsDetails/Rectangle_591.png";
import image3 from "../../../assets/blogsDetails/Ellipse_19.png";
import image4 from "../../../assets/blogsDetails/Rectangle_580.png";
import image5 from "../../../assets/blogsDetails/Rectangle_568.png";
import image6 from "../../../assets/blogsDetails/Ellipse_15.svg";




const Page = () => {

    return (
        <div className='lg:mt-36 flex flex-col  lg:flex-row lg:gap-[5.625vw] md:gap-[5.625vw] max-[425px]:p-[10px] lg:ml-[5.208vw]'>
            <div className='flex flex-col     lg:w-[57.813vw] bg-neutral-50 '>
                <div className='flex flex-col m-[2.65vw] lg:w-[52.5vw]'>
                    <div className=''>
                        <Image
                            src={image1}
                            alt="shadow"
                            className='w-full'
                        />
                        <div className='flex flex-col lg:flex-row justify-between mt-8 '>

                            <div className='flex items-center lg:gap-[0.781vw] max-[425px]:gap-[10px] '>
                                <Image
                                    src={image6}
                                    alt="shadow"
                                    className=''
                                />
                                <p className='text-neutral-800 text-xl font-medium  tracking-tight'>John Carry</p>
                            </div>
                            <div className='flex items-center max-[425px]:gap-[10px] max-[425px]:mt-[10px] gap-[0.208vw]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.5 4H16.5V2.5C16.5 2.36739 16.4473 2.24021 16.3536 2.14645C16.2598 2.05268 16.1326 2 16 2C15.8674 2 15.7402 2.05268 15.6464 2.14645C15.5527 2.24021 15.5 2.36739 15.5 2.5V4H8.5V2.5C8.5 2.36739 8.44732 2.24021 8.35355 2.14645C8.25979 2.05268 8.13261 2 8 2C7.86739 2 7.74021 2.05268 7.64645 2.14645C7.55268 2.24021 7.5 2.36739 7.5 2.5V4H4.5C3.8372 4.00079 3.20178 4.26444 2.73311 4.73311C2.26444 5.20178 2.00079 5.8372 2 6.5V19.5C2.00079 20.1628 2.26444 20.7982 2.73311 21.2669C3.20178 21.7356 3.8372 21.9992 4.5 22H19.5C20.1629 21.9995 20.7985 21.7359 21.2672 21.2672C21.7359 20.7985 21.9995 20.1629 22 19.5V6.5C21.9995 5.83712 21.7359 5.20154 21.2672 4.73282C20.7985 4.26409 20.1629 4.00053 19.5 4ZM21 19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21H4.5C4.10218 21 3.72064 20.842 3.43934 20.5607C3.15804 20.2794 3 19.8978 3 19.5V11H21V19.5ZM21 10H3V6.5C3 5.672 3.67 5 4.5 5H7.5V6.5C7.5 6.63261 7.55268 6.75979 7.64645 6.85355C7.74021 6.94732 7.86739 7 8 7C8.13261 7 8.25979 6.94732 8.35355 6.85355C8.44732 6.75979 8.5 6.63261 8.5 6.5V5H15.5V6.5C15.5 6.63261 15.5527 6.75979 15.6464 6.85355C15.7402 6.94732 15.8674 7 16 7C16.1326 7 16.2598 6.94732 16.3536 6.85355C16.4473 6.75979 16.5 6.63261 16.5 6.5V5H19.5C19.8978 5 20.2794 5.15804 20.5607 5.43934C20.842 5.72064 21 6.10218 21 6.5V10Z" fill="#00AFF1" />
                                </svg>
                                <p className='text-sky-500 text-xl font-normal  tracking-tight'>Oct 11 2018</p>
                            </div>
                            <div className='flex items-center max-[425px]:mt-[10px] max-[425px]:gap-[10px] gap-[0.208vw]'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M4.15625 17.8125C4.30147 17.8129 4.44181 17.7601 4.55072 17.6641L9.5 13.2633L14.4493 17.6641C14.5349 17.7402 14.6408 17.7899 14.7541 17.8072C14.8673 17.8245 14.9832 17.8087 15.0877 17.7616C15.1922 17.7145 15.2808 17.6382 15.3429 17.5419C15.4049 17.4456 15.4378 17.3333 15.4375 17.2187V3.5625C15.4368 2.93282 15.1864 2.32913 14.7411 1.88388C14.2959 1.43863 13.6922 1.18819 13.0625 1.1875H5.9375C5.30782 1.18819 4.70413 1.43863 4.25888 1.88388C3.81363 2.32913 3.56319 2.93282 3.5625 3.5625V17.2187C3.5625 17.3762 3.62505 17.5272 3.7364 17.6386C3.84775 17.7499 3.99878 17.8125 4.15625 17.8125Z" fill="#00AFF1" />
                            </svg>
                                <p className='text-sky-500 text-xl font-normal max-[425px]:gap-[10px] tracking-tight'>Business consultancy</p></div>

                        </div>
                    </div>

                    <div>
                        <p className='mt-8 text-neutral-800 lg:text-2xl lg:text-[40px] font-semibold'>We Would love to share a similar experience</p>
                        <p className='mt-8 text-neutral-800 lg:text-2xl font-normal'>I believe in the power of design.</p>
                        <p className='mt-8 text-neutral-800 lg:text-2xl font-normal' text-neutral-800 text-2xl font-normal>Design brings ideas, messages, and emotions to life. Design helps us communicate and connect in purpose-filled ways. Design influences what we think and feel. Design informs the decisions we make. At our core, we all seek purpose. Many of us want our daily decisions to help make the world a better place.</p>
                        <p className='mt-8 text-neutral-800 lg:text-2xl font-normal'>Organizations that aspire to benefit humanity touch us. They galvanize communities dedicated to good. Sometimes, they even launch extraordinary movements.</p>
                        <div className="bg-slate-50 rounded-lg border border-black p-6 lg:p-12 mt-8" >
                            <p className='mb-8 '>“We can easily manage if we will only take, each day, the burden appointed to it. But the load will be too heavy for us if we carry yesterday’s burden over again today, and then add the burden of the morrow.”</p>
                            <p>---- Bailey Dobson</p>
                        </div>
                    </div>

                    <div>
                        <p className='mt-8 text-neutral-800 lg:text-2xl lg:text-[40px] font-semibold'>Discovering the power of purpose</p>
                        <p className='mt-8 text-neutral-800 lg:text-2xl font-normal'>It feels incredible to work for an organization focused on solving a problem you deeply understand.</p>
                        <p className='mt-8 text-neutral-800 lg:text-2xl font-normal'>When I first moved to Israel, I began working with an organization that helps new immigrants find professional success by providing education about the job market, courses, networking, and introductions to major companies. Our goal was to create a new strategy and website that met their audience’s many needs.</p>
                        <p className='mt-8 text-neutral-800 lg:text-2xl font-normal'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>

                        <Image
                            src={image2}
                            alt="shadow"
                            className='mt-8 w-full'
                        />
                    </div>

                    <div>
                        <p className='mt-8 text-neutral-800 lg:text-2xl lg:text-[40px] font-semibold'>Discovering the power of purpose</p>
                        <p className='mt-8 text-neutral-800 lg:text-2xl font-normal'>It feels incredible to work for an organization focused on solving a problem you deeply understand.</p>
                        <p className='mt-8 text-neutral-800 lg:text-2xl font-normal'>When I first moved to Israel, I began working with an organization that helps new immigrants find professional success by providing education about the job market, courses, networking, and introductions to major companies. Our goal was to create a new strategy and website that met their audience’s many needs.</p>
                        <p className='mt-8 text-neutral-800 lg:text-2xl font-normal'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                        <p className='mt-8 text-neutral-800 lg:text-2xl font-normal'>And ever since then, we at Verticalloop have embraced our mission to “design for good.”</p>
                    </div>

                    <div className='border-t-2 border-gray-100 my-8'></div>

                    <div className='flex flex-wrap items-center'>
                        <p className='text-neutral-800 text-xl'>Tags :</p>
                        <p className='bg-cyan-300 rounded-lg text-white ml-4 mt-2 lg:mt-0 text-center px-4 py-1'>Design</p>
                        <p className='bg-cyan-300 rounded-lg text-white ml-4 mt-2 lg:mt-0 text-center px-4 py-1'>Branding</p>
                        <p className='bg-cyan-300 rounded-lg text-white ml-4 mt-2 lg:mt-0 text-center px-4 py-1'>Agency</p>
                    </div>

                    <div className="bg-neutral-50 rounded-lg mt-[100px] p-6 lg:p-12">
                        <h2 className="text-neutral-800 text-[32px] mb-8 font-medium">3 Comments</h2>

                        <div className="border-t border-gray-300 opacity-60 mb-6"></div>

                        {/* Comment */}
                        <div className="mb-6">
                            <div className="flex items-start space-x-4">
                                <Image
                                    src={image3}
                                    alt="shadow"
                                    className='w-10 h-10 rounded-full'
                                />
                                <div>
                                    <div className="">
                                        <p className="font-semibold">Issac Wise</p>
                                        <p className="text-gray-500 text-sm">Jan 01, 2024 at 02:14 pm</p>
                                    </div>
                                    <p className="text-neutral-800 lg:text-lg mt-2">
                                        Wouldn't it be better practice to use get_the_title(...) in this case? Directly accessing the post object's data member would bypass applying filters and enforcing protected and private settings, unless that's explicitly desired.
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-gray-300 opacity-60 mt-6"></div>
                        </div>

                        {/* Nested Comment */}
                        <div className="ml-14 mb-6">
                            <div className="flex items-start space-x-4">
                                <Image
                                    src={image3}
                                    alt="shadow"
                                    className='w-10 h-10 rounded-full'
                                />
                                <div>
                                    <div className="">
                                        <p className="font-semibold">Issac Wise</p>
                                        <p className="text-gray-500 text-sm">Jan 01, 2024 at 02:14 pm</p>
                                    </div>
                                    <p className="text-neutral-800 text-lg mt-2">
                                        Thanks Demo User for Wouldn't it be better practice to use get_the_title.
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-gray-300 opacity-60 mt-6"></div>
                        </div>

                        {/* Comment */}
                        <div className="mb-6">
                            <div className="flex items-start space-x-4">
                                <Image
                                    src={image3}
                                    alt="shadow"
                                    className='w-10 h-10 rounded-full'
                                />
                                <div>
                                    <div className="">
                                        <p className="font-semibold">Issac Wise</p>
                                        <p className="text-gray-500 text-sm">Jan 01, 2024 at 02:14 pm</p>
                                    </div>
                                    <p className="text-neutral-800 text-lg mt-2">
                                        Wouldn't it be better practice to use get_the_title(...) in this case? Directly accessing the post object's data member would bypass applying filters and enforcing protected and private settings, unless that's explicitly desired.
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-gray-300 opacity-60 mt-6"></div>
                        </div>

                        {/* Reply Form */}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4">Leave a Reply</h3>
                            <form className="space-y-4">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-sm font-semibold">Name *</label>
                                    <input type="text" id="name" className="border p-2 rounded-md" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-sm font-semibold">Email *</label>
                                    <input type="email" id="email" className="border p-2 rounded-md" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="website" className="text-sm font-semibold">Website (Optional)</label>
                                    <input type="url" id="website" className="border p-2 rounded-md" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="comment" className="text-sm font-semibold">Comment</label>
                                    <textarea id="comment" rows="4" className="border p-2 rounded-md"></textarea>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="save-info" className="mr-2 bg-sky-500" />
                                    <label htmlFor="save-info" className="text-sm">Save my name, email, and website in this browser for the next time I comment.</label>
                                </div>
                                <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded-md">Post Comment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" sticky top-36 lg:w-[26.094vw] p-[10px]  h-full ">
                <div className=' pt-[50.4px] pl-[40px] pr-[30px]  bg-neutral-50 rounded-[10.20px] shadow border border-black/50'>
                    <div className="text-neutral-800 text-[32px] font-semibold  leading-[29.33px] tracking-tight mb-[2.778vh]">Recent Post</div>
                    <div className="w-[] ">

                        <div className='flex flex-row justify-between mb-[1.852vh] opacity-90 bg-gray-50 rounded-[5px] border border-black/50 p-[15px] '>
                            <div>
                                <Image
                                    src={image4}
                                    alt="shadow"
                                    className='w-[91px] h-20 rounded-[5px]'
                                />
                            </div>
                            <div className='flex flex-col ml-[20px]'>
                                <div className="opacity-80 text-neutral-800 text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">We would love to share a similar experience</div>
                                <div className="opacity-50 text-neutral-800 text-base font-normal font-['Poppins'] leading-[30px] tracking-tight">10 Oct, 2022</div>
                            </div>
                        </div>

                        <div className='flex flex-row justify-between mb-[1.852vh] opacity-90 bg-gray-50 rounded-[5px] border border-black/50 p-[15px] '>
                            <div>
                                <Image
                                    src={image4}
                                    alt="shadow"
                                    className='w-[91px] h-20 rounded-[5px]'
                                />
                            </div>
                            <div className='flex flex-col ml-[20px]'>
                                <div className="opacity-80 text-neutral-800 text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">We would love to share a similar experience</div>
                                <div className="opacity-50 text-neutral-800 text-base font-normal font-['Poppins'] leading-[30px] tracking-tight">10 Oct, 2022</div>
                            </div>
                        </div>

                        <div className='flex flex-row justify-between mb-[1.852vh] opacity-90 bg-gray-50 rounded-[5px] border border-black/50 p-[15px] '>
                            <div>
                                <Image
                                    src={image4}
                                    alt="shadow"
                                    className='w-[91px] h-20 rounded-[5px]'
                                />
                            </div>
                            <div className='flex flex-col ml-[20px]'>
                                <div className="opacity-80 text-neutral-800 text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">We would love to share a similar experience</div>
                                <div className="opacity-50 text-neutral-800 text-base font-normal font-['Poppins'] leading-[30px] tracking-tight">10 Oct, 2022</div>
                            </div>
                        </div>

                        <div className='flex flex-row justify-between mb-[1.852vh] opacity-90 bg-gray-50 rounded-[5px] border border-black/50 p-[15px] '>
                            <div>
                                <Image
                                    src={image4}
                                    alt="shadow"
                                    className='w-[91px] h-20 rounded-[5px]'
                                />
                            </div>
                            <div className='flex flex-col ml-[20px]'>
                                <div className="opacity-80 text-neutral-800 text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">We would love to share a similar experience</div>
                                <div className="opacity-50 text-neutral-800 text-base font-normal font-['Poppins'] leading-[30px] tracking-tight">10 Oct, 2022</div>
                            </div>
                        </div>

                        <div className='flex flex-row justify-between mb-[1.852vh] opacity-90 bg-gray-50 rounded-[5px] border border-black/50 p-[15px] '>
                            <div>
                                <Image
                                    src={image4}
                                    alt="shadow"
                                    className='w-[91px] h-20 rounded-[5px]'
                                />
                            </div>
                            <div className='flex flex-col ml-[20px]'>
                                <div className="opacity-80 text-neutral-800 text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">We would love to share a similar experience</div>
                                <div className="opacity-50 text-neutral-800 text-base font-normal font-['Poppins'] leading-[30px] tracking-tight">10 Oct, 2022</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' mt-[60px]  bg-neutral-50 rounded-[10.20px] shadow border border-black/50'>
                    <div className='text-neutral-800 text-[32px] font-semibold  leading-[29.33px] tracking-tight mt-[50px] ml-[40.62px]  pb-[33.27px]'>Gallery</div>
                    <div className='grid grid-cols-3 gap-4 ml-[40.62px] mr-[40.62px] mb-[34.41px] '>
                        <div className="m-2">
                            <Image
                                src={image5}
                                alt="shadow"
                                className='w-[129px] h-[129px] opacity-90 rounded-[5px] border border-black/opacity-50'
                            />
                        </div>
                        <div className="m-2">
                            <Image
                                src={image5}
                                alt="shadow"
                                className='w-[129px] h-[129px] opacity-90 rounded-[5px] border border-black/opacity-50'
                            />
                        </div>
                        <div className="m-2">
                            <Image
                                src={image5}
                                alt="shadow"
                                className='w-[129px] h-[129px] opacity-90 rounded-[5px] border border-black/opacity-50'
                            />
                        </div>
                        <div className="m-2">
                            <Image
                                src={image5}
                                alt="shadow"
                                className='w-[129px] h-[129px] opacity-90 rounded-[5px] border border-black/opacity-50'
                            />
                        </div>
                        <div className="m-2">
                            <Image
                                src={image5}
                                alt="shadow"
                                className='w-[129px] h-[129px] opacity-90 rounded-[5px] border border-black/opacity-50'
                            />
                        </div>
                        <div className="m-2">
                            <Image
                                src={image5}
                                alt="shadow"
                                className='w-[129px] h-[129px] opacity-90 rounded-[5px] border border-black/opacity-50'
                            />
                        </div>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default Page