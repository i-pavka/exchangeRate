import {instance} from "./instance";
import {BASE_SYMBOLS} from "../../sc3-utils/config";
import {ConvertDataType} from "../../sc2-features/f2-dashboard/d2-bll/dashboardReducer";


export const exchangeAPI = {
  getLatestData(currencyBase: string) {
    return instance.get(`latest?base=${currencyBase}&symbols=${BASE_SYMBOLS}`)
      .then(res => res.data)
  },
  convertFromTo(convertData: ConvertDataType) {
    const {from, to, amount} = convertData;
    return instance.get(`convert?&from=${from}&to=${to}&amount=${amount}`)
      .then(res => res.data)
  },
}