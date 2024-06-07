import React from "react";
import PortfolioBanner from "./Banner";
import Content from "./Content";
import RelatedPortfolio from "./RelatedPortfolio";

const portfolio = () => {
  return (
    <div>
      <PortfolioBanner />
      <Content />
      <RelatedPortfolio />
    </div>
  );
};

export default portfolio;
