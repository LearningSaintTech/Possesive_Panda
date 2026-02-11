import React from "react";
import { Image } from "@/lib/next-compat";
import Image1 from "../../../public/assets/landing/expenses.svg";
import Image2 from "../../../public/assets/landing/appointment.svg";
import Image3 from "../../../public/assets/landing/manage.svg";
import Image4 from "../../../public/assets/landing/social.svg";
import Image5 from "../../../public/assets/landing/realestate.svg";
import Image6 from "../../../public/assets/landing/lead.svg";
import Image7 from "../../../public/assets/landing/property.svg";
import Image8 from "../../../public/assets/landing/setup.svg";

const services = [
  {
    title: "Expenses Management",
    img: Image1, 
  },
  {
    title: "Appointment Scheduling",
    img: Image2,
  },
  {
    title: "Manage Bids",
    img: Image3,
  },
  {
    title: "Manage Social Media",
    img: Image4,
  },
  {
    title: "Real Estate Research",
    img: Image5,
  },
  {
    title: "Lead Generation",
    img: Image6,
  },
  {
    title: "Property Listings",
    img: Image7,
  },
  {
    title: "Setup 3D Tours",
    img: Image8,
  },
];

const SeventhComp = () => {
  return (
    <div className="bg-[#F0F2F2]  border border-blue-200 p-[6.458vw] relative">
      {/* Heading Section */}
      <div className="flex flex-col items-center md:mb-[1.667vw] mb:[5.647vw] ">
        <h1 className="md:w-[61.406vw] w-[82.118vw] text-[#372e32] md:text-[3.333vw] text-[8.471vw] md:text-center text-left md:mb-[0.833vw] mb-[3.529vw] font-bold font-['Times New Roman']">
          Possessive Panda Real Estate Virtual Assistant Services
        </h1>
        <p className="text-[#5a5a5a] md:w-[61.771vw] w-[86.118vw] md:text-[1.25vw] text-[3.765vw]  md:text-center text-left font-normal font-['Open Sans'] md:mb-[1.25vw] mb-[5.647vw]">
          Possessive Panda offers real estate virtual assistants of various
          sorts for every realtor who wants to grow their business. With this
          wide range of virtual assistant services, we focus on client
          satisfaction and ensure your overall business success.
        </p>
        <div className="  bg-[#00c2c5] md:h-[3.646vw] md:px-[1.667vw] md:py-[1.458vw] md:mb-[0] mb-[5.647vw] h-[11.294vw] px-[7.529vw] py-[3.765vw] rounded-lg flex justify-center items-center ">
          <a href="https://www.possesivepanda.com/services/virtual-assistant">
            <h2 className="text-[#f0f2f2] md:text-[1.198vw] text-[4.706vw] font-bold font-['Open Sans']">
              Know More
            </h2>
          </a>
        </div>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-[1.042vw]  gap-[3.765vw]">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-200 shadow hover:shadow-lg transition-shadow  md:py-[1.667vw] py-[3.765vw] flex-col  duration-300 bg-white rounded-[0.625vw]  justify-center text-center items-center "
          >
            <div className="flex justify-center items-center">
              <Image
                src={service.img} 
                alt={service.title}
                className="md:w-[16.875vw] md:h-[18.073vw] h-[33.529vw] w-[33.529vw] rounded"
              />
            </div>
            <h3 className="text-[#372e32] md:mt-[1.667vw] mt-[1.882vw] md:text-[1.458vw] text-[2.824vw] font-semibold font-['Open Sans'] leading-[1.823vw]">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeventhComp;