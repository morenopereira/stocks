import api from './api';
import separate from '../utils/separate'


export const getStocks = async () => {
  const response = await api(process.env.REACT_APP_API_URI);

  return response.data
}

export const getStocksDetails = async (stocksDB) => {
  const options = separate(stocksDB, 5).map(x => x.map(y => y.symbol))
  const temp = [];

  for(let i = 0; i < options.length; i++) {
    const response = await api(`https://api.worldtradingdata.com/api/v1/stock?symbol=${options[i].join(',')}&stock_exchange_short=BVMF&&api_token=${process.env.REACT_APP_SECRET_TRADING_API}`)
    
    temp.push(response.data.data)
  }
  
  return [...new Set([].concat(...temp))]
}

export const createStock = async data => {
  const req = await api.post(process.env.REACT_APP_API_URI, data)

  return req;
} 