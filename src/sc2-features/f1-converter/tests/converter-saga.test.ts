import {
  ConvertCurrencyType,
  ConverterActionsTypes,
  setConvertCurrencyData,
  setConvertHistory
} from "../c2-bll/convertReducer";
import {call, delay, put} from "redux-saga/effects";
import {toggleLoadingApp} from "../../../sc1-main/m2-bll/appReducer";
import {exchangeAPI} from "../../../sc1-main/m3-dal/exchange-api";
import {convertCurrencyWorker} from "../c2-bll/saga/converter-saga";


let fakeResponse: ConvertCurrencyType;

beforeEach(() => {
  fakeResponse = {
    date: "2022-09-10",
    info: {
      rate: 65,
      timestamp: 1662822255,
    },
    query: {
      amount: 55,
      from: "USD",
      to: "RUB",
    },
    result: 5000,
    success: true,
  }
})
test('convertCurrencyWorker saga get data success', () => {
  const requestData = {amount: 55, from: 'USD', to: 'RUB'};

  const gen = convertCurrencyWorker({
    type: ConverterActionsTypes.setConvert,
    convertData: requestData
  });

  expect(gen.next().value).toEqual(put(toggleLoadingApp({isLoading: true})));
  expect(gen.next().value).toEqual(call(exchangeAPI.convertFromTo, requestData));
  expect(gen.next(fakeResponse).value).toEqual(delay(500));
  expect(gen.next().value).toEqual(put(setConvertCurrencyData({convertData: fakeResponse})));
  expect(gen.next().value).toEqual(delay(500));

  const fakeConvertHistory = {...fakeResponse.query, result: fakeResponse.result};
  expect(gen.next().value).toEqual(put(setConvertHistory({convertHistory: fakeConvertHistory})));
  expect(gen.next().value).toEqual(put(toggleLoadingApp({isLoading: false})));

});














