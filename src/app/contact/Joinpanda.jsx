import React from 'react';
import Image from 'next/image';
import Hand from '../../assets/aboutus/back_joinpanda.png';
import tech from '../../assets/aboutus/new.png';

const JoinPanda = () => {
  return (
    <div className="relative mt-4 md:mt-10 overflow-hidden ml-2 md:ml-10 mr-2 md:mr-10 ">
      <div className="relative w-full h-[200px] md:h-[400px]  sm:h-[400px] sm:w-full">
        <Image
          src={Hand}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="backdrop-blur-[13.43px] h-[32rem]"
        />
      </div>
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between w-full h-full p-4 md:p-8 lg:p-12 xl:p-16">
        <div className="flex flex-col justify-center text-center md:text-left md:w-1/2">
          <h1 className="text-white text-xl md:text-3xl lg:text-xl xl:text-4xl font-semibold ml-2 md:ml-10">
            Welcome <br />
            to the future of work
          </h1>
          <button className="mt-2 md:mt-4 bg-sky-500 rounded-full py-1 md:px-4 text-white text-md md:text-lg lg:text-xl xl:text-xl font-medium ml-2 md:ml-10 sm:ml-10 w-[20vw]">
            Join Panda
          </button>
        </div>
        <div className="flex justify-center items-center mt-4 md:mt-0 md:w-1/2">
        <div className="w-[527px] h-[527px] md:w-[350px] md:h-[350px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] relative">
            <Image
              src={tech}
              alt="Tech Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full size-[32rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPanda;
