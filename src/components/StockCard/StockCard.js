import React from "react";
import { Card } from "antd";

import './StockCard.css'

const StockCard = ({ data }) => (
  <Card title={data.symbol} bordered style={{ width: 400 }}>
    <div key={data.name}>
      <h3>{data.name}</h3>
      <p>Preço de compra: R$ {data.purchasePrice}</p>
      <p>Preço Atual: R$ {data.atualPrice}</p>
      <p>Fechamento no dia antetior: R$ {data.closeYesterday}</p>
      <p>Variação do dia: <span className={`${data.dayChange < 0 ? "red" : "green"}`}>{data.dayChange}%</span></p>
      <p>
        {data.diff < 0 ? "Perdendo: " : "Ganhando: "}
        <span className={`${data.diff < 0 ? "red" : "green"}`}>R$ {data.diff.toFixed(2)}</span>
      </p>
    </div>
  </Card>
);

export default StockCard;
