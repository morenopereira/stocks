import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { getStocks, getStocksDetails, createStock } from '../../services/stocks';
import reducer from '../../utils/reducer';
import makeStock from '../../utils/makeStock';
import AddStock from '../AddStock/AddStock';

import StockList from "../StockList/StockList";
import PageHeader from "../PageHeader/PageHeader";

import "./Main.css";

const Main = () => {
  const [stocksDB, setStocksDB] = useState([]);
  const [stocks, setStocks] = useState([]);

  const getAll = async () => setStocksDB(await getStocks());

  useEffect(() => {
    getAll()
  }, [])

  const getDetails = async () => setStocks(await getStocksDetails(stocksDB));

  makeStock(stocks, stocksDB)

  const totalInvestments = stocksDB.length > 0 && stocksDB
    .map(x => x.purchasePrice * x.quantity)
    .reduce(reducer)
    .toFixed(2);

  const totalReceived = stocksDB.length > 0 && stocksDB
    .map(x => x.atualPrice * x.quantity)
    .reduce(reducer);

  return (
    <div>
      <header>
        <Button type="primary" onClick={() => getDetails()}>
          Obtenha os resultados mais recentes
        </Button>
        <AddStock createStock={createStock} />
      </header>
      {stocks.length > 0 && (
        <>
          <PageHeader totalInvestments={totalInvestments} totalReceived={totalReceived} />
          <div className="main">
            <StockList stocks={stocksDB} />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
