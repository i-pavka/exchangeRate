import {AppStateType} from "../store";

export const loadingSelector = (state: AppStateType) => state.app.isLoading;