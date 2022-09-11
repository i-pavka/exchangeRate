import {all} from 'redux-saga/effects';
import dashboardWatcher from "../../../sc2-features/f2-dashboard/d2-bll/saga/dashboard-saga";
import converterWatcher from "../../../sc2-features/f1-converter/c2-bll/saga/converter-saga";


export function* rootWatcher() {
  yield all([dashboardWatcher(), converterWatcher()])
}