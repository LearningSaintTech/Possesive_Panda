"use client";
import { useState } from "react";
import Accordian from "../(FaqSection)/Accordian.jsx";
import Image from "next/image";
// import faqImage from '../../../../../public/assets/e-commerce/faqImage.png';

const Faq = ({smallfaqdata, smallfaqImg,heading}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="bg-[#00111A] sm:px-[5.208vw] px-[7.059vw] py-[5.469vw]">
      <div className="flex sm:flex-row flex-col">
        <div className="flex sm:gap-[3.438vw] flex-col">
          <h3 className="text-white text-[5vw] sm:text-[2.5vw] font-medium leading-[6vw] sm:leading-[3.8vw] tracking-[-0.088vw] sm:w-[33.854vw] w-full">
            {heading}
          </h3>
          {/* Image visible on larger screens, hidden on small screens */}
          <Image
            src={smallfaqImg.img1}
            className="w-[100%] sm:w-[48.698vw] hidden sm:block"
            alt="FAQ Image"
          />
        </div>
        <div className="pl-0 sm:pl-[5.885vw] mt-[4vw] sm:mt-0">
          <div>
            {smallfaqdata.map((item) => (
              <Accordian
                key={item.key}
                title={item.title}
                index={item.key}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                <p>{item.data}</p>
              </Accordian>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
