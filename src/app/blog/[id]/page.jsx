import React from 'react'
import Image from "next/image";
import imagee from "../../../assets/blogsDetails/Rectangle_589.png";
const Page = () => {
  return (
    <div className='mt-[10px] flex flex-row justify-between ml-[151px] mr-[100px] '>
        <div className='bg-red-300 w-1/2 h-[3000px] '>
        <Image
        src={imagee}
        alt="shadow"
      />




        </div>





        <div className='bg-gray-300 w-1/2 h-48 flex items-center justify-center sticky top-4'>
          <p className='text-black'>Gray Div</p>
        </div>
    </div>
  )
}

export default Page
