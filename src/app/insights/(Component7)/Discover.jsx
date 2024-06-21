import React from 'react'
import Ddata from './Ddata';
import DiscoverItems from './DiscoverItems';

const Discover = () => {
  return (
    <div className='ml-4 mr-4 lg:mt-[9.259vh] lg:ml-[5.729vw] lg:mr-[5.729vw] mt-[75%]'>
      <h1 className='text-neutral-800 text-3xl lg:text-[40px] font-medium capitalize tracking-normal  mb-10  lg:mb-[12.259vh]'>
        Discover More
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-[14.815vh] lg:gap-x-[3.49vw]'>
        {Ddata?.map((item, index) => (
          <DiscoverItems
            key={index}
            image={item.image}
            title={item.head}
            para={item.para}
          />
        ))}
      </div>
    </div>
  )
}
export default Discover;
