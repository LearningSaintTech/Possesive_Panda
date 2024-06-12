import React from "react";
import Content from "./Content";
import RelatedPortfolio from "./RelatedPortfolio";
import Banner from "../(Components)/Banner";

const portfolio = () => {
  return (
    <div>
      <Banner
        title={"Portfolio Details"}
        desciption={"Professional IT Solution Insight and Updates"}
        page={"Portfolio"}
      />
      <Content />
      <RelatedPortfolio />
    </div>
  );
};

export default portfolio;
