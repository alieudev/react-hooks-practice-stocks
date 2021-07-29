import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolioStock, setPortfolioStock] = useState([])

  useEffect(()=> {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => setStocks(data))
  },[])

  function onAddToPortfolio(name, price){
    const stockData = {name:name, price:price}
    setPortfolioStock(stockData)
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onAddToPortfolio={onAddToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStock={portfolioStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
