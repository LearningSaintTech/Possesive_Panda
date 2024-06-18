import React from 'react';
import Hand from '../../assets/aboutus/Hand.png'
import Image from 'next/image';

const AboutBanner = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${Hand?.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				width: '100%',
				height: '400px',
			}}
			className="flex w-full relative justify-start items-center  "
		>
			<div className='w-[90%] mx-auto'>
			<div className=" flex flex-col gap-5">
				<h1 className="  text-4xl lg:text-5xl font-semibold text-white">
					About Us
				</h1>
				<h2 className="text-xl lg:text-[40px] text-white ">
					Professional IT Solution Service
				</h2>
			</div>
			<div className="flex gap-2 bg-white py-3 lg:py-6 px-6 md:py-4 mmd:px-8 lg:px-12 absolute right-10 md:right-24 lg:right-32 border-b-4 border-cyan-300   bottom-0 ">
				<a
					href="/"
					className="text-cyan-300 hover:underline text-lg md:text-xl"
				>
					Home
				</a>
				<span className="opacity-50 text-neutral-800 text-lg md:text-xl">
					:
				</span>
				<span className="opacity-50 text-neutral-800 text-lg md:text-xl">
					About Us
				</span>
			</div>
			</div>
		</div>
	);
};

export default AboutBanner;
