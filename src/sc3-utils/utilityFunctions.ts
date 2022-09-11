import {BASE_SYMBOLS, REQUEST_INTERVAL} from "./config";
import {ExchangeDataType, ResponseExchangeDataType} from "../sc2-features/f2-dashboard/d2-bll/dashboardReducer";

export const uid = () => {
  return `id-${(~~(Math.random()*1e8)).toString(16)}`
}
export const prepareData = (data: ResponseExchangeDataType): ExchangeDataType => {
  const currencyName = {
    RUB: 'Российский рубль',
    USD: 'Доллар США',
    EUR: 'Евро',
    GBP: 'Фунт стерлингов',
    CNY: 'Китайский юань',
    JPY: 'Японская йена',
    AUD: 'Австралийский доллар',
    CAD: 'Канадский доллар',
    CHF: 'Швейцарский франк',
    SEK: 'Шведская крона',
    MXN: 'Мексиканское песо',
    TRY: 'Турецкая Лира',
  } as { [key: string]: string }

  return {
    ...data, rates: Object.entries(data.rates).map(el => {
      return { key: el[0], title: currencyName[el[0]], value: el[1] }
    })
  }
}
export const parsInputData = (str: string) => {
  const validValue = BASE_SYMBOLS;
  const splitStr = str.toUpperCase().split(' ');
  const amount = splitStr[0];
  if (isNaN(Number(amount))) return null;
  if (splitStr.length === 2) {
    const query = splitStr[1].split('IN')
    if (query.length === 1) return null;
    if (!(validValue.includes(query[0]) && validValue.includes(query[1]))) return null;
    return {amount: Number(amount), from: query[0], to: query[1]}
  }
  if (splitStr.length === 4) {
    if (!(validValue.includes(splitStr[1]) && validValue.includes(splitStr[3]))) return null;
    return {amount: Number(amount), from: splitStr[1], to: splitStr[3]}
  }
  return null;
}

export const checkRequestInterval = (date: number) => {
  if(date) {
    const now  = new Date();
    const storeData = new Date(date * 1000);
    const diff = now.getTime() - storeData.getTime();
    return Number((diff / (1000 * 60 * 60)).toFixed(2)) > REQUEST_INTERVAL
  }
  return true
}