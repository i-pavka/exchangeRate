import {AppStateType} from "../../../../sc1-main/m2-bll/store";

export const baseSelector = (state: AppStateType) => state.dashboard.exchangeData.base;
export const exchangeSelector = (state: AppStateType) => state.dashboard.exchangeData;
export const isLoadingSelector = (state: AppStateType) => state.dashboard.isLoading;
export const dateSelector = (state: AppStateType) => state.dashboard.exchangeData.timestamp;