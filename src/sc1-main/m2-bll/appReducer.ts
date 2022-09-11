import {createSlice, PayloadAction} from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
}
export type AppInitialStateType = {
  isLoading: boolean
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleLoadingApp: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },
  }
})

export const appReducer = slice.reducer;
export const {
  toggleLoadingApp,
} = slice.actions;
