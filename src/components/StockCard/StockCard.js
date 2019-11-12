import React from "react";
import { Card } from "antd";

import './StockCard.css'

const color = arg => arg < 0 ? "colorRed" : "colorGreen"

const renderTitle = data => (
  <div className="title">
    <span>{data.symbol}</span>
    <span className={color(data.dayChange)}>R$ {data.atualPrice}</span>
  </div>
)

const StockCard = ({ data }) => {
  return data.map(stock => (
    <Card key={stock.name} title={renderTitle(stock)} bordered style={{ width: 400 }}>
      <div key={stock.name}>
        <h3>{stock.name}</h3>
        <p>Quantidade: {stock.quantity}</p>
        <p>
          Patrimonio:{" "}
          <span className={color(stock.diff)}>
            R$ {(stock.atualPrice * stock.quantity).toFixed(2)}
          </span>
        </p>
        <p>Preço de compra: R$ {stock.purchasePrice}</p>
        <p>Preço Atual: R$ {stock.atualPrice}</p>
        <p>Fechamento no dia antetior: R$ {stock.closeYesterday}</p>
        <p>
          Variação do dia:{" "}
          <span className={color(stock.dayChange)}>{stock.dayChange}%</span>
        </p>
        <p>
          {stock.diff < 0 ? "Perdendo: " : "Ganhando: "}
          <span className={color(stock.diff)}>
            R$ {(stock.diff * stock.quantity).toFixed(2)}
          </span>
        </p>
      </div>
    </Card>
  ));
};

export default StockCard;
