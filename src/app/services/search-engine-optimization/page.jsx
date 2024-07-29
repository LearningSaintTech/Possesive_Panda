import React from 'react'
import Banner from '@/app/(Components)/Banner';
import Hero from '../(Components)/(Hero)/Hero';
import Types from '../(Components)/Types';
import Strategy from '../(Components)/(Strategy)/Strategy';
import OurFeature from './OurFeature';
import Services from '../(Components)/Services';
import Grow from '../(Components)/Grow';
import Faq from '../(Components)/(Faq)/Faq';
import banner from "../../../assets/banners/Seo-slider.png";
import Footer from "../../(Components)/Footer";


import {
  top,
  seoAgency,
  weoffer,
  ourSeoService,
  ourSeoProcess,
  faq,
} from "./data";

const page = () => {
  return (
    <div>
      <Banner
        title={"Search Engine Optimization"}
        desciption={"Expert SEO Services to Drive Traffic & Increase Rankings"}
        page={"Search Engine Optimization"}
      image={banner}
      />
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Hero top={top} />
        <h6 className="text-[#212121] text-[4.364vw] sm:text-[1.25vw] font-semibold leading-[normal] tracking-[0.015rem] mt-[2vw]">
          Some of Our Seo Results :
        </h6>
        <div className="container grid grid-cols-2 w-[61.875vw]">
          <div className="item">
            <h6 className='text-black text-[1.25vw] font-medium tracking-tight mt-[1.302vw]'>Campaigns ranked</h6>
            <p className='text-black text-[1.25vw] font-normal tracking-tight mt-[1.042vw]'>2,000+</p>
          </div>
          <div className="item">
            <h6 className='text-black text-[1.25vw] font-medium tracking-tight mt-[1.302vw]'>Visits driven to clients websites annually</h6>
            <p className='text-black text-[1.25vw] font-normal tracking-tight mt-[1.042vw]'>1.5+ Million</p>
          </div>
          <div className="item">
            <h6 className='text-black text-[1.25vw] font-medium tracking-tight mt-[1.302vw]'>Sites audited each year</h6>
            <p className='text-black text-[1.25vw] font-normal tracking-tight mt-[1.042vw]'>3,000+</p>
          </div>
          <div className="item">
            <h6 className='text-black text-[1.25vw] font-medium tracking-tight mt-[1.302vw]'>Content published annually</h6>
            <p className='text-black text-[1.25vw] font-normal tracking-tight mt-[1.042vw]'>1,000+</p>
          </div>
        </div>
        <div className='w-[61.875vw]'>
          <h6 className="text-[#212121] text-[4.364vw] sm:text-[1.25vw] font-semibold leading-[normal] tracking-[0.015rem] mt-[2.5vw]">
            Things you should know before hiring an SEO Service
          </h6>
          <p className="text-justify text-neutral-800 text-[3.363vw] sm:text-[2.5vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[1.56vw]">
            SEO (Search Engine Optimization) is a process of improving a websites visibility in search engines like Google, Yahoo, Bing, and many more. SEO includes fulfilling users search needs by creating relevant high-quality content.
          </p>
          <h6 className="text-[#212121] text-[4.364vw] sm:text-[1.25vw] font-semibold leading-[normal] tracking-[0.015rem] mt-[1.823vw]">
            SEO Typically involves
          </h6>
          <ul className='list-disc grid grid-cols-2 ml-[1.823vw] mt-[1.823vw]'>
            <li className='text-black text-2xl font-normal tracking-tight'>SEO Typically involves</li>
            <li className='text-black text-2xl font-normal tracking-tight'>Technical Optimization </li>
            <li className='text-black text-2xl font-normal tracking-tight mt-[1.823vw]'>Content creation</li>
            <li className='text-black text-2xl font-normal tracking-tight mt-[1.823vw]'>Link building </li>
          </ul>
          <h6 className="text-[#212121] text-[4.364vw] sm:text-[1.25vw] font-semibold leading-[normal] tracking-[0.015rem] mt-[2.5vw]">
            Our SEO team work
          </h6>
          <p className="text-justify text-neutral-800 text-[3.363vw] sm:text-[2.5vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[1.56vw]">
            SEO company that performs to increase brand visibility, organic traffic from search engines, and generate leads. It is very difficult for business owners to have an SEO-friendly website. Many website issues, like broken links and slow pages, exist.
          </p>
          <p className="text-justify text-neutral-800 text-[3.363vw] sm:text-[2.5vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[.56vw]">
            SEO companies will help you fix all these issues. To ensure your website works smoothly, the SEO team works on various strategies. Conduct in-depth research to understand the market, competitors, and target audience. By using various techniques, the SEO team finds keywords that can help attract website traffic.
          </p>
          <h6 className="text-[#212121] text-[4.364vw] sm:text-[1.25vw] font-semibold leading-[normal] tracking-[0.015rem] mt-[2.5vw]">
            Industries that can benefit from SEO
          </h6>
          <p className="text-justify text-neutral-800 text-[3.363vw] sm:text-[2.5vw] lg:text-[1.25vw] font-normal leading-[normal] tracking-[0.015rem] mt-[1.56vw]">
            Health Industry, logistics, real estate, e-commerce, retailers, and others can take SEO services. It does not matter whether you are a small, medium, or big business you can promote your business online. Many industries rely on SEO services to reach their targeted audiences.
          </p>
        </div>
        <div className="mt-[5.2vw]">
          <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.083vw] font-semibold leading-[normal] tracking-[0.03rem]">
            What are the benefits of hiring an SEO agency?
          </h4>
          <div className="mt-[3.9vw] flex flex-col sm:flex-row gap-[2.3vw]">
            {seoAgency.map((item, key) => (
              <Types data={item} key={key} digital={true} />
            ))}
          </div>
        </div>
        <div className="pt-[5.2vw]">
          <Strategy statergy={weoffer} />
        </div>
        <div className="mt-[5.2vw] ">
          <h5 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem]">
            Our Features
          </h5>
          <OurFeature />
        </div>
      </div>
      <div className="bg-[rgba(243,252,254,0.5)] py-[4.167vw] px-[5.2vw]">
        <h4 className="text-[#212121] text-[4.346vw] sm:text-[2.5vw] font-semibold leading-[normal] tracking-[0.03rem] w-[80vw] sm:w-[45vw]">
          Our SEO Service Steps for Your Business
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3vw] sm:gap-x-[2.1vw] gap-y-[3vw] sm:gap-y-[2.6vw] pt-[5.2vw] pb-[5vw] sm:pb-[3vw]">
          {ourSeoService.map((item, key) => (
            <Services data={item} key={key} />
          ))}
        </div>
        <div className="mt-[5.2vw]">
          <h4 className="text-[#212121] text-[4.364vw] sm:text-[2.5vw] font-semibold capitalize leading-[normal] tracking-[0.03rem] w-full sm:w-[45vw]">
            Our SEO Process
          </h4>
          <div className="py-[5.2vw] grid sm:grid-cols-4 gap-x-[1.25vw] gap-y-[6vw] sm:gap-y-[3.646vw]">
            {ourSeoProcess.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
        </div>
      </div>
      <Faq faq={faq} />
      <Footer/>
    </div>
  )
}

export default page;