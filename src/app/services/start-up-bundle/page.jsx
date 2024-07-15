import React from 'react'
import Banner from '@/app/(Components)/Banner';
import banner from "../../../assets/banners/service-details.png";
import Hero from "../(Components)/(Hero)/Hero";
import Grow from '../(Components)/Grow';
import {
  top,
  content,
  contentA,
  virtual,
} from "./data"
import Content from '../(Components)/(Hero)/Content';


const page = () => {
  return (
    <div>
      <Banner
        title={"Premium Service Service"}
        desciption={"Services that assist your organization at every step of the journey"}
        page={"Premium Service"}
        image={banner}
      />
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Hero top={top} />

        <div className="mt-[5.2vw]">
          <div className="mt-[3.9vw] flex sm:flex-row flex-col gap-[4.167vw] sm:pr-[24.167vw]">
            {content.row1.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
          <div className="mt-[3.9vw] flex sm:flex-row flex-col gap-[4.167vw] sm:pl-[24.167vw]">
            {content.row2.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
          <div className="mt-[3.9vw] flex sm:flex-row flex-col gap-[4.167vw] sm:pr-[24.167vw]">
            {content.row3.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
          <div className="mt-[3.9vw] flex sm:flex-row flex-col gap-[4.167vw] sm:pl-[24.167vw]">
            {content.row4.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Content top={virtual} />
        <div className="mt-[8vw] sm:mt-[5.2vw]">
          <div className="mt-[3.9vw] flex sm:flex-row flex-col gap-[4.167vw] sm:pr-[24.167vw] min-w-[25.625vw]">
            {contentA.row1.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
          <div className="mt-[3.9vw] flex sm:flex-row flex-col gap-[4.167vw] sm:pl-[24.167vw]">
            {contentA.row2.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
          <div className="mt-[3.9vw] flex sm:flex-row flex-col gap-[4.167vw] sm:pr-[24.167vw]">
            {contentA.row3.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
          <div className="mt-[3.9vw] flex sm:flex-row flex-col gap-[4.167vw] sm:pl-[24.167vw]">
            {contentA.row4.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
          <div className="mt-[3.9vw] flex sm:flex-row flex-col gap-[4.167vw] sm:pr-[24.167vw]">
            {contentA.row5.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
          <div className="mt-[3.9vw] flex sm:flex-row flex-col gap-[4.167vw] sm:pl-[24.167vw]">
            {contentA.row6.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
          <div className="mt-[3.9vw] flex sm:flex-row flex-col gap-[4.167vw] sm:pr-[24.167vw]">
            {contentA.row7.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
          <div className="mt-[3.9vw] flex sm:flex-row flex-col gap-[4.167vw] sm:pl-[24.167vw]">
            {contentA.row8.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
          <div className="mt-[3.9vw] flex sm:flex-row flex-col gap-[4.167vw] sm:pr-[24.167vw]">
            {contentA.row9.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
          <div className="mt-[3.9vw] flex sm:flex-row flex-col gap-[4.167vw] sm:pl-[24.167vw] sm:mb-[3vw]">
            {contentA.row10.map((item, key) => (
              <Grow data={item} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page