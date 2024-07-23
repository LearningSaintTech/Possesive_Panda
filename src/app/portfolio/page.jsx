import React from "react";
import Content from "./Content";
import RelatedPortfolio from "./RelatedPortfolio";
import Banner from "../(Components)/Banner";
import { cards, projects } from "./data";
import Project from "./Project";
import Card from "./Card";
import banner from "../../assets/banners/portfolio-details.png";
import Footer from "../(Components)/Footer";

const portfolio = () => {
  return (
    <div>
      <Banner
        title={"Portfolio Details"}
        desciption={"Your cases, our team, and innovative solutions"}
        page={"Portfolio"}
        image={banner}
      />
      <div className="sm:mx-[5.2vw] sm:my-[6vw] mx-[5.455vw] my-[6vw]">
        {projects.map((project, key) => (
          <Project project={project} key={key} />
        ))}
      </div>

      <div className="mx-[5.455vw] sm:mx-[5.2vw] mb-[2.3vw]">
        <h2 className="w-[53vw] sm:w-[38.958vw]  text-[#212121] font-semibold leading-[normal] tracking-[0.03rem] text-[3.6vw] sm:text-[2.083vw] mb-[5.2vw]">
          Unleasing the Digital Potential of Global Leaders
        </h2>
        <div className="flex flex-col sm:flex sm:flex-row justify-between">
          {cards.map((card, key) => (
            <Card card={card} key={key} />
          ))}
        </div>
      </div>
      {/* <Content /> */}
      {/* <RelatedPortfolio /> */}
      <Footer />
    </div>
  );
};

export default portfolio;
