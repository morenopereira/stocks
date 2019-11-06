import React, { useState } from "react";
import axios from "axios";
import { Button, Statistic } from "antd";

import StockCard from "../StockCard/StockCard";

import "./Main.css";

const stocksOptions = [
  { symbol: "TAEE4.SA", purchasePrice: 9.64, quantity: 12 },
  { symbol: "PETR4.SA", purchasePrice: 29.84, quantity: 4 },
  { symbol: "TRPL4.SA", purchasePrice: 23.11, quantity: 4 },
  { symbol: "ITSA4.SA", purchasePrice: 14.09, quantity: 11 },
  { symbol: "IRBR3.SA", purchasePrice: 38.89, quantity: 3 }
];

const Main = () => {
  const [stocks, setStocks] = useState([]);

  const request = async () => {
    const response = await axios.get(
      "https://api.worldtradingdata.com/api/v1/stock?symbol=TAEE4.SA,PETR4.SA,TRPL4.SA,ITSA4.SA,IRBR3.SA&&stock_exchange_short=BVMF&api_token=CUeb5shDBvISI2poCkahG9cSB9LXTP33EJrB3yfc8EWwb4LtJsjlxjWCexXe"
    );

    setStocks(response.data.data);
  };

  stocks.forEach(stock => {
    stocksOptions.forEach(stockOption => {
      if (stock.symbol === stockOption.symbol) {
        stockOption.name = stock.name;
        stockOption.atualPrice = stock.price;
        stockOption.symbol = stock.symbol;
        stockOption.diff = parseFloat(stock.price) - stockOption.purchasePrice;
      }
    });
  });

  const reducer = (accumulator, currentValue) => accumulator + currentValue

  const totalInvestments = stocksOptions
    .map(x => x.purchasePrice * x.quantity)
    .reduce(reducer)
    .toFixed(2);

  const totalReceived = stocksOptions
    .map(x => x.atualPrice * x.quantity)
    .reduce(reducer);

  const red = { color: "red" };
  const green = { color: "green" };

  return (
    <div>
      <Button type="primary" className="btn" onClick={() => request()}>
        Obtenha os resultados do momento
      </Button>
      {stocks.length > 0 && (
        <>
          <div className="status">
            <Statistic
              title="Total Investido"
              value={`R$ ${totalInvestments}`}
            />
            <Statistic
              valueStyle={totalReceived < totalInvestments ? red : green}
              title="Total Recebido"
              value={`R$ ${totalReceived}`}
              precision={2}
            />
          </div>
          <div className="main">
            {stocksOptions.map(x => (
              <StockCard
                key={x.name}
                name={x.name}
                symbol={x.symbol}
                purchasePrice={x.purchasePrice}
                atualPrice={x.atualPrice}
                diff={x.diff.toFixed(2)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
