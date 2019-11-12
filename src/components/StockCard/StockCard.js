import React from "react";
import { Card, Icon } from "antd";

import './StockCard.css'

const color = (arg) => arg < 0 ? "colorRed" : "colorGreen"

const renderTitle = data => (
  <div className="title">
    <span>{data.symbol}</span>
    <span className={color(data.dayChange)}>R$ {data.atualPrice}</span>
  </div>
)

const StockCard = ({ data }) => (
  <Card title={renderTitle(data)} bordered style={{ width: 400 }}>
    <div key={data.name}>
      <h3>{data.name}</h3>
      <p>Quantidade: {data.quantity}</p>
      <p>Patrimonio: <span className={color(data.diff)}>R$ {(data.atualPrice * data.quantity).toFixed(2)}</span></p>
      <p>Preço de compra: R$ {data.purchasePrice}</p>
      <p>Preço Atual: R$ {data.atualPrice}</p>
      <p>Fechamento no dia antetior: R$ {data.closeYesterday}</p>
      <p>Variação do dia: <span className={color(data.dayChange)}>{data.dayChange}%</span></p>
      <p>
        {data.diff < 0 ? "Perdendo: " : "Ganhando: "}
        <span className={color(data.diff)}>R$ {(data.diff * data.quantity).toFixed(2)}</span>
      </p>
    </div>
  </Card>
);

export default StockCard;
