import React from 'react'
import Image from 'next/image'
import img from '../../../../public/assets/services/mobile-app/Device14PM.svg'
const Iphone = () => {
    return (
        <div className='flex flex-col gap-[4.948vw] px-[9.176vw] sm:px-[5.208vw] sm:py-[5.208vw] bg-[#00111A] '>
            <div className='flex sm:px-[4.167vw] gap-[7.529vw] sm:gap-[4.167vw]  '>
                <Image
                    src={img}
                    alt=""
                    className='w-[36.964vw] sm:w-[12.908vw] sm:h-[26.423vw] '
                />
                <Image
                    src={img}
                    alt=""
                    className='w-[36.964vw] sm:w-[12.908vw] sm:h-[26.423vw] '
                />
                <Image
                    src={img}
                    alt=""
                    className='hidden sm:block w-[12.908vw] h-[26.423vw] '
                />
                <Image
                    src={img}
                    alt=""
                    className='hidden sm:block w-[12.908vw] h-[26.423vw] '
                />
                <Image
                    src={img}
                    alt=""
                    className='hidden sm:block w-[12.908vw] h-[26.423vw] '
                 
                />
            </div>



        </div>
    )
}

export default Iphone