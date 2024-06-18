import Image from 'next/image';
import React from 'react';
import background from '../../assets/Insights/Sky.png';
import SkyM from '../../assets/Insights/SkyM.png';

const Component6 = () => {
  return (
    <div className='mb-[9.259vh] h-full relative lg:mt-[9.259vh] mt-[35%] bg-gray-600'>
      <Image
        src={background}
        alt="Background"
        className='w-full lg:h-auto h-[200px] '
      />
      
      <div className='bg-neutral-50 border rounded-[10px] absolute lg:top-[13%] lg:left-[6.7%] lg:right-[50.5%] top-[70%] left-[10%] right-[10%] h-fit lg:h-[19.871vw] pb-[3vw] lg:pb-[2.778vh]'>
        <h5 className='text-neutral-800 text-[4.5vw] lg:text-[1.667vw] font-medium capitalize tracking-normal lg:ml-[2.083vw] mt-[3vw] text-center lg:text-start md:text-2xl'>
          Reshape our future with Generative AI
        </h5>
        <p className='text-neutral-800 text-[4vw] lg:text-[1.042vw] font-normal capitalize tracking-[0.015rem] lg:leading-[normal] mt-[1.852vh] mx-[2.083vw] text-center lg:text-start md:text-base lg:mt-[3vh]'>
          Generative AI (GenAI) and other forms of Artificial intelligence (AI) <br/>
          are creating new opportunities to reshape the future.
        </p>
        <button className="bg-neutral-50 text-neutral-800 lg:text-[1.25vw] lg:top-[76%] text-[4vw] lg:font-medium font-medium flex justify-center items-center rounded-[70px] lg:py-[2.5vh] lg:px-[3vw] border border-black px-[4vw] py-[2.5vw] mx-auto lg:mx-0 lg:absolute mt-[2.5vh]  lg:right-[2vw] md:text-xs md:px-[1.5vw] md:py-[1.5vw]">
          Read More
          <svg
            width="19"
            height="15"
            viewBox="0 0 19 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 md:ml-2 size-[3.5vw] md:size-[2vw] lg:size-[0.8vw]"
          >
            <path
              d="M0 6.5378C0.078006 6.54149 0.156012 6.54888 0.234018 6.54888C5.44482 6.54888 9.77189 6.54888 14.9827 6.54888C15.0568 6.54888 15.1309 6.54888 15.244 6.54888C13.3719 4.77592 11.5309 3.0325 9.70169 1.30387C10.1775 0.849544 10.6339 0.417385 11.0785 0C13.7151 2.49692 16.3634 5.00492 19 7.49815C16.3673 9.99138 13.7151 12.4994 11.0785 15C10.6378 14.5826 10.1853 14.1541 9.72119 13.7146C11.5465 11.986 13.3914 10.2389 15.2362 8.49544C15.2284 8.48067 15.2167 8.4622 15.2089 8.44743C15.1426 8.44743 15.0724 8.44743 15.0061 8.44743C9.7836 8.44743 5.44092 8.44743 0.218417 8.44743C0.148211 8.44743 0.0780059 8.45481 0.00780058 8.45851C-1.81066e-08 7.81581 0 7.1768 0 6.5378Z"
              fill="black"
            />
          </svg>
        </button>


      </div>
    </div>
  );
};

export default Component6;
