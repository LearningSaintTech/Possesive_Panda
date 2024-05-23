import React from "react";
import normalServices from "../../assets/home/services/Banners1.png";
import normalServices2 from "../../assets/home/services/Banner2.png";
import Image from "next/image";

const OurServices = () => {
    return <div>
        <div className="mx-auto flex flex-wrap justify-between space-x-8">
            <div className="flex-1 min-w-[300px]">
                <p className="text-zinc-900  font-normal font-['Aeonik'] tracking-wide">Our Services</p>
                <h1 className="text-zinc-900 text-5xl font-normal font-['Aeonik'] capitalize tracking-wide">Check Our Top Services</h1>
                <p className="text-zinc-900  font-normal font-['Aeonik'] leading-6 tracking-wide mt-7">"Empowering businesses with cutting-edge IT solutions: software development, cloud services, cybersecurity, IT consulting, and managed services for optimal performance."</p>
            </div>

            <div className="flex-1 min-w-[300px] mt-8 md:mt-0 end-0 relative words">
                <p className="text-zinc-900  font-normal font-['Aeonik'] leading-6 tracking-normal">"Comprehensive IT Solutions: Software Development, Cybersecurity, Cloud Services, Data Analytics, IT Consulting, Network Management, and Technical Support for Your Business."</p>
            </div>
        </div>
        <div className="flex mt-44">
            <div>
                <Image
                    src={normalServices}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="mr-[3.38vw]"
                />
            </div>
                <div className="mt-[150px]">
                <Image
                    src={normalServices2}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className=""
                /></div>
    
        </div>
    </div>;
}

export default OurServices;