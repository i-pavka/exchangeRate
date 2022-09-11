// @ts-nocheck
import {ResponseExchangeDataType, setExchangeData} from "../d2-bll/dashboardReducer";
import {call, delay, put, select} from "redux-saga/effects";
import {loadingDashboardWorker} from "../d2-bll/saga/dashboard-saga";
import {toggleLoadingApp} from "../../../sc1-main/m2-bll/appReducer";
import {baseSelector} from "../d2-bll/selectors/dashboardSelectors";
import {exchangeAPI} from "../../../sc1-main/m3-dal/exchange-api";
import {prepareData} from "../../../sc3-utils/utilityFunctions";


let fakeResponse: ResponseExchangeDataType;

beforeEach(() => {
  fakeResponse = {
    base: 'RUB',
    date: "2022-09-11",
    rates: {
      AUD: 0.023739,
      CAD: 0.021205,
      CHF: 0.015592,
      CNY: 0.112621,
      EUR: 0.016013,
      GBP: 0.014015,
      JPY: 2.317016,
      MXN: 0.323407,
      RUB: 1,
      SEK: 0.172817,
      TRY: 0.296438,
      USD: 0.016259,
    },
    timestamp: 1662881943,
    success: true,
  }
})
test('loadingDashboardWorker saga get data success', () => {
  const currencyBase = "RUB"
  const gen = loadingDashboardWorker();
  let result = gen.next();
  expect(result.value).toEqual(select(baseSelector));
  expect(gen.next(currencyBase).value).toEqual(put(toggleLoadingApp({isLoading: true})));
  expect(gen.next().value).toEqual(call(exchangeAPI.getLatestData, currencyBase));
  expect(gen.next(fakeResponse).value).toEqual(delay(1000));
  expect(gen.next().value).toEqual(put(setExchangeData({exchangeData: prepareData(fakeResponse)})));
  expect(gen.next().value).toEqual(put(toggleLoadingApp({isLoading: false})));
});














