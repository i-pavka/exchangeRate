export const apiConfig = {
  API_KEY: process.env.REACT_APP_API_KEY,
  BASE_URL: "https://api.apilayer.com/exchangerates_data",
}
export const BASE_SYMBOLS = ['RUB', 'USD', 'EUR', 'GBP', 'CNY', 'JPY', 'AUD', 'CAD', 'CHF', 'SEK', 'MXN', 'TRY'];
export const EXCHANGE_TABLE_HEADERS = ['Код', 'Валюта', 'Курс'];
export const HISTORY_TABLE_HEADERS = ['№', 'Запрос'];
export const REQUEST_INTERVAL = 0.2; // 20 min