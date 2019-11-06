import React from "react";
import { Card } from "antd";

import './StockCard.css'

const StockCard = ({ name, symbol, purchasePrice, atualPrice, diff }) => (
  <Card title={symbol} bordered style={{ width: 400 }}>
    <div key={name}>
      <h3>{name}</h3>
      <p>Preço de compra: R$ {purchasePrice}</p>
      <p>Preço Atual: R$ {atualPrice}</p>
      <p>
        {diff < 0 ? "Perdendo: " : "Ganhando: "}
        <span className={`${diff < 0 ? "red" : "green"}`}>R$ {diff}</span>
      </p>
    </div>
  </Card>
);

export default StockCard;
