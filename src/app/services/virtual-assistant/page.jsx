import React from 'react'
import Banner from '@/app/(Components)/Banner';
import banner from '../../../assets/banners/Virtual-Assistant-slider.png';
import Hero from '../(Components)/(Hero)/Hero';
import Grow from '../(Components)/Grow';
import Services from '../(Components)/Services';
import Faq from '../(Components)/(Faq)/Faq';
import Footer from "../../(Components)/Footer";

import {
  top,
  benefits,
  services,
  faq
} from "./data";
import Feature from './Feautre';

const page = () => {
  return (
    <div>
      <Banner
        title={"Virtual Assistant"}
        desciption={"Expert Virtual Assistants for Seamless Business Success"}
        page={"Virtual Assistant"}
      image={banner}
      />
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Hero top={top} />

        <div className="mt-[5.2vw]">
          <h4 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[45vw]">
            Benefits of Hiring a Virtual Assistant
          </h4>
          <div className="py-[5.2vw] grid sm:grid-cols-4 gap-x-[1.25vw] gap-y-[6vw] sm:gap-y-[3.646vw]">
            {benefits.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
        </div>
        <div className="mt-[5.2vw] ">
          <h5 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem]">
            Our Features
          </h5>
          <Feature />
        </div>
      </div>
      <div className="bg-[rgba(243,252,254,0.5)] py-[4.167vw] px-[5.2vw]">
        <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[80vw] sm:w-[45vw]">
          Services We Provide
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3vw] sm:gap-x-[2.1vw] gap-y-[3vw] sm:gap-y-[2.6vw] pt-[5.2vw] pb-[5vw] sm:pb-[3vw]">
          {services.map((item, key) => (
            <Services data={item} key={key} />
          ))}
        </div>
      </div>
      <Faq faq={faq} />
      <Footer/>
    </div>
  )
}
export default page;