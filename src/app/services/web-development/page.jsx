import React from 'react'
import Banner from "@/app/(Components)/Banner";
import banner from "../../../assets/banners/service-details.png";
import Features from "../(Components)/Features";
import Services from "../(Components)/Services";
import Faq from '../(Components)/(Faq)/Faq';
import Grow from '../(Components)/Grow';
import {
  top,
  leverage,
  howWeDevelop,
  topwebdevelopment,
  frameworks,
  faq
} from './data';
import Hero from "../(Components)/(Hero)/Hero";
import Difference from './Difference';
import Frameworks from './frameworks';

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
          <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[45vw]">
            Why Leverage Web Development & Design Services?
          </h4>
          <div className="mt-[3.9vw] flex flex-col sm:flex-row overflow-x-scroll py-[5.2vw] h-fit no-scrollbar gap-[1.25vw]">
            {leverage.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
        </div>

        <div className="mt-[5.2vw] ">
          <h5 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem]">
            Find Out How We Develop Top Quality Websites For You
          </h5>
          <p className="text-[#212121] text-[2.95vw] sm:text-[1.25vw] leading-[normal] tracking-[0.02rem] w-fill sm:w-[56.5vw] pt-[1.3vw] mb-[5.2vw]">
            Possesive Panda follows a standard yet dynamic process to deliver its services.
            It ensures that our solutions align with our clients’ specific needs,
            while at the same time deliver top class services that adhere to our
            quality standards and customer-first approach.
          </p>
          <div className="flex flex-col sm:flex-row overflow-x-scroll py-[5.2vw] h-fit no-scrollbar">
            {howWeDevelop.map((feature, key) => (
              <Features data={feature} key={key} />
            ))}
          </div>
        </div>
      </div>
      <Difference />
      <div className="bg-[rgba(243,252,254,0.5)] py-[4.167vw] px-[5.2vw]">
        <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[42.6vw]">
          Top Web Development & Design Solutions By Possesive Panda
        </h4>
        <div className="grid grid-cols-2 gap-x-[2.1vw] gap-y-[2.6vw] pt-[5.2vw] pb-[3vw]">
          {topwebdevelopment.map((item, key) => (
            <Services data={item} key={key} />
          ))}
        </div>
      </div>
      <div className="bg-[#F3FCFE] bg-opacity-50 py-[7.6vw] px-[5.2vw] mt-[7vw]">
        <h4 className="text-[#212121] text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[55vw] mb-[2.2vw] text-center mx-auto">
          Web Development & Design Software we use
        </h4>
        <div>
          <Frameworks data={frameworks} />
        </div>
      </div>
      <Faq faq={faq} />
    </div>
  )
}

export default page