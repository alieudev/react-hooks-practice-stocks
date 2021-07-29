import React from "react";

function Stock({name, price, onAddToPortfolio}) {
  return (

      <div onClick={() => onAddToPortfolio(name, price)} className="list-group">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
      
  );
}
export default Stock;
