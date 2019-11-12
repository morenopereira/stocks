import api from './api';

const apiTradingUri = `https://api.worldtradingdata.com/api/v1/stock?symbol=TAEE4.SA,PETR4.SA,TRPL4.SA,ITSA4.SA,BBSE3.SA&&stock_exchange_short=BVMF&&api_token=${process.env.REACT_APP_SECRET_TRADING_API}`
const apiTradingAditionalUri = `https://api.worldtradingdata.com/api/v1/stock?symbol=OIBR3.SA,GOAU4.SA&&stock_exchange_short=BVMF&&api_token=${process.env.REACT_APP_SECRET_TRADING_API}`

export const getStocks = async () => {
  const response = await api(process.env.REACT_APP_API_URI);

  return response.data
}

export const getStocksDetails = async () => {
  const response = await api(apiTradingUri);
  const responseAditional = await api(apiTradingAditionalUri);

  return response.data.data.concat(responseAditional.data.data)
}

// console.log(separar(response.data.map(x => x.symbol), 5).map(y => y.map(z => api(z.join(',')))))