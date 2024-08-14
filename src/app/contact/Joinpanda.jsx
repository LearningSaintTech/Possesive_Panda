import React from "react";
import Image from "next/image";
import Hand from "../../assets/aboutus/back_joinpanda.png";
import tech from "../../assets/aboutus/new.png";

const JoinPanda = () => {
  return (
    <div className="hidden sm:block m-[5.2vw] relative ">
      <Image src={Hand} alt="Background" objectFit="cover" className="w-full" />
      <div className="absolute top-0 flex mx-[11.302vw] justify-between w-[67vw] h-full">
        <div className="my-auto flex flex-col gap-[1.042vw]">
          <div className="border-t sm:border-t-2 lg:border-t-4 border-white w-[8vw] "></div>
          <h1 className="text-white font-semibold leading-[normal] text-[3.438vw]">
            Welcome <br />
            to the future of work
          </h1>
          <button className="text-white bg-sky-500 py-[0.651vw] px-[2.24vw] rounded-full font-medium text-[1.25vw] w-fit duration-300 hover:duration-300 hover:opacity-55">
            Join Panda
          </button>
        </div>
        <Image
          src={tech}
          alt="Tech Image"
          className="rounded-full size-[26vw] h-full"
        />
      </div>
    </div>
  );
};

export default JoinPanda;
