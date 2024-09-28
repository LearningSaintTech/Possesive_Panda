import React from 'react'
import Image from 'next/image'
import purpose from "../../../public/assets/AboutUs/purposeimage.svg"
import thumbs from "../../../public/assets/AboutUs/thumbs.svg"
import image2 from "../../../public/assets/AboutUs/image2.svg"
import Scale from "../../../public/assets/AboutUs/Scale.svg"
import Misson from "../../../public/assets/AboutUs/Misson.svg"

const Purpose = () => {
  return (
    <div className=' bg-[#00111A] sm:pt-[5.052vw] pt-[15vw] pb-[5.052vw] px-[5.469vw] '   >
      <div className=' bg-[#131D22]  sm:w-[89.583vw] flex flex-row  gap-[0.5vw] sm:px-0 px-[1vw] sm:py-0 pb-[4vw] sm:mb-0 mb-[8vw] ' >
        <Image
          src={purpose}
          alt="purpose"
          className='w-[41.146vw] ml-[2.604vw] py-[1.25vw] hidden md:block'
        />
        <div className='flex flex-col  ml-[2.604vw] py-[1.25vw] mt-[3vw] '>
          <Image
            src={thumbs}
            alt="thumbs"
            className='  w-[12vw] sm:w-[5vw] '
          />
          <div>
            <p className='text-white sm:mt-[2.083vw] mt-[2vw] text-[5.647vw] sm:text-[1.379vw] font-medium sm:font-extrabold '>Our Purpose</p>
            <p className='text-white mt-[2.083vw] text-[3.765vw] sm:text-[1.209vw] font-normal '>With the minds of today, Possesive Panda is creating a better tomorrow. Innovation is ingrained in our DNA, and we believe in fostering the growth and improvement of our clients&apos;s business success. Our purpose lies in transforming your business to be the pinnacle of your industry.</p>
          </div>
        </div>
      </div>

      {/*div endshere */}

      <div className=' bg-[#00111A] sm:h-[30vw]  w-full sm:w-[89.583vw] mt-[1.563vw] flex flex-col sm:flex-row gap-[2.5vw] '>

        <div className='bg-[#131D22] sm:h-[30vw] sm:w-[50.441vw] flex flex-row gap-[3.125vw]  sm:px-0 px-[1vw] sm:py-0 pb-[4vw] sm:mb-0 mb-[8vw] ' >
          <div className='flex flex-col ml-[2.448vw] '>
            <Image
              src={Scale}
              alt="Scale"
              className='w-[12vw] sm:w-[3.503vw] mt-[3.75vw] '
            />
            <div>
              <p className='text-white sm:mt-[2.083vw] text-[5.647vw] sm:text-[1.379vw] font-medium sm:font-extrabold '>Our Vision</p>
              <p className='text-white mt-[2.083vw] sm:text-[1.209vw]  text-[3.765vw] font-normal  '>At Possesive Panda, we don't just aim to be at the top of the global IT services industry; we aspire to be a game-changer. Our vision is to lead digital innovation and shape the pathway of the IT industry. Join Possesive Panda on this exciting journey towards a digital future.</p>
            </div>
          </div>
          <Image src={image2}
            alt="image2"
            className='  w-[18.892vw] mt-9 hidden md:block' />
        </div>
        <div className='bg-[#131D22] sm:h-[30vw]  flex flex-col sm:w-[37.396vw]  sm:px-0 px-[1vw] sm:py-0 pb-[4vw] sm:mb-0 mb-[8vw] ' >
          <Image src={Misson}
            alt="Misson"
            className=' w-[12vw] sm:w-[3.75vw] mt-[3.802vw] ml-[2.448vw]'
          />
          <div className='mt-2.604vw ml-[2.448vw]'>
            <p className='text-white mt-[2.083vw] text-[5.647vw] sm:text-[1.379vw] font-extrabold '>Our Mission</p>
            <p className='text-white mt-[2.083vw] sm:text-[1.209vw] text-[3.765vw] font-normal sm:w-[32.544vw] '>We are on a mission to deliver exceptional IT services and solutions to promote client satisfaction and success. We thrive on our clients’s wants and needs and turn challenges into opportunities in order to boost their success rate. Above all, we aim at becoming your steadfast partner that promotes triumph.
            </p>
          </div>

        </div>



      </div>

    </div>
  )
}

export default Purpose
