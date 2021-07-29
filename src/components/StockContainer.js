import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onAddToPortfolio}) {
  const stockListings = stocks.map(stock => <Stock 
    onAddToPortfolio={onAddToPortfolio} 
    key={stock.id}
    name={stock.name}
    price={stock.price}/>)

  return (
    <div>
      <h2>Stocks</h2>
      {stockListings}
    </div>
  );
}

export default StockContainer;
