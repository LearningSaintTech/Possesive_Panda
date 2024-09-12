import React from 'react'
import Image from 'next/image'
import thumbnail from "../../../../public/assets/e-commerce/thumbnail.png"

const IntroServices = () => {
    return (
        <div className='flex flex-col bg-[#00111A] gap-[4.375vw] px-[5.208vw] py-[6.25vw] '>
            <h2 className='text-white text-[2.5vw] font-medium tracking-[0.025vw] w-[40.885vw] leading-normal  '>What are eCommerce Services and Solutions? </h2>
            <div className='flex gap-[10.938vw] '>
                <Image
                    src={thumbnail}
                    alt="thumbnail"
                    className="w-[16.922vw] ml-[6.146vw] "
                />
                <div className='flex flex-col gap-[1.042vw]  '>
                    <p className='text-white text-[1.25vw] font-light text-justify'>eCommerce refers to buying and selling goods and services using the Internet. It includes activities like selecting products and services to transactions and processes that include online shopping. In eCommerce, customers shop whenever they want; there is no time bound for shopping.</p>
                    <p className='text-white text-[1.25vw] font-light text-justify'>eCommerce services and solutions comprise a wide range of tools and technologies that allow businesses to sell products and services on the internet.</p>
                    <p className='text-white text-[1.25vw] font-light text-justify'>In order to sell your products and services, you have an eCommerce platform that attracts your targeted customers. We not only provide e-commerce solutions but also ensure that they run smoothly.</p>
                </div>
            </div>
        </div>
    )
}

export default IntroServices;