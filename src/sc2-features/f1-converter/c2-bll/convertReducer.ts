import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ConvertDataType} from "../../f2-dashboard/d2-bll/dashboardReducer";


const initialState = {
  convertHistory: [] as ConvertHistoryType[],
  convertData: {} as ConvertCurrencyType,
}

const slice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    setConvertCurrencyData: (state, action: PayloadAction<{ convertData: ConvertCurrencyType }>) => {
      state.convertData = action.payload.convertData;
    },
    setConvertHistory: (state, action: PayloadAction<{ convertHistory: ConvertHistoryType }>) => {
      state.convertHistory.push(action.payload.convertHistory);
    },
  }
})

export const converterReducer = slice.reducer;

// action
export const {
  setConvertCurrencyData,
  setConvertHistory,
} = slice.actions;

export const convertDataAC = (convertData: ConvertDataType) => (
  {type: ConverterActionsTypes.setConvert, convertData} as const);

// type
export type ConvertCurrencyType = {
  date: string
  info: {
    rate: number
    timestamp: number
  }
  query: {
    amount: number
    from: string
    to: string
  },
  result: number
  success: boolean
}
export type ConvertHistoryType = {
  amount: number
  from: string
  to: string
  result: number
}
export type ConverterInitialStateType = {
  convertHistory: ConvertHistoryType[],
  convertData:  ConvertCurrencyType,
}
export enum ConverterActionsTypes {
  setConvert = 'converter/setConvert',
}
