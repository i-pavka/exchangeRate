import {combineReducers} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "./saga";
import {dashboardReducer} from "../../sc2-features/f2-dashboard/d2-bll/dashboardReducer";
import {converterReducer} from "../../sc2-features/f1-converter/c2-bll/convertReducer";
import {configureStore} from "@reduxjs/toolkit";
import {appReducer} from "./appReducer";


const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  app: appReducer,
  dashboard: dashboardReducer,
  convert: converterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootWatcher);

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

// type
export type AppStateType = ReturnType<typeof rootReducer>;
export type AppDispatchType = typeof store.dispatch;