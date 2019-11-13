import React from 'react';
import StockCard from "../StockCard/StockCard";

const StockList = ({ stocks }) => stocks.map(stock => <StockCard key={stock.name} stock={stock} />)

export default StockList;