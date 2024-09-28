import React from 'react'
import { Barlow } from 'next/font/google';
const barlow = Barlow({
    weight: ['600'],  // Use the weights you need
    subsets: ['latin'],  // Subset options
});


const Strategies = ({StrategyData,heading,title}) => {
    return (

        <div className='flex px-[7.396vw] justify-center items-center text-center flex-col'>
            <p className='sm:text-[2.5vw] text-[7.529vw] sm:w-[34.167vw] w-[85.882vw] text-white '></p>
            <div className='justify-center flex items-center'>
            <h2 className='text-white sm:text-[2.5vw] text-[7.529vw] sm:w-[34.167vw] w-[85.882vw] font-medium justify-center items-center text-center 	 '>{title}</h2>
            </div>
            <div className="  grid relative sm:gap-y-[3vw] gap-y-[9.412vw] gap-x-[14.792vw]  sm:grid-cols-2 grid-col-1">
                {StrategyData.map((strategy, index) => (
                    <div key={index} className=" flex flex-col gap-[1vw]">

                        <div className='flex justify-start items-center text-center gap-[1.25vw]  flex-row'>


                            <p className={`${barlow.className} text-[#00AFF1] sm:text-[7.813vw] text-[16.471vw] font-semibold leading-none`}>{strategy.num}</p>
                            <div className='border-b-[1px] pb-[10px] border-[#262626] items-start mt-[3vw] justify-start  text-start sm:w-[26.563vw] w-[60.706vw]  '> 
 
                            <h3 className='text-[#98989A] font-medium sm:text-[1.667vw] text-[3.529vw]'> {strategy.title}</h3>
                            </div>

                        </div>
                        <div className='sm:w-[34.87vw] w-[77.412vw]'>
                            <p className='text-[#98989A] sm:text-[1.25vw] text-start text-[2.624vw] font-medium '> {strategy.description}</p>

                        </div>




                    </div>
                ))}
      <div className=" sm:block hidden  absolute left-1/2 top-6 h-full w-[0.1vw] bg-[#262626]"></div>


            </div>

            
            



        </div>
    )
}

export default Strategies;   