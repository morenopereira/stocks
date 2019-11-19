import React from "react";
import { Statistic, Icon } from "antd";

import styles from './PageHeader.module.scss';

const red = { color: "red" };
const green = { color: "green" };

const renderResult = (totalInvestments, totalReceived) => {
  if (totalInvestments && totalReceived) {
    return `R$ ${(parseFloat(totalInvestments - totalReceived)).toFixed(2)}`
  }

  return ''
}

const PageHeader = ({ totalInvestments, totalReceived }) => (
  <div className={styles.status}>
    {console.log(totalReceived)}
    <Statistic title="Total Investido" value={`R$ ${totalInvestments}`} />
    <Statistic
      valueStyle={totalReceived < totalInvestments ? red : green}
      title="Patrimônio total"
      value={`R$ ${totalReceived && totalReceived.toFixed(2)}`}
    />
    <Icon type="arrow-right" />
    <Statistic
      valueStyle={totalReceived < totalInvestments ? red : green}
      title="Diferença"
      value={renderResult(totalInvestments, totalReceived)}
    />
  </div>
);

export default PageHeader;
