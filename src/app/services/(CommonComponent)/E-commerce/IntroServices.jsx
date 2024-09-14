import React from 'react'
import Image from 'next/image'
import thumbnail from "../../../../../public/assets/services/e-commerce/thumbnail.png"

const IntroServices = () => {
    return (
        <div className='flex flex-col bg-[#00111A] gap-[4.375vw] sm:px-[5.208vw] sm:py-[6.25vw] px-[7.059vw] py-[14.118vw] '>
            <h2 className='text-white sm:text-[2.5vw] text-[7.529vw] font-medium tracking-[0.025vw] sm:w-[40.885vw] leading-normal text-center sm:text-left '>What are eCommerce Services and Solutions? </h2>
            <div className='flex sm:gap-[10.938vw] '>
                <Image
                    src={thumbnail}
                    alt="thumbnail"
                    className="w-[16.922vw] ml-[6.146vw] hidden sm:block "
                />
                <div className='flex flex-col gap-[2.824vw] sm:gap-[1.042vw]  '>
                    <p className='text-white text-[3.765vw] sm:text-[1.25vw] font-light text-center sm:text-justify'>eCommerce refers to buying and selling goods and services using the Internet. It includes activities like selecting products and services to transactions and processes that include online shopping. In eCommerce, customers shop whenever they want; there is no time bound for shopping.</p>
                    <p className='text-white text-[3.765vw] sm:text-[1.25vw] font-light text-center sm:text-justify'>eCommerce services and solutions comprise a wide range of tools and technologies that allow businesses to sell products and services on the internet.</p>
                    <p className='text-white text-[3.765vw] sm:text-[1.25vw] font-light text-center sm:text-justify'>In order to sell your products and services, you have an eCommerce platform that attracts your targeted customers. We not only provide e-commerce solutions but also ensure that they run smoothly.</p>
                </div>
            </div>
        </div>
    )
}

export default IntroServices;