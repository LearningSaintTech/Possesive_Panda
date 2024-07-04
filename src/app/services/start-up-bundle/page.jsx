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
        title={"Service Details"}
        desciption={"Professional IT Solution Insight and Updates"}
        page={"Services"}
        image={banner}
      />
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Hero top={top} />

        <div className="mt-[5.2vw]">
          <div className="mt-[3.9vw] flex gap-[4.167vw] pr-[24.167vw]">
            {content.row1.map((item, key) => (
              <Grow data={item} key={key}/>
            ))}
          </div>
          <div className="mt-[3.9vw] flex gap-[4.167vw] pl-[24.167vw]">
            {content.row2.map((item, key) => (
              <Grow data={item} key={key}/>
            ))}
          </div>
          <div className="mt-[3.9vw] flex gap-[4.167vw] pr-[24.167vw]">
            {content.row3.map((item, key) => (
              <Grow data={item} key={key}/>
            ))}
          </div>
          <div className="mt-[3.9vw] flex gap-[4.167vw] pl-[24.167vw]">
            {content.row4.map((item, key) => (
              <Grow data={item} key={key}/>
            ))}
          </div>
        </div>
      </div>
      <div className="px-[5.2vw] pt-[5.2vw]">
        <Content top={virtual} />
      <div className="mt-[5.2vw]">

        <div className="mt-[3.9vw] grid grid-cols-2 gap-x-[1.25vw] gap-y-[2.6vw]">
          {contentA.map((item, key) => (
            <Grow data={item} key={key} />
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default page