import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  exchangeData: {
    base: "RUB",
  } as ExchangeDataType,
}

const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    toggleLoadingDashboard: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },
    setExchangeData: (state, action: PayloadAction<{ exchangeData: ExchangeDataType }>) => {
      state.exchangeData = action.payload.exchangeData;
      state.isLoading = false;
    },
    changeBaseCurrency: (state, action: PayloadAction<{ base: string }>) => {
      state.exchangeData.base = action.payload.base;
    },
  }
})

export const dashboardReducer = slice.reducer;

// action
export const {
  toggleLoadingDashboard,
  setExchangeData,
  changeBaseCurrency,
} = slice.actions;

// type
export type ResponseExchangeDataType = {
  base: string
  date: string
  rates: {
    AUD: number
    CAD: number
    CHF: number
    CNY: number
    EUR: number
    GBP: number
    JPY: number
    MXN: number
    RUB: number
    SEK: number
    TRY: number
    USD: number
  }
  success: boolean
  timestamp: number
}
export type ConvertDataType = {
  amount: number
  from: string
  to: string
}
export type RatesType = {
  key: string
  title: string
  value: number
}
export type ExchangeDataType = {
  base: string
  date: string
  rates: RatesType[]
  success: boolean
  timestamp: number
}
export type DashboardInitialStateType = {
  isLoading: boolean
  exchangeData: ExchangeDataType
}
export enum DashboardActionsTypes {
  loadingDashboard = 'dashboard/toggleLoadingDashboard',
}


