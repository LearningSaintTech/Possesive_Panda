import React from 'react'
import { Image } from '@/lib/next-compat'
import img1 from '../../../../public/assets/services/mobile-app/1.png'
import img2 from '../../../../public/assets/services/mobile-app/1a.png'
import img3 from '../../../../public/assets/services/mobile-app/1b.png'
import img4 from '../../../../public/assets/services/mobile-app/1c.png'
import img5 from '../../../../public/assets/services/mobile-app/1d.png'

const Iphone = () => {
    return (
        <div className='flex flex-col gap-[4.948vw] px-[9.176vw] sm:px-[5.208vw] py-[14vw] sm:py-[5.208vw] bg-[#00111A] '>
            <div className='flex sm:px-[4.167vw] gap-[7.529vw] sm:gap-[4.167vw]  '>
                <Image
                    src={img1}
                    alt=""
                    className='w-[36.964vw] sm:w-[12.908vw] sm:h-[26.423vw] '
                />
                <Image
                    src={img2}
                    alt=""
                    className='w-[36.964vw] sm:w-[12.908vw] sm:h-[26.423vw] '
                />
                <Image
                    src={img3}
                    alt=""
                    className='hidden sm:block w-[12.908vw] h-[26.423vw] '
                />
                <Image
                    src={img4}
                    alt=""
                    className='hidden sm:block w-[12.908vw] h-[26.423vw] '
                />
                <Image
                    src={img5}
                    alt=""
                    className='hidden sm:block w-[12.908vw] h-[26.423vw] '
                 
                />
            </div>



        </div>
    )
}

export default Iphone