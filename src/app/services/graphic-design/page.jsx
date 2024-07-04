import React from 'react'
import Banner from "@/app/(Components)/Banner";
import banner from "../../../assets/banners/service-details.png";
import Hero from "../(Components)/(Hero)/Hero";
import Types from '../(Components)/Types';
import Services from '../(Components)/Services';
import Grow from '../(Components)/Grow';
import WhyUs from '../(Components)/WhyUs';
import Faq from '../(Components)/(Faq)/Faq';
import IconCard from '../(Components)/IconCard';
import {
  top,
  whyIs,
  customgraphicdesign,
  weProvide,
  weEnsure,
  graphicDesignSoftware,
  faq
} from "./data";


const page = () => {
  return (
    <div>
      <Banner
        title={"Service Details"}
        desciption={"Professional IT Solution Insight and Updates"}
        page={"Services"}
        image={banner}
      />
      <div className=' px-[5.2vw] pt-[5.2vw]'>
        <Hero top={top} />

        <div className="mt-[5.2vw]">
          <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem]">
            Why is Graphic Design Important?
          </h4>
          <div className="mt-[3.9vw] flex gap-[2.3vw]">
            {whyIs.map((item, key) => (
              <Types data={item} key={key} digital={true} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[rgba(243,252,254,0.5)] py-[4.167vw] px-[5.2vw]">
        <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[42.6vw]">
          Why Choose Possesive Panda For Custom Graphic Design Services?
        </h4>
        <div className="grid grid-cols-2 gap-x-[2.1vw] gap-y-[2.6vw] pt-[5.2vw] pb-[3vw]">
          {customgraphicdesign.map((item, key) => (
            <Services data={item} key={key} />
          ))}
        </div>
      </div>
      <div className="px-[5.2vw] pt-[5.2vw]">
        <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[45vw]">
          Graphic Design Services We Provide
        </h4>
        <div className="flex flex-col sm:flex-row overflow-x-scroll py-[5.2vw] h-fit no-scrollbar gap-[1.25vw]">
          {weProvide.map((item, key) => (
            <Grow data={item} key={key} />
          ))}
        </div>
      </div>
      <div className=" py-[3.65vw] px-[5.2vw] mt-[5.2vw]">
        <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[40vw] mb-[2.2vw]">
          We Ensure You Get The Best Graphic Design Solutions
        </h4>
        <p className=' sm:mt-[2.604vw] sm:mb-[5.313vw] w-[59.74vw] h-[5.573vw] text-neutral-800 text-[1.25vw] font-normal tracking-tight'>
          Possesive Panda follows a standard yet dynamic process to deliver its services. It ensures that our solutions align with our clients’ specific needs, while at the same time deliver top class services that adhere to our quality standards and customer-first approach.
        </p>
        <div className="grid grid-cols-2 gap-x-[3.542vw] gap-y-[4.583vw] pl-[1.146vw]">
          {weEnsure.map((item, key) => (
            <WhyUs data={item} key={key} graphic={true} />
          ))}
        </div>
      </div>
      <div className="mt-[5.2vw] bg-[#F3fcfe] bg-opacity-50 px-[5.2vw]">
        <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[45vw] mb-[2.8vw] pt-[1vw]">
          Mobile Application Development Services For Various Purposes
        </h4>
        <div className="flex justify-center px-[2vw]">
          {graphicDesignSoftware.row1.map((item, key) => (
            <IconCard data={item} key={key} image={true} />
          ))}
        </div>
        <div className="flex justify-center items-center px-[4vw]">
          {graphicDesignSoftware.row2.map((item, key) => (
            <IconCard data={item} key={key} image={true} />
          ))}
        </div>
        </div>
      <Faq faq={faq} />
    </div>
  )
}

export default page