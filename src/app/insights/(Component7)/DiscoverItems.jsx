import React from 'react'
import Image from 'next/image';

const DiscoverItems = ({ title, para, image }) => {
  return (
    <div className='h-auto w-full    '>
      <div className='w-full h-64 lg:h-[31.5vh] relative mb-[3.704vh]'>
        <Image src={image} alt="shadow" layout='fill' objectFit='cover' className='' />
      </div>
      <div className='text-neutral-800 text-lg  lg:text-3xl font-medium capitalize tracking-tight mb-[1.852vh]'>
        {title}
      </div>
      <div className='text-neutral-800 text-sm lg:text-xl font-normal capitalize tracking-normal'>
        {para}
      </div>
    </div>
  )
}
export default DiscoverItems;
