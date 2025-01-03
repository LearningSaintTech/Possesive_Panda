import React from 'react';
import Image from 'next/image';


export const Platforms = ({ platformsData }) => {
  const getGridColumns = (imagesLength) => {
    if (imagesLength === 9) return 'grid-cols-3';
    if (imagesLength === 12) return 'grid-cols-4';
    if (imagesLength === 15) return 'grid-cols-5';
    return 'grid-cols-3'; // default if none of the above matches
  };
  return (
    <div className='px-[9vw] text-left bg-[#00111A] justify-center items-center gap-[10.99vw] flex sm:flex-row flex-col'>
      <div className='flex  gap-[0.5vw] flex-col ml-[3vw]'>
        <h3 className='sm:w-[33.906vw] w-[85.882vw]  sm:items-start justify-center sm:text-start text-center items-center text-white sm:text-[2.5vw] text-[7.529vw] font-semibold leading-[normal]'>
          {platformsData[0].text.heading}
        </h3>
        <p className='sm:w-[33.906vw] w-[85.882vw] text-white m:items-start justify-center sm:text-start text-center items-center text-[3.765vw] sm:text-[1.25vw]'>
          {platformsData[0].text.paragraph}
        </p>
      </div>
      <div className={`grid sm:${getGridColumns(platformsData[0].images.length)} grid-cols-3 sm:gap-2 gap-[3.612vw]`}>
        {platformsData[0].images.map((platform, index) => (
          <Image
            key={index}
            className='hover:scale-75 sm:h-[7.708vw] sm:w-[7.708vw] h-[26.118vw] w-[26.118vw] transition-transform duration-700 cursor-pointer'
            src={platform.imageSrc}
            alt={platform.altText}
          />
        ))}
      </div>
    </div>
  );
};

export default Platforms;
