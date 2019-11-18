const makeStock = (stocks, stocksDB) => {
  return stocks.forEach(stock => {
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
}

export default makeStock;