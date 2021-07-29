import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStock}) {

  
  return (
    <div>
      <h2>My Portfolio</h2>
      {<Stock name={portfolioStock.name} price={portfolioStock.price}/>}
    </div>
  );
}

export default PortfolioContainer;
