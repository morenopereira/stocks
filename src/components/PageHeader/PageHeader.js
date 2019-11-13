import React from "react";
import { Statistic, Icon } from "antd";

import styles from './PageHeader.module.scss';

const red = { color: "red" };
const green = { color: "green" };

const PageHeader = ({ totalInvestments, totalReceived }) => (
  <div className={styles.status}>
    <Statistic title="Total Investido" value={`R$ ${totalInvestments}`} />
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
);

export default PageHeader;
