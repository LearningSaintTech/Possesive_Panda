import React from 'react'
import Image from 'next/image'
import map from '../../../../public/assets/e-commerce/map.png'

const Customized = () => {
    return (
        <div className='flex bg-[#131D22] pl-[5.208vw] py-[5.208vw] '>
            <div className='flex flex-col gap-[1.563vw] '>
                <div className='flex flex-col gap-[1.171vw] '>
                    <p className='text-[#00AFF1] text-[1.25vw] leading-[180%] '>Drive Online Sales</p>
                    <h2 className='text-[2.5vw] text-white font-normal leading-[125%] '>With our Customized eCommerce Solution!</h2>
                </div>
                <div className='flex flex-col gap-[3.073vw] '>
                    <p className='text-white text-[1.25vw] font-normal leading-[180%] ' >Possessive Panda's eCommerce solutions cover every detail to guarantee that traffic and sales consistently exceed your growth objectives. We provide eCommerce services for global industry verticals in the domain of designing, development, hosting, marketing, and analytics.</p>
                    <button className='bg-[#05B7DF] rounded-[3.906vw] text-white text-[1.25vw] font-semibold w-[10.521vw] h-[3.333vw]  '>See More</button>
                </div>
            </div>
            <Image
                src={map}
                alt="map"
                className="w-[48.438vw]"
            />
        </div>
    )
}

export default Customized