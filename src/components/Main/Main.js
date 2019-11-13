import React, { useState, useEffect } from "react";
import { Button, Statistic, Icon } from "antd";
import { getStocks, getStocksDetails, addStock } from '../../services/stocks';
import reducer from '../../utils/reducer';
import AddStock from '../AddStock/AddStock';

import StockCard from "../StockCard/StockCard";

import "./Main.css";

const Main = () => {
  const [stocksDB, setStocksDB] = useState([]);
  const [stocks, setStocks] = useState([]);

  const getAll = async () => setStocksDB(await getStocks());

  useEffect(() => {
    getAll()
  }, [])

  const request = async () => setStocks(await getStocksDetails());

  stocks.forEach(stock => {
    stocksDB.forEach(stockOption => {
      if (stock.symbol === stockOption.symbol) {
        stockOption.name = stock.name;
        stockOption.atualPrice = stock.price;
        stockOption.symbol = stock.symbol;
        stockOption.diff = parseFloat(stock.price) - stockOption.purchasePrice;
        stockOption.closeYesterday = stock.close_yesterday;
        stockOption.dayChange = stock.day_change;
      }
    });
  });

  const totalInvestments = stocksDB.length > 0 && stocksDB
    .map(x => x.purchasePrice * x.quantity)
    .reduce(reducer)
    .toFixed(2);

  const totalReceived = stocksDB.length > 0 && stocksDB
    .map(x => x.atualPrice * x.quantity)
    .reduce(reducer);

  const red = { color: "red" };
  const green = { color: "green" };

  return (
    <div>
      <Button type="primary" className="btn" onClick={() => request()}>
        Obtenha os resultados mais recentes
      </Button>
      {/* <AddStock onSubmit={addStock} /> */}
      {stocks.length > 0 && (
        <>
          <div className="status">
            <Statistic
              title="Total Investido"
              value={`R$ ${totalInvestments}`}
            />
            <Statistic
              valueStyle={totalReceived < totalInvestments ? red : green}
              title="Patrimônio total"
              value={`R$ ${totalReceived.toFixed(2)}`}
            />
            <Icon type="arrow-right" />
            <Statistic
              valueStyle={totalReceived < totalInvestments ? red : green}
              title="Diferença"
              value={`R$ ${(totalInvestments - totalReceived).toFixed(2)}`}
            />
          </div>
          <div className="main">
            <StockCard data={stocksDB} />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
