import {AppStateType} from "../../../../sc1-main/m2-bll/store";

export const convertDataSelector = (state: AppStateType) => state.convert.convertData;
export const convertHistorySelector = (state: AppStateType) => state.convert.convertHistory;