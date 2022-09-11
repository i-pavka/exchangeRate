import request from "axios";
import {put, call, takeEvery, delay} from 'redux-saga/effects';
import {exchangeAPI} from "../../../../sc1-main/m3-dal/exchange-api";
import {toggleLoadingApp} from "../../../../sc1-main/m2-bll/appReducer";
import {
  setConvertCurrencyData,
  convertDataAC,
  ConverterActionsTypes,
  ConvertCurrencyType, setConvertHistory
} from "../convertReducer";


export function* convertCurrencyWorker(action: ReturnType<typeof convertDataAC>) {
  try {
    yield put(toggleLoadingApp({isLoading: true}));
    const response: ConvertCurrencyType = yield call(exchangeAPI.convertFromTo, action.convertData);
    const convertData = response;
    const convertHistory = {...response.query, result: response.result};
    yield delay(500);
    yield put(setConvertCurrencyData({convertData}));
    yield delay(500);
    yield put(setConvertHistory({convertHistory}));
  } catch (error) {
    if (request.isAxiosError(error) && error.response) {
      const errorMassage = error.response.data as { error: string }
      console.log(errorMassage.error)
    }
  } finally {
    yield put(toggleLoadingApp({isLoading: false}));
  }
}

export default function* converterWatcher() {
  yield takeEvery(ConverterActionsTypes.setConvert, convertCurrencyWorker);
}