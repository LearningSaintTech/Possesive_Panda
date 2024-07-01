import React from "react";
import Content from "./Content";
import RelatedPortfolio from "./RelatedPortfolio";
import Banner from "../(Components)/Banner";
import { cards, projects } from "./data";
import Project from "./Project";
import Card from "./Card";
import banner from "../../assets/banners/last-page.png";

const portfolio = () => {
  return (
    <div>
      <Banner
        title={"Portfolio Details"}
        desciption={"Professional IT Solution Insight and Updates"}
        page={"Portfolio"}
        image={banner}
      />
      <div className="mx-[5.2vw] my-[6vw]">
        {projects.map((project, key) => (
          <Project project={project} key={key} />
        ))}
      </div>

      <div className="mx-[5.2vw] mb-[2.3vw]">
        <h2 className="w-[38.958vw] text-[#212121] font-medium leading-[normal] tracking-[0.03rem] text-[2.5vw] mb-[5.2vw]">
          Unleasing the Digital Potential of Global Leaders
        </h2>
        <div className="flex justify-between">
          {cards.map((card, key) => (
            <Card card={card} key={key} />
          ))}
        </div>
      </div>
      {/* <Content /> */}
      {/* <RelatedPortfolio /> */}
    </div>
  );
};

export default portfolio;
