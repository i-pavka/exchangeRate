import {put, call, takeEvery, delay, select} from 'redux-saga/effects';
import {exchangeAPI} from "../../../../sc1-main/m3-dal/exchange-api";
import {DashboardActionsTypes, ResponseExchangeDataType, setExchangeData} from "../dashboardReducer";
import {prepareData} from "../../../../sc3-utils/utilityFunctions";
import {baseSelector} from "../selectors/dashboardSelectors";
import request from 'axios';
import {toggleLoadingApp} from "../../../../sc1-main/m2-bll/appReducer";


export function* loadingDashboardWorker() {
  const currencyBase: string = yield select(baseSelector);
  try {
    yield put(toggleLoadingApp({isLoading: true}));
    const response: ResponseExchangeDataType = yield call(exchangeAPI.getLatestData, currencyBase)
    yield delay(500);
    yield put(setExchangeData({exchangeData: prepareData(response)}));
  } catch (error) {
    if (request.isAxiosError(error) && error.response) {
      const errorMassage = error.response.data as { error: string }
      console.log(errorMassage.error)
    }
  } finally {
    yield put(toggleLoadingApp({isLoading: false}));
  }
}

export default function* dashboardWatcher() {
  yield takeEvery(DashboardActionsTypes.loadingDashboard, loadingDashboardWorker);
}

